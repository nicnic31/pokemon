import cn from "classnames";
import CloseIcon from "../icon/close";
import Button from "../ui/button";
import SmallCloseIcon from "../icon/smallClose";

type ColorNames = "primary" | "gray" | "white" | "success" | "danger";

type ShapeNames = "rounded" | "pill";

type SizeNames = "small" | "medium" | "large";

type Palette = {
  name: ColorNames;
  style: string;
};

interface ChipProps {
  title: string;
  color?: ColorNames;
  shape?: ShapeNames;
  size?: SizeNames;
  icon?: React.ReactNode;
  isFullWidth?: boolean;
  isChipSelected?: boolean;
  isDelete?: boolean;
  isClickable?: boolean;
  className?: string;
  handleDeleteChip?: (title: string) => void;
  handleChip?: (title: string) => void;
}

const colorsPalette: Palette[] = [
  {
    name: "primary",
    style: "bg-light-yellow border-light-yellow text-slate-600",
  },
  {
    name: "gray",
    style: "bg-light-gray border-light-gray text-slate-600",
  },
  {
    name: "white",
    style: "bg-white border-white text-slate-600",
  },
  {
    name: "success",
    style: "bg-light-green border-light-green text-slate-600",
  },
  {
    name: "danger",
    style: "bg-light-red border-light-red text-slate-600",
  },
];

const selectedColorsPalette: Palette[] = [
  {
    name: "primary",
    style: "bg-yellow border-yellow text-white",
  },
  {
    name: "gray",
    style: "bg-gray border-gray text-white",
  },
  {
    name: "white",
    style: "bg-white border-gray text-gray",
  },
  {
    name: "success",
    style: "bg-green border-green text-white",
  },
  {
    name: "danger",
    style: "bg-red border-red text-white",
  },
];

const selectedColorStyle = (value: ColorNames, palette: Array<Palette>) => {
  return palette.find((color) => color.name === value)?.style;
};

export default function Chip({
  title,
  icon,
  color = "primary",
  shape = "rounded",
  size = "small",
  isFullWidth = false,
  isChipSelected = false,
  isDelete = false,
  isClickable = false,
  className,
  handleDeleteChip = (title: string) => {},
  handleChip = (title: string) => {},
}: ChipProps) {
  return (
    <div
      className={cn(
        "border font-medium items-center gap-2 flex flex-row items-center",
        isChipSelected
          ? selectedColorStyle(color, selectedColorsPalette)
          : selectedColorStyle(color, colorsPalette),
        shape === "rounded" ? "rounded-md" : "rounded-full",
        isFullWidth ? "w-full" : "w-fit",
        size === "small"
          ? "text-sm py-1 px-2"
          : size === "medium"
          ? "text-sm p-2 sm:text-sm md:text-base"
          : "text-base p-3 sm:text-base lg:text-lg",
        className
      )}
      onClick={() => isClickable && handleChip(title)}
    >
      <div className="flex flex-row justify-start items-center w-full gap-3">
        {icon && icon}
        <p>{title}</p>
      </div>

      {isDelete && (
        <div className="text-right">
          <Button
            color="gray"
            shape="circle"
            className="ml-3 p-1"
            onClick={() => handleDeleteChip(title)}
          >
            <SmallCloseIcon />
          </Button>
        </div>
      )}
    </div>
  );
}
