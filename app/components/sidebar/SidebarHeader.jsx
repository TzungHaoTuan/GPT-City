import { SiOpenaigym } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";

export const SidebarHeader = () => {
  return (
    <div className="flex items-center">
      <SiOpenaigym className="w-8 h-8 text-secondary" />
      <h2 className="font-bold text-xl text-secondary ml-4">CityGPT</h2>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </div>
  );
};
