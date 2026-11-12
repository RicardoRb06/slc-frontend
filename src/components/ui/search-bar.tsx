import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchBarProps{
  onSearch: (query: string) => void;
}

export function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-sm flex">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
        <Search className="h-4 w-4" />
      </div>
      <Input
        type="search"
        placeholder="Pesquisar..."
        className="pl-8"
      />
    </div>
  )
}