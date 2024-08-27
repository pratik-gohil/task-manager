import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface ISearchInput {
  onChange: (value: string) => void;
  placeholder?: string;
  defaultValue?: string;
}

export default function SearchInput({
  onChange,
  defaultValue = "",
  placeholder = "Search...",
}: ISearchInput) {
  return (
    <div className="relative flex items-center w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
      <Input
        type="search"
        placeholder={placeholder}
        className="pl-10 pr-4 py-2"
        aria-label="Search"
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
