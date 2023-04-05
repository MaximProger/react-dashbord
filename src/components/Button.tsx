import React, { ReactNode } from "react";

interface IProps {
  bgColor?: string;
  color: string;
  size?: string;
  text?: string;
  borderRadius: string;
  width?: string;
  icon?: ReactNode;
  bgHoverColor?: string;
}

const Button = ({ bgColor, color, size, text, borderRadius }: IProps) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {text}
    </button>
  );
};

export default Button;
