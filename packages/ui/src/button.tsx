"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  // className?: string;
  appName: string;
}

export const Button = ({ children, appName }: ButtonProps) => {
  return (
    <button
      // className={className}
      className="bg-white"
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
