import { CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-plumber.jpg";
import { useState } from "react";

const guarantees = [
  "Fixed Pricing & No Surprises",
  "On-Time or It's Free",
  "No Call-Out Fee",
  "Licensed & Insured Plumbers",
  "Lifetime Labour Warranty",
];

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll call you back shortly.");
    setFormData({ name: "", phone: "", service: "" });
  };

  return (
    <section className="relative bg-primary overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container relative z-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left side – copy */}
          <div className="text-primary-foreground">
            <div className="inline-block bg-action-red px-4 py-1.5 rounded-lg mb-4">
              <span className="text-sm font-bold font-heading tracking-widest text-accent-foreground">
                TRUSTED ACROSS FLORIDA
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6">
              Your Local<br />Florida Plumbers
            </h1>
            <p className="text-lg opacity-90 mb-8 font-body max-w-md">
              Fast, reliable plumbing services with upfront pricing. Available 24/7 for emergencies across Florida.
            </p>

            <ul className="space-y-3 mb-8">
              {guarantees.map((g) => (
                <li key={g} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success-green flex-shrink-0" />
                  <span className="font-semibold text-sm">{g}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+18005551234">
                <Button variant="cta" size="xl">
                  <Phone className="h-5 w-5" />
                  Call (800) 555-1234
                </Button>
              </a>
            </div>
          </div>

          {/* Right side – Quick Quote form */}
          <div id="quote" className="bg-background rounded-lg shadow-2xl p-6 lg:p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold font-heading text-primary">Get a Free Quote</h2>
              <p className="text-muted-foreground text-sm mt-1">We'll get back to you within 30 minutes</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-action-red text-sm"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-action-red text-sm"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-1.5">Service Needed</label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-action-red text-sm"
                >
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
              <Button type="submit" variant="cta" size="xl" className="w-full">
                Get My Free Quote
              </Button>
              <p className="text-xs text-center text-muted-foreground">
                No obligation • 100% Free • Response in 30 min
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
