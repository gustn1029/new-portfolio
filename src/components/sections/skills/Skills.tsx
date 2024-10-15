import Title from "../../title/Title"
import SectionWrap from "../SectionWrap"

import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { LiaGuitarSolid } from "react-icons/lia";
import { SiTailwindcss } from "react-icons/si";
import { FaSass } from "react-icons/fa6";
import { SiReactquery } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

import SkillItem, { SkillOptionItem } from "./SkillItem";

const Skills = () => {
  const skillOptionList:SkillOptionItem[] = [
    {
      icon: <FaHtml5 className="text-[#E34F26]" />,
      skillName: "HTML",
      proficiencyPercentage: 85
    },
    {
      icon: <FaCss3Alt className="text-[#1572B6]" />,
      skillName: "CSS",
      proficiencyPercentage: 85
    },
    {
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
      skillName: "Tailwind CSS",
      proficiencyPercentage: 75
    },
    {
      icon: <FaSass className="text-[#CC6699]" />,
      skillName: "Sass",
      proficiencyPercentage: 65
    },
    {
      icon: <RiJavascriptFill className="text-[#F7DF1E]" />,
      skillName: "JavaScript",
      proficiencyPercentage: 75
    },
    {
      icon: <BiLogoTypescript className="text-[#3178C6]" />,
      skillName: "TypeScript",
      proficiencyPercentage: 70
    },
    {
      icon: <FaReact className="text-[#61DAFB]" />,
      skillName: "React",
      proficiencyPercentage: 70
    },
    {
      icon: <RiNextjsFill className="text-black" />,
      skillName: "Next.js",
      proficiencyPercentage: 60
    },
    {
      icon: <SiRedux className="text-[#764ABC]" />,
      skillName: "Redux",
      proficiencyPercentage: 60
    },
    {
      icon: <LiaGuitarSolid className="text-[#6741D9]" />,
      skillName: "Zustand",
      proficiencyPercentage: 70
    },
    {
      icon: <SiReactquery className="text-[#FF4154]" />,
      skillName: "TanStack Query",
      proficiencyPercentage: 60
    },
    {
      icon: <FaGithub className="text-black" />,
      skillName: "GitHub",
      proficiencyPercentage: 75
    },
  ]
  return (
    <SectionWrap id="skills">
      <Title title="My Skills" desc="다양한 프로젝트를 통해 쌓아온 저의 가치를 소개합니다." />
      <ul className="flex flex-wrap justify-between gap-y-[20px]">
        {skillOptionList.map((skill)=> (
          <SkillItem key={`my_skill__${skill.skillName}`} icon={skill.icon} skillName={skill.skillName} proficiencyPercentage={skill.proficiencyPercentage} />
        ))}
      </ul>
    </SectionWrap>
  )
}

export default Skills