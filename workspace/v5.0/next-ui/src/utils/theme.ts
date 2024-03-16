
export enum Theme {
  Light = "light",
  Dark = "dark",
}

let currentTheme: Theme = Theme.Light;

export function getTheme(): Theme {
  return currentTheme;
}

export function setTheme( theme: Theme ): void {
  currentTheme = theme;
  localStorage.setItem( "theme", theme );
}