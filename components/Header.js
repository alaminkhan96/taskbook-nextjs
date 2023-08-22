import Image from "next/image";
import React from "react";
import logo from "../public/logo.png";
export default function Header({ children, theme, setTheme }) {
  return (
    <header>
      <span className="logo">
        <Image src={logo} alt="Logo" layout="responsive" />
        <span>{children}</span>
      </span>
      <span className="themeSelector">
        <span
          className={theme === "light" ? "light activeTheme" : "light"}
          onClick={() => setTheme("light")}
        ></span>
        <span
          className={theme === "medium" ? "medium activeTheme" : "medium"}
          onClick={() => setTheme("medium")}
        ></span>
        <span
          className={theme === "dark" ? "dark activeTheme" : "dark"}
          onClick={() => setTheme("dark")}
        ></span>
        <span
          className={
            theme === "gradientOne" ? "gradientOne activeTheme" : "gradientOne"
          }
          onClick={() => setTheme("gradientOne")}
        ></span>
        <span
          className={
            theme === "gradientTwo" ? "gradientTwo activeTheme" : "gradientTwo"
          }
          onClick={() => setTheme("gradientTwo")}
        ></span>
        <span
          className={
            theme === "gradientThree"
              ? "gradientThree activeTheme"
              : "gradientThree"
          }
          onClick={() => setTheme("gradientThree")}
        ></span>
      </span>
    </header>
  );
}
