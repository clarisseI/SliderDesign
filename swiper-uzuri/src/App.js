import React from "react";
import TypeWriter from "react-typewriter";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";

import "../src/style.css";

//import images

import { Uzuri } from "./svg";
import Derbie from "../src/image/Derbie.png";
import Fleura from "../src/image/fleura.png";
import Gaga from "../src/image/Gaga.png";
import Hapa from "../src/image/Hapa.png";
import Warm from "../src/image/Warm.png";

function App() {
  return (
    <div className="container">
      <div className="title_wrapper">
        <div className="reactLogo">
          <Uzuri />
        </div>

        <div className="title_">
          <TypeWriter typing={1}>
            We Make Your
            <span> Feet Smile</span>
          </TypeWriter>
        </div>
      </div>
      <div class="mobilescren-image"></div>
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={"3"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
          type: "bullets",
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Derbie} alt=" Derbie" />
          <a href="https://shop.uzuriky.com/">Derbie</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Fleura} alt="Fleura " />
          <a href="https://shop.uzuriky.com/">Fleura</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Gaga} alt="Gaga " />
          <a href="https://shop.uzuriky.com/">Gaga</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Hapa} alt="Hapa" />
          <a href="https://shop.uzuriky.com/">Hapa</a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Warm} alt="Warm " />
          <a href="https://shop.uzuriky.com/">Warm</a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
