import Footer from "@/component/footer/footer";
import Menu from "@/component/nav_menu/menu";
import RecentWork from "@/component/work/work";

export default function Work() {
  return (
    <>
      <header>
        <Menu />
      </header>

      <RecentWork />

      <Footer />
    </>
  );
}
