import Chip from "@/components/chip";
import CloseIcon from "@/components/icon/close";
import Button from "@/components/ui/button";
import { pokemonTypes } from "@/utils/constants";
import useModal from "../context";

export default function FilterTypesModal() {
  const { closeModal } = useModal((state) => ({
    closeModal: state.closeModal,
  }));

  return (
    <div className="bg-white w-[90%] absolute top-[40%] left-[15%] -translate-y-[40%] -translate-x-[10%] py-2 px-2 rounded-md h-min-[40%] max-h-[90%] overflow-y-auto sm:px-2 sm:w-[90%] md:px-4 md:w-[75%] md:left-[20%] md:top-[45%] lg:w-1/2 lg:left-[30%] lg:px-5">
      <div className="w-full flex justify-end">
        <Button shape="circle" variant="text" color="gray" onClick={closeModal}>
          <CloseIcon />
        </Button>
      </div>

      <div className="text-center my-1">
        <h6 className="text-base tracking-wide font-semibold mb-2 sm:text-base md:text-xl">
          Pokemon Types
        </h6>
        <p className="text-xs tracking-wide sm:text-xs md:text-sm">
          Choose a type to easily find your pokemon
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 my-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {pokemonTypes.map((type, idx) => (
          <Chip
            title={type.label}
            icon={type.icon}
            key={idx}
            isFullWidth
            color="gray"
            size="medium"
            className="hover:bg-dark-gray hover:text-white cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
}
