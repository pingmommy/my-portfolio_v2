"use client";

import style from "./contact.module.css";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";

export default function Contact() {
  const contact = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".hello", {
        scrollTrigger: {
          trigger: contact.current,
          start: "top center",
          end: "center center",
          // markers: true,
        },
        y: 150,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    },
    { scope: contact }
  );

  return (
    <>
      <section className={style.contactSection} ref={contact}>
        <div className={`${style.contactWrapper} hello`}>
          <h2 className={style.contactTitle}>Let&apos;s work together</h2>
          <Link href="/contact" className={style.contactBtn}>
            <span className={style.enter}>→&nbsp;</span>
            Say Hello
            <span className={style.leave}>&nbsp;→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
