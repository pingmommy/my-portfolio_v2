"use client";

import { useRef } from "react";
import MyWorkUI from "../about/main/mainCotents/mywork/myWorkUI";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import style from "./work.module.css";
import { MY_WORK_DATA } from "../about/main/mainCotents/mywork/myWork.data";
export default function RecentWork() {
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from("#recent-title", {
        yPercent: -50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      }).from(
        ".recent-item",
        {
          yPercent: 50,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        },
        0
      );
    },
    { scope: container }
  );

  return (
    <main className={style.wrapper}>
      <MyWorkUI myContainer={container} data={MY_WORK_DATA} />
    </main>
  );
}
