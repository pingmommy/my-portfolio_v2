import Contact from "@/component/about/bottom/contact";
import Header from "@/component/about/header/header";
import MainContents from "@/component/about/main/mainCotents/mainContents";

import MainVideo from "@/component/about/main/mainVideo/mainVideo";
import Footer from "@/component/footer/footer";

import Menu from "@/component/nav_menu/menu";

export default function Home() {
  return (
    <>
      <Menu />
      <Header />
      <main>
        <MainVideo />
        <MainContents />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
