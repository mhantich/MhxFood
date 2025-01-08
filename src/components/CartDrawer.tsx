
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import cartStore from '@/stores/cartStore';
import { Link } from 'react-router-dom';


export const CartDrawer = () => {
 
  const { cart} = cartStore();
  
    const getTotalPrice = () => {
      return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

  
    const CartItem = ({ item, index }: { item: any; index: number }) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className="flex items-center gap-4 p-4 border-b"
      >
        <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
        <div className="flex-1">
          <h3 className="font-medium">{item.name}</h3>
          <p className="text-gray-600">${item.price}</p>
          <div className="flex items-center gap-2 mt-2">
            <Button 
              variant="outline" 
              size="sm"
         
            >
              -
            </Button>
            <span>{item.quantity}</span>
            <Button 
              variant="outline" 
              size="sm"
 
            >
              +
            </Button>
          </div>
        </div>
      </motion.div>
    );
  
    return (
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="relative">
            <ShoppingCart className="h-4 w-4" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-lg">
          <SheetHeader>
            <SheetTitle>Shopping Cart</SheetTitle>
          </SheetHeader>
          <div className="mt-2 flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">

              {cart.length === 0 ? (
                <div className="flex justify-center items-center h-full">
                  <p className="text-gray-500">Your cart is empty.</p>
                </div>
              ) : (
                <AnimatePresence>
                  {cart.map((item, index) => (
                    <CartItem key={item._id} item={item} index={index} />
                  ))}
                </AnimatePresence>
              )}
            </div>
            <div className="border-t py-10  mt-auto">
              <div className="flex justify-between mb-4">
                <span className="font-medium">Total:</span>
                <span className="font-medium">${getTotalPrice().toFixed(2)}</span>
              </div>
              <Button disabled={cart.length === 0} className="w-full" size="lg">
                <Link className='text-white' to="/checkout">
                Checkout (${getTotalPrice().toFixed(2)})
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    );
  };
  