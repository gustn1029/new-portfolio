import { useEffect } from "react";
import { useSectionPositionStore } from "../store/useSectionPositionStore";

export const usePositionPositionCalculate = () => {
    const { setSectionPosition } = useSectionPositionStore();
    
    useEffect(() => {
      const calculatePositions = () => {
        const sections = ['about', 'skills', 'projects', 'contact'];
        let accumulatedHeight = 0;
        const visual = document.getElementById("visual");

        if(visual) {
          accumulatedHeight += (visual.clientHeight - 100);
        }
        
        sections.forEach(section => {
          const element = document.getElementById(section);
          if (element) {
            setSectionPosition({
              section,
              position: accumulatedHeight
            });
            accumulatedHeight += (element.clientHeight - 100);
          }
        });
      };
  
      calculatePositions();
      window.addEventListener('resize', calculatePositions);
      
      return () => window.removeEventListener('resize', calculatePositions);
    }, []);
  
    return null;
  };