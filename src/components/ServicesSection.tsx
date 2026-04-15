import { motion } from "framer-motion";
import { ChefHat, DoorOpen, Layers, PanelTop, Wrench, Sparkles, MessageSquare } from "lucide-react";

const services = [
  { icon: ChefHat, title: "Modular Kitchen Materials", desc: "Premium fittings, baskets, hinges & accessories for modern kitchens" },
  { icon: DoorOpen, title: "Wardrobe Fittings", desc: "Channels, handles, soft-close systems & organizers" },
  { icon: Layers, title: "Plywood & Laminates", desc: "Top-grade plywood, decorative laminates & veneers" },
  { icon: PanelTop, title: "Wall Panels", desc: "WPC, PVC, charcoal & fluted wall panel solutions" },
  { icon: Wrench, title: "Furniture Hardware", desc: "Locks, hinges, drawer systems, slides & knobs" },
  { icon: Sparkles, title: "Decorative Solutions", desc: "Profiles, edge bands, decorative films & more" },
  { icon: MessageSquare, title: "Interior Consultation", desc: "Expert guidance for your interior project needs" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-body font-semibold text-sm uppercase tracking-widest">Our Services</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Complete Interior & Hardware Solutions
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-background p-8 rounded-lg shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow cursor-pointer overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center mb-5 group-hover:bg-gold/10 transition-colors">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
