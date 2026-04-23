import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="bg-brand-light-pink min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10 md:mb-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-script text-brand-dark-mauve mb-2 md:mb-4">Connect with Us</h1>
          <p className="text-[10px] tracking-[0.5em] text-brand-gold uppercase">Inquiry & Reservations</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 bg-brand-accent-pink rounded-2xl lg:rounded-[4rem] p-6 md:p-12 lg:p-20 shadow-2xl border border-brand-accent-pink/50 overflow-hidden relative">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent-pink/20 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -ml-32 -mb-32" />

          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h2 className="text-4xl font-serif text-brand-dark-mauve mb-10 leading-tight">Visit our <span className="italic">Chic Boutique</span></h2>
            
            <div className="space-y-12">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-white rounded-2xl shadow-md text-brand-gold">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-brand-dark-mauve uppercase mb-2">Location</h4>
                  <p className="text-brand-dark-mauve/70 font-light leading-relaxed">
                    123 Avenue des Champs-Élysées<br />
                    75008 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-4 bg-white rounded-2xl shadow-md text-brand-gold">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-brand-dark-mauve uppercase mb-2">Phone</h4>
                  <p className="text-brand-dark-mauve/70 font-light leading-relaxed">
                    +33 (0) 1 23 45 67 89
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-4 bg-white rounded-2xl shadow-md text-brand-gold">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold tracking-widest text-brand-dark-mauve uppercase mb-2">Email</h4>
                  <p className="text-brand-dark-mauve/70 font-light leading-relaxed">
                    bonjour@delightpatisserie.com
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 grayscale opacity-80 rounded-3xl overflow-hidden h-64 shadow-inner border-4 border-white/50">
              <img 
                src="https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=800&auto=format&fit=crop" 
                alt="Map Placeholder" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-brand-dark-mauve rounded-[3rem] p-10 md:p-14 shadow-xl border border-brand-accent-pink/30 relative z-10"
          >
            <h3 className="text-2xl font-serif text-brand-off-white mb-8">Send a Sweet Note</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-brand-off-white uppercase ml-1">Your Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-brand-off-white/10 border-b border-brand-off-white/20 py-3 px-4 rounded-xl outline-none focus:border-brand-gold transition-colors text-sm text-brand-off-white placeholder:text-brand-off-white/50"
                  placeholder="JEAN DUPONT"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-brand-off-white uppercase ml-1">Email Address</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-brand-off-white/10 border-b border-brand-off-white/20 py-3 px-4 rounded-xl outline-none focus:border-brand-gold transition-colors text-sm text-brand-off-white placeholder:text-brand-off-white/50"
                  placeholder="JEAN@EXAMPLE.COM"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-brand-off-white uppercase ml-1">Message</label>
                <textarea 
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-brand-off-white/10 border-b border-brand-off-white/20 py-3 px-4 rounded-xl outline-none focus:border-brand-gold transition-colors text-sm resize-none text-brand-off-white placeholder:text-brand-off-white/50"
                  placeholder="TELL US ABOUT YOUR EVENT..."
                  required
                />
              </div>

              <button type="submit" className="w-full bg-brand-gold text-brand-off-white font-bold tracking-[0.3em] uppercase py-5 rounded-full hover:bg-brand-dark-mauve transition-all duration-300 flex items-center justify-center space-x-4 shadow-xl hover:shadow-brand-gold/20">
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
            {submitted && <p className="text-brand-gold text-center mt-4">Thank you! We'll be in touch soon.</p>}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;


