import { motion } from "framer-motion";
import { Gift, Truck, Users } from "lucide-react";

const OfferSection = () => {
  return (
    <section className="py-20 bg-gradient-gold relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6" style={{ color: 'hsl(0,0%,10%)' }}>
            Special Offers for You
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { icon: Gift, title: "Free Consultation", desc: "Expert interior advice at no cost" },
              { icon: Users, title: "Bulk Order Discounts", desc: "Special pricing for large projects" },
              { icon: Truck, title: "Same-Day Delivery", desc: "Get materials when you need them" },
            ].map((offer) => (
              <div key={offer.title} className="flex items-center gap-4 bg-background/90 backdrop-blur-sm px-6 py-4 rounded-lg shadow-[var(--shadow-card)]">
                <offer.icon className="w-8 h-8 text-gold" />
                <div className="text-left">
                  <h3 className="font-heading font-semibold text-foreground">{offer.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{offer.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
