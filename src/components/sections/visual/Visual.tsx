import LinkButton from "../../button/LinkButton";
import styles from "./visual.module.css";

const Visual = () => {
  return (
    <section
      className={`flex flex-col mb-[100px] justify-center items-center gap-[10%] w-full h-screen ${styles.visualWrap}`}
    >
      <h2 className="s-only">포트폴리오 메인 소개</h2>
      <div className="text-center text-white text-[3rem] font-bold">
        <p className="uppercase">I am <em className="text-[#eab308]">KimHyeonsoo</em></p>
        <p className="uppercase"><span className="text-[#eab308]">Your</span> next frontend developer</p>
      </div>
      <LinkButton href="#Project" buttonClassName="">Previous Projects</LinkButton>
    </section>
  );
};

export default Visual;
