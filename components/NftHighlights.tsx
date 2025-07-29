'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';

const nftImages = [
  '/drops-calendar.png',
  '/drops-calendar.png',
  '/drops-calendar.png',
];

const NftHighlights = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const canScrollLeft = activeIndex > 0;
  const canScrollRight = activeIndex < nftImages.length - 1;

  return (
    <section className="flex w-full flex-col gap-10 lg:flex-row lg:gap-6">
      <div className="flex w-full flex-col gap-4 lg:w-1/2">
        <div className="flex w-full items-center justify-between">
          <h2 className="font-title text-2xl font-black uppercase italic text-yellowAccent md:text-3xl">
            NFT DROPS CALENDAR
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveIndex(activeIndex - 1)}
              disabled={!canScrollLeft}
              className="flex cursor-pointer items-center justify-center rounded-xl bg-[#383A42] p-2"
            >
              <ArrowLeftIcon />
            </button>
            <button
              onClick={() => setActiveIndex(activeIndex + 1)}
              disabled={!canScrollRight}
              className="flex cursor-pointer items-center justify-center rounded-xl bg-[#383A42] p-2"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <div className="relative w-full overflow-hidden bg-black">
          <div className="flex justify-center">
            <div className="relative h-full w-full">
              <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {nftImages.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`NFT ${index + 1}`}
                    width={1000}
                    height={240}
                    className="h-[172px] w-full shrink-0 rounded-lg object-cover md:h-[240px] md:rounded-xl"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-4 lg:w-1/2 lg:gap-6">
        <div className="flex w-full flex-col gap-4">
          <div className="flex h-[41px] items-center">
            <h2 className="font-title text-2xl font-black uppercase italic text-yellowAccent md:text-3xl">
              HOT NFT
            </h2>
          </div>
          <Image
            src="/hot-nft.png"
            alt={`hot NFT`}
            width={1000}
            height={240}
            className="h-[240px] w-full shrink-0 rounded-lg object-cover md:rounded-xl"
          />
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="flex h-[41px] items-center">
            <h2 className="font-title text-2xl font-black uppercase italic text-yellowAccent md:text-3xl">
              PROMOTION
            </h2>
          </div>
          <Image
            src="/promotion.png"
            alt="Promotion photo"
            width={1000}
            height={240}
            className="h-[240px] w-full shrink-0 rounded-lg object-cover md:rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default NftHighlights;
