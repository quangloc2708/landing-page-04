'use client';

import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="border-t border-[#383A42] px-4 py-10 text-white lg:px-[236px] lg:py-10">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
        {/* ABOUT US */}
        <div className="flex flex-col gap-3">
          <h4 className="font-title text-lg font-black uppercase italic">
            About Us
          </h4>
          <ul className="flex flex-col gap-3 text-xs font-normal text-[#D2D2D2] md:text-sm">
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Company Details</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Affiliate</a>
            </li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div className="flex flex-col gap-3">
          <h4 className="font-title text-lg font-black uppercase italic">
            Products
          </h4>
          <ul className="flex flex-col gap-3 text-xs font-normal text-[#D2D2D2] md:text-sm">
            <li>
              <a href="#">NFT Marketplace</a>
            </li>
            <li>
              <a href="#">Slingshot</a>
            </li>
            <li>
              <a href="#">Swaps</a>
            </li>
            <li>
              <a href="#">NFT Launchpad</a>
            </li>
            <li>
              <a href="#">Runes Platform</a>
            </li>
            <li>
              <a href="#">Creator Dashboard</a>
            </li>
          </ul>
        </div>

        {/* RESOURCES */}
        <div className="flex flex-col gap-3">
          <h4 className="font-title text-lg font-black uppercase italic">
            Resources
          </h4>
          <ul className="flex flex-col gap-3 text-xs font-normal text-[#D2D2D2] md:text-sm">
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">API</a>
            </li>
            <li>
              <a href="#">Feature Requests</a>
            </li>
            <li>
              <a href="#">Trust & Safety</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col gap-3">
          <h4 className="font-title text-lg font-black uppercase italic">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-3 text-xs font-normal text-[#D2D2D2] md:text-sm">
            <li>
              <a href="mailto:support@tech.email">support@tech.email</a>
            </li>
            <li>
              <a href="mailto:affiliate@tech.com">affiliate@tech.com</a>
            </li>
          </ul>
          <div className="mt-8 md:mt-10">
            <Image
              src="/install-btn.png"
              alt="App Icon"
              width={151.4}
              height={44}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
