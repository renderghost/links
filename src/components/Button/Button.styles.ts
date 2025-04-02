export const buttonBase = `
  px-6 py-3
  duration-200
  ease-in-out
  focus:outline-none
  focus:ring-2
  focus:ring-offset-2
  focus:ring-bones-yellow
  focus:ring-offset-white
  dark:focus:ring-offset-bones-black
  font-medium
  inline-flex
  items-center
  justify-center
  rounded
  transition-all
`;

export const squareButtonBase = `
  px-3 py-3 flex items-center justify-center
`;

export const cardButtonBase = `
  w-full text-left flex flex-col p-4
`;

export const buttonVariants = {
	primary: `
    bg-bones-mediumblue
    text-bones-white
    hover:bg-bones-blue
    hover:text-bones-white
    focus:bg-bones-blue
    focus:text-bones-white
    active:bg-bones-mediumblue
    // dark:bg-bones-white
    // dark:text-bones-mediumblue
    // dark:hover:bg-bones-white
    // dark:hover:text-bones-blue
    // dark:focus:bg-bones-white
    // dark:focus:text-bones-blue
    // dark:active:bg-bones-white
  `,
	secondary: `
    bg-bones-white
    text-bones-mediumblue
    dark:bg-bones-mediumblue
    dark:text-bones-white

    hover:bg-bones-white
    hover:text-bones-blue
    dark:hover:bg-bones-blue
    dark:hover:text-white

    active:bg-bones-white
    active:text-bones-mediumblue
    dark:active:bg-bones-mediumblue
    dark:active:text-bones-white

    focus:bg-bones-white
    focus:text-bones-blue
    dark:focus:bg-bones-blue
    dark:focus:text-white
  `,
	transparent: `
    dark:hover:text-white
    dark:focus:text-white
    bg-opacity-0
    text-bones-mediumblue
    hover:bg-opacity-0
    hover:text-bones-blue
    focus:bg-opacity-0
    focus:text-bones-blue
    active:bg-opacity-0
    active:text-bones-mediumblue
    dark:bg-bones-black
    dark:text-bones-cyan
    dark:hover:bg-bones-mediumblue
    dark:focus:bg-bones-mediumblue
    dark:active:bg-bones-black
    dark:active:text-bones-white
  `,
	card: `
    dark:text-white
    bg-bones-white
    text-bones-black
    hover:bg-bones-white
    focus:ring-bones-cyan
    active:bg-bones-white
    dark:bg-bones-mediumblue
    dark:hover:bg-bones-mediumblue
    dark:active:bg-bones-mediumblue
  `,
};

export const buttonDisabled = `
  cursor-not-allowed
  opacity-50
`;
