"use client";

import Link from "next/link";
import { SiOpenaigym } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";
import toast from "react-hot-toast";

export const SidebarHeader = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <SiOpenaigym className="w-8 h-8 text-accent" />
      </Link>
      <h2 className="font-bold text-xl text-accent ml-4">CityGPT</h2>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </div>
  );
};
