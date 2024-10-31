import { ProjectOption } from "../../../types";
import Title from "../../title/Title";
import SectionWrap from "../SectionWrap";
import ProjectItem from "./ProjectItem";
import { motion, useTransform } from "framer-motion";

import gangwonImage from "../../../assets/images/project/project-gangwon.avif";
import quotationImage from "../../../assets/images/project/project-quotationEasy.avif";
import cmsImage from "../../../assets/images/project/project-cms.jpg";
import openMarketImage from "../../../assets/images/project/project-openmarket.png";
import timeFlowImage from "../../../assets/images/project/project-timeflow.png";
import { useScrollPosition } from "../../../hooks/useScrollPosition";
import { useSectionPositionStore } from "../../../store/useSectionPositionStore";

const Projects = () => {
  const { projects } = useSectionPositionStore();

  
  const { scrollY } = useScrollPosition(projects ? projects : 0);

  const projectsX = useTransform(
    scrollY,
    [projects ? projects / 2 : 0, projects ? projects + 200 : 0],
    [-100, 0]
  );

  const projectsOpacity = useTransform(
    scrollY,
    [projects ? projects / 2 : 0, projects ? projects + 250 : 0],
    [0, 1]
  );

  const projectOptionList: ProjectOption[] = [
    {
      title: "OpenMarket",
      desc: "[EST] 프론트엔드 양성자 과정 개인 프로젝트로 진행한 오픈마켓 웹사이트",
      image: openMarketImage,
      path: "https://gustn1029.github.io/openMarket/",
      projectInfo: [
        "JavaScript를 사용하여 SPA로 개발",
        "Tailwind CSS 라이브러리를 사용하여 개발",
        "개인 프로젝트 최우수상 수상",
        "로그인, 회원가입, 메인, 상세, 장바구니, 주문 페이지 개발",
      ],
      skills: ["JavaScript", "Tailwind CSS"],
    },
    {
      title: "TimeFlow",
      desc: "[EST] 프론트엔드 양성자 과정 팀 프로젝트로 진행한 일정 관리 앱",
      image: timeFlowImage,
      path: "https://time-flow-app.vercel.app/",
      projectInfo: [
        "파이널 팀 프로젝트 대상 수상",
        "React Hook Form을 사용하여 폼의 데이터를 관리하고 유효성 검사를 수행",
        "react-toastify 라이브러리로 상태 메시지 출력",
        "TansTack Query를 활용하여 효율적인 데이터 패칭과 상태 관리를 구현",
        "파이어베이스를 활용한 구글 인증 로그인, 회원가입 기능 구현",
        "react-calendar 라이브러리를 사용하여 캘린더 기능 구현",
        "Framer Motion 라이브러리를 활용하여 애니메이션 구현",
      ],
      skills: [
        "React",
        "TypeScript",
        "Sass",
        "TanStack Query",
        "Firebase",
        "react-toastify",
        "react-calendar",
        "React Hook Form",
        "Framer Motion",
      ],
    },
    {
      title: "강원특별자치도 통합건강증진사업지원단",
      desc: "전자정부프레임워크를 적용하여 웹 사이트를 제작하였습니다.",
      image: gangwonImage,
      path: "https://gwhealth.kr/gwhs",
      projectInfo: [
        "Apache Tomcat 환경에서 JSP를 사용하여 개발",
        "JSTL 태그 라이브러리를 사용",
        " fullcalendar 라이브러리를 사용하여 일정 페이지 구현",
        "처음 기획 업무를 맡은 기획자가 진행한 프로젝트로 적극적으로 소통하고 조율하며 진행",
      ],
      skills: ["HTML", "CSS", "JavaScript", "JSTL"],
    },
    {
      title: "견적이지 관리자",
      desc: "자사 서비스 견적이지를 관리하기 위한 관리자 사이트 개발",
      image: quotationImage,
      path: "https://www.figma.com/design/aHCBgnQjVRGmp8M4kezAy7/quotationEasy?node-id=0-1&node-type=canvas&t=YVegl7tBjDOGiFvJ-0",
      projectInfo: [
        "문의, 의뢰에 대한 CRUD 개발",
        "React Hook Form을 사용하여 폼의 데이터를 관리하고 유효성 검사를 수행",
        "react-toastify 라이브러리로 상태 메시지 출력",
        "react-chartjs-2 라이브러리를 사용하여 통계 화면 구현",
        "SWR을 활용하여 효율적인 데이터 패칭과 상태 관리를 구현",
        "관리자 페이지를 반응형 페이지로 구현",
      ],
      skills: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "SWR",
        "React Hook Form",
        "react-toastify",
        "react-chartjs-2",
      ],
    },
    {
      title: "(주)아이들 CMS",
      desc: "전자정부프레임워크 유효성 확인을 받을 수 있는 소프트웨어 개발",
      image: cmsImage,
      path: "https://www.figma.com/design/qCi9dJ9awHMFMNjYJoMDtM/IDL-CMS?node-id=0-1&node-type=canvas&t=YVegl7tBjDOGiFvJ-0",
      projectInfo: [
        "다양한 기능에 필요한 CRUD 개발",
        "React Hook Form을 사용하여 폼의 데이터를 관리하고 유효성 검사를 수행",
        "react-toastify 라이브러리로 상태 메시지 출력",
        "react-chartjs-2 라이브러리를 사용하여 통계 화면 구현",
        "SWR을 활용하여 효율적인 데이터 패칭과 상태 관리를 구현",
        "반응형 페이지로 구현",
        "Next-auth 라이브러리를 사용하여 인증 및 권한 관리 기능을 구현(구글, 카카오, 네이버)",
        "JpaRepository를 활용하여 데이터베이스에서 원하는 데이터를 조회하고 관리",
        "Service와 ServiceImpl 클래스를 구분하여 관리함으로써, 명확한 역할 분담과 코드의 유연성을 확보",
        "JpaSpecificationExecutor를 통해 다양한 검색 조건 처리 및 데이터 조회 성능 최적화",
      ],
      skills: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Spring Framework",
        "SWR",
        "Next-auth",
        "react-toastify",
        "react-chartjs-2",
      ],
    },
  ];

  const listItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <SectionWrap id="projects">
      <motion.div
        style={{ x: projectsX, opacity: projectsOpacity }}
      >
        <Title title="Projects" desc="제가 참여했던 프로젝트를 소개합니다." />
        <motion.ul
          variants={listItemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-[30px]"
        >
          {projectOptionList.map((project, idx) => (
            <ProjectItem
              key={`project__${project.title}`}
              title={project.title}
              desc={project.desc}
              image={project.image}
              path={project.path}
              projectInfo={project.projectInfo}
              skills={project.skills}
              idx={idx}
            />
          ))}
        </motion.ul>
      </motion.div>
    </SectionWrap>
  );
};

export default Projects;
