import { create } from "zustand";

interface SectionPositionStore {
  about: number | null;
  skills: number | null;
  projects: number | null;
  contact: number | null;
  total: number | null;
  setSectionPosition: ({
    section,
    position,
  }: {
    section: string;
    position: number;
  }) => void;
}

export const useSectionPositionStore = create<SectionPositionStore>((set) => ({
  about: null,
  skills: null,
  projects: null,
  contact: null,
  total: null,
  setSectionPosition: ({ section, position }) =>
    set((state) => ({
      ...state,
      [section]: position,
    })),
}));
