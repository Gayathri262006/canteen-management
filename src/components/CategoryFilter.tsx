import { Button } from '@/components/ui/button';
import { categories } from '@/data/mockData';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="bg-card rounded-lg p-6 shadow-soft border border-primary/5">
      <h2 className="text-lg font-semibold text-primary mb-4">Menu Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category.id)}
            className="h-auto py-3 flex-col items-center text-center whitespace-normal"
          >
            <span className="text-sm font-medium">{category.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;