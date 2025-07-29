'use client';

import Image from 'next/image';
import { useState } from 'react';
import Button from './common/Button';
import MenuItem from './common/MenuItem';
import { CloseIcon, MenuIcon } from './icons';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between bg-dark px-5 py-3 lg:px-10 lg:py-5">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button
            className="ml-2 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <Image
            src="/assets/logo.png"
            alt="Logo"
            className="h-[36px] w-[71px] lg:h-[39px] lg:w-[71px]"
            width={100}
            height={100}
          />
        </div>

        <div className="hidden gap-6 text-sm font-medium lg:flex">
          <MenuItem href="/" label="HOME" />
          <MenuItem href="/items1" label="ITEMS1" />
          <MenuItem href="/items2" label="ITEMS2" />
          <MenuItem href="/items3" label="ITEMS3" />
          <MenuItem href="/items4" label="ITEMS4" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button>SIGN UP</Button>
        <Button variant="secondary">LOG IN</Button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-[60px] z-50 flex h-[calc(100vh-60px)] w-full flex-col gap-4 overflow-y-auto bg-grayDark p-5 lg:hidden">
          <MenuItem href="/" label="HOME" setOpenMenu={setMenuOpen} />
          <MenuItem href="/items1" label="ITEMS1" setOpenMenu={setMenuOpen} />
          <MenuItem href="/items2" label="ITEMS2" setOpenMenu={setMenuOpen} />
          <MenuItem href="/items3" label="ITEMS3" setOpenMenu={setMenuOpen} />
          <MenuItem href="/items4" label="ITEMS4" setOpenMenu={setMenuOpen} />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
