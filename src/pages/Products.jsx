import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, ShoppingBag, Plus, Minus, Star } from 'lucide-react';
import { useCart } from '../context/CartContext';

const products = [
  { id: 1, name: "Chocolate Berry Cake", category: "cakes", price: "$55.00", image: "/truffles-More_Cafe/Images/Chocolate Cake & Berry Dessert.jpg", desc: "Rich chocolate cake layered with fresh berries and cream." },
  { id: 2, name: "French Macarons", category: "macarons", price: "$32.00", image: "/truffles-More_Cafe/Images/macarons.jpg", desc: "Delicate French macarons in assorted flavors." },
  { id: 3, name: "Chocolate Truffle Cupcake", category: "cupcakes", price: "$28.00", image: "/truffles-More_Cafe/Images/Chocolate Truffle Cupcake – Gold Hazelnut Luxury.jpg", desc: "Luxurious chocolate cupcake topped with gold hazelnut truffle." },
  { id: 4, name: "Salted Caramel Cake", category: "cakes", price: "$60.00", image: "/truffles-More_Cafe/Images/Salted Caramel Cake_ A Sweet and Salty Celebration.jpg", desc: "Sweet and salty caramel cake with caramel frosting." },
  { id: 5, name: "Nutella Macarons", category: "macarons", price: "$30.00", image: "/truffles-More_Cafe/Images/Nutella Macarons Recipe.jpg", desc: "Creamy Nutella filling in delicate macaron shells." },
  { id: 6, name: "Chocolate Lava Cupcake", category: "cupcakes", price: "$32.00", image: "/truffles-More_Cafe/Images/Chocolate Lava Cupcakes.jpg", desc: "Warm chocolate lava center with gooey chocolate." },
  { id: 7, name: "Blueberry Tartlet", category: "pastries", price: "$18.00", image: "/truffles-More_Cafe/Images/Blueberry Lavender Tartlet.jpg", desc: "Buttery tart shell with blueberry lavender filling." },
  { id: 8, name: "Chocolate Hazelnut Cupcake", category: "cupcakes", price: "$26.00", image: "/truffles-More_Cafe/Images/Chocolate Hazelnut Cupcake – Rich Swirl Indulgence.jpg", desc: "Rich chocolate swirl topped with hazelnut frosting." },
  { id: 9, name: "Chocolate Macarons", category: "macarons", price: "$28.00", image: "/truffles-More_Cafe/Images/The Ultimate Chocolate Macarons (Foolproof French Method!).jpg", desc: "Rich chocolate macarons with chocolate ganache." },
  { id: 10, name: "Blackberry Macarons", category: "macarons", price: "$30.00", image: "/truffles-More_Cafe/Images/Blackberry Macarons – Bold, Berry & Beautifully Baked!.jpg", desc: "Bold blackberry flavor in delicate macaron shells." },
  { id: 11, name: "Red Velvet Cookies", category: "cookies", price: "$18.00", image: "/truffles-More_Cafe/Images/Cream Cheese Stuffed Red Velvet Cookies – The Best 7 Tips.jpg", desc: "Red velvet cookies with cream cheese filling." },
  { id: 12, name: "Nutella Cookies", category: "cookies", price: "$16.00", image: "/truffles-More_Cafe/Images/Nutella-Stuffed Cookies Recipe #mspinaq.jpg", desc: "Chewy cookies stuffed with Nutella." },
  { id: 13, name: "Butterfinger Cookies", category: "cookies", price: "$18.00", image: "/truffles-More_Cafe/Images/Butterfinger Caramel Crunch Cookies – The Ultimate Sweet & Crunchy Treat! 🍪✨_These chewy, caramel-filled cookies are packed with crunchy Butterfinger pieces and a rich buttery flavor_ Every bite has a perfec.jpg", desc: "Caramel-filled cookies with Butterfinger crunch." },
  { id: 14, name: "Triple Chocolate Cookies", category: "cookies", price: "$16.00", image: "/truffles-More_Cafe/Images/Crumbl Triple Chocolate Chip Cookies.jpg", desc: "Triple chocolate chip cookies loaded with chocolate." },
  { id: 15, name: "Brownie Cookies", category: "cookies", price: "$15.00", image: "/truffles-More_Cafe/Images/Buckeye Brownie Cookies - An Organized Chaos.jpg", desc: "Fudgy brownie cookies with peanut butter center." },
  { id: 16, name: "Strawberry Cookies", category: "cookies", price: "$17.00", image: "/truffles-More_Cafe/Images/Chocolate Covered Strawberry Cookies -___.jpg", desc: "Chocolate covered strawberry cookies." },
  { id: 17, name: "Mint Chocolate Dessert", category: "chocolates", price: "$35.00", image: "/truffles-More_Cafe/Images/Mint Chocolate Dream Dessert.jpg", desc: "Cool mint chocolate layered dessert." },
  { id: 18, name: "Chocolate Ice Cream", category: "chocolates", price: "$12.00", image: "/truffles-More_Cafe/Images/Chocolate Ice Cream.jpg", desc: "Rich and creamy chocolate ice cream." },
  { id: 19, name: "Decadent Chocolate", category: "chocolates", price: "$38.00", image: "/truffles-More_Cafe/Images/🍫 Decadent Chocolate Dessert – Rich, Creamy & Impossible to Resist! ✨.jpg", desc: "Ultra rich chocolate dessert." },
  { id: 20, name: "Chocolate Lovers", category: "chocolates", price: "$40.00", image: "/truffles-More_Cafe/Images/#chocolatelovers #foodisland.jpg", desc: "Assorted chocolate treats for chocolate lovers." },
  { id: 21, name: "Birthday Cake", category: "cakes", price: "$65.00", image: "/truffles-More_Cafe/Images/Simple and Creative Birthday Cake Decorating Ideas You Can Try at Home.jpg", desc: "Beautiful birthday cake with creative decorations." },
  { id: 22, name: "Wedding Cupcakes", category: "cupcakes", price: "$36.00", image: "/truffles-More_Cafe/Images/22 Delightful Wedding Cupcake Ideas for Sweet___.jpg", desc: "Elegant wedding themed cupcakes." },
  { id: 23, name: "Hot Chocolate Cupcakes", category: "cupcakes", price: "$28.00", image: "/truffles-More_Cafe/Images/Hot Chocolate Cupcakes.jpg", desc: "Cupcakes inspired by hot chocolate." },
  { id: 24, name: "Luscious Chocolate Cupcake", category: "cupcakes", price: "$26.00", image: "/truffles-More_Cafe/Images/Luscious chocolate cupcake with silky ganache.jpg", desc: "Silky chocolate ganache topped cupcake." },
  { id: 25, name: "Nutella Tiramisu", category: "pastries", price: "$28.00", image: "/truffles-More_Cafe/Images/Nutella Tiramisu.jpg", desc: "Classic tiramisu with Nutella twist." },
  { id: 26, name: "Cheesecake", category: "cakes", price: "$48.00", image: "/truffles-More_Cafe/Images/Yellow Velvet Oreo Cheesecake.jpg", desc: "Creamy cheesecake with Oreo crust." },
  { id: 27, name: "Chocolate Frappe", category: "coffee", price: "$14.00", image: "/truffles-More_Cafe/Images/Starbucks Double Chocolate Chip Frappuccino - Insanely Good.jpg", desc: "Chocolate frappe with chocolate chips." },
  { id: 28, name: "Coffee Date Shake", category: "coffee", price: "$12.00", image: "/truffles-More_Cafe/Images/Tahini Chocolate Coffee Date Shake.jpg", desc: "Coffee shake with dates and tahini." },
  { id: 29, name: "Milkshake", category: "coffee", price: "$10.00", image: "/truffles-More_Cafe/Images/Cookies and cream milkshake.jpg", desc: "Classic cookies and cream milkshake." },
  { id: 30, name: "Espresso", category: "coffee", price: "$8.00", image: "/truffles-More_Cafe/Images/download (29).jpg", desc: "Strong and bold single shot espresso." },
  { id: 31, name: "Chocolate Cupcake", category: "cupcakes", price: "$24.00", image: "/truffles-More_Cafe/Images/Chocolate Cupcakes 💕.jpg", desc: "Classic chocolate cupcake." },
  { id: 32, name: "Chocolate Cake", category: "cakes", price: "$50.00", image: "/truffles-More_Cafe/Images/Chocolate Cake Decorations for All Skill Levels.jpg", desc: "Beautiful chocolate cake for all skill levels." },
  { id: 33, name: "AI Art Cake", category: "cakes", price: "$70.00", image: "/truffles-More_Cafe/Images/CAKE decor, AI art.jpg", desc: "Custom AI art designed cake." },
  { id: 34, name: "Fruit Tart", category: "pastries", price: "$20.00", image: "/truffles-More_Cafe/Images/download (44).jpg", desc: "Fresh fruit tart with vanilla custard." },
  { id: 35, name: "Latte", category: "coffee", price: "$10.00", image: "/truffles-More_Cafe/Images/download (30).jpg", desc: "Smooth and creamy latte." },
  { id: 36, name: "Cappuccino", category: "coffee", price: "$10.00", image: "/truffles-More_Cafe/Images/download (31).jpg", desc: "Classic Italian cappuccino." },
  { id: 37, name: "Vanilla Bean Cake", category: "cakes", price: "$45.00", image: "/truffles-More_Cafe/Images/download (35).jpg", desc: "Classic vanilla bean cake with buttercream." },
  { id: 38, name: "Red Velvet Cake", category: "cakes", price: "$52.00", image: "/truffles-More_Cafe/Images/download (36).jpg", desc: "Classic red velvet with cream cheese frosting." },
  { id: 39, name: "Lemon Macarons", category: "macarons", price: "$26.00", image: "/truffles-More_Cafe/Images/download (37).jpg", desc: "Zesty lemon macarons with lemon curd." },
  { id: 40, name: "Pistachio Macarons", category: "macarons", price: "$32.00", image: "/truffles-More_Cafe/Images/download (38).jpg", desc: "Crunchy pistachio with creamy filling." },
  { id: 41, name: "Coffee Macarons", category: "macarons", price: "$28.00", image: "/truffles-More_Cafe/Images/download (39).jpg", desc: "Coffee-infused macarons with espresso." },
  { id: 42, name: "Vanilla Cupcake", category: "cupcakes", price: "$22.00", image: "/truffles-More_Cafe/Images/download (40).jpg", desc: "Classic vanilla cupcake with vanilla frosting." },
  { id: 43, name: "Strawberry Cupcake", category: "cupcakes", price: "$24.00", image: "/truffles-More_Cafe/Images/download (41).jpg", desc: "Fresh strawberry topped cupcake." },
  { id: 44, name: "Peanut Butter Cupcake", category: "cupcakes", price: "$26.00", image: "/truffles-More_Cafe/Images/download (42).jpg", desc: "Peanut butter frosting with Reese's." },
  { id: 45, name: "Red Velvet Cupcake", category: "cupcakes", price: "$24.00", image: "/truffles-More_Cafe/Images/download (43).jpg", desc: "Red velvet with cream cheese frosting." },
  { id: 46, name: "Croissant", category: "pastries", price: "$12.00", image: "/truffles-More_Cafe/Images/download (45).jpg", desc: "Buttery flaky croissant." },
  { id: 47, name: "Pain au Chocolat", category: "pastries", price: "$14.00", image: "/truffles-More_Cafe/Images/download (46).jpg", desc: "Chocolate-filled croissant." },
  { id: 48, name: "Danish Pastry", category: "pastries", price: "$10.00", image: "/truffles-More_Cafe/Images/download (33).jpg", desc: "Fruit-filled Danish pastry." },
  { id: 49, name: "Cinnamon Rolls", category: "pastries", price: "$16.00", image: "/truffles-More_Cafe/Images/download (34).jpg", desc: "Warm cinnamon rolls with cream cheese frosting." },
  { id: 50, name: "Palmier", category: "pastries", price: "$8.00", image: "/truffles-More_Cafe/Images/download (32).jpg", desc: "Caramel-coated puff pastry." },
  { id: 51, name: "Oreo Cookies", category: "cookies", price: "$12.00", image: "/truffles-More_Cafe/Images/Recipes Corner.jpg", desc: "Oreo crushed chocolate cookies." },
  { id: 52, name: "Snickerdoodle", category: "cookies", price: "$14.00", image: "/truffles-More_Cafe/Images/Yapay Zeka ile.jpg", desc: "Cinnamon sugar cookies." },
  { id: 53, name: " Oatmeal Cookies", category: "cookies", price: "$13.00", image: "/truffles-More_Cafe/Images/AmandaRecipes.jpg", desc: "Chewy oatmeal raisin cookies." },
  { id: 54, name: "Gingerbread", category: "cookies", price: "$15.00", image: "/truffles-More_Cafe/Images/Post by @the-photograph · 1 image.jpg", desc: "Spiced gingerbread cookies." },
  { id: 55, name: "Dark Chocolate Bar", category: "chocolates", price: "$18.00", image: "/truffles-More_Cafe/Images/download (27).jpg", desc: "70% dark chocolate bar." },
  { id: 56, name: "Milk Chocolate", category: "chocolates", price: "$15.00", image: "/truffles-More_Cafe/Images/download (28).jpg", desc: "Creamy milk chocolate." },
  { id: 57, name: "White Chocolate", category: "chocolates", price: "$14.00", image: "/truffles-More_Cafe/Images/download (29).jpg", desc: "Sweet white chocolate." },
  { id: 58, name: "Mocha", category: "coffee", price: "$12.00", image: "/truffles-More_Cafe/Images/CASTLE101 ⚜️.jpg", desc: "Espresso with chocolate and milk." },
  { id: 59, name: "Cold Brew", category: "coffee", price: "$9.00", image: "/truffles-More_Cafe/Images/download (30).jpg", desc: "Smooth cold brew coffee." },
  { id: 60, name: "Americano", category: "coffee", price: "$7.00", image: "/truffles-More_Cafe/Images/download (31).jpg", desc: "Espresso with hot water." },
  { id: 61, name: "Macchiato", category: "coffee", price: "$9.00", image: "/truffles-More_Cafe/Images/download (45).jpg", desc: "Espresso with milk foam." },
  { id: 62, name: "Flat White", category: "coffee", price: "$11.00", image: "/truffles-More_Cafe/Images/download (46).jpg", desc: "Smooth espresso with microfoam." },
  { id: 63, name: "Affogato", category: "coffee", price: "$14.00", image: "/truffles-More_Cafe/Images/Recipes Corner.jpg", desc: "Ice cream with espresso shot." },
  { id: 64, name: " Wedding Cake", category: "cakes", price: "$150.00", image: "/truffles-More_Cafe/Images/22 Delightful Wedding Cupcake Ideas for Sweet___ (1).jpg", desc: "Elegant multi-tier wedding cake." },
  { id: 65, name: "Rainbow Cake", category: "cakes", price: "$55.00", image: "/truffles-More_Cafe/Images/Pastel Stylized Visual Dessert Inspiration.jpg", desc: "Colorful rainbow layered cake." },
  { id: 66, name: "Cookies & Cream Cake", category: "cakes", price: "$48.00", image: "/truffles-More_Cafe/Images/#cake.jpg", desc: "Oreo cookies and cream cake." },
  { id: 67, name: "Strawberry Macarons", category: "macarons", price: "$30.00", image: "/truffles-More_Cafe/Images/download (40).jpg", desc: "Fresh strawberry macarons." },
  { id: 68, name: "Hazelnut Cookies", category: "cookies", price: "$15.00", image: "/truffles-More_Cafe/Images/download (41).jpg", desc: "Hazelnut chocolate chunk cookies." },
  { id: 69, name: "Espresso Brownie", category: "cookies", price: "$16.00", image: "/truffles-More_Cafe/Images/download (42).jpg", desc: "Coffee-infused chocolate brownies." },
  { id: 70, name: "Truffle Box", category: "chocolates", price: "$45.00", image: "/truffles-More_Cafe/Images/download (43).jpg", desc: "Assorted chocolate truffles." }
];

const Products = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="bg-brand-light-pink min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-mirabelle text-brand-dark-mauve mb-2 md:mb-4">The Collections</h1>
          <p className="text-xs tracking-[0.3em] text-brand-gold uppercase">Curated Artisan Delights</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 space-y-6 md:space-y-0 border-b border-brand-accent-pink/30 pb-6 md:pb-8">
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:space-x-8 text-[10px] font-bold tracking-[0.2em] uppercase">
            {['all', 'cakes', 'macarons', 'cupcakes', 'pastries', 'chocolates', 'cookies', 'coffee'].map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`transition-all duration-300 relative ${filter === cat ? 'text-brand-dark-mauve' : 'text-brand-dark-mauve/40 hover:text-brand-gold'}`}
              >
                {cat}
                {filter === cat && (
                  <motion.div layoutId="underline" className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-gold" />
                )}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-48 lg:w-64 group">
            <input 
              type="text" 
              placeholder="SEARCH..." 
              className="w-full bg-transparent border-b border-brand-dark-mauve/20 py-2 pl-8 text-xs tracking-widest outline-none focus:border-brand-gold transition-colors"
            />
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark-mauve/40 group-focus-within:text-brand-gold" />
          </div>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {filteredProducts.map(product => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => setSelectedProduct(product)}
              className="cursor-pointer group"
            >
<div className="relative aspect-square mb-6 overflow-hidden rounded-3xl shadow-xl bg-brand-accent-pink/30">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                <div className="absolute inset-0 bg-brand-dark-mauve/0 group-hover:bg-brand-dark-mauve/10 transition-all duration-500" />
                <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white p-3 rounded-full shadow-lg text-brand-dark-mauve hover:text-brand-gold">
                    <ShoppingBag size={20} />
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-serif text-brand-dark-mauve mb-1">{product.name}</h3>
                <p className="text-brand-gold font-bold tracking-widest text-sm">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-brand-dark-mauve/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-brand-off-white w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProduct(null)}
                className="absolute top-8 right-8 z-10 p-2 bg-brand-off-white/80 rounded-full hover:bg-brand-gold hover:text-white transition-all shadow-md"
              >
                <X size={20} />
              </button>
              
              <div className="md:w-1/2 aspect-square bg-brand-accent-pink/30 flex items-center justify-center">
                <img src={selectedProduct.image} className="w-full h-full object-cover p-4" alt={selectedProduct.name} />
              </div>
              
              <div className="md:w-1/2 p-12 flex flex-col justify-center">
                <h2 className="text-4xl font-serif text-brand-dark-mauve mb-4">{selectedProduct.name}</h2>
                <div className="flex items-center space-x-1 text-brand-gold mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                  <span className="text-[10px] text-brand-dark-mauve/40 ml-2 tracking-widest uppercase">(12 REVIEWS)</span>
                </div>
                <p className="text-brand-dark-mauve/70 text-sm leading-loose mb-8 font-light italic">
                  {selectedProduct.desc}
                </p>
                <p className="text-3xl font-serif text-brand-dark-mauve mb-10">{selectedProduct.price}</p>
                
                <div className="flex items-center space-x-6 mb-12">
                  <div className="flex items-center space-x-4 border border-brand-dark-mauve/20 rounded-full px-6 py-3">
                    <button onClick={() => setQuantity(Math.max(1, quantity-1))}><Minus size={14} /></button>
                    <span className="text-sm font-bold w-4 text-center">{quantity}</span>
                    <button onClick={() => setQuantity(quantity+1)}><Plus size={14} /></button>
                  </div>
                  <button 
                    onClick={() => {
                      addToCart(selectedProduct, quantity);
                      setSelectedProduct(null);
                    }}
                    className="flex-1 bg-brand-gold text-white rounded-full py-4 text-xs font-bold tracking-[0.2em] hover:bg-brand-dark-mauve transition-all shadow-xl shadow-brand-dark-mauve/10"
                  >
                    ADD TO CART
                  </button>
                </div>
                
                <p className="text-[8px] tracking-[0.3em] uppercase text-brand-dark-mauve/40 border-t border-brand-dark-mauve/10 pt-6">
                  SKU: DELIGHT-{selectedProduct.id}00 | CATEGORY: {selectedProduct.category}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default Products;

