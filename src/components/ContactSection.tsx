import { motion } from "framer-motion";
import { Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", need: "", type: "residential" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name}. I need: ${form.need}. Project: ${form.type}. Phone: ${form.phone}`;
    window.open(`https://wa.me/918712359777?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-body font-semibold text-sm uppercase tracking-widest">Contact Us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 text-foreground">Get In Touch</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-5 py-4 rounded-lg border border-border bg-muted font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-5 py-4 rounded-lg border border-border bg-muted font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40"
            />
            <input
              type="text"
              placeholder="Product / Material Need"
              value={form.need}
              onChange={(e) => setForm({ ...form, need: e.target.value })}
              className="w-full px-5 py-4 rounded-lg border border-border bg-muted font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40"
            />
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full px-5 py-4 rounded-lg border border-border bg-muted font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold/40"
            >
              <option value="residential">Residential Project</option>
              <option value="commercial">Commercial Project</option>
              <option value="builder">Builder / Contractor</option>
              <option value="other">Other</option>
            </select>
            <button
              type="submit"
              className="w-full py-4 bg-gradient-gold font-body font-semibold rounded-lg hover:opacity-90 transition-opacity"
              style={{ color: 'hsl(0,0%,10%)' }}
            >
              Send Inquiry via WhatsApp
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 p-5 rounded-lg bg-muted">
              <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading font-semibold text-foreground">Our Address</h4>
                <p className="font-body text-sm text-muted-foreground">23-3-39, MR Palli Rd, Dhanalakshmi Nagar, Padmavathi Nagar, Avilala, Andhra Pradesh 517502</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-lg bg-muted">
              <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading font-semibold text-foreground">Call Us</h4>
                <a href="tel:+918712359777" className="font-body text-sm text-gold hover:underline">+91 87123 59777</a>
              </div>
            </div>
            <div className="flex items-start gap-4 p-5 rounded-lg bg-muted">
              <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-heading font-semibold text-foreground">Business Hours</h4>
                <p className="font-body text-sm text-muted-foreground">Open Daily — Till 10:00 PM</p>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3877.123!2d79.42!3d13.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM4JzAyLjAiTiA3OcKwMjUnMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Loke PM Decor Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
