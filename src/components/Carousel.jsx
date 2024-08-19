import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Carousel = () => {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      speed={1000}
      className="mySwiper"
      modules={[Autoplay]}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}>
      <SwiperSlide>
        <div
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://kliping.jogjakota.go.id/upload/62918_1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="min-h-screen flex flex-col items-center text-white text-2xl relative">
          <div className="absolute max-w-60 top-[65%] -translate-y-[65%] text-start md:max-w-72 md:top-1/2 md:-translate-y-1/2">
            <h1 className="text-4xl font-semibold mb-2">Konspirasi Dunia</h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://ppid.diskominfo.jatengprov.go.id/wp-content/uploads/2023/01/Isu-Hoaks-25-Januari-2023.png",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="min-h-screen flex items-center justify-center text-white text-2xl">
          <div className="absolute max-w-60 top-[55%] -translate-y-[55%] text-end md:max-w-72 md:top-1/2 md:-translate-y-1/2">
            <h1 className="text-4xl font-semibold mb-2">
              Berita Panas Terkini
            </h1>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://www.umm.ac.id/files/image/WhatsApp%20Image%202023-07-20%20at%2010_14_29.jpeg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="min-h-screen flex items-center justify-center text-white text-2xl">
          <div className="absolute max-w-60 top-[55%] -translate-y-[55%] text-start md:max-w-72 md:top-1/2 md:-translate-y-1/2">
            <h1 className="text-4xl font-semibold text-start mb-2">
              Ada Artis Narkoboy Lagi
            </h1>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
