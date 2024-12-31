"use client";

import style from "./mainVideo.module.css";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import mainVideo from "https://my-project-video.s3.ap-northeast-2.amazonaws.com/main-video.mp4";
import BackgroundVideo from "next-video/background-video";

export default function MainVideo() {
  const box = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();

      mm.add("(min-width:1025px)", () => {
        gsap.to("#video", {
          scrollTrigger: {
            trigger: box.current,
            start: "top",
            end: "+=250% center",
            // markers: true,
            pin: true,
            scrub: true,
          },
          scale: 0.9,
          // duration: 1,
        });
      });
    },
    { scope: box }
  );
  return (
    <>
      <section className={style.VideoWrapper} ref={box}>
        <div className={style.VideoBox} id="video">
          <BackgroundVideo
            suppressHydrationWarning
            loop
            autoPlay
            muted
            playsInline
            src={mainVideo}
            className={style.video}
          />
        </div>
      </section>
    </>
  );
}
