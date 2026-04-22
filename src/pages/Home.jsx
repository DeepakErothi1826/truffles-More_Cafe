import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Clock, Gift, Heart, Coffee, Utensils, ChevronLeft, ChevronRight } from 'lucide-react';

const Home = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/truffles-More_Cafe/Images/side_coffee_Hero.png",
      image2: "/coffee-hero.png",
      headline: "Welcome to Truffles & More",
      subheadline: "Artisan Bakery & Coffee House",
      content: "We are passionate artisans crafting exquisite desserts with love since 2010. From handcrafted cakes to delicate macarons, every bite tells a story of dedication and perfection.",
      features: ["Since 2010", "Handcrafted with Love", "Premium Quality"],
      ctaText: "OUR STORY",
      ctaLink: "/about"
    },
    {
      image: "/truffles-More_Cafe/Images/side_coffee_Hero.png",
      image2: "/coffee-hero.png",
      headline: "Handcrafted Perfection",
      subheadline: "Baked with Passion",
      content: "Every creation is made with premium ingredients from around the world. Our master bakers combine traditional French techniques with modern innovation to deliver extraordinary flavors.",
      features: ["Single-Origin Cocoa", "Madagascar Vanilla", "Fresh Fruits"],
      ctaText: "VIEW PRODUCTS",
      ctaLink: "/products"
    },
    {
      image: "/truffles-More_Cafe/Images/side_coffee_Hero.png",
      image2: "/coffee-hero.png",
      headline: "Fresh Daily Bakes",
      subheadline: "Baked Fresh Every Morning",
      content: "Wake up to the aroma of freshly baked goods. Our pastries, breads, and cakes are made fresh each morning using time-honored recipes and the finest ingredients.",
      features: ["Morning Fresh Bakes", "Organic Ingredients", "No Preservatives"],
      ctaText: "ORDER NOW",
      ctaLink: "/products"
    },
    {
      image: "/truffles-More_Cafe/Images/side_coffee_Hero.png",
      image2: "/coffee-hero.png",
      headline: "Delight in every Bite!",
      subheadline: "Experience True Indulgence",
      content: "Every bite is a journey through the artisan streets of Paris, crafted with love and gold. Discover our range of luxuries cakes, artisan chocolates, and handcrafted beverages.",
      features: ["Gold Leaf Toppings", "Artisan Coffee", "Custom Cakes"],
      ctaText: "SHOP NOW",
      ctaLink: "/products"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const categories = [
    {
      title: "Cakes",
      desc: "Artisan cakes for every celebration.",
      image: "/truffles-More_Cafe/Images/Chocolate Cake & Berry Dessert.jpg",
    },
    {
      title: "Macarons",
      desc: "Delicate French macarons in assorted flavors.",
      image: "/truffles-More_Cafe/Images/macarons.jpg",
    },
    {
      title: "Cupcakes",
      desc: "Bite-sized masterpieces of flavor.",
      image: "/truffles-More_Cafe/Images/Chocolate Truffle Cupcake – Gold Hazelnut Luxury.jpg",
    },
    {
      title: "Pastries",
      desc: "Flaky pastries and sweet treats.",
      image: "/truffles-More_Cafe/Images/Blueberry Lavender Tartlet.jpg",
    },
    {
      title: "Chocolates",
      desc: "Rich and decadent chocolates.",
      image: "/truffles-More_Cafe/Images/Mint Chocolate Dream Dessert.jpg",
    },
    {
      title: "Cookies",
      desc: "Sweet and savory cookies.",
      image: "/truffles-More_Cafe/Images/Cream Cheese Stuffed Red Velvet Cookies – The Best 7 Tips.jpg",
    },
    {
      title: "Coffee",
      desc: "Premium coffee and drinks.",
      image: "/truffles-More_Cafe/Images/Starbucks Double Chocolate Chip Frappuccino - Insanely Good.jpg",
    },
    {
      title: "Premium Cakes",
      desc: "Luxury cakes for special occasions.",
      image: "/truffles-More_Cafe/Images/CAKE decor, AI art.jpg",
    }
  ];

  return (
    <div className="relative overflow-hidden bg-brand-light-pink min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative min-h-[60vh] md:h-[70vh] overflow-hidden">
        {/* Background Images - only show for slides 1,2,3 */}
        {currentSlide !== 0 && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -left-10 top-0 w-1/2 h-full">
              <img
                src={slides[currentSlide].image}
                alt="Truffles&More Coffee Hero"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute left-0 top-0 w-1/2 h-full flex items-center justify-end">
              <img
                src={slides[currentSlide].image2}
                alt="Coffee img"
                className="w-1/2 h-3/4 object-contain ml-32"
              />
            </div>
          </div>
        )}

        <div className={`container mx-auto px-4 md:px-6 z-10 w-full h-full flex items-center ${currentSlide === 0 ? '' : 'justify-end'}`}>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: currentSlide === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: currentSlide === 0 ? -50 : 50 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={currentSlide === 0 ? "max-w-lg lg:max-w-xl text-center lg:text-left pl-0 lg:pl-8" : "max-w-lg lg:max-w-xl text-center lg:text-right"}
            >
              <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] text-brand-gold mb-3 font-light">{slides[currentSlide].subheadline}</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-script text-brand-dark-mauve mb-4 md:mb-5 leading-tight">
                {slides[currentSlide].headline}
              </h1>
              <p className="text-sm md:text-base text-brand-dark-mauve/80 mb-5 md:mb-6 max-w-md lg:max-w-lg mx-auto lg:ml-auto leading-relaxed">
                {slides[currentSlide].content}
              </p>
              <div className={`flex flex-wrap gap-2 md:gap-3 justify-center ${currentSlide === 0 ? 'lg:justify-start' : 'lg:justify-end'} mb-5 md:mb-6`}>
                {slides[currentSlide].features?.map((feature, idx) => (
                  <span key={idx} className="px-3 py-1 bg-brand-gold/20 text-brand-dark-mauve text-xs font-semibold rounded-full">
                    {feature}
                  </span>
                ))}
              </div>
              <div className={`flex flex-col sm:flex-row gap-3 justify-center ${currentSlide === 0 ? 'lg:justify-start' : 'lg:justify-end'}`}>
                <Link to={slides[currentSlide].ctaLink} className="px-8 md:px-10 py-3 bg-brand-dark-mauve text-white rounded-full font-bold tracking-widest text-xs hover:bg-[#2d1a2d] transition-all shadow-lg">
                  {slides[currentSlide].ctaText}
                </Link>
                <Link to="/about" className="px-8 md:px-10 py-3 bg-white text-brand-dark-mauve border-2 border-brand-dark-mauve rounded-full font-bold tracking-widest text-xs hover:bg-brand-dark-mauve hover:text-white transition-all shadow-lg">
                  OUR STORY
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-brand-dark-mauve/20 backdrop-blur-sm rounded-full hover:bg-brand-dark-mauve/40 transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-brand-dark-mauve" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 bg-brand-dark-mauve/20 backdrop-blur-sm rounded-full hover:bg-brand-dark-mauve/40 transition-all"
        >
          <ChevronRight className="w-6 h-6 text-brand-dark-mauve" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === idx ? 'bg-brand-gold w-8' : 'bg-brand-dark-mauve/30 hover:bg-brand-dark-mauve/50'}`}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-10 md:py-14 lg:py-16 pb-32 md:pb-40 bg-brand-dark-mauve/90">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-xl md:text-2xl font-script text-brand-gold mb-1">Exquisite</h3>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-serif text-brand-light-pink uppercase tracking-widest">The Collections</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
            {categories.map((cat, idx) => (
              <Link to="/products" key={idx}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  className="group relative overflow-hidden bg-white rounded-2xl shadow-2xl hover:shadow-brand-gold/10 transition-all duration-500 mb-6 md:mb-10"
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-0 w-full px-4">
                    <h3 className="text-lg font-serif text-white mb-1 decoration-brand-gold underline-offset-4 decoration-2">{cat.title}</h3>
                    <p className="text-xs text-white/70 mb-3 font-light">{cat.desc}</p>
                    <span className="flex items-center text-xs font-bold tracking-[0.2em] text-white hover:text-brand-gold transition-colors">
                      EXPLORE <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Provenance & Passion Section */}
      <section className="py-20 bg-[#fdfcf8]">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#2d1b14] mb-4">The Quest for Perfection</h2>
            <div className="border-b-2 border-[#c5a059] w-20 mx-auto"></div>
          </div>

          {/* Intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-[#4a4a4a] leading-relaxed font-sans">
              At Truffles & More, we believe that a truly extraordinary dessert begins long before the oven is preheated. It is a journey of discovery across the globe—a refusal to compromise on the elements that turn simple ingredients into edible art.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16">
            {/* Feature 1 */}
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#c5a059]/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">🫘</span>
              </div>
              <h3 className="text-xl font-serif text-[#2d1b14] mb-3">Volcanic Cocoa</h3>
              <p className="text-[#4a4a4a] font-sans leading-relaxed">
                We source our single-origin cocoa from the volcanic soils of Ecuador, where beans are hand-selected by masters of the craft.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#c5a059]/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">🌼</span>
              </div>
              <h3 className="text-xl font-serif text-[#2d1b14] mb-3">The Gold Standard</h3>
              <p className="text-[#4a4a4a] font-sans leading-relaxed">
                For our premium cakes, we use only Madagascar Bourbon vanilla and grass-fed European butter for that unmistakable, velvet crumb.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-6 bg-[#c5a059]/10 rounded-full flex items-center justify-center">
                <span className="text-3xl">☕</span>
              </div>
              <h3 className="text-xl font-serif text-[#2d1b14] mb-3">High-Altitude Brew</h3>
              <p className="text-[#4a4a4a] font-sans leading-relaxed">
                Our coffee is sourced from small-lot farms in Ethiopia and Colombia—shade-grown, ethically harvested, and roasted in small, precise batches.
              </p>
            </div>
          </div>

          {/* Closing Manifesto */}
          <div className="text-center max-w-4xl mx-auto pt-8 border-t border-[#c5a059]/30">
            <p className="text-xl md:text-2xl font-serif text-[#2d1b14] mb-6 italic">
              "Quality is not an act, but a habit."
            </p>
            <p className="text-[#4a4a4a] font-sans leading-relaxed mb-8">
              Whether it is the 24k gold leaf gracing our artisanal creations or the single-origin espresso in your morning latte, our promise is simple: we bring you the world's finest ingredients, curated with passion, and served with pride. Because for us, anything less than the best simply isn't Truffles & More.
            </p>
            <button className="px-10 py-4 bg-[#c5a059] text-white rounded-full font-bold tracking-widest text-sm hover:bg-[#2d1b14] transition-all duration-300 shadow-xl">
              OUR STORY
            </button>
          </div>
        </div>
      </section>

      {/* Holiday Promo */}
      <section className="py-16 md:py-24 bg-brand-accent-pink relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-brand-dark-mauve rounded-2xl md:rounded-[3rem] p-6 md:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl border border-brand-accent-pink/50">
            <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
              <span className="inline-block px-3 md:px-4 py-1 bg-brand-gold text-brand-off-white text-[10px] font-bold tracking-[0.3em] uppercase rounded-full mb-4 md:mb-6">Limited Edition</span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-script text-brand-off-white mb-4 md:mb-6 leading-tight">Holiday Season - 20% OFF</h2>
              <p className="text-brand-off-white/70 mb-6 md:mb-10 max-w-md leading-relaxed mx-auto md:mx-0">
                Gift the taste of Paris this winter. Our holiday collections are now available for pre-order with exclusive seasonal flavors.
              </p>
              <button className="group flex items-center space-x-4 text-brand-off-white font-bold tracking-widest text-xs uppercase mx-auto md:mx-0">
                <span className="w-12 h-[1px] bg-brand-off-white group-hover:w-20 group-hover:bg-brand-gold transition-all" />
                <span className="group-hover:text-brand-gold transition-colors">Order Today</span>
              </button>
            </div>

            <motion.div
              className="md:w-1/2 relative h-[180px] md:h-[220px] lg:h-[280px] flex items-center justify-center"
            >
              {/* Cupcake Stand Visual */}
              <div className="relative z-10 w-full max-w-[200px] md:max-w-sm aspect-square bg-gradient-to-tr from-brand-accent-pink to-brand-dark-mauve rounded-full flex items-center justify-center p-4 md:p-8 shadow-inner shadow-brand-dark-mauve/10">
                <img
                  src="https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=800&auto=format&fit=crop"
                  alt="Holiday Cupcakes"
                  className="rounded-full shadow-2xl animate-float"
                />
              </div>
              {/* Floating accents */}
              <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 bg-brand-gold/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-10 left-10 w-20 md:w-32 h-20 md:h-32 bg-brand-accent-pink/30 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-14 md:py-20 bg-brand-light-pink">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { icon: <Clock className="w-8 h-8" />, title: "Fresh Daily", desc: "Baked fresh every morning" },
              { icon: <Gift className="w-8 h-8" />, title: "Gift Wrapping", desc: "Beautiful packaging available" },
              { icon: <Heart className="w-8 h-8" />, title: "Made with Love", desc: "Premium quality ingredients" },
              { icon: <Coffee className="w-8 h-8" />, title: "Free Delivery", desc: "On orders above $50" }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-4 md:p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-serif text-brand-dark-mauve mb-2">{feature.title}</h3>
                <p className="text-sm text-brand-dark-mauve/60">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-brand-dark-mauve text-brand-off-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-2xl md:text-4xl font-serif uppercase tracking-widest">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: "Sarah Johnson", text: "The best cupcakes I've ever had! Absolutely divine and beautifully presented.", rating: 5 },
              { name: "Michael Chen", text: "Ordered a custom cake for my daughter's birthday. It was stunning and delicious!", rating: 5 },
              { name: "Emily Davis", text: "Their macarons are authentic French perfection. I'm a customer for life!", rating: 5 }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/10 p-4 md:p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="flex text-brand-gold mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-brand-off-white/80 mb-6 italic">"{testimonial.text}"</p>
                <h4 className="font-serif text-lg">{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 md:py-24 bg-brand-accent-pink">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-2xl md:text-4xl font-script text-brand-gold mb-2">Follow Us</h3>
            <h2 className="text-2xl md:text-4xl font-serif text-brand-dark-mauve uppercase tracking-widest">@truffles&More</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2">
            {[
              "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=400&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=400&auto=format&fit=crop"
            ].map((img, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="aspect-square overflow-hidden rounded-xl cursor-pointer"
              >
                <img src={img} alt="Instagram" className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-brand-accent-pink/20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-xl md:text-2xl font-script text-brand-dark-mauve mb-2">Stay Sweet!</h2>
          <p className="text-brand-dark-mauve/70 mb-6 md:mb-8 max-w-md mx-auto">Subscribe to get exclusive offers and updates on new arrivals.</p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-full border border-brand-dark-mauve/20 focus:border-brand-gold outline-none text-sm md:text-base"
              required
            />
            <button type="submit" className="px-8 md:px-10 py-3 md:py-4 bg-brand-dark-mauve text-brand-off-white rounded-full font-bold tracking-widest text-xs hover:bg-brand-gold transition-all">
              SUBSCRIBE
            </button>
          </form>
          {subscribed && <p className="text-brand-gold mt-4 font-medium">Thank you for subscribing!</p>}
        </div>
      </section>
    </div>
  );
};

export default Home;
