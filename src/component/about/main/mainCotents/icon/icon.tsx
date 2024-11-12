"use client";
import style from "./icon.module.css";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import RespIcon from "../../../../../../public/diagram-project.svg";
import ChallengeIcon from "../../../../../../public/hand-holding-seeding.svg";
import PassionIcon from "../../../../../../public/sort-amount-up.svg";

export default function Icon() {
  const icon = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const iconTl = gsap.timeline({
        scrollTrigger: {
          trigger: icon.current,
          start: "top 80%",
          end: "bottom center",
          // markers: true,
        },
      });

      iconTl
        .from(
          ".icon-box",
          {
            y: 150,
            opacity: 0,
            ease: "power2.out",
            duration: 1,
          },
          0
        )
        .to(".highlight", {
          backgroundColor: "#04b4c8",
          delay: 0.1,
        });
    },
    { scope: icon }
  );

  return (
    <>
      <article className={style.iconWrapper} ref={icon}>
        <section className="icon-box">
          <div className={style.iconBox}>
            <Image src={RespIcon} fill alt="icon" />
          </div>
          <p className={style.iconDesc}>
            주인의식이 있는, <span className="highlight"> 책임감있는 </span>
            &nbsp; 사람이 필요해요.
          </p>
        </section>
        <section className="icon-box">
          <div className={style.iconBox}>
            <Image src={ChallengeIcon} fill alt="icon" />
          </div>
          <p className={style.iconDesc}>
            실패를 두려워하지 않고 <br />
            <span className="highlight">도전하는</span>
            &nbsp;사람, 어디 없나요?
          </p>
        </section>
        <section className="icon-box">
          <div className={style.iconBox}>
            <Image src={PassionIcon} fill alt="icon" />
          </div>
          <p className={style.iconDesc}>
            스스로 학습하고 성장하려는,
            <br />
            <span className="highlight">열정적인</span> 사람이면 좋겠어요.
          </p>
        </section>
      </article>
    </>
  );
}
