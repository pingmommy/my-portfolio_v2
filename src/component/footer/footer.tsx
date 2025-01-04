"use client";

import style from "./footer.module.css";
import { GithubOutlined } from "@ant-design/icons";
import { ScrollToPlugin } from "gsap/all";
import gsap from "gsap";

export default function Footer() {
  gsap.registerPlugin(ScrollToPlugin);

  const footerAni = () => {
    gsap.to(window, { duration: 2, scrollTo: 0 });
  };
  return (
    <>
      <footer style={{ position: "relative" }}>
        <section className={style.footerWrapper}>
          <div className={style.bottomBtn} onClick={footerAni}>
            <svg width="32" height="32" viewBox="0 0 32 32">
              <path
                d="M7.51465 13.4854L16 5"
                stroke="#151614"
                strokeWidth="1.65"
                strokeLinecap="round"
              ></path>
              <path
                d="M16 25.5L16 5"
                stroke="#151614"
                strokeWidth="1.65"
                strokeLinecap="round"
              ></path>
              <path
                d="M16.0146 5.0149L24.4852 13.4855"
                stroke="#151614"
                strokeWidth="1.65"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>

          <div className={style.secondBox}>
            <p className={style.secondBoxText}>ARA CHO 2024</p>
            <div className={style.secondBoxIcon}>
              <a
                href="https://github.com/pingmommy/my-portfolio_v2"
                target="_blank"
              >
                <GithubOutlined />
              </a>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
