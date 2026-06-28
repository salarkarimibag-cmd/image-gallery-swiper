import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";
import { images } from "../data/ImagesData";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const ImageGallerySwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 items-center p-4 md:p-8 justify-center">
      <div className="w-full max-w-3xl">
        {/* شمارنده */}
        <div className="flex mb-4 justify-between items-center">
          <h2 className="text-white font-bold text-xl tracking-wide">
            📸 My Gallery
          </h2>
          <span className="text-white/50 text-sm bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
            {activeIndex + 1} / {images.length}
          </span>
        </div>

        {/* اسلایدر اصلی */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Pagination, Autoplay, Thumbs]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          loop
          speed={500}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] ring-1 ring-white/20"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-[280px] sm:h-[420px]  object-cover object-center brightness-90 hover:brightness-105 transition-all duration-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Swiper */}
        <Swiper
          className="mt-4"
          modules={[Thumbs]}
          onSwiper={setThumbsSwiper}
          spaceBetween={8}
          slidesPerView={7}
          watchSlidesProgress
        >
          {images.map((img, i) => (
            <SwiperSlide
              key={img.id}
              className="cursor-pointer"
              onClick={() => swiperRef.current?.slideToLoop(i)}
            >
              <img
                src={img.src}
                alt={img.title}
                className={`w-full h-14 object-cover rounded-lg transition-all duration-200 ${
                  activeIndex === i
                    ? "opacity-100 ring-2 ring-white scale-105 shadow-lg"
                    : "opacity-40 hover:opacity-70 hover:scale-105"
                }`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageGallerySwiper;

