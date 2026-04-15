import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between h-16">
        <a href="#" className="font-heading text-xl font-bold text-foreground">
          Loke <span className="text-gradient-gold">PM</span> Decor
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
          <a href="tel:+918712359777" className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-gold font-body font-semibold text-sm rounded-lg" style={{ color: 'hsl(0,0%,10%)' }}>
            <Phone className="w-4 h-4" /> Call Now
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground" aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="px-6 py-4 space-y-3">
              {links.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="block font-body text-foreground py-2">
                  {l.label}
                </a>
              ))}
              <a href="tel:+918712359777" className="block text-center py-3 bg-gradient-gold font-body font-semibold rounded-lg" style={{ color: 'hsl(0,0%,10%)' }}>
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
