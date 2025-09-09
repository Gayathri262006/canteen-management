import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';


interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative max-w-md">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="text"
        placeholder="Search menu items..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-background border-primary/20 focus:border-primary transition-colors"
      />
    </div>
  );
};

export default SearchBar;