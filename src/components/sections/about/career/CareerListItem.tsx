import { CareerItem } from "../../../../types";

const CareerListItem = ({ period, company, education, desc }: CareerItem) => {
  return (
    <dd className="mt-[20px]">
      <div>
        <h4 className="inline-block text-point mr-[20px] mb-[5px]">
          {company ? company : education}
        </h4>
        <span className="text-gray-600">{period}</span>
      </div>
      <ul>
        {desc.map((text, idx) => (
          <li
            key={`${company || education}_${idx}`}
            className={`text-gray-400 break-keep ${idx > 0 ? "mt-[3px]":""}`}
          >
            {text}
          </li>
        ))}
      </ul>
    </dd>
  );
};

export default CareerListItem;
