import { MapPin, Phone, Clock } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-gradient-dark py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4" style={{ color: 'hsl(0,0%,98%)' }}>
              Loke <span className="text-gradient-gold">PM</span> Decor
            </h3>
            <p className="font-body text-sm leading-relaxed" style={{ color: 'hsl(0,0%,55%)' }}>
              Complete Interior & Hardware Solutions for Modern Spaces in Tirupati.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4" style={{ color: 'hsl(0,0%,90%)' }}>Services</h4>
            <ul className="space-y-2 font-body text-sm" style={{ color: 'hsl(0,0%,55%)' }}>
              {["Modular Kitchen", "Wardrobe Fittings", "Plywood & Laminates", "Wall Panels", "Furniture Hardware"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4" style={{ color: 'hsl(0,0%,90%)' }}>Quick Links</h4>
            <ul className="space-y-2 font-body text-sm" style={{ color: 'hsl(0,0%,55%)' }}>
              {[
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Why Choose Us", href: "#why-us" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-gold transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4" style={{ color: 'hsl(0,0%,90%)' }}>Contact</h4>
            <div className="space-y-3 font-body text-sm" style={{ color: 'hsl(0,0%,55%)' }}>
              <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" /><span>Avilala, Tirupati, AP 517502</span></div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /><a href="tel:+918712359777" className="hover:text-gold transition-colors">+91 87123 59777</a></div>
              <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold" /><span>Open till 10 PM</span></div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8" style={{ borderColor: 'hsl(0,0%,18%)' }}>
          <p className="text-center font-body text-sm" style={{ color: 'hsl(0,0%,40%)' }}>
            © {new Date().getFullYear()} Loke PM Decor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
