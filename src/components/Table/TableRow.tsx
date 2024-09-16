import React from "react";
import { Star } from "../../../public/svg/starOutline";
import { CoinNameRow } from "./CoinNameRow";
import { Rate } from "../../../public/svg/rate";
import { More } from "../../../public/svg/moreOutline";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CMCtableType } from "@/types/cmcTableRow";

export const TableRow: React.FC<CMCtableType> = ({
  starNum,
  coinName = "",
  coinIcon = "",
  coinSymbol = "",
  price = 0,
  hRate = 0,
  dRate = 0,
  wRate = 0,
  hRateIsIncrement = true,
  dRateIsIncrement = true,
  wRateIsIncrement = true,
  marketCapValue = 0,
  volumeValue = 0,
  volumeCryptoValue = 0,
  circulatingSupply = 0,
}) => {
  const graphImage: string[] = [
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7129.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3957.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/328.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2416.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1765.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2099.svg",
    "https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/7653.svg",
  ];

  const getRandomGraph = (): string => {
    const rndInt = Math.floor(Math.random() * graphImage.length);
    return graphImage[rndInt];
  };

  const router = useRouter();

  const viewCoinDetails = () => {
    router.push(
      `/currencies/info?symbol=${coinSymbol}&coin=${coinName}&price=${price}`
    );
  };
  const viewPrice = () => {
    router.push(
      `/currencies/info?symbol=${coinSymbol}&coin=${coinName}&price=${price}`
    );
  };

  const formatNumber = (num: number): string => {
    return Number(num.toFixed(2)).toLocaleString();
  };

  return (
    <tbody className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <tr className="flex-auto w-full">
        <td className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
          {/* Star Icon */}
          <div className="mr-3">
            <Star />
          </div>
          {coinName && (
            <CoinNameRow
              name={coinName}
              icon={coinIcon}
              clicked={viewCoinDetails}
            />
          )}
        </td>
        {/* Star Number */}
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-sm">
          {starNum}
        </td>
        {/* Price */}
        <td
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap cursor-pointer text-sm"
          onClick={viewPrice}
        >
          <p>${formatNumber(price)}</p>
        </td>
        {/* Hourly Rate */}
        <td className="px-6 py-4">
          <Rate
            isIncrement={hRateIsIncrement}
            rate={`${formatNumber(hRate)}%`}
          />
        </td>
        {/* Daily Rate */}
        <td className="px-6 py-4">
          <Rate
            isIncrement={dRateIsIncrement}
            rate={`${formatNumber(dRate)}%`}
          />
        </td>
        {/* Weekly Rate */}
        <td className="px-6 py-4">
          <Rate
            isIncrement={wRateIsIncrement}
            rate={`${formatNumber(wRate)}%`}
          />
        </td>
        {/* Market Cap */}
        <td className="px-0 py-4 font-medium text-gray-900 whitespace-nowrap">
          <p>${formatNumber(marketCapValue)}</p>
        </td>
        {/* Volume */}
        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          <p>
            {formatNumber(volumeCryptoValue)} {coinSymbol}
          </p>
          <p className="text-gray-400">{formatNumber(volumeValue)}</p>
        </td>
        {/* Circulating Supply */}
        <td className="px-12 py-4 font-medium text-gray-900 whitespace-nowrap">
          <p>{formatNumber(circulatingSupply)}</p>
        </td>
        {/* Graph Image */}
        <td className="px-6 py-4">
          <Image src={getRandomGraph()} width={150} height={60} alt="Graph" />
        </td>
        {/* More Options */}
        <td className="px-6 py-4">
          <More />
        </td>
      </tr>
    </tbody>
  );
};
