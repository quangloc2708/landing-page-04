import Banner from '@/components/Banner';
import Footer from '@/components/Footer';
import Menu from '@/components/Menu';
import NFTCollections from '@/components/NFTCollections';
import NftHighlights from '@/components/NftHighlights';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Banner />
      <Menu />
      <NFTCollections />
      <Footer />
    </div>
  );
}
