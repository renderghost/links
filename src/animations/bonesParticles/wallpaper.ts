import { wallpaperConfig } from './config';

declare global {
	interface Window {
		SimplexNoise: new () => {
			noise3D: (x: number, y: number, z: number) => number;
		};
	}
}

let container: HTMLElement;
let canvas: { a: HTMLCanvasElement; b: HTMLCanvasElement };
let ctx: { a: CanvasRenderingContext2D; b: CanvasRenderingContext2D };
let circleProps: Float32Array;
let simplex: InstanceType<typeof window.SimplexNoise>;
let baseHue: number;
let mode: 'light' | 'dark';

const circleCount = 150;
const circlePropCount = 8;
const baseSpeed = 0.1;
const rangeSpeed = 1;
const baseTTL = 150;
const rangeTTL = 200;
const xOff = 0.0015;
const yOff = 0.0015;
const zOff = 0.0015;

export function initWallpaper(target: HTMLElement, theme: 'light' | 'dark') {
	mode = theme;
	container = target;

	createCanvas();
	resize();
	initCircles();
	draw();

	window.addEventListener('resize', resize);
}

function createCanvas() {
	canvas = {
		a: document.createElement('canvas'),
		b: document.createElement('canvas'),
	};
	canvas.b.className =
		'absolute inset-0 z-0 w-full h-full pointer-events-none';
	container.appendChild(canvas.b);

	ctx = {
		a: canvas.a.getContext('2d')!,
		b: canvas.b.getContext('2d')!,
	};

	simplex = new window.SimplexNoise();
}

function resize() {
	const { innerWidth, innerHeight } = window;
	canvas.a.width = innerWidth;
	canvas.a.height = innerHeight;
	canvas.b.width = innerWidth;
	canvas.b.height = innerHeight;
}

function initCircles() {
	circleProps = new Float32Array(circleCount * circlePropCount);
	baseHue = wallpaperConfig[mode].baseHue;

	for (let i = 0; i < circleProps.length; i += circlePropCount) {
		initCircle(i);
	}
}

function initCircle(i: number) {
	const x = Math.random() * canvas.a.width;
	const y = Math.random() * canvas.a.height;
	const n = simplex.noise3D(x * xOff, y * yOff, baseHue * zOff);
	const t = Math.random() * Math.PI * 2;
	const speed = baseSpeed + Math.random() * rangeSpeed;
	const vx = speed * Math.cos(t);
	const vy = speed * Math.sin(t);
	const ttl = baseTTL + Math.random() * rangeTTL;
	const radius =
		wallpaperConfig.radius.base +
		Math.random() * wallpaperConfig.radius.range;
	const hue = baseHue + n * 60;

	circleProps.set([x, y, vx, vy, 0, ttl, radius, hue], i);
}

function drawCircle(
	x: number,
	y: number,
	life: number,
	ttl: number,
	radius: number,
	hue: number,
) {
	ctx.a.save();
	ctx.a.fillStyle = `hsla(${hue}, 60%, 30%, ${fadeInOut(life, ttl)})`;
	ctx.a.beginPath();
	ctx.a.arc(x, y, radius, 0, Math.PI * 2);
	ctx.a.fill();
	ctx.a.closePath();
	ctx.a.restore();
}

function updateCircles() {
	baseHue++;
	for (let i = 0; i < circleProps.length; i += circlePropCount) {
		updateCircle(i);
	}
}

function updateCircle(i: number) {
	const x = circleProps[i];
	const y = circleProps[i + 1];
	const vx = circleProps[i + 2];
	const vy = circleProps[i + 3];
	let life = circleProps[i + 4];
	const ttl = circleProps[i + 5];
	const radius = circleProps[i + 6];
	const hue = circleProps[i + 7];

	drawCircle(x, y, life, ttl, radius, hue);

	life++;
	circleProps[i] = x + vx;
	circleProps[i + 1] = y + vy;
	circleProps[i + 4] = life;

	if (
		x < -radius ||
		x > canvas.a.width + radius ||
		y < -radius ||
		y > canvas.a.height + radius ||
		life > ttl
	) {
		initCircle(i);
	}
}

function render() {
	ctx.b.save();
	ctx.b.filter = 'blur(50px)';
	ctx.b.drawImage(canvas.a, 0, 0);
	ctx.b.restore();
}

function draw() {
	ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
	ctx.b.fillStyle = wallpaperConfig[mode].background;
	ctx.b.fillRect(0, 0, canvas.b.width, canvas.b.height);
	updateCircles();
	render();
	requestAnimationFrame(draw);
}

function fadeInOut(t: number, m: number) {
	return Math.sin((Math.PI * t) / m);
}
