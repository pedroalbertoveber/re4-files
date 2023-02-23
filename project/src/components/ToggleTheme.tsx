import React, { ReactElement, useEffect } from "react";
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'

export default function ToggleTheme():ReactElement {

  const systemPreferences = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const pageClasses = document.documentElement.classList;

  function toggleTheme(): void {
    pageClasses.toggle('dark');
  }

  useEffect(() => {
    systemPreferences && pageClasses.add('dark');
  }, []);

  return (
    <>
      <MoonIcon className="icon-toggle dark:hidden block" onClick={toggleTheme}/>
      <SunIcon className="icon-toggle dark:block hidden" onClick={toggleTheme}/>
    </>
  );
}