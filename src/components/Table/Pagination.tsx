import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export default function Pagination() {
  const totalPages = 10;

  const getPageNumber = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center px-4 py-3 sm:px-6">
      <div>
        <div className="inline-flex -space-x-px rounded-md shadow-sm bg-white items-center">
          <Link
            href="#"
            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Previous</span>
            <FaAngleLeft />
          </Link>
          {getPageNumber().map((page) => (
            <Link
              key={page}
              href={`/art-group?page=${page}`}
              className={`relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold ${
                page === 1
                  ? "text-gray-900 rounded-lg"
                  : "text-gray-900 rounded-lg ring-gray-300 hover:bg-gray-200"
              } focus:z-20 focus-visible:outline focus-visible:outline-2 ring-gray-300 hover:bg-gray-200 focus-visible:outline-offset-2`}
            >
              {page}
            </Link>
          ))}

          <Link
            href="#"
            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
          >
            <span className="sr-only">Next</span>
            <FaAngleRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
