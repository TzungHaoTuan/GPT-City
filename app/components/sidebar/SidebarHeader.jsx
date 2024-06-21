"use client";

import Link from "next/link";
import { SiOpenaigym } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";
import toast from "react-hot-toast";

export const SidebarHeader = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <SiOpenaigym className="w-8 h-8 text-secondary" />
      </Link>
      <h2 className="font-bold text-xl text-secondary ml-4">CityGPT</h2>
      <button
        className="btn btn-primary btn-xs text-xs"
        onClick={() => toast.success("success")}
      >
        success
      </button>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </div>
  );
};
