"use client";

import gsap from "gsap";
import style from "./loading.module.css";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function MyLoading() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to("#dot", { yPercent: -10, opacity: 1, stagger: 0.1 });
    },
    {
      scope: container,
    }
  );

  return (
    <>
      <div ref={container} className={style.wrapper}>
        <span>L</span>
        <span>o</span>
        <span>a</span>
        <span>d</span>
        <span>i</span>
        <span>n</span>
        <span>g </span>
        <span>&nbsp;</span>
        <span className={style.dot} id="dot">
          .
        </span>
        <span className={style.dot} id="dot">
          .
        </span>
        <span className={style.dot} id="dot">
          .
        </span>
      </div>
    </>
  );
}
