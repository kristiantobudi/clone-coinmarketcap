"use client";

import { CmcTableCryptoList, useGetCrypto } from "@/hooks/useGetCrypto";
import HeroSection from "../../../components/HeroSection/HeroSection";
import Navigation from "../../../components/Navbar/Navigation/Navigation";
import PageNews from "@/components/PageNews/PageNews";

export default function Navbar() {
  const { cmcTypeListData } = useGetCrypto();
  return (
    <>
      <CmcTableCryptoList.Provider value={{ cmcTypeListData }}>
        <Navigation />
        <HeroSection />
        <PageNews />
      </CmcTableCryptoList.Provider>
    </>
  );
}
