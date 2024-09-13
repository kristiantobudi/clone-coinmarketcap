import { HandleCustom } from "@/hooks/handleCustom";
import Link from "next/link";
import Card from "../Card/Card";
import ListCrypto from "../ListCrypto/ListCrypto";

export default function HeroSection() {
  const { checked, handleToggle } = HandleCustom();

  return (
    <section className="bg-white dark:bg-gray-900 z-0">
      <div className="flex justify-between">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-start justify-start lg:py-12">
          <p className="mb-1 text-sm font-bold tracking-tight leading-none text-gray-900 md:text-xl lg:text-2xl dark:text-white">
            Harga Cryptocurrency Hari Ini berdasarkan Kapitalisasi Pasar
          </p>
          <p className="mb-4 text-xs font-normal tracking-tight leading-none text-gray-500 lg:text-xl dark:text-gray-400">
            Kapitalisasi pasar kripto global saat ini mencapai{" "}
            <span className="font-semibold">Rp 30.81P</span>, penurunan
            <span className="text-red-600"> 1.29%</span>{" "}
            <Link href="#" className="underline">
              Baca Selengkapnya
            </Link>
          </p>
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-start justify-start lg:py-12">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              onChange={handleToggle}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Sorotan Utama
            </span>
          </label>
        </div>
      </div>
      {checked && <Card />}
      <ListCrypto />
    </section>
  );
}
