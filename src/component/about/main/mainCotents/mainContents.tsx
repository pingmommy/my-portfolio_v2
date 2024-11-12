import About from "./about/About";
import Icon from "./icon/icon";
import MyWork from "./mywork/myWork";
import Recommendation from "./recomnendation/recommendation";
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
