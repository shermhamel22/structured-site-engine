import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import heroContact from "@/assets/hero-contact.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you within 30 minutes.");
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative bg-primary py-16 overflow-hidden">
          <img src={heroContact} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" loading="eager" fetchPriority="high" decoding="async" />
          <div className="container text-center relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-foreground mb-4">Contact Us</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Get in touch for a free quote or emergency service. We respond within 30 minutes.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact info */}
              <div>
                <h2 className="text-2xl font-bold font-heading text-foreground mb-6">Get In Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary rounded-lg p-3"><Phone className="h-5 w-5 text-primary-foreground" /></div>
                    <div>
                      <h3 className="font-bold font-heading text-foreground">Phone</h3>
                      <a href="tel:+18005551234" className="text-action-red font-bold text-lg">(800) 555-1234</a>
                      <p className="text-sm text-muted-foreground">Available 24/7 for emergencies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary rounded-lg p-3"><Mail className="h-5 w-5 text-primary-foreground" /></div>
                    <div>
                      <h3 className="font-bold font-heading text-foreground">Email</h3>
                      <a href="mailto:info@advanceplumbing.com" className="text-action-red font-bold">info@advanceplumbing.com</a>
                      <p className="text-sm text-muted-foreground">We reply within 30 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary rounded-lg p-3"><MapPin className="h-5 w-5 text-primary-foreground" /></div>
                    <div>
                      <h3 className="font-bold font-heading text-foreground">Service Area</h3>
                      <p className="text-muted-foreground">Serving all of Florida</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-primary rounded-lg p-3"><Clock className="h-5 w-5 text-primary-foreground" /></div>
                    <div>
                      <h3 className="font-bold font-heading text-foreground">Hours</h3>
                      <p className="text-muted-foreground">Mon–Fri: 7AM – 6PM</p>
                      <p className="text-muted-foreground">Emergency: 24/7/365</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div className="bg-card border border-border rounded-lg p-6 lg:p-8 shadow-lg">
                <h2 className="text-2xl font-bold font-heading text-card-foreground mb-2">Request a Free Quote</h2>
                <p className="text-muted-foreground text-sm mb-6">Fill out the form and we'll get back to you within 30 minutes.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">Name</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-action-red text-sm" placeholder="John Smith" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1.5">Phone</label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-action-red text-sm" placeholder="(555) 123-4567" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Email</label>
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-action-red text-sm" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Service Needed</label>
                    <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-action-red text-sm">
                      <option value="">Select a service...</option>
                      <option value="blocked-drains">Blocked Drains</option>
                      <option value="hot-water">Hot Water Systems</option>
                      <option value="gas-fitting">Gas Fitting</option>
                      <option value="emergency">Emergency Plumbing</option>
                      <option value="leak-detection">Leak Detection</option>
                      <option value="bathroom-reno">Bathroom Renovation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1.5">Message (Optional)</label>
                    <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-action-red text-sm resize-none" placeholder="Tell us about your plumbing issue..." />
                  </div>
                  <Button type="submit" variant="cta" size="xl" className="w-full">
                    Send My Request
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">No obligation • 100% Free • Response in 30 min</p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
