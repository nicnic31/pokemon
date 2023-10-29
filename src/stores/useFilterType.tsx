import { create } from "zustand";

interface IFilterTypes {
  filter: Array<string>;
  setFilter: (filter: Array<string>) => void;
  clearFilter: () => void;
}

const useFilterType = create<IFilterTypes>((set) => ({
  filter: [],
  setFilter: (filter: Array<string>) => set((state) => ({ ...state, filter })),
  clearFilter: () => set((state) => ({ ...state, filter: [] })),
}));

export default useFilterType;
