import React from "react";

interface IProps {
  category: string;
  title: string;
}

const Header = ({ category, title }: IProps) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400">{category}</p>
      <p className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        {title}
      </p>
    </div>
  );
};

export default Header;
