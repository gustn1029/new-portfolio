import styles from "./skills.module.css";

export interface SkillOptionItem {
 icon: JSX.Element;
 skillName: string;
 proficiencyPercentage: number;
}
const SkillItem = ({icon, skillName, proficiencyPercentage}:SkillOptionItem) => {
  return (
    <li className="flex gap-[20px] w-[calc(50%-30px)]">
        <h3 className="w-[100px] flex flex-col justify-center items-center gap-[5px] text-gray-100">
            <span className="block text-[2.5rem] text-gray-700">{icon}</span>
            <em className="text-gray-400 text-[0.85rem] leading-[1]">{skillName}</em>
        </h3>
        <p className={`flex items-end justify-end pb-[15px] text-gray-300 flex-grow text-right ${styles.skillBar}`}><span style={{width: `${proficiencyPercentage}%`}} className={`${styles.bar} text-[0] leading-[0] block indent-[-9999px] bg-warm-gradient`}>{`${skillName} 숙련도`}</span><em className="text-[0.95rem]">{proficiencyPercentage}%</em></p>
    </li>
  )
}

export default SkillItem