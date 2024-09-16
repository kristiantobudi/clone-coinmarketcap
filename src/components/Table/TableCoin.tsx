import { useGetCrypto } from "@/hooks/useGetCrypto";
import { TableType } from "@/types/cmcTableType";
import { titleAllTableType } from "@/types/titleAllTable";
import { TableRow } from "./TableRow";

export default function ListCoin() {
  const { cmcTypeListData } = useGetCrypto();
  return (
    <div className="overflow-x-auto w-full flex flex-row items-center justify-between lg:px-6">
      <div>
        <table
          id="sorting-table"
          className="w-full table-fixed text-sm text-left text-gray-700"
        >
          <thead>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              {titleAllTableType.title.map((title) => (
                <th scope="col" className="px-6 py-3 w-full" key={title.name}>
                  {title.name}
                </th>
              ))}
            </tr>
          </thead>
          {cmcTypeListData && Array.isArray(cmcTypeListData) ? (
            cmcTypeListData
              .slice(0, 10)
              .map((crypto: TableType, key: number) => (
                <TableRow
                  key={key}
                  starNum={crypto.name}
                  coinName={crypto.cmc_rank}
                  coinSymbol={crypto.symbol}
                  hRate={crypto.quote?.USD?.percent_change_1h}
                  dRate={crypto.quote?.USD?.percent_change_24h}
                  wRate={crypto.quote?.USD?.percent_change_7d}
                  hRateIsIncrement={
                    (crypto.quote?.USD?.percent_change_1h ?? 0) > 0
                  }
                  dRateIsIncrement={
                    (crypto.quote?.USD?.percent_change_7d ?? 0) > 0
                  }
                  wRateIsIncrement={
                    (crypto.quote?.USD?.percent_change_7d ?? 0) > 0
                  }
                  price={crypto.quote?.USD?.price}
                  marketCapValue={crypto.quote?.USD?.fully_diluted_market_cap}
                  volumeCryptoValue={crypto.quote?.USD?.volume_24h}
                  volumeValue={crypto.total_supply}
                  circulatingSupply={crypto.circulating_supply}
                />
              ))
          ) : (
            <tr>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                Loading...
              </td>
            </tr>
          )}
        </table>
      </div>
    </div>
  );
}
