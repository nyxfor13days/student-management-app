import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
