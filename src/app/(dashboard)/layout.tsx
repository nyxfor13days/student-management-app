import React from "react";
import Providers from "@/components/Providers";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return <Providers>{children}</Providers>;
}
