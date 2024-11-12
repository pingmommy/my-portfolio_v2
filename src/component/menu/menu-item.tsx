import Link from "next/link";
import { useState } from "react";

interface Props {
  path: string;
  label: string;
  toggleMenu: () => void;
}

export default function MenuItem({ path, label, toggleMenu }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="menu-link-item" onClick={toggleMenu}>
        <div
          className={`menu-link-item-holder ${isHovered ? "state-hover" : ""}`}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          <Link href={path} className="menu-link">
            {label}
          </Link>
        </div>
      </div>
    </>
  );
}
