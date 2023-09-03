import React from "react";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  return (
    <Providers>
      <div className="h-full relative">
        <div className="max-md:hidden fixed inset-y-0 h-full w-72 flex flex-col z-[80]">
          <Sidebar />
        </div>
        <main className="md:pl-72">
          <Navbar />
          {children}
        </main>
      </div>
    </Providers>
  );
}
