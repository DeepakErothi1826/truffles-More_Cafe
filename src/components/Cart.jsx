import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-brand-dark-mauve/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm md:max-w-md bg-brand-off-white shadow-2xl z-[101] flex flex-col"
          >
            <div className="p-6 border-b border-brand-accent-pink flex items-center justify-between">
              <h2 className="text-2xl font-serif text-brand-dark-mauve">
                Your Cart ({cartCount})
              </h2>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-brand-accent-pink rounded-full transition-colors"
              >
                <X size={24} className="text-brand-dark-mauve" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-12">
                  <ShoppingBag size={48} className="mx-auto text-brand-dark-mauve/30 mb-4" />
                  <p className="text-brand-dark-mauve/60">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4 bg-brand-accent-pink/20 p-4 rounded-2xl"
                    >
                      <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-brand-dark-mauve text-sm">{item.name}</h3>
                        <p className="text-brand-gold font-bold text-sm mt-1">{item.price}</p>
                        <div className="flex items-center mt-3 gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-dark-mauve hover:bg-brand-gold hover:text-white transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-brand-dark-mauve hover:bg-brand-gold hover:text-white transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="ml-auto text-brand-dark-mauve/40 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-brand-accent-pink bg-brand-light-pink">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-brand-dark-mauve/70">Subtotal</span>
                  <span className="text-2xl font-serif text-brand-dark-mauve">${cartTotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-brand-dark-mauve/50 mb-4">Shipping calculated at checkout</p>
                <button
                  onClick={() => {
                    alert('Thank you for your order! This is a demo.');
                    clearCart();
                    setIsCartOpen(false);
                  }}
                  className="w-full bg-brand-dark-mauve text-white py-4 rounded-full font-bold tracking-widest text-xs hover:bg-brand-gold transition-colors"
                >
                  CHECKOUT
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart;
