import Image from "next/image";

interface CoinNameRowProps {
  name: number | string;
  icon: number | string;
  clicked: () => void;
}

const getSymbol: string[] = [
  "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
  "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
  "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
  "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
  "https://s2.coinmarketcap.com/static/img/coins/64x64/7129.png",
  "https://s2.coinmarketcap.com/static/img/coins/64x64/3957.png",
  "https://s2.coinmarketcap.com/static/img/coins/64x64/328.png",
  "https://s2.coinmarketcap.com/static/img/coins/64x64/2416.png",
  "https://s2.coinmarketcap.com/static/img/coins/64x64/1765.png",
  "https://s2.coinmarketcap.com/static/img/coins/64x64/2099.png",
  "https://s2.coinmarketcap.com/static/img/coins/64x64/7653.png",
];

export const CoinNameRow: React.FC<CoinNameRowProps> = ({
  name,
  icon,
  clicked,
}) => {
  const iconIndex =
    typeof icon === "string" ? parseInt(icon, 10) - 1 : icon - 1;

  return (
    <div className="flex items-center" onClick={clicked}>
      <Image
        className="w-6 h-6"
        src={getSymbol[iconIndex] || ""}
        alt="coin"
        width={24}
        height={24}
      />
      <p className="ml-2 text-black dark:text-white">{name}</p>
    </div>
  );
};
