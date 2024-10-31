import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export const useScrollPosition = (section: number) => {
  const { scrollY } = useScroll();
  const [isShow, setIsShow] = useState<boolean>(false);
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      if (section && latest >= section / 2 + 450) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    });

    return () => unsubscribe();
  }, [scrollY, section]);

  return { isShow, scrollY };
};
