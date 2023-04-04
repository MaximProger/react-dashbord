import React, { createContext, useContext, useState } from "react";
import { IContext } from "../types";

const StateContext = createContext<IContext>({} as IContext);

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
    setThemeSettings(false);
  };

  const handleClick = (clicked: string) => {
    if (clicked && !isClicked[clicked as keyof typeof isClicked]) {
      setIsClicked({ ...initialState, [clicked]: true });
    } else {
      setIsClicked({ ...initialState });
    }
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        currentColor,
        currentMode,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
