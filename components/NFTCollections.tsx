'use client';

import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react';
import NftHighlights from './NftHighlights';
import { ArrowLeftIcon, ArrowRightIcon } from './icons';

const nftCollections = [
  {
    id: 1,
    name: 'NFT Collection 1',
    image: '/nft-collections/nft-collection-1.png',
  },
  {
    id: 2,
    name: 'NFT Collection 2',
    image: '/nft-collections/nft-collection-2.png',
  },
  {
    id: 3,
    name: 'NFT Collection 3',
    image: '/nft-collections/nft-collection-3.png',
  },
  {
    id: 4,
    name: 'NFT Collection 4',
    image: '/nft-collections/nft-collection-4.png',
  },
  {
    id: 5,
    name: 'NFT Collection 5',
    image: '/nft-collections/nft-collection-5.png',
  },
  {
    id: 6,
    name: 'NFT Collection 6',
    image: '/nft-collections/nft-collection-6.png',
  },
];

const NFTCollections = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === 'left' ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });

      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="flex w-full flex-col gap-10 px-4 py-10 lg:gap-20 lg:px-[236px] lg:py-20">
      <div className="flex w-full flex-col gap-2">
        <div className="flex w-full items-center justify-between">
          <h2 className="font-title text-2xl font-black uppercase italic text-yellowAccent md:text-3xl">
            NFT Collections
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className="flex cursor-pointer items-center justify-center rounded-xl bg-[#383A42] p-2"
            >
              <ArrowLeftIcon />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className="flex cursor-pointer items-center justify-center rounded-xl bg-[#383A42] p-2"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <div
          ref={scrollContainerRef}
          className="flex w-full gap-2 overflow-x-auto scroll-smooth md:gap-4"
          onScroll={checkScroll}
        >
          {nftCollections.map((nft) => (
            <div
              key={nft.id}
              className="flex min-h-[145px] min-w-[102px] flex-col gap-2 rounded-md lg:min-h-[245px] lg:min-w-[180px]"
            >
              <Image
                src={nft.image}
                alt={nft.name}
                width={180}
                height={245}
                className="h-[145px] w-[102px] rounded-xl object-cover lg:h-[245px] lg:w-[180px]"
              />
            </div>
          ))}
        </div>
      </div>
      <NftHighlights />
    </div>
  );
};

export default NFTCollections;
