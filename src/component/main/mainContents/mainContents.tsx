import About from "./about/About";
import Icon from "./icon/icon";
import MyWork from "./myWork/myWork";
import Recommendation from "./recommendation/recommendation";
import SkillCarousel from "./skill/skillCarousel";

export default function MainContents() {
  return (
    <>
      <div className="my-wrapper">
        <Icon />
        <About />
        <SkillCarousel />
        <Recommendation />
        <MyWork />
      </div>
    </>
  );
}
