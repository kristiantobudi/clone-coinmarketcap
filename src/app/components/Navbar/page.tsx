"use client";

import { CmcTableCryptoList, useGetCrypto } from "@/hooks/useGetCrypto";
import HeroSection from "../../../components/HeroSection/HeroSection";
import Navigation from "../../../components/Navbar/Navigation/Navigation";

export default function Navbar() {
  const { cmcTypeListData } = useGetCrypto();
  return (
    <>
      <CmcTableCryptoList.Provider value={{ cmcTypeListData }}>
        <Navigation />
        <HeroSection />
      </CmcTableCryptoList.Provider>
    </>
  );
}
