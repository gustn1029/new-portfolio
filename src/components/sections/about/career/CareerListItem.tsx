import { CareerItem } from "../../../../types";
import { motion } from "framer-motion";

const CareerListItem = ({ period, company, education, desc }: CareerItem) => {
  const listItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return (
    <motion.dd className="mt-[20px]" variants={listItemVariants}>
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
            className={`text-gray-400 break-keep ${idx > 0 ? "mt-[3px]" : ""}`}
          >
            {text}
          </li>
        ))}
      </ul>
    </motion.dd>
  );
};

export default CareerListItem;
