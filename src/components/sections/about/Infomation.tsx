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
        <em className="text-point">기린 같은 주니어 프론트엔드 개발자</em>{" "}
        김현수입니다.
      </p>
      <p className="text-gray-400 mb-[30px]">
        <em className="text-gray-200">기린</em>은 세상에서 가장 긴 목을 가진
        동물로, 멀리 있는 것들을 바라보고{" "}
        <em className="text-gray-200">넓은 시야</em>를 가질 수 있습니다.
        <br />
        이처럼 저는 <em className="text-gray-200">항상 더 넓은 시야</em>를 가지려고 노력하며, <em className="text-gray-200">새로운 기술과
        트렌드를 빠르게 파악해 나가는 개발자</em>가 되고자 합니다.
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
