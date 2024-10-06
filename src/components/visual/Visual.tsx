import styles from "./visual.module.css";

const Visual = () => {
  return (
    <section
      className={`flex flex-col justify-center items-center gap-[50px] w-full h-screen ${styles.visualWrap}`}
    >
      <h2 className="s-only">포트폴리오 메인 소개</h2>
      <div className="text-center text-white text-[3rem] font-bold">
        <p className="uppercase">I am <em className="text-[#3b82f6]">KimHyeonsoo</em></p>
        <p className="uppercase"><span className="text-[#3b82f6]">& I am</span> a frontend developer</p>
      </div>
    </section>
  );
};

export default Visual;
