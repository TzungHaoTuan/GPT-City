import { MemberProfile } from "./MemberProfile";
import { NavLinks } from "./NavLinks";
import { SidebarHeader } from "./SidebarHeader";

export const Sidebar = () => {
  return (
    <ul className="px-8 py-12 w-80 min-h-full bg-neutral grid grid-rows-[auto,1fr,auto]">
      <li>
        <SidebarHeader />
      </li>
      <li>
        <NavLinks />
      </li>
      <li>
        <MemberProfile />
      </li>
    </ul>
  );
};
