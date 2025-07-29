'use client';

import { useState } from 'react';
import Image from 'next/image';

const nftImages = [
  '/assets/nfts/nft1.png',
  '/assets/nfts/nft1.png',
  '/assets/nfts/nft1.png',
  '/assets/nfts/nft1.png',
  '/assets/nfts/nft1.png',
  '/assets/nfts/nft1.png',
  '/assets/nfts/nft1.png',
  '/assets/nfts/nft1.png',
  '/assets/nfts/nft1.png',
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="relative w-full overflow-hidden">
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
                height={1000}
                className="h-[180px] w-full shrink-0 object-cover md:h-[450px]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Dots navigation */}
      <div className="absolute bottom-4 flex w-full justify-center gap-2">
        {nftImages.map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-1 w-7 cursor-pointer rounded-[20px] transition-colors duration-200 ${
              activeIndex === index ? 'bg-yellowAccent' : 'bg-[#FFFFFF99]'
            }`}
            role="button"
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
