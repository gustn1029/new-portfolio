import { ReactNode } from "react";

interface SectionWrapProps {
  children: ReactNode;
  id: string;
  sectionClassName?: string;
  innerClassName?: string;
}

const SectionWrap = ({
  children,
  id,
  sectionClassName,
  innerClassName,
}: SectionWrapProps) => {
  return (
    <section id={id} className={` ${sectionClassName ? sectionClassName : ""}`}>
      <div className={`inner ${innerClassName ? innerClassName : ""}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrap;
