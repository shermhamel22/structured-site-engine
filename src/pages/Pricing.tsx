import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroPricing from "@/assets/hero-pricing.jpg";

const packages = [
  {
    title: "Drain Clearing",
    price: "From $149",
    features: ["Standard drain unblocking", "Camera inspection included", "30-day guarantee", "No call-out fee"],
  },
  {
    title: "Hot Water Repair",
    price: "From $199",
    features: ["Diagnosis & repair", "All brands serviced", "Same-day service", "Parts warranty included"],
    popular: true,
  },
  {
    title: "Emergency Callout",
    price: "From $179",
    features: ["60-min response time", "Available 24/7/365", "Fixed pricing upfront", "No overtime charges"],
  },
  {
    title: "Full Inspection",
    price: "From $99",
    features: ["Complete plumbing audit", "Written report", "Priority recommendations", "No obligation quote"],
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative bg-primary py-16 overflow-hidden">
          <img src={heroPricing} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" loading="eager" fetchPriority="high" decoding="async" />
          <div className="container text-center relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-foreground mb-4">
              Transparent Pricing
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Fixed prices, no hidden fees. You'll know the cost before we start — guaranteed.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map(({ title, price, features, popular }) => (
                <div
                  key={title}
                  className={`rounded-lg p-6 border-2 ${popular ? "border-action-red shadow-lg relative" : "border-border"} bg-card`}
                >
                  {popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-action-red text-accent-foreground text-xs font-bold font-heading px-4 py-1 rounded-lg uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold font-heading text-card-foreground mb-2">{title}</h3>
                  <div className="text-3xl font-bold font-heading text-action-red mb-6">{price}</div>
                  <ul className="space-y-3 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success-green flex-shrink-0" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant={popular ? "cta" : "default"} className="w-full">
                      Get This Quote
                    </Button>
                  </Link>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-secondary rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold font-heading text-foreground mb-2">Need a Custom Quote?</h3>
              <p className="text-muted-foreground mb-4">
                Every plumbing job is unique. Contact us for a free, no-obligation fixed-price quote tailored to your needs.
              </p>
              <a href="tel:+18005551234">
                <Button variant="cta" size="lg"><Phone className="h-4 w-4" />(800) 555-1234</Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
