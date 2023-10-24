import Navbar from "@/components/navbar";

interface ILayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className="w-full font-sans">
      <Navbar />
      <div className="mt-[90px] h-[88vh] pt-5 pb-2 px-4 sm:px-3 md:px-12 lg:px-28">
        {children}
      </div>
    </div>
  );
}
