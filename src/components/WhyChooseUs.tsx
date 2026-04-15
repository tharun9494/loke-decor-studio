import { motion } from "framer-motion";
import { Shield, Truck, Users, BadgeIndianRupee, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Top Quality Materials", desc: "Only trusted brands and premium-grade products" },
  { icon: Truck, title: "Same Day Delivery", desc: "Quick delivery within Tirupati & surrounding areas" },
  { icon: Users, title: "Expert Guidance", desc: "Experienced team to help with product selection" },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", desc: "Competitive rates without compromising quality" },
  { icon: ThumbsUp, title: "Trusted by Customers", desc: "Hundreds of satisfied clients across the region" },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-gradient-dark">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-body font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3" style={{ color: 'hsl(0,0%,98%)' }}>
            The Loke PM Decor Advantage
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-lg border border-gold/10 hover:border-gold/30 transition-colors bg-[hsl(0,0%,12%)]"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-base font-semibold mb-2" style={{ color: 'hsl(0,0%,95%)' }}>{item.title}</h3>
              <p className="font-body text-sm" style={{ color: 'hsl(0,0%,55%)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
