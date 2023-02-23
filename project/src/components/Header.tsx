import React, { ReactElement } from "react";
import Logo from '../assets/img/logo.png'
import ToggleTheme from "./ToggleTheme";

export default function Header(): ReactElement {
  return (
    <header className="w-full h-[100px] flex items-center justify-end bg-zinc-800 border-b-2 border-b-red-500 px-10	relative">
      <img src={ Logo } alt="Resident Evil 4 Logo" className="w-[200px] sm:w-[300px] -translate-x-1/2 absolute left-1/2"/>
      <ToggleTheme />
    </header>
  );
}