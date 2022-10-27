'use client';

import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';

export const Navlink = ({ href, children }) => {
  let segment = useSelectedLayoutSegments();
  let active = href === `/${segment}`;

  console.log({ segment, href });
  return (
    <Link className={active ? 'underline' : ''} href={href}>
      {children}
    </Link>
  );
};
