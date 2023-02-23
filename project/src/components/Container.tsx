import React, { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode,
}

export default function Container({ children }: Props ):ReactElement {
  return (
    <main className="w-full px-10 py-5">
      { children }
    </main>
  );
}