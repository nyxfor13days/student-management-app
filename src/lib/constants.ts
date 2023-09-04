import {
  DashboardIcon,
  FilePlusIcon,
  PersonIcon,
  PlusIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";

export const NAVITEMS = [
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
