import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // import Swiper styles
import Image from "next/image";
import { Autoplay } from "swiper/modules";

export default function Card() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="grid grid-cols-3 gap-6 px-4">
        <div className="flex w-auto h-auto max-w-xs rounded-lg shadow-md overflow-hidden border-2">
          <div className="relative h-full w-full">
            <div className="p-4 bg-white rounded-lg shadow flex flex-col">
              {/* Swiper Carousel */}
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                className="w-full h-48"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
              >
                {/* First Slide */}
                <SwiperSlide>
                  <Image
                    src="https://via.placeholder.com/300"
                    alt="Slide 1"
                    className="w-full h-full object-cover rounded-lg"
                    layout="responsive"
                    width={300}
                    height={200}
                  />
                </SwiperSlide>

                {/* Second Slide */}
                <SwiperSlide>
                  <Image
                    src="https://via.placeholder.com/300"
                    alt="Slide 2"
                    className="w-full h-full object-cover rounded-lg"
                    layout="responsive"
                    width={300}
                    height={200}
                  />
                </SwiperSlide>

                {/* Third Slide */}
                <SwiperSlide>
                  <Image
                    src="https://via.placeholder.com/300"
                    alt="Slide 3"
                    className="w-full h-full object-cover rounded-lg"
                    layout="responsive"
                    width={300}
                    height={200}
                  />
                </SwiperSlide>
              </Swiper>

              {/* Card Content */}
              <div className="mt-4">
                <a href="#">
                  <h5 className="text-xl font-bold text-gray-900">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p className="text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center mt-3 px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800"
                >
                  Read more
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
