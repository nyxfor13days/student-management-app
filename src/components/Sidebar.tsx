"use client";

import React from "react";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  DashboardIcon,
  FilePlusIcon,
  GearIcon,
  PersonIcon,
  PlusIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";

const headingFont = Montserrat({ weight: "600", subsets: ["latin"] });

const routes = [
  {
    label: "Dashboard",
    icon: DashboardIcon,
    href: "/dashboard",
  },
  {
    label: "Add Students",
    icon: PlusIcon,
    href: "/students/add",
  },
  {
    label: "View Students",
    icon: PersonIcon,
    href: "/students",
  },
  {
    label: "Assign Tests",
    icon: FilePlusIcon,
    href: "/tests",
  },
  {
    label: "Test Reports",
    icon: ReaderIcon,
    href: "/tests/reports",
  },
];

export default function Sidebar() {
  return (
    <div className="py-8 h-full flex flex-col space-y-4 bg-primary text-primary-foreground">
      <div className="px-3 h-full flex flex-col justify-between gap-4">
        <Link href="/dashboard" className="flex items-center pl-3">
          <h1 className={cn(["text-xl font-bold", headingFont.className])}>
            Schoolytics
          </h1>
        </Link>

        <div className="space-y-1">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.href}
              className="group flex p-3 w-full justify-start text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded transition duration-300 cursor-pointer"
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
