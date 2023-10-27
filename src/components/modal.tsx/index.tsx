import cn from "classnames";
import useModal, { ViewNames } from "./context";
import FilterTypesModal from "./children/filterTypes";

const viewChildren = (view: ViewNames) => {
  switch (view) {
    case "FILTER_MODAL":
      return <FilterTypesModal />;
    default:
      return null;
  }
};

export default function Modal() {
  const { view, open } = useModal((state) => ({
    view: state.view,
    open: state.open,
  }));
  return (
    <div
      className={cn(
        "absolute top-0 w-screen h-screen backdrop-blur-[2px] backdrop-brightness-50 z-50 transition-all transform ",
        open ? "block" : "hidden"
      )}
    >
      <div className="w-full h-full relative">{view && viewChildren(view)}</div>
    </div>
  );
}
