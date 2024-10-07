import styles from "./title.module.css";

interface TitleProps {
    title: string;
}
const Title = ({title}:TitleProps) => {
  return (
    <h2
      className={`flex mb-[50px] items-end gap-[10px] leading-[1] uppercase text-[2rem] font-bold text-yellow-500 ${styles.title}`}
    >
      <span className="relative">{title}</span>
    </h2>
  );
};

export default Title;
