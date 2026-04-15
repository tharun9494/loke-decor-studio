import { motion } from "framer-motion";
import { Phone, MessageCircle, Truck } from "lucide-react";
import heroImg from "@/assets/hero-kitchen.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Premium modular kitchen interior" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-16 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm mb-8"
          >
            <Truck className="w-4 h-4 text-gold" />
            <span className="text-sm font-body text-gold-light">Same-Day Delivery Available</span>
          </motion.div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: 'hsl(0, 0%, 98%)' }}>
            Build Better Spaces with{" "}
            <span className="text-gradient-gold">Premium Interior</span>{" "}
            & Hardware Solutions
          </h1>

          <p className="font-body text-lg md:text-xl mb-10 leading-relaxed" style={{ color: 'hsl(0, 0%, 75%)' }}>
            Your trusted destination for hardware, interiors, modular fittings & decor in Tirupati.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://wa.me/918712359777?text=Hi%2C%20I%20need%20a%20free%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold font-body font-semibold text-primary rounded-lg hover:opacity-90 transition-opacity"
            >
              Get Free Quote
            </a>
            <a
              href="https://maps.google.com/?q=23-3-39,+MR+Palli+Rd,+Avilala,+Andhra+Pradesh+517502"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gold/40 font-body font-semibold rounded-lg hover:bg-gold/10 transition-colors"
              style={{ color: 'hsl(0, 0%, 98%)' }}
            >
              Visit Showroom
            </a>
          </div>
        </motion.div>
      </div>

      {/* Sticky buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/918712359777"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" style={{ color: 'white' }} />
        </a>
        <a
          href="tel:+918712359777"
          className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" style={{ color: 'hsl(0,0%,10%)' }} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
