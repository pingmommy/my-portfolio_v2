"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useRef } from "react";
import style from "./header.module.css";

export default function MyHeader() {
  const headContainer = useRef(null);

  useGSAP(
    () => {
      const text = SplitType.create(".mainText-ani", {
        types: "chars,lines",
      });

      gsap.set(text.lines, { yPercent: 100 });

      const tl = gsap.timeline();
      tl.to(
        text.lines,
        {
          yPercent: 0,

          ease: "none",
          duration: 0.7,
          stagger: 0.7,
        },
        0
      )
        .from(text.chars, { y: 20, stagger: 0.05, ease: "none" }, 0)
        .from("#subSlogan", { y: 50, opacity: 0, duration: 1 }, 0);
    },
    { scope: headContainer }
  );

  return (
    <>
      <header className={style.header} ref={headContainer}>
        <section className={style.mainSloganWrapper}>
          <h1 className={`${style.mainSlogan} mainText-ani`}>안녕하세요!</h1>
        </section>
        <section className={style.subSloganWrapper}>
          <h2 className={style.subSlogan} id="subSlogan">
            I&apos; d Love to work with your
            <br /> next project!
          </h2>
        </section>
      </header>
    </>
  );
}
