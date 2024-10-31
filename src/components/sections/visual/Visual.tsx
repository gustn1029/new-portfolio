import { useEffect, useRef, useState } from "react";
import {
  ButtonStyleEnum,
  ButtonStyleList,
} from "../../../types/enum/ButtonEnum";
import styles from "./visual.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionPositionStore } from "../../../store/useSectionPositionStore";

const Visual = () => {
  const visualRef = useRef<HTMLElement | null>(null);
  const [visualHeight, setVisualHeight] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const { setSectionPosition } = useSectionPositionStore();

  useEffect(() => {
    if (visualRef.current) {
      setVisualHeight(visualRef.current.clientHeight);
      setSectionPosition({
        section: "about",
        position: visualRef.current.clientHeight,
      });
    }
  }, [setSectionPosition]);

  const imagePositonY = useTransform(
    scrollY,
    [0, 100, visualHeight ? visualHeight : 500],
    [0, 80, 350]
  );

  const textY = useTransform(
    scrollY,
    [0, 300, visualHeight ? visualHeight : 500],
    [0, 100, visualHeight ? visualHeight / 2 - 100 : 300]
  );

  const buttonY = useTransform(
    scrollY,
    [0, 200, visualHeight ? visualHeight : 500],
    [0, 100, visualHeight ? visualHeight / 2 - 100 : 300]
  );

  const buttonOpacity = useTransform(
    scrollY,
    [0, visualHeight ? visualHeight : 500],
    [1, 0]
  );

  return (
    <motion.section
      ref={visualRef}
      id="visual"
      className={`flex flex-col mb-[100px] justify-center items-center gap-[10%] w-full h-screen ${styles.visualWrap} overflow-hidden`}
      style={{ backgroundPositionY: imagePositonY }}
    >
      <h2 className="sr-only">포트폴리오 메인 소개</h2>
      <motion.div
        style={{ y: textY }}
        className="relative z-[1] text-center text-white text-[3rem] font-bold"
      >
        <p className="uppercase">
          I am <em className="text-point">KimHyeonsoo</em>
        </p>
        <p className="uppercase">
          <span className="text-point">Your next</span> frontend developer
        </p>
      </motion.div>
      <motion.a
        style={{ y: buttonY, opacity: buttonOpacity }}
        href="#projects"
        className={`relative z-[1] px-[20px] py-[10px] rounded-[10px] transition-all duration-300 ${
          ButtonStyleList[ButtonStyleEnum.PRIMARY].value
        }`}
      >
        Previous Projects
      </motion.a>
    </motion.section>
  );
};

export default Visual;
