"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useRef } from "react";
import style from "./header.module.css";
import Arrow from "./arrow";

export default function Header() {
  const headContainer = useRef(null);

  useGSAP(
    () => {
      const text = SplitType.create(".my-word", {
        types: "lines",
      });

      gsap.to(".arrow", { y: 20, repeat: -1, yoyo: true });

      const tl = gsap.timeline();
      tl
        // .to(headContainer.current, { opacity: 1 })

        .from(text.lines, { yPercent: 100, stagger: 0.4, ease: "none" }, 0)
        .to(
          "#subSlogan",
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.inOut",
          },
          0
        );
    },
    { scope: headContainer }
  );

  return (
    <>
      <header className={style.header} ref={headContainer}>
        <section className={style.mainSloganWrapper}>
          <h1 className={`${style.mainSlogan} mainText-ani`}>
            <p className="my-word">Dreaming of the</p>
            <p className="my-word">future today</p>
          </h1>
        </section>
        <section className={style.subSloganWrapper}>
          <h2 className={style.subSlogan} id="subSlogan">
            도전하는 열정, 용기있는 선택. <br />
            꿈을 그려가는 여정에 함께 하겠습니다.
          </h2>
        </section>
        <Arrow />
      </header>
    </>
  );
}
