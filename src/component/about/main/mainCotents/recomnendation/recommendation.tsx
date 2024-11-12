"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import style from "./recommendation.module.css";
import { Comments } from "./recommendationObj";
import { NanumSquareRound } from "../../../../../app/font";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function Recommendation() {
  const recommend = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from("#recommend-item", {
        scrollTrigger: {
          trigger: recommend.current,
          start: "+=100, 80%",
          end: "bottom center",
          markers: true,
        },
        y: 150,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: recommend }
  );

  return (
    <>
      <div ref={recommend}>
        <div
          className={`${NanumSquareRound.className} ${style.wrapper}`}
          id="recommend-item"
        >
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            modules={[Navigation]}
          >
            {Comments.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className={style.commentItem}>
                  <div>
                    <p className={style.cardTop}>{item.contents}</p>
                    <div className={style.cardBottom}>
                      <p className={style.nameTag}>{item.name}</p>
                      <p>{item.connection}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
