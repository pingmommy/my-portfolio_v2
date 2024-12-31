import ReactLenis from "lenis/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Lenis({ children }: Props) {
  return <ReactLenis root>{children}</ReactLenis>;
}
