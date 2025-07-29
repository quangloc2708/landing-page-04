'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type MenuItemProps = {
  label: string;
  href: string;
  setOpenMenu?: (open: boolean) => void;
};

const MenuItem = ({ label, href, setOpenMenu }: MenuItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex h-12 items-center justify-center rounded-full px-[18px] py-2 text-sm font-medium lg:h-10 ${isActive ? 'bg-[#383A42] text-yellowAccent' : 'text-[#D2D2D2] hover:text-yellowAccent'}`}
      onClick={() => setOpenMenu?.(false)}
    >
      {label}
    </Link>
  );
};

export default MenuItem;
