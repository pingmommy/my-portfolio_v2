import Image from "next/image";
import { MY_WORK_DATA } from "./myWork.data";
import style from "./myWork.module.css";
import { MutableRefObject } from "react";

interface Props {
  myContainer: MutableRefObject<null>;
}

export default function MyWorkUI({ myContainer }: Props) {
  return (
    <>
      <section ref={myContainer}>
        <h2 className={style.title} id="recent-title">
          Recent work
        </h2>
        <div style={{ marginTop: "10rem" }}>
          <section className={`${style.myWorkSection} recent-item`}>
            {MY_WORK_DATA.map((item, idx) => (
              <div className={style.myWorkWrapper} key={idx}>
                <a href={item.href} target="_blank">
                  <div className={style.visualContents}>
                    <Image
                      className={style.img}
                      src={item.src}
                      alt={item.alt}
                    />
                  </div>
                </a>
                <h3 className={style.myWorkTitle}>{item.name}</h3>
                <p className={style.myWorkSummary}>{item.summary}</p>
              </div>
            ))}
          </section>
        </div>
      </section>
    </>
  );
}
