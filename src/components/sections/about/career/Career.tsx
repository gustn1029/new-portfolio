import { Fragment } from "react";
import CareerListItem from "./CareerListItem";
import { CareerItem } from "../../../../types";
import { motion } from "framer-motion";

export interface CareerList {
  career: string;
  careerList: CareerItem[];
}

interface CareerProps {
  careerData: CareerList[];
}

const Career = ({ careerData }: CareerProps) => {
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
    <div className="flex-grow">
      <h3 className="sr-only">career</h3>
      <section className="flex items-start justify-between">
        {careerData.map((data) => (
          <Fragment key={data.career}>
            <motion.dl
              className="w-[calc(50%-30px)]"
              variants={listItemVariants}
              animate="visible"
              initial="hidden"
              exit="hidden"
            >
              <dt
                className={`pb-[5px] text-white text-[1.3rem] font-bold border-b border-b-gray-500 `}
              >
                {data.career}
              </dt>
              {data.careerList.map((career) => {
                return (
                  <CareerListItem
                    key={`${data.career}_${career.company || career.education}`}
                    period={career.period}
                    company={career.company}
                    education={career.education}
                    desc={career.desc}
                  />
                );
              })}
            </motion.dl>
          </Fragment>
        ))}
      </section>
    </div>
  );
};

export default Career;
