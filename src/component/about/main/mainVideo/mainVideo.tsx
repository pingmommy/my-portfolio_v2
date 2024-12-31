"use client";

import style from "./mainVideo.module.css";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import mainVideo from "/videos/main-video.mp4";
import BackgroundVideo from "next-video/background-video";

export default function MainVideo() {
  const box = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();

      mm.add("(min-width:960px)", () => {
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
          <BackgroundVideo loop autoPlay muted playsInline src={mainVideo} />
        </div>
      </section>
    </>
  );
}
