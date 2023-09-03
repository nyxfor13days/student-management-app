"use client";

import React from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";

const headingFont = Montserrat({ weight: "600", subsets: ["latin"] });

export default function Sidebar() {
  return (
    <div className="py-4 h-full flex flex-col space-y-4 bg-background">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center mb-14">
          <h1 className={cn(["text-xl font-bold", headingFont.className])}>
            Schoolytics
          </h1>
        </Link>
      </div>
    </div>
  );
}
