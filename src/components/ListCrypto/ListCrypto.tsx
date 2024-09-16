import Link from "next/link";
import { EarthOutline } from "../../../public/svg/earthOutline";
import { IconListOutline } from "../../../public/svg/iconListOutline";
import { PadLockOutline } from "../../../public/svg/padLockOutline";
import { FilterOutline } from "../../../public/svg/filterOutline";
import { CustomizeOutline } from "../../../public/svg/customizeOutline";
import ListCoin from "../Table/TableCoin";

export default function ListCrypto() {
  return (
    <div>
      <div className="px-6 py-8 overflow-x-auto w-full flex flex-row items-center justify-between lg:px-6 lg:py-4">
        <div className="flex gap-1 items-center justify-center">
          <Link href="#" passHref>
            <button className="px-3 py-1 hover:bg-gray-200 text-gray-500 font-semibold rounded-lg flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M5.80195 9.1961V5.79609H9.20196V9.1961H5.80195ZM4.00195 5.49609C4.00195 4.66767 4.67352 3.99609 5.50195 3.99609H9.50196C10.3304 3.99609 11.002 4.66767 11.002 5.49609V9.4961C11.002 10.3245 10.3304 10.9961 9.50196 10.9961H5.50195C4.67352 10.9961 4.00195 10.3245 4.00195 9.4961V5.49609ZM14.802 9.1961V5.79609H18.2019V9.1961H14.802ZM13.002 5.49609C13.002 4.66767 13.6735 3.99609 14.502 3.99609H18.5019C19.3303 3.99609 20.0019 4.66767 20.0019 5.49609V9.4961C20.0019 10.3245 19.3303 10.9961 18.5019 10.9961H14.502C13.6735 10.9961 13.002 10.3245 13.002 9.4961V5.49609ZM14.802 14.7961V18.1961H18.2019V14.7961H14.802ZM14.502 12.9961C13.6735 12.9961 13.002 13.6677 13.002 14.4961V18.4961C13.002 19.3245 13.6735 19.9961 14.502 19.9961H18.5019C19.3303 19.9961 20.0019 19.3245 20.0019 18.4961V14.4961C20.0019 13.6677 19.3303 12.9961 18.5019 12.9961H14.502ZM5.80195 18.1961V14.7961H9.20196V18.1961H5.80195ZM4.00195 14.4961C4.00195 13.6677 4.67352 12.9961 5.50195 12.9961H9.50196C10.3304 12.9961 11.002 13.6677 11.002 14.4961V18.4961C11.002 19.3245 10.3304 19.9961 9.50196 19.9961H5.50195C4.67352 19.9961 4.00195 19.3245 4.00195 18.4961V14.4961Z"></path>
              </svg>
              <span className="ml-1">All</span>
            </button>
          </Link>
          <Link href="#" passHref>
            <button className="px-3 py-1 hover:bg-gray-200 text-gray-500 font-semibold rounded-lg flex items-center justify-center">
              <EarthOutline />
              <span className="ml-1">NTFs</span>
            </button>
          </Link>
          <Link href="#" passHref>
            <button className="px-3 py-1 hover:bg-gray-200 text-gray-500 font-semibold rounded-lg flex items-center justify-center">
              <IconListOutline />
              <span className="ml-1">Category</span>
            </button>
          </Link>
          <Link href="#" passHref>
            <button className="px-3 py-1 hover:bg-gray-200 text-gray-500 font-semibold rounded-lg flex items-center justify-center w-full">
              <PadLockOutline />
              <span className="ml-1">Unlocked Token</span>
            </button>
          </Link>
          <div className="inline-flex items-center rounded-sm">
            <div className="border-l-2 border-gray-200 h-6"></div>
          </div>
          <Link href="#" passHref>
            <button className="px-3 py-1 hover:bg-gray-200 text-gray-500 font-semibold rounded-lg flex items-center justify-between">
              ♻️
              <span className="ml-1">Rehypothecated</span>
            </button>
          </Link>
          <Link href="#" passHref>
            <button className="px-3 py-1 hover:bg-gray-200 text-gray-500 font-semibold rounded-lg flex items-center justify-between">
              🔥
              <span className="ml-1">Memes</span>
            </button>
          </Link>
          <Link href="#" passHref>
            <button className="px-3 py-1 hover:bg-gray-200 text-gray-500 font-semibold rounded-lg flex items-center justify-between">
              🔥
              <span className="ml-1">Solana Eco</span>
            </button>
          </Link>
          <Link href="#" passHref>
            <button className="px-3 py-1 hover:bg-gray-200 text-gray-500 font-semibold rounded-lg flex items-center justify-between">
              🔥
              <span className="ml-1">AI</span>
            </button>
          </Link>
          <Link href="#" passHref>
            <button className="px-3 py-1 hover:bg-gray-200 text-gray-500 font-semibold rounded-lg flex items-center justify-between">
              🔥
              <span className="ml-1">Gaming</span>
            </button>
          </Link>
          <Link href="#" passHref>
            <button className="px-3 py-1 hover:bg-gray-200 text-gray-500 font-semibold rounded-lg flex items-center justify-between">
              🔥
              <span className="ml-1">RWA</span>
            </button>
          </Link>
          <Link href="#" passHref>
            <button className="px-3 py-1 hover:bg-gray-200 text-gray-500 font-semibold rounded-lg flex items-center justify-between">
              🔥
              <span className="ml-1">DePIN</span>
            </button>
          </Link>
          <div className="inline-flex items-center rounded-sm">
            <div className="border-l-2 border-gray-200 h-6"></div>
          </div>
          <div className="inline-flex items-center rounded-sm">
            <Link href="#" passHref>
              <button className="px-3 py-1 hover:bg-gray-200 text-gray-500 font-semibold rounded-lg flex items-center">
                <FilterOutline />
                <span className="ml-1">Filter</span>
              </button>
            </Link>
            <Link href="#" passHref>
              <button className="px-3 py-1 hover:bg-gray-200 text-gray-500 font-semibold rounded-lg flex items-center">
                <CustomizeOutline />
                <span className="ml-1">Customize</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <ListCoin />
    </div>
  );
}
