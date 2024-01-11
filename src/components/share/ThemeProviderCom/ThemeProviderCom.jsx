"use client";
import { ThemeProvider } from "@material-tailwind/react";

const ThemeProviderCom = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeProviderCom;
