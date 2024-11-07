"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./header.module.css";
import LogoImg from "../../../public/logo.png";
import Arrow from "./arrow";

export default function Header() {
  const container = useRef(null);

  useGSAP(
    () => {
      const text = SplitType.create(".mainText-ani", {
        types: "chars,lines",
      });

      gsap.set(text.lines, { yPercent: 60, opacity: 0 });
      gsap.to(".arrow", { y: 20, repeat: -1, yoyo: true });

      const tl = gsap.timeline();
      tl.from("#logo", { y: -50, opacity: 0, duration: 1 }, 0)
        .to(
          text.lines,
          {
            yPercent: 0,
            opacity: 1,
            ease: "none",
            duration: 0.7,
            stagger: 0.7,
          },
          0
        )
        .from(text.chars, { y: 20, stagger: 0.05, ease: "none" }, 0)
        .from("#subSlogan", { y: 50, opacity: 0, duration: 1 }, 0);
    },
    { scope: container }
  );

  return (
    <>
      <header className={style.header} ref={container}>
        <nav className={style.navbar} id="logo">
          <Link href="/">
            <Image src={LogoImg} alt="logo" />
          </Link>
          <button className={style.menu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
        <section className={style.mainSloganWrapper}>
          <h1 className={`${style.mainSlogan} mainText-ani`}>
            Dreaming of the
          </h1>
          <h1 className={`${style.mainSlogan} mainText-ani`}>future today</h1>
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
