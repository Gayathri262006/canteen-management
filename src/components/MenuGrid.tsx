import { useMemo } from "react";
import FoodCard from "./FoodCard";
import { foodItems } from "@/data/mockData";

interface MenuGridProps {
  selectedCategory: string;
  searchQuery: string;
}

const MenuGrid = ({ selectedCategory, searchQuery }: MenuGridProps) => {
  const filteredItems = useMemo(() => {
    let filtered = foodItems.filter((item) => item.availability);

    if (selectedCategory !== "all") {
      filtered = filtered.filter((item) =>
  item.category.includes(selectedCategory)
);

    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  if (filteredItems.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-muted-foreground mb-4">
          <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
            <span className="text-4xl">🍽️</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">No items found</h3>
          <p>Try adjusting your search or category filter.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredItems.map((item) => (
        <div key={item.id} id={item.name.toLowerCase()}>
          <FoodCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default MenuGrid;
