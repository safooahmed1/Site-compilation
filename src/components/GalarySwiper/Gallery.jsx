import pic from "../../assets/pro8/bg.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// ✅ الطريقة الصحيحة لاستيراد CSS Modules
import styles from "./Gallery.module.css";

// import required modules
import { Parallax, Pagination, Navigation } from "swiper/modules";
import Sec1 from "./Sec1";
import Sec2 from "./Sec2";
import Sec3 from "./Sec3";

let picStyle = {
  backgroundImage: `url(${pic})`,
};

export default function Gallery() {
  return (
    <div className={styles.galleryContainer}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className={styles.swiper} // ✅ استخدام styles object
      >
        <div
          slot="container-start"
          className={styles.parallaxBg} // ✅ استخدام styles object
          style={{
            "background-image":
              "url(https://e0.pxfuel.com/wallpapers/474/650/desktop-wallpaper-marwan-pablo.jpg)",
            filter: "brightness(60%)",
          }}
          data-swiper-parallax="-23%"
        ></div>

        {/*  SwiperSlide */}
        <SwiperSlide className={styles.swiperSlide}>
          <Sec1 />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Sec2 />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <Sec3 />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
