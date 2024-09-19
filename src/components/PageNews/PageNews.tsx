import Image from "next/image";

export default function PageNews() {
  return (
    <section className="w-full bg-gray-50 mt-3 z-0 container">
      <div className="mx-auto flex justify-between">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-start justify-start lg:py-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Stay on top of crypto. All the time, any time.
          </h1>
          <p className="mt-3 font-normal text-gray-500 dark:text-gray-400">
            Harap terus ikuti saya melalui email dengan berita kripto terbaru,
            <br />
            temuan penelitian, program hadiah, pembaruan acara, daftar koin,
            <br />
            dan informasi lebih lanjut dari CoinMarketCap.
          </p>
          <div className="mt-8 w-full justify-between items-center flex">
            <form className="mx-auto w-full">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
              </div>
            </form>
            <button
              type="submit"
              className="text-white ml-2 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-6 py-4 font-bold"
            >
              Submit
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-screen-xl text-start justify-start lg:py-12">
          <Image
            src={
              "https://s2.coinmarketcap.com/static/cloud/img/newsletter_bg_light.svg?_=7da2770"
            }
            alt="Stay on top of crypto. All the time, any time."
            width={352}
            height={252}
          />
        </div>
      </div>
    </section>
  );
}
