export const tooltipWrapper = `
  inline-block
  relative
`;

export const tooltipContent = `
  absolute
  bg-bones-black
  dark:bg-bones-white
  text-bones-white
  dark:text-bones-black

  bottom-full
  duration-150
  left-1/2
  mb-1
  pointer-events-none
  px-2
  py-1
  rounded
  text-sm
  transition-opacity
  translate-x-[-50%]
  w-auto
  whitespace-nowrap
  z-10
`;

export const tooltipArrow = `
  -bottom-1
  absolute
  bg-bones-black
  dark:bg-bones-white
  h-2
  left-1/2
  rotate-45
  translate-x-[-50%]
  w-2
`;
