import Link from "next/link";
import style from "./main.module.css";

const contactLinks = [
  {
    title: "e.mail",
    sub: "Welcome to any contact.",
    linkName: "mcar8764@gmail.com",
    link: "#",
  },
  {
    title: "github",
    sub: "Just Look around.",
    linkName: "https://github.com/pingmommy",
    link: "https://github.com/pingmommy",
  },
  {
    title: "work",
    sub: "You could check my work.",
    linkName: "Check my work",
    link: "/work",
  },
];

export default function ContactMain() {
  return (
    <>
      <main className="my-wrapper">
        <section className={style.contactWrapper}>
          {contactLinks.map((item, idx) => (
            <div className={style.itemWrapper} key={idx}>
              <h2 className={style.itemTitle}>{item.title}</h2>
              <div className={style.itemContent}>
                <p className={style.contentSub}>{item.sub}</p>
                {item.title === "work" ? (
                  <Link href={item.link} className={style.contentLink}>
                    {item.linkName}
                  </Link>
                ) : (
                  <a href={item.link} className={style.contentLink}>
                    {item.linkName}
                  </a>
                )}
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
