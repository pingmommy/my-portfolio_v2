import style from "./About.module.css";

interface Props {
  src: string;
  title: string;
  text: string;
}

export function ProfileCard({ src, title, text }: Props) {
  return (
    <>
      <section className={`${style.profileBox} profile-item`}>
        <div className={style.VisualContents}>
          <video loop autoPlay muted src={src} />
        </div>
        <div className={style.TextWrapper}>
          <h3 className={style.ProfileTitle}>{title}</h3>
          <p className={style.TextContents}>{text}</p>
        </div>
      </section>
    </>
  );
}

export function Reversed_ProfileCard({ src, title, text }: Props) {
  return (
    <>
      <section className={`${style.profileBox} profile-item`}>
        <div className={`${style.TextWrapper} ${style.exception}`}>
          <h3 className={style.ProfileTitle}>{title}</h3>
          <p className={style.TextContents}>{text}</p>
        </div>
        <div className={style.VisualContents}>
          <video loop autoPlay muted src={src} />
        </div>
      </section>
    </>
  );
}
