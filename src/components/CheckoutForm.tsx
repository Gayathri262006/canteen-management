import { useState } from 'react';
import { ArrowLeft, CreditCard, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/useCart';

interface CheckoutFormProps {
  onBack: () => void;
  onComplete: () => void;
}

const CheckoutForm = ({ onBack, onComplete }: CheckoutFormProps) => {
  const { items, getTotalPrice } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash'>('card');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);

  const totalPrice = getTotalPrice();
  const tax = totalPrice * 0.08;
  const finalTotal = totalPrice + tax;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    onComplete();
  };

  const isFormValid = customerInfo.name && customerInfo.email && customerInfo.phone;

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l shadow-strong overflow-y-auto">
        <Card className="h-full rounded-none border-none">
          <CardHeader className="border-b border-primary/10">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={onBack}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <CardTitle className="text-primary">Checkout</CardTitle>
                <CardDescription>Complete your order</CardDescription>
              </div>
            </div>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-6 p-6">
              {/* Order Summary */}
              <div className="space-y-4">
                <h3 className="font-semibold text-primary">Order Summary</h3>
                <div className="space-y-2">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} x{item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <Separator />
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tax (8%):</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total:</span>
                    <span className="text-accent">${finalTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Customer Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-primary">Customer Information</h3>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h3 className="font-semibold text-primary">Payment Method</h3>
                <RadioGroup value={paymentMethod} onValueChange={(value: 'card' | 'cash') => setPaymentMethod(value)}>
                  <div className="flex items-center space-x-2 p-3 border border-primary/20 rounded-lg">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex items-center gap-2 flex-1 cursor-pointer">
                      <CreditCard className="h-4 w-4" />
                      Credit/Debit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 p-3 border border-primary/20 rounded-lg">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash" className="flex items-center gap-2 flex-1 cursor-pointer">
                      <DollarSign className="h-4 w-4" />
                      Pay at Counter (Cash)
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>

            <div className="p-6 border-t border-primary/10">
              <Button
                type="submit"
                variant="accent"
                size="lg"
                className="w-full"
                disabled={!isFormValid || isProcessing}
              >
                {isProcessing ? 'Processing Order...' : `Place Order - $${finalTotal.toFixed(2)}`}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CheckoutForm;