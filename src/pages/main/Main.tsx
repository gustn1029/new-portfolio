import About from "../../components/sections/about/About";
import Projects from "../../components/sections/projects/Projects";
import Skills from "../../components/sections/skills/Skills";
import Visual from "../../components/sections/visual/Visual";

const Main = () => {
  return (
    <>
      <Visual />
      <main className="flex flex-col gap-[100px]">
        <About />
        <Skills />
        <Projects />
      </main>
    </>
  );
};

export default Main;
