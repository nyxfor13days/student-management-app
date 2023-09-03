"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="left">
      {children}
    </NextThemesProvider>
  );
}
