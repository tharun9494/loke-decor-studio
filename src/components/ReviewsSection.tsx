import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState } from "react";

const reviews = [
  { name: "Rajesh Kumar", rating: 5, text: "Best hardware store in Tirupati! Great quality materials and very helpful staff. Highly recommended for interior projects.", location: "Tirupati" },
  { name: "Priya Sharma", rating: 5, text: "Excellent collection of modular kitchen fittings. Got same-day delivery. Very professional service!", location: "Avilala" },
  { name: "Venkatesh Reddy", rating: 5, text: "Amazing range of wall panels and laminates. The team helped me choose the perfect materials for my new home.", location: "Chandragiri" },
  { name: "Srinivas Rao", rating: 4, text: "Very satisfied with the plywood quality and pricing. They have everything you need under one roof.", location: "Tirupati" },
  { name: "Lakshmi Devi", rating: 5, text: "Wonderful experience! The staff is knowledgeable and helped us with our complete interior project.", location: "Renigunta" },
];

const ReviewsSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-body font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 text-foreground">What Our Clients Say</h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center p-10 rounded-xl bg-muted shadow-[var(--shadow-card)]"
          >
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: reviews[active].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="font-body text-lg text-foreground leading-relaxed mb-6 italic">
              "{reviews[active].text}"
            </p>
            <p className="font-heading text-lg font-semibold text-foreground">{reviews[active].name}</p>
            <p className="font-body text-sm text-muted-foreground">{reviews[active].location}</p>
          </motion.div>

          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === active ? "bg-gold" : "bg-border"}`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
