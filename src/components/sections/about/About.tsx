import myImage from "../../../assets/profile_image.png";
import Title from "../../title/Title";
import SectionWrap from "../SectionWrap";
import Career, { CareerList } from "./career/Career";
import Infomation, { InfoOptionList } from "./Infomation";

const About = () => {
  const careerData: CareerList[] = [
    {
      career: "교육",
      careerList: [
        {
          period: "2020. 06 ~ 2020. 10",
          education: "웹디자인(웹퍼블리셔) 프론트앤드 실무자 양성 과정",
          desc: [
            "포토샵/일러스트를 활용한 웹디자인 능력과 퍼블리싱 능력을 결합하여 퍼블리셔로 성장할 수 있는 교육",
            "브랜드를 선택하여 브랜드에 맞는 기획서, 디자인, 퍼블리싱하여 웹사이트를 구현하는 프로젝트 진행",
          ],
        },
        {
          period: " 2023.07 ~ 2023.09",
          education: "2023 강원형 미래유망인력지원사업",
          desc: [
            "프론트엔드 업무에 필요한 기초 지식을 학습하여 프론트엔드 개발자로 성장할 수 있도록 하는 훈련 과정",
            "HTML/CSS, JAVASCRIPT를 활용하여 웹 페이지를 구현하는 프로젝트 진행",
          ],
        },
        {
          period: " 2024.06 ~ 2024.10",
          education: "[EST] 프론트엔드 개발자 양성과정",
          desc: [
            "기초 개념과 언어 지식을 체계적으로 학습하여 프론트엔드 개발자로 성장할 수 있도록 하는 훈련 과정",
            "HTML,CSS,JAVASCRIPT를 활용하여 오픈마켓 서비스를 구현하는 프로젝트 진행",
            "배운 지식들을 바탕으로 팀으로 협업하여 하나의 웹 애플리케이션을 만드는 프로젝트 진행",
          ],
        },
      ],
    },
    {
      career: "경력",
      careerList: [
        {
          period: "2021.03 ~ 2021.10",
          company: "(주)이앤지테크",
          desc: [
            "전자정부프레임워크를 활용하여 공공기관프로젝트에 퍼블리셔로 참여",
          ],
        },
        {
          period: "2022.06 ~ 2023.04",
          company: "서춘천농업협동조합",
          desc: ["자재 판매, 경제 여신, 부가세, 비료 담당 업무 진행"],
        },
        {
          period: "2023.08 ~ 2024.06",
          company: "(주)아이들",
          desc: [
            "회사 운영 사정으로 인한 권고사직",
            "(주)아이들 전자정부프레임워크 유효성 확인 소프트웨어 개발 프로젝트 참여(백엔드, 프론트엔드)",
            "자사 서비스 견적이지 관리자 사이트 제작 참여(프론트엔드)",
            "공공기관 웹사이트 개발 프로젝트 참여(프론트엔드)",
            "2023.08 ~ 2023.12 인턴, 2024.12 ~ 2024.06 정직원으로 재직",
          ],
        },
      ],
    },
  ];

  const infomationList: InfoOptionList[] = [
    { infomation: "이름", value: "김현수" },
    { infomation: "이메일", value: "gustn1029@gmail.com" },
    { infomation: "휴대폰", value: "010-9817-1779" },
    { infomation: "생년월일", value: "1991.08.20" },
  ];

  return (
    <SectionWrap id="about" innerClassName="">
      <Title title="about me" />
      <section className="flex items-center gap-[60px] mb-[50px]">
        <img
          src={myImage}
          alt="김현수 프로필 이미지"
          className="rounded-[10%_0_10%_0]"
        />
        <Infomation infomationData={infomationList} />
      </section>
      <Career careerData={careerData} />
    </SectionWrap>
  );
};

export default About;
