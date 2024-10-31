import { animate, motion } from "framer-motion";
import styles from "./skills.module.css";
import { useEffect, useState } from "react";

export interface SkillOptionItem {
  icon: JSX.Element;
  skillName: string;
  proficiencyPercentage: number;
}

export interface SkillOptionItemProps extends SkillOptionItem {
  isVisible: boolean;
}
const SkillItem = ({
  icon,
  skillName,
  proficiencyPercentage,
  isVisible,
}: SkillOptionItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const controls = animate(0, proficiencyPercentage, {
        duration: 1.5,
        onUpdate: (value) => setCount(Math.round(value)),
      });

      return () => controls.stop();
    }
  }, [isVisible, proficiencyPercentage]);

  return (
    <li className="flex gap-[20px] w-[calc(50%-30px)]">
      <h3 className="w-[100px] flex flex-col justify-center items-center gap-[5px] text-gray-100">
        <span className="block text-[2.5rem] text-gray-700">{icon}</span>
        <em className="text-gray-400 text-[0.85rem] leading-[1]">
          {skillName}
        </em>
      </h3>
      <p
        className={`flex items-end justify-end pb-[15px] text-gray-300 flex-grow text-right ${styles.skillBar}`}
      >
        <motion.span
          initial={{ width: '0%' }}
          animate={{ width: isVisible ? `${proficiencyPercentage}%` : '0%' }}
          transition={{ duration: 1.5}}
          className={`${styles.bar} text-[0] leading-[0] block indent-[-9999px] bg-warm-gradient`}
        >
          {`${skillName} 숙련도`}
        </motion.span>
        <motion.em className="text-[0.95rem]">{count}%</motion.em>
      </p>
    </li>
  );
};

export default SkillItem;
