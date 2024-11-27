"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "movies",
    href: "/movies",
  },
  {
    name: "shows",
    href: "/shows",
  },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <>
      <nav className="flex gap-6">
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                "font-bold uppercase tracking-widest hover:text-[#1dabb3]",
                {
                  "text-[#1dabb3]": pathname === link.href,
                },
              )}
            >
              <p>{link.name}</p>
            </Link>
          );
        })}
      </nav>
      <div>
        <Link
          key={"watchlist"}
          href={"/watchlist"}
          className={clsx(
            "font-bold uppercase tracking-widest hover:text-[#1dabb3]",
            {
              "text-[#1dabb3]": pathname === "/watchlist",
            },
          )}
        >
          <p>watchlist</p>
        </Link>
      </div>
    </>
  );
}
