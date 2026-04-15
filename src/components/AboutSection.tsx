import { motion } from "framer-motion";
import showroomImg from "@/assets/showroom.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={showroomImg}
              alt="Loke PM Decor showroom"
              loading="lazy"
              width={1024}
              height={1024}
              className="w-full rounded-lg shadow-[var(--shadow-premium)] object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-gold rounded-lg flex items-center justify-center">
              <div className="text-center">
                <span className="block font-heading text-2xl font-bold" style={{ color: 'hsl(0,0%,10%)' }}>10+</span>
                <span className="block font-body text-xs font-medium" style={{ color: 'hsl(0,0%,10%)' }}>Years Trust</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold font-body font-semibold text-sm uppercase tracking-widest">About Us</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-6 text-foreground">
              Crafting Beautiful Spaces Since Day One
            </h2>
            <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
              Loke PM Decor provides high-quality hardware materials, interior fittings, modular solutions, and decor essentials to transform homes and commercial spaces.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Located in the heart of Avilala, Tirupati, we are the go-to destination for builders, architects, interior designers and homeowners looking for premium materials at competitive prices.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { num: "5000+", label: "Products" },
                { num: "1000+", label: "Happy Clients" },
                { num: "100+", label: "Projects Done" },
                { num: "24hr", label: "Fast Delivery" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-lg bg-muted">
                  <span className="block font-heading text-2xl font-bold text-gradient-gold">{stat.num}</span>
                  <span className="block font-body text-sm text-muted-foreground mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
