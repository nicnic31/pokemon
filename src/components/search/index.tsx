import SearchIcon from "../icon/search";

interface SearchProps {
  placeholder: string;
  value: string;
  handleSearch: (search: string) => void;
}

export default function Search({
  placeholder,
  value,
  handleSearch,
}: SearchProps) {
  return (
    <div className="relative w-full">
      <input
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
        className="py-3 pl-5 text-slate-700 pr-16 tracking-wider text-sm w-full bg-inherit rounded-md border-2 border-slate-200 focus:border-0 focus:outline-yellow"
      />
      <div className="absolute top-3 right-5">
        <SearchIcon />
      </div>
    </div>
  );
}
