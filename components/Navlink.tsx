"use client";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

type NavlinkProps = {
  href: string;
  children: string;
};

export const Navlink = ({ href, children }: NavlinkProps) => {
  let segment = useSelectedLayoutSegments();
  let active = href === `/${segment}`;
  return (
    <Link href={href} className={active ? "underline" : ""}>
      {children}
    </Link>
  );
};
