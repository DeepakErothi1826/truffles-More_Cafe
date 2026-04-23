import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Award, Clock, Heart, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-brand-light-pink min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2000&auto=format&fit=crop" 
            alt="French Kitchen"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
        </div>
        <div className="text-center z-10 px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-7xl md:text-9xl font-script text-brand-dark-mauve mb-4"
          >
            Our Story
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[2px] bg-brand-gold mx-auto"
          />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-serif text-brand-dark-mauve mb-8 leading-tight">
                Crafting Sweetness with <span className="italic">Artisan Heritage</span>
              </h2>
              <p className="text-brand-dark-mauve/70 leading-loose mb-6 font-light">
                Founded in the heart of Paris and now delighting souls everywhere, our patisserie was born from a simple belief: that every dessert should be a masterpiece of both flavor and form.
              </p>
              <p className="text-brand-dark-mauve/70 leading-loose font-light">
                We source only the finest ingredients—Madagascar vanilla beans, pure Belgian chocolate, and seasonal fruits from local orchards—to ensure that every bite carries the essence of perfection.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1595155731313-b18464814bb1?q=80&w=1000&auto=format&fit=crop" 
                alt="Our master pastry chef crafting artisanal French pastries at Truffles&More" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-[1.5rem] border-white/20 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-brand-dark-mauve">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
            <div className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden shadow-lg group">
              <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Macarons" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Cupcakes" />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg group">
              <img src="https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Cake prep" />
            </div>
            <div className="md:col-span-2 rounded-2xl overflow-hidden shadow-lg group">
              <img src="https://images.unsplash.com/photo-1587668178277-295251f900ce?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Display" />
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="flex justify-center items-center py-20 space-x-6 opacity-30">
        <div className="w-24 h-[1px] bg-brand-gold" />
        <Star className="text-brand-gold fill-brand-gold" size={16} />
        <div className="w-24 h-[1px] bg-brand-gold" />
      </div>

      {/* Values Section */}
      <section className="py-24 px-6 bg-brand-accent-pink/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-dark-mauve uppercase tracking-widest mb-4">Our Values</h2>
            <p className="text-brand-dark-mauve/60 max-w-2xl mx-auto">The principles that guide every creation we make</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Award size={32} />, title: "Premium Quality", desc: "Only the finest ingredients selected from trusted sources worldwide" },
              { icon: <Clock size={32} />, title: "Fresh Daily", desc: "Baked fresh every morning to ensure maximum flavor" },
              { icon: <Heart size={32} />, title: "Made with Love", desc: "Every recipe is crafted with passion and care" },
              { icon: <Leaf size={32} />, title: "Natural", desc: "No artificial preservatives or additives ever" }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold">
                  {value.icon}
                </div>
                <h3 className="text-lg font-serif text-brand-dark-mauve mb-2">{value.title}</h3>
                <p className="text-sm text-brand-dark-mauve/60">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-dark-mauve uppercase tracking-widest mb-4">Meet Our Master Chefs</h2>
            <p className="text-brand-dark-mauve/60 max-w-2xl mx-auto">The talented artisans behind our creations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Chef Marie Laurent", role: "Pastry Chef", image: "https://images.unsplash.com/photo-1583337130417-3346a60955f0?q=80&w=400&auto=format&fit=crop" },
              { name: "Chef Alexandre Dubois", role: "Chocolate Specialist", image: "https://images.unsplash.com/photo-1599599810769-bcde1a45c6b2?q=80&w=400&auto=format&fit=crop" },
              { name: "Chef Sophie Bernard", role: "Cake Designer", image: "https://images.unsplash.com/photo-1566492031773-7c0d5b97a2f0?q=80&w=400&auto=format&fit=crop" }
            ].map((chef, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl mb-6">
                  <img src={chef.image} alt={chef.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-serif text-brand-dark-mauve">{chef.name}</h3>
                <p className="text-sm text-brand-gold tracking-widest uppercase">{chef.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-24 px-6 bg-brand-dark-mauve">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-brand-off-white uppercase tracking-widest mb-4">Recognition & Awards</h2>
            <p className="text-brand-off-white/60 max-w-2xl mx-auto">Our dedication recognized by industry experts</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { year: "2025", title: "Best Artisan Patisserie", award: "Paris Food Awards" },
              { year: "2024", title: "Excellence in Baking", award: "Culinary Masters" },
              { year: "2023", title: "Best Chocolate Cake", award: "Sweet Festival" }
            ].map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm"
              >
                <span className="inline-block px-4 py-1 bg-brand-gold text-brand-off-white text-xs font-bold tracking-[0.3em] uppercase rounded-full mb-4">{award.year}</span>
                <h3 className="text-xl font-serif text-brand-off-white mb-2">{award.title}</h3>
                <p className="text-brand-off-white/60 text-sm">{award.award}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-script text-brand-dark-mauve mb-6">Experience the Magic</h2>
          <p className="text-brand-dark-mauve/70 mb-10 max-w-2xl mx-auto">
            We invite you to visit our boutique or order online to experience the true taste of artisan patisserie.
          </p>
          <div className="flex space-x-6 justify-center">
            <Link to="/products" className="px-10 py-4 bg-brand-dark-mauve text-brand-off-white rounded-full font-bold tracking-widest text-xs hover:bg-brand-gold transition-all duration-300 shadow-xl">
              EXPLORE MENU
            </Link>
            <Link to="/contact" className="px-10 py-4 border border-brand-dark-mauve text-brand-dark-mauve rounded-full font-bold tracking-widest text-xs hover:bg-brand-dark-mauve hover:text-brand-off-white transition-all duration-300">
              CONTACT US
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


