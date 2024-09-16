import { useGetCrypto } from "@/hooks/useGetCrypto";
import { TableType } from "@/types/cmcTableType";

export default function ListCoin() {
  const { cmcTypeListData } = useGetCrypto();
  return (
    <div className="overflow-x-auto w-full flex flex-row items-center justify-between lg:px-6">
      <div className="px-6">
        <table
          id="sorting-table"
          className="w-full table-fixed text-sm text-left text-gray-700"
        >
          <thead>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th scope="col" className="px-6 py-3">
                <span className="flex items-center">
                  #
                  <svg
                    className="w-4 h-4 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="flex items-center">
                  Name
                  <svg
                    className="w-4 h-4 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="flex items-center">
                  Price
                  <svg
                    className="w-4 h-4 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </span>
              </th>
              <th scope="col" className="px-12 py-3">
                <span className="flex items-center">
                  1h%
                  <svg
                    className="w-4 h-4 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="flex items-center">
                  % 24 Jam
                  <svg
                    className="w-4 h-4 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="flex items-center">
                  7d%
                  <svg
                    className="w-4 h-4 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="flex items-center">
                  Market Cap
                  <svg
                    className="w-4 h-4 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="flex items-center">
                  Volume (24 Jam)
                  <svg
                    className="w-4 h-4 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="flex items-center">
                  Market Circulation
                  <svg
                    className="w-4 h-4 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="flex items-center">
                  7 Days Change
                  <svg
                    className="w-4 h-4 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m8 15 4 4 4-4m0-6-4-4-4 4"
                    />
                  </svg>
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {cmcTypeListData && Array.isArray(cmcTypeListData) ? (
              cmcTypeListData
                .slice(0, 10)
                .map((crypto: TableType, key: number) => (
                  <tr key={key} className="flex-auto w-full">
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {crypto.cmc_rank}
                    </td>
                    <td className="px-6 py-4">
                      {crypto.name}
                      <span className="ml-1 items-center text-gray-400">
                        {crypto.symbol}
                      </span>
                    </td>
                    <td className="px-4 py-4">Rp{crypto.quote?.USD?.price}</td>
                    <td className="px-12 py-4">
                      {crypto.quote?.USD?.percent_change_1h}
                    </td>
                    <td className="px-6 py-4">
                      {crypto.quote?.USD?.percent_change_24h}
                    </td>
                    <td className="px-6 py-4">
                      {crypto.quote?.USD?.percent_change_7d}
                    </td>
                    <td className="px-6 py-4">
                      {crypto.quote?.USD?.market_cap}
                    </td>
                    <td className="px-6 py-4">
                      {crypto.quote?.USD?.volume_24h}
                    </td>
                    <td className="px-6 py-4">
                      {crypto.quote?.USD?.market_cap_dominance}
                    </td>
                    <td className="px-6 py-4">
                      {crypto.quote?.USD?.volume_change_24h}
                    </td>
                  </tr>
                ))
            ) : (
              <tr>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Loading...
                </td>
                <td className="px-6 py-4">$21433 billion</td>
                <td className="px-6 py-4">331 million</td>
                <td className="px-6 py-4">$64763</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
