import React from 'react';
import Image from 'next/image';

type MenuItem = {
  label: string;
  iconSrc: string;
  href: string;
  isNew?: boolean;
};

const menuItems: MenuItem[] = [
  { label: 'FREE TO EARN', iconSrc: '/icons/icon-1.png', href: '/earn' },
  { label: 'RANKING', iconSrc: '/icons/icon-2.png', href: '/ranking' },
  {
    label: 'VIDEO-NFT',
    iconSrc: '/icons/icon-3.png',
    href: '/video-nft',
  },
  {
    label: 'HOW TO BUY',
    iconSrc: '/icons/icon-4.png',
    href: '/how-to-buy',
  },
  {
    label: 'NEW NFTS',
    iconSrc: '/icons/icon-5.png',
    href: '/new-nfts',
    isNew: true,
  },
  { label: 'ROADMAPS', iconSrc: '/icons/icon-6.png', href: '/roadmaps' },
];

const Menu = () => {
  return (
    <div className="flex h-[121.88px] items-center justify-between gap-1 bg-grayDark py-4 lg:px-[236px] lg:py-0">
      {menuItems.map((item) => (
        <a
          href={item.href}
          key={item.label}
          className="relative flex flex-col items-center gap-3 text-sm font-medium text-white"
        >
          <div className="relative">
            <Image
              src={item.iconSrc}
              alt={item.label}
              width={42}
              height={42}
              className="h-[28px] w-[28px] md:h-[42px] md:w-[42px]"
            />
            {item.isNew && (
              <span className="absolute right-[-10px] top-[-8px] rounded-sm bg-red-600 px-[2.67px] py-[1.33px] text-xs font-medium text-white md:px-[6px] md:py-[2px]">
                NEW
              </span>
            )}
          </div>
          <span className="text-center text-xs font-normal uppercase text-white md:text-sm">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default Menu;
