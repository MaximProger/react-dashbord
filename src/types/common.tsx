import { ReactNode } from "react";

export interface IInitState {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
}

export interface IContext {
  activeMenu: boolean;
  setActiveMenu(cb: (value: boolean) => boolean): void;
  isClicked: IInitState;
  setIsClicked(value: IInitState): void;
  handleClick(value: string): void;
  screenSize: number;
  setScreenSize(value: number): void;
  currentColor: string;
  currentMode: string;
  themeSettings: boolean;
  setThemeSettings(value: boolean): void;
  setMode(value: React.ChangeEvent<HTMLInputElement>): void;
  setColor(value: string): void;
}

export interface INavButton {
  title: string;
  customFunc(): void;
  icon?: ReactNode;
  color?: string;
  dotColor?: string;
}
