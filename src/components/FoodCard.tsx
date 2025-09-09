import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FoodItem } from '@/types';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard = ({ item }: FoodCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item);
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  return (
    <Card className="group hover:shadow-medium transition-all duration-300 border border-primary/10 hover:border-primary/20 overflow-hidden">
      <div className="aspect-video overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg text-primary group-hover:text-primary-hover transition-colors">
            {item.name}
          </CardTitle>
          {!item.availability && (
            <Badge variant="destructive" className="text-xs">
              Unavailable
            </Badge>
          )}
        </div>
      </CardHeader>

      <CardContent className="pb-2">
        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="pt-2 flex items-center justify-between">
        <div className="text-xl font-bold text-accent">
          ₹{item.price.toFixed(2)}
        </div>
        
        <Button
          variant="cart"
          size="sm"
          onClick={handleAddToCart}
          disabled={!item.availability}
          className="gap-1"
        >
          <Plus className="h-4 w-4" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;