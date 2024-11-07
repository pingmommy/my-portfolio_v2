"use client";
import portfolioImg from "../../../../../public/portfolio.png";
import secondhandshopImg from "../../../../../public/secondhandshop.png";
import pingImg from "../../../../../public/ping.png";
import conceptImg from "../../../../../public/11concept.png";
import style from "./myWork.module.css";
import Image from "next/image";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

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
      <h2 className={style.title}>Recent work</h2>
      <section ref={recent} style={{ marginTop: "10rem" }}>
        <section className={`${style.myWorkSection} recent-item`}>
          <div>
            <div className={style.visualContents}>
              <Image
                className={style.img}
                src={conceptImg}
                alt="concept image"
              />
            </div>
            <h3 className={style.myWorkTitle}>11CONCEPT</h3>
            <p className={style.myWorkSummary}>#CSS #HTML #TeamProject</p>
          </div>
          <div>
            <div className={style.visualContents}>
              <Image
                className={style.img}
                src={secondhandshopImg}
                alt="secondhandshopimage"
              />
            </div>
            <h3 className={style.myWorkTitle}>Second Hand Shop</h3>
            <p className={style.myWorkSummary}>#NextJS #GraphQL #TypeScript</p>
          </div>
        </section>
        <section className={`${style.myWorkSection} recent-item`}>
          <div>
            <div className={style.visualContents}>
              <Image src={pingImg} alt="a dog image" className={style.img} />
            </div>
            <h3 className={style.myWorkTitle}>My Dog PING</h3>
            <p className={style.myWorkSummary}>#NextJS #GSAP</p>
          </div>
          <div>
            <div className={style.visualContents}>
              <Image className={style.img} src={portfolioImg} alt="portfolio" />
            </div>
            <h3 className={style.myWorkTitle}>Portfolio Site</h3>
            <p className={style.myWorkSummary}>#NextJS #GSAP</p>
          </div>
        </section>
      </section>
    </>
  );
}
