import { initWallpaper } from './wallpaper';

export function startWallpaperWatcher() {
	const mode = document.documentElement.classList.contains('dark')
		? 'dark'
		: 'light';
	document.querySelectorAll<HTMLElement>('.bones-anim-shit').forEach(el => {
		initWallpaper(el, mode);
	});
}
