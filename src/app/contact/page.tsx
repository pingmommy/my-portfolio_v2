import MyHeader from "@/component/contact/header/my.header";
import ContactMain from "@/component/contact/main/main";
import Footer from "@/component/footer/footer";

import Menu from "@/component/nav_menu/menu";

export default function Contact() {
  return (
    <>
      <MyHeader />
      <Menu />
      <ContactMain />
      <Footer />
    </>
  );
}
