import About from "../../components/sections/about/About";
import Contact from "../../components/sections/contact/Contact";
import Projects from "../../components/sections/projects/Projects";
import Skills from "../../components/sections/skills/Skills";
import Visual from "../../components/sections/visual/Visual";
import { usePositionPositionCalculate } from "../../hooks/usePositionPositionCalculate";

const Main = () => {
  usePositionPositionCalculate();
  return (
    <>
      <Visual />
      <main className="flex flex-col gap-[100px] mb-[100px]">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Main;
