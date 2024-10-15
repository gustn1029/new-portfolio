import { ProjectOption } from "../../../types";
import Title from "../../title/Title";
import SectionWrap from "../SectionWrap";
import ProjectItem from "./ProjectItem";

import gangwonImage from "../../../assets/images/project/project-gangwon.avif";
import quotationImage from "../../../assets/images/project/project-quotationEasy.avif";
import cmsImage from "../../../assets/images/project/project-cms.jpg";

const Projects = () => {
  const projectOptionList: ProjectOption[] = [
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
  return (
    <SectionWrap id="projects">
      <Title title="Projects" desc="제가 참여했던 프로젝트를 소개합니다." />
      <ul className="flex flex-col gap-[30px]">
        {projectOptionList.map((project) => (
          <ProjectItem
            key={`project__${project.title}`}
            title={project.title}
            desc={project.desc}
            image={project.image}
            path={project.path}
            projectInfo={project.projectInfo}
            skills={project.skills}
          />
        ))}
      </ul>
    </SectionWrap>
  );
};

export default Projects;
