"use client";

import style from "./mainVideo.module.css";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
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
            loop
            autoPlay
            muted
            playsInline
            className={style.video}
            streamType="on-demand"
            playbackId="AEBkvgEKmRHnoBGhCsY1XqdoH01sm02CG02M7wj0000oGytM"
            _hlsConfig={{
              maxBufferLength: 30, // 최대 버퍼 길이를 30초로 설정
              maxBufferSize: 60 * 1000 * 1000, // 버퍼의 최대 크기 (bytes)
              maxBufferHole: 0.5,
            }}
          />
        </div>
      </section>
    </>
  );
}
