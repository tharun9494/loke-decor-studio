import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

import galleryKitchen from "@/assets/gallery-kitchen.jpg";
import galleryKitchen2 from "@/assets/gallery-kitchen2.jpg";
import galleryWardrobe from "@/assets/gallery-wardrobe.jpg";
import galleryWardrobe2 from "@/assets/gallery-wardrobe2.jpg";
import galleryHardware from "@/assets/gallery-hardware.jpg";
import galleryHardware2 from "@/assets/gallery-hardware2.jpg";
import galleryDecor from "@/assets/gallery-decor.jpg";
import galleryDecor2 from "@/assets/gallery-decor2.jpg";

type Category = "All" | "Kitchens" | "Wardrobes" | "Hardware" | "Decor";

const categories: Category[] = ["All", "Kitchens", "Wardrobes", "Hardware", "Decor"];

const galleryItems = [
  { src: galleryKitchen, alt: "Premium modular kitchen with marble countertop", category: "Kitchens" as Category, title: "Modular Kitchen" },
  { src: galleryHardware, alt: "Premium hardware fittings display", category: "Hardware" as Category, title: "Cabinet Hardware" },
  { src: galleryWardrobe, alt: "Modern sliding wardrobe", category: "Wardrobes" as Category, title: "Sliding Wardrobe" },
  { src: galleryDecor, alt: "Decorative wall panels and laminates", category: "Decor" as Category, title: "Wall Panels & Decor" },
  { src: galleryKitchen2, alt: "Luxury kitchen island with pendant lights", category: "Kitchens" as Category, title: "Kitchen Island" },
  { src: galleryWardrobe2, alt: "Walk-in closet with LED lighting", category: "Wardrobes" as Category, title: "Walk-in Closet" },
  { src: galleryHardware2, alt: "Gold and silver door handles collection", category: "Hardware" as Category, title: "Door Handles" },
  { src: galleryDecor2, alt: "Fluted wall panels in living room", category: "Decor" as Category, title: "Fluted Panels" },
];

const GallerySection = () => {
  const [active, setActive] = useState<Category>("All");
  const [zoomed, setZoomed] = useState<number | null>(null);

  const filtered = active === "All" ? galleryItems : galleryItems.filter((item) => item.category === active);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-gold font-body font-semibold text-sm uppercase tracking-widest">
            Our Showroom
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 text-foreground">
            Product & Showroom Gallery
          </h2>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-gradient-gold text-foreground shadow-[var(--shadow-hover)]"
                  : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-foreground"
              }`}
              style={active === cat ? { color: "hsl(0,0%,10%)" } : undefined}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group relative cursor-pointer rounded-lg overflow-hidden aspect-[4/3]"
                onClick={() => setZoomed(galleryItems.indexOf(item))}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <ZoomIn className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h4 className="font-heading text-sm md:text-base font-semibold" style={{ color: "hsl(0,0%,98%)" }}>
                    {item.title}
                  </h4>
                  <span className="font-body text-xs" style={{ color: "hsl(40,60%,70%)" }}>
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {zoomed !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setZoomed(null)}
          >
            <button
              onClick={() => setZoomed(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-foreground/20 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" style={{ color: "hsl(0,0%,98%)" }} />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              src={galleryItems[zoomed].src}
              alt={galleryItems[zoomed].alt}
              className="max-w-full max-h-[85vh] rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 text-center" onClick={(e) => e.stopPropagation()}>
              <h3 className="font-heading text-xl font-semibold" style={{ color: "hsl(0,0%,98%)" }}>
                {galleryItems[zoomed].title}
              </h3>
              <p className="font-body text-sm mt-1" style={{ color: "hsl(40,60%,70%)" }}>
                {galleryItems[zoomed].category}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
