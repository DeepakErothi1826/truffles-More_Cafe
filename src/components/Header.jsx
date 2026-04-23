import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Menu' },
    { to: '/about', label: 'About us' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
<header className="fixed top-0 left-0 w-full z-50 bg-brand-light-pink/80 backdrop-blur-md border-b border-brand-accent-pink/50">
      <div className="container mx-auto px-6 md:px-12 py-3 md:py-4 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex-1">
          <Link to="/" className="text-2xl md:text-3xl font-script text-brand-dark-mauve hover:text-brand-gold transition-colors">
            truffles&More
          </Link>
        </div>

        {/* Center: Nav Links - Desktop */}
        <nav className="hidden lg:flex flex-2 items-center justify-center space-x-8 lg:space-x-10 text-xs lg:text-sm font-medium tracking-widest uppercase">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className="hover:text-brand-gold transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Cart & Mobile Menu Button */}
        <div className="flex items-center space-x-3 md:space-x-6">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative group p-2"
          >
            <ShoppingBag className="w-5 h-5 text-brand-dark-mauve group-hover:text-brand-gold transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-brand-gold text-white text-xs rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
          
          {/* Desktop Order Button */}
          <Link 
            to="/contact" 
            className="hidden lg:block px-6 lg:px-8 py-2 bg-brand-gold text-brand-off-white text-xs font-bold tracking-[0.2em] rounded-full hover:bg-brand-dark-mauve transition-all duration-300 shadow-lg hover:shadow-brand-gold/20"
          >
            ORDER NOW
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-brand-dark-mauve"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-[60px] left-0 w-full bg-brand-light-pink shadow-xl border-t border-brand-accent-pink">
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-3 text-sm font-medium tracking-widest uppercase hover:bg-brand-accent-pink/30 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mx-4 mt-2 py-3 text-center bg-brand-gold text-white text-xs font-bold tracking-[0.2em] rounded-full hover:bg-brand-dark-mauve transition-colors"
            >
              ORDER NOW
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

