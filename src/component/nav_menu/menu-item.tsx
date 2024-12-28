import Link from "next/link";
import style from "./menu.module.css";
interface Props {
  path: string;
  label: string;
  toggleMenu: () => void;
}

export default function MenuItem({ path, label, toggleMenu }: Props) {
  return (
    <>
      <div className={style.menu_link_item} onClick={toggleMenu}>
        <div className={style.menu_link_item_holder} id="item_holder">
          <Link href={path} className={style.menu_link}>
            {label}
          </Link>
        </div>
      </div>
    </>
  );
}
