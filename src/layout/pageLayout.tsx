import Modal from "@/components/modal.tsx";
import useModal from "@/components/modal.tsx/context";
import Navbar from "@/components/navbar";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  const { open } = useModal((state) => ({ open: state.open }));
  return (
    <div className="w-full font-sans">
      <Navbar />
      <div className="mt-[90px] h-[88vh] pt-5 pb-2 px-3 xs:px-1 sm:px-2 md:px-4 lg:px-24">
        {children}
      </div>
      {open && <Modal />}
    </div>
  );
}
