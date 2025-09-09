import { ShoppingCart, Utensils } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';

const Header = () => {
  const { toggleCart, getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-primary/10 shadow-soft">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Utensils className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary">Canteen</h1>
            <p className="text-sm text-muted-foreground">Management System</p>
          </div>
        </div>

        <Button 
          variant="outline" 
          size="default"
          onClick={toggleCart}
          className="relative"
        >
          <ShoppingCart className="h-5 w-5" />
          <span className="hidden sm:inline-block ml-2">Cart</span>
          {totalItems > 0 && (
            <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
              {totalItems}
            </Badge>
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;