import { useState } from 'react';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import MenuGrid from '@/components/MenuGrid';
import Cart from '@/components/Cart';
import SearchBar from '@/components/SearchBar';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Welcome to Our Canteen
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover delicious meals, fresh ingredients, and convenient ordering. 
            Your satisfaction is our priority.
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />

        {/* Menu Grid */}
        <div className="bg-card/50 rounded-lg p-6 shadow-soft border border-primary/5">
          <MenuGrid selectedCategory={selectedCategory} searchQuery={searchQuery} />
        </div>
      </main>

      <Cart />
    </div>
  );
};

export default Index;
