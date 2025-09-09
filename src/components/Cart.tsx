import { Minus, Plus, ShoppingCart, Trash2, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';
import CheckoutForm from './CheckoutForm';

const Cart = () => {
  const { items, isOpen, toggleCart, updateQuantity, removeItem, getTotalPrice, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const totalPrice = getTotalPrice();

  const handleQuantityChange = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
  };

  const handleRemoveItem = (id: string, name: string) => {
    removeItem(id);
    toast({
      title: "Item removed",
      description: `${name} has been removed from your cart.`,
    });
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
  };

  const handleOrderComplete = () => {
    clearCart();
    setIsCheckingOut(false);
    toggleCart();
    toast({
      title: "Order placed successfully!",
      description: "Your order has been confirmed and will be prepared shortly.",
      duration: 4000,
    });
  };

  if (!isOpen) return null;

  if (isCheckingOut) {
    return <CheckoutForm onBack={() => setIsCheckingOut(false)} onComplete={handleOrderComplete} />;
  }

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l shadow-strong">
        <Card className="h-full rounded-none border-none">
          <CardHeader className="border-b border-primary/10">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-primary">
                <ShoppingCart className="h-5 w-5" />
                Your Cart
              </CardTitle>
              <Button variant="ghost" size="icon" onClick={toggleCart}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-0">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
                  <ShoppingCart className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">Cart is empty</h3>
                <p className="text-sm text-muted-foreground">Add some delicious items to get started!</p>
              </div>
            ) : (
              <div className="space-y-4 p-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 rounded-lg border border-primary/10 bg-card">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-primary truncate">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} each</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-accent">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:text-destructive-foreground hover:bg-destructive"
                            onClick={() => handleRemoveItem(item.id, item.name)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>

          {items.length > 0 && (
            <CardFooter className="border-t border-primary/10 flex-col gap-4">
              <div className="w-full space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax (8%):</span>
                  <span>${(totalPrice * 0.08).toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total:</span>
                  <span className="text-accent">${(totalPrice * 1.08).toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                variant="accent" 
                size="lg" 
                className="w-full"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Cart;