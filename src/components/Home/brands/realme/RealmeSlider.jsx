import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

const ReallmeSlider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://static.c.realme.com/GLOBAL/thread/1634138941744480256.png"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://gagadget.com/media/post_big/Realme-Narzo-50A.jpeg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[22vh] lg:h-[50vh]  object-cover"
            src="https://i.ytimg.com/vi/5VNA05STfPw/maxresdefault.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ReallmeSlider;
