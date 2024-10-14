import styles from "./title.module.css";

interface TitleProps {
  title: string;
  desc?:string;
}
const Title = ({ title, desc }: TitleProps) => {
  return (
    <>
      <h2
        className={`flex ${desc ? "mb-[10px]":"mb-[50px]"} items-end gap-[10px] leading-[1] uppercase text-[2rem] font-bold text-yellow-500 ${styles.title}`}
      >
        <span className="relative">{title}</span>
      </h2>
      {desc && <p className="mb-[50px] text-gray-500 text-[0.9rem]">{desc}</p>}
    </>
  );
};

export default Title;
