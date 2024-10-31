import { useRef } from "react";
import { ProjectOption } from "../../../types";
import styles from "./projects.module.css";
import { motion, useInView } from "framer-motion";

interface ProjectItemProps extends ProjectOption {
  idx: number;
}

const ProjectItem = ({
  title,
  path,
  image,
  skills,
  desc,
  projectInfo,
  idx,
}: ProjectItemProps) => {
  const itemRef = useRef<HTMLLIElement | null>(null);

  const isInView = useInView(itemRef, { 
    once: false,
    margin: "-70px"
  });
  
  const listItemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: idx * 0.2
      },
    },
  };

  return (
    <motion.li
      ref={itemRef}
      variants={listItemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="relative flex flex-col justify-between pt-[10%] pb-[10px] px-[20px] border-[3px] border-gray-600 overflow-hidden"
    >
      <div className="relative z-[10] w-1/2 mb-[8%]">
        <h3
          className={`${styles.projectTitle} text-white font-bold text-[2.5rem] leading-[1.2] break-keep mb-[10px]`}
        >
          {title}
        </h3>
        <p className="text-gray-400 mb-[20px]">{desc}</p>
        <dl>
          <dt className="text-gray-500">상세 정보</dt>
          {projectInfo.map((info, idx) => (
            <dd
              key={`${title}__info__${idx}`}
              className={`text-gray-300 break-keep ${
                idx > 0 ? "mt-[5px]" : ""
              }`}
            >
              {info}
            </dd>
          ))}
        </dl>
      </div>
      <a
        href={path}
        target="blank"
        className={`${styles.projectImage} absolute top-0 w-[65%] right-0 h-full z-[0]`}
      >
        <img src={image} alt={title} className="w-full h-full opacity-50" />
        <span
          style={{ background: `url(${image}) no-repeat center center/cover` }}
          className="block absolute z-[5] right-[15px] top-[50%] translate-y-[-50%] indent-[-9999px] w-[250px] h-[150px] shadow-[0px_7px_5px_rgba(0,0,0,0.5)]"
        >
          {title} 보러 가기
        </span>
      </a>
      <ul className="relative z-[10] flex gap-[30px] text-point">
        {skills.map((skill) => (
          <li key={`${title}__${skill}`} className="">
            {skill}
          </li>
        ))}
      </ul>
    </motion.li>
  );
};

export default ProjectItem;
