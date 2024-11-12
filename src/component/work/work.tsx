"use client";

import { useRef } from "react";
import MyWorkUI from "../about/main/mainCotents/mywork/myWorkUI";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
    <>
      <MyWorkUI myContainer={container} />
    </>
  );
}
