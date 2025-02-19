"use client";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { MY_WORK_DATA } from "./myWork.data";
import MyWorkUI from "./myWorkUI";

const workData = MY_WORK_DATA.slice(0, 4);

export default function MyWork() {
  const recent = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".recent-item", {
        scrollTrigger: {
          trigger: recent.current,
          start: "-=100 center",
          end: "bottom center",
          // markers: true,
        },
        y: 150,
        opacity: 0,
        duration: 1,
        stagger: 1,
        ease: "power2.out",
      });
    },
    { scope: recent }
  );
  return (
    <>
      <MyWorkUI myContainer={recent} data={workData} />
    </>
  );
}
