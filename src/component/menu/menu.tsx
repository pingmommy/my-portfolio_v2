"use client";

import { useState, useRef, useEffect } from "react";
import style from "./menu.module.css";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MenuItem from "./menu-item";

const menuLinks = [
  { path: "/", label: "About" },
  { path: "/work", label: "Work" },
  { path: "/contact", label: "Hello" },
];

export default function Menu() {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      gsap.set(".menu-link-item-holder", { yPercent: 120 });
      gsap.to(".menu-bar", {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power1.inOut",
      });
      tl.current = gsap
        .timeline({ paused: true })
        .to(".menu-overlay", {
          duration: 1.25,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        })
        .to(".menu-link-item-holder", {
          yPercent: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.inOut",
          delay: -0.75,
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (tl.current) {
      if (isMenuOpen) {
        tl.current.play();
      } else {
        tl.current.reverse();
      }
    }
  }, [isMenuOpen]);
  return (
    <>
      <section ref={container} id="logo">
        <div className="menu-container ">
          <div className="menu-bar">
            <Link href="/" className={`${style.menuLogo} ${style.LogoBlack}`}>
              ARA CHO
            </Link>

            <div className={style.openBtn} onClick={toggleMenu}></div>
          </div>
          <div className="menu-overlay">
            <div className="menu-overlay-bar">
              <Link href="/" className={style.menuLogo}>
                ARA CHO
              </Link>
              <div className={style.closeBtn} onClick={toggleMenu}></div>
            </div>

            <div className="menu-copy">
              {menuLinks.map((link, index) => (
                <MenuItem
                  path={link.path}
                  label={link.label}
                  toggleMenu={toggleMenu}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
