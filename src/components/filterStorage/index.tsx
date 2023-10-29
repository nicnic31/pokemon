import Chip from "@/components/chip";
import DeleteIcon from "@/components/icon/delete";
import Button from "@/components/ui/button";

interface FilterStorageProps {
  filters: Array<string>;
  handleClear: () => void;
  handleDeleteChip: (title: string) => void;
}

export default function FilterStorage({
  filters,
  handleClear,
  handleDeleteChip,
}: FilterStorageProps) {
  return (
    <div className="flex flex-row justify-start gap-2 my-6">
      <div className="flex flex-row gap-3 justify-start items-center flex-wrap w-[70%] sm:w-[70%]">
        {filters.map((filter, idx) => (
          <Chip
            title={filter}
            key={idx}
            color="gray"
            shape="pill"
            isDelete
            handleDeleteChip={handleDeleteChip}
          />
        ))}
      </div>
      <div className="w-[30%] text-right sm:w-[30%]">
        <Button color="gray" onClick={handleClear}>
          <div className="flex flex-row justify-center items-center gap-1">
            <DeleteIcon />
            <p>Clear</p>
          </div>
        </Button>
      </div>
    </div>
  );
}
