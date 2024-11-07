import Contact from "@/component/footer/contact";
import Header from "@/component/header/header";
import MainContents from "@/component/main/mainContents/mainContents";
import MainVideo from "@/component/main/mainVideo/mainVideo";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainVideo />
        <MainContents />
      </main>
      <Contact />
    </>
  );
}
