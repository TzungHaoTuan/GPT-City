import Link from "next/link";
export const NavLinks = () => {
  const links = [
    { href: "/chat", label: "chat" },
    { href: "/tours", label: "tours" },
    { href: "/tours/new-tour", label: "new tour" },
    { href: "/profile", label: "profile" },
  ];
  return (
    <ul className="menu mt-8 capitalize gap-2">
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  );
};
