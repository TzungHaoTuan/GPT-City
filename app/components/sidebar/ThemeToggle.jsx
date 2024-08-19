"use client";
import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const themes = {
    light: "light",
    dark: "dark",
  };
  const [theme, setTheme] = useState(themes.dark);
  const [isThemeHover, setIsThemeHover] = useState(false);

  const toggleTheme = () => {
    const currentTheme = theme === themes.light ? themes.dark : themes.light;
    document.documentElement.setAttribute("data-theme", currentTheme);
    setTheme(currentTheme);
  };

  const handleMouseEnter = () => {
    setIsThemeHover(true);
  };
  const handleMouseLeave = () => {
    setIsThemeHover(false);
  };

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="btn btn-outline btn-sm h-10 text-accent"
    >
      {theme === themes.light ? (
        isThemeHover ? (
          <BsMoonFill className="w-4 h-4" />
        ) : (
          <BsSunFill className="w-4 h-4" />
        )
      ) : isThemeHover ? (
        <BsSunFill className="w-4 h-4" />
      ) : (
        <BsMoonFill className="w-4 h-4" />
      )}
    </button>
  );
};
export default ThemeToggle;
