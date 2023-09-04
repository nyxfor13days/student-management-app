"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import { GearIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { NAVITEMS } from "@/lib/constants";

const headingFont = Montserrat({ weight: "600", subsets: ["latin"] });

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="py-8 h-full flex flex-col space-y-4 bg-primary text-primary-foreground">
      <div className="px-3 h-full flex flex-col justify-between gap-4">
        <Link href="/dashboard" className="flex items-center pl-3">
          <h1 className={cn(["text-xl font-bold", headingFont.className])}>
            Schoolytics
          </h1>
        </Link>

        <div className="space-y-1">
          {NAVITEMS.map((route, index) => (
            <Link
              key={index}
              href={route.href}
              className={cn([
                "group flex p-3 w-full justify-start text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded transition duration-300 cursor-pointer",
                pathname === route.href && "bg-accent text-accent-foreground",
              ])}
            >
              <div className="flex flex-1 items-center gap-4">
                <route.icon className="h-4 w-4" />
                <span>{route.label}</span>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/settings"
          className="group flex p-3 w-full justify-start text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded transition duration-300 cursor-pointer"
        >
          <div className="flex flex-1 items-center gap-4">
            <GearIcon className="h-4 w-4" />
            <span>Settings</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
