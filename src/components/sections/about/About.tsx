import myImage from "../../../assets/profile_image.png";
import Title from "../../title/Title";
import SectionWrap from "../SectionWrap";

const About = () => {
  
  return (
    <SectionWrap
      id="about"
      sectionClassName="rounded-[0_0_15%_40%] overflow-hidden"
      innerClassName="flex gap-[50px]"
    >
      <div>
        <Title title="about me" />
        <img
          src={myImage}
          alt="김현수 프로필 이미지"
          className="rounded-[10%_10%_10%_0]"
        />
      </div>
      <dl className="flex-grow">
        <dt></dt>
      </dl>
    </SectionWrap>
  );
};

export default About;
