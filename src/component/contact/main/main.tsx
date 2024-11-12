import style from "./main.module.css";
const contactLinks = [
  {
    title: "e.mail",
    sub: "Welcome to any contact.",
    link: "mcar8764@gmail.com",
  },
  {
    title: "github",
    sub: "Just Look around.",
    link: "https://github.com/pingmommy",
  },
  {
    title: "work",
    sub: "You could check my work.",
    link: "mcar8764@gmail.com",
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
                <a href="#" className={style.contentLink}>
                  {item.link}
                </a>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
