import { useState, useEffect, useCallback } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    },
    []
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-2xl shadow-[0_4px_30px_rgba(0,0,0,0.12)] border-b border-border/30"
          : "bg-gradient-to-b from-black/60 to-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 xl:px-16 flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="relative group"
        >
          <span className="font-heading text-2xl md:text-[1.6rem] font-bold tracking-wide text-white drop-shadow-lg">
            Loke{" "}
            <span className="text-gradient-gold">PM</span>{" "}
            Decor
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-gold group-hover:w-full transition-all duration-500" />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => {
            const isActive = activeSection === l.href.slice(1);
            return (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleClick(e, l.href)}
                className={`relative font-body text-[13px] font-medium tracking-wide uppercase px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "text-white bg-white/10 backdrop-blur-sm"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {l.label}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-gradient-gold rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+918712359777"
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-gold font-body font-semibold text-sm rounded-full hover:shadow-[var(--shadow-hover)] hover:scale-105 active:scale-95 transition-all duration-300"
            style={{ color: "hsl(0,0%,10%)" }}
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          <a
            href="tel:+918712359777"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gradient-gold"
            style={{ color: "hsl(0,0%,10%)" }}
            aria-label="Call now"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {open ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
          >
            <div className="bg-background/95 backdrop-blur-2xl border-t border-border/30 px-6 py-6 space-y-1">
              {links.map((l, i) => {
                const isActive = activeSection === l.href.slice(1);
                return (
                  <motion.a
                    key={l.label}
                    href={l.href}
                    onClick={(e) => handleClick(e, l.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className={`flex items-center gap-3 font-body text-sm font-medium py-3 px-4 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "text-foreground bg-accent/10 border-l-2 border-gold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50 border-l-2 border-transparent"
                    }`}
                  >
                    {l.label}
                  </motion.a>
                );
              })}
              <a
                href="tel:+918712359777"
                className="flex items-center justify-center gap-2 py-3 mt-4 bg-gradient-gold font-body font-semibold text-sm rounded-xl hover:opacity-90 transition-opacity"
                style={{ color: "hsl(0,0%,10%)" }}
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
