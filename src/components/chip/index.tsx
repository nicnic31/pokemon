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
  className?: string;
  handleDeleteChip?: (title: string) => void;
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
  isDelete = true,
  className,
  handleDeleteChip = () => {},
}: ChipProps) {
  return (
    <div
      className={cn(
        "border flex flex-row justify-center font-medium items-center gap-2",
        isChipSelected
          ? selectedColorStyle(color, selectedColorsPalette)
          : selectedColorStyle(color, colorsPalette),
        shape === "rounded" ? "rounded-md" : "rounded-full",
        isFullWidth ? "w-full" : "w-fit",
        size === "small"
          ? "text-sm p-1"
          : size === "medium"
          ? "text-base p-2"
          : "text-lg p-3",
        className
      )}
    >
      {icon && icon}
      <p>{title}</p>
      {isDelete && (
        <Button
          color="gray"
          shape="circle"
          className="ml-3 p-1"
          onClick={() => handleDeleteChip(title)}
        >
          <SmallCloseIcon />
        </Button>
      )}
    </div>
  );
}
