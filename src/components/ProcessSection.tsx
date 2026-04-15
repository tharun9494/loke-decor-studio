import { motion } from "framer-motion";
import { Phone, MessageSquare, Package, Truck } from "lucide-react";

const steps = [
  { icon: Phone, num: "01", title: "Visit / Contact", desc: "Walk into our showroom or call us" },
  { icon: MessageSquare, num: "02", title: "Discuss Requirements", desc: "Share your project needs with our experts" },
  { icon: Package, num: "03", title: "Product Selection", desc: "Choose from our wide range of materials" },
  { icon: Truck, num: "04", title: "Delivery & Support", desc: "Fast delivery with installation guidance" },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-body font-semibold text-sm uppercase tracking-widest">How It Works</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 text-foreground">Simple 4-Step Process</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="font-heading text-6xl font-bold text-gradient-gold opacity-20 mb-2">{step.num}</div>
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 -mt-6">
                <step.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="font-body text-sm text-muted-foreground">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 border-t-2 border-dashed border-gold/30" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
