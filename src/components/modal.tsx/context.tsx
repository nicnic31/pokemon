import { create } from "zustand";

export type ViewNames = "FILTER_MODAL" | "";

interface IModalProps {
  view: ViewNames;
  item: any;
  open: boolean;
  openModal: (view: ViewNames, item: any) => void;
  closeModal: () => void;
}

const useModal = create<IModalProps>((set) => ({
  view: "",
  item: null,
  open: false,
  openModal: (view, item) =>
    set((state) => ({ ...state, view, item, open: true })),
  closeModal: () => set((state) => ({ ...state, open: false })),
}));

export default useModal;
