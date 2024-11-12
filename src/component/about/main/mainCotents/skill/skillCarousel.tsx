"use client";
import { useGSAP } from "@gsap/react";
import style from "./skillCarousel.module.css";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Skills, DotColors } from "./skillData";

export default function SkillCarousel() {
  const skill = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".skill-item", {
        scrollTrigger: {
          trigger: skill.current,
          start: "+=100 80%",
          end: "bottom center",
          // markers: true,
        },
        y: 150,
        opacity: 0,
        ease: "power2.out",
        duration: 1,
      });
    },
    { scope: skill }
  );

  return (
    <>
      <div ref={skill}>
        <div className={`${style.wrapper} skill-item`}>
          <div className={style.textBox}>
            <h1 className={style.title}>Technologies</h1>
            <p className={style.text}>
              다양한 프로젝트를 통해 익힌 프로그래밍 언어와 라이브러리들을
              소개합니다. 효율적인 개발과 성장을 위해 노력하고 있습니다.
            </p>
          </div>
          <div className={style.columnBox}>
            <div className={style.skillColumn}>
              {Array(2)
                .fill(Skills)
                .flat()
                .map((skill, idx) => (
                  <div className={style.skillItem} key={idx}>
                    <span
                      className={style.dot}
                      style={{ background: DotColors[idx % DotColors.length] }}
                    />
                    {skill}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
