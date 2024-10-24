export interface InfoOptionList {
  infomation: string;
  value: string;
}

interface InfomationProps {
  infomationData: InfoOptionList[];
}

const Infomation = ({ infomationData }: InfomationProps) => {
  return (
    <div>
      <h3 className="sr-only">자기 소개</h3>
      <p className="text-white text-[1.3rem] mb-[20px]">
        안녕하세요
        <br />
        <em className="text-point">
          책임감 넘치는 주니어 프론트엔드 개발자
        </em>{" "}
        김현수입니다.
      </p>
      <p className="text-gray-400 mb-[30px] break-keep">
        저는
        <em className="text-gray-200"> 기한 준수</em>를 핵심 가치로 삼고,
        <em className="text-gray-200"> 코드 품질</em>을 조화시키는 개발자입니다.
        <br />
        <em className="text-gray-200">항상 더 넓은 시야</em>를 가지려고
        노력하며,{" "}
        <em className="text-gray-200">새로운 기술과 트렌드를 빠르게 파악</em>해
        나가고, 품질과 책임을 다하는 개발자가 되겠습니다.
      </p>
      <ul className="flex flex-col gap-[10px]">
        {infomationData.map((info) => (
          <li
            key={`info__${info.infomation}`}
            className="flex items-center gap-[30px]"
          >
            <strong className="block w-[60px] text-gray-500 font-normal">
              {info.infomation}:
            </strong>
            <p className="text-gray-300">{info.value}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Infomation;
