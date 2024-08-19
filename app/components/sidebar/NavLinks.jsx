import Link from "next/link";
export const NavLinks = () => {
  const links = [
    { href: "/chat", label: "chat" },
    { href: "/tours", label: "tours" },
    { href: "/tours/new-tour", label: "new tour" },
    { href: "/profile", label: "profile" },
  ];
  return (
    <ul className="menu mt-12 capitalize gap-4">
      {links.map(({ href, label }) => (
        <li key={href}>
          <Link href={href} className="pl-10 hover:text-accent">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
