"use client";
import style from "./About.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { Fragment, useRef } from "react";
import { MyProfile } from "./myProfileContents";
import { ProfileCard, Reversed_ProfileCard } from "./profileCard";

export default function About() {
  const profile = useRef(null);
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const items = gsap.utils.toArray(".profile-item") as Element[];
      const cover = gsap.utils.toArray(".item-cover") as Element[];

      items.forEach((item, idx) =>
        gsap.from(item, {
          scrollTrigger: {
            trigger: cover[idx],
            start: "top center",
            end: "bottom center",
            // markers: true,
          },
          y: 70,
          opacity: 0,
          duration: 1.5,
        })
      );
    },
    { scope: profile }
  );

  return (
    <>
      <h2 className={style.title}>Here I am</h2>
      <section ref={profile}>
        {MyProfile.map((profile, idx) =>
          idx !== 1 ? (
            <div className="item-cover" key={idx}>
              <ProfileCard
                src={profile.src}
                text={profile.text}
                title={profile.title}
              />
            </div>
          ) : (
            <Fragment key={idx}>
              <div className={`${style.in} item-cover`}>
                <Reversed_ProfileCard
                  src={profile.src}
                  text={profile.text}
                  title={profile.title}
                />
              </div>
              <div className={`${style.out} item-cover`}>
                <ProfileCard
                  src={profile.src}
                  text={profile.text}
                  title={profile.title}
                />
              </div>
            </Fragment>
          )
        )}
      </section>
    </>
  );
}
