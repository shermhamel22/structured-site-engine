import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Droplets, Flame, Wrench, AlertTriangle, ShowerHead, PipetteIcon, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Droplets,
    title: "Blocked Drains",
    desc: "Fast drain clearing using the latest jet blasting and CCTV camera technology. We clear any blockage, any time — residential or commercial.",
    features: ["Jet blasting", "CCTV inspection", "Root removal", "Preventive maintenance"],
  },
  {
    icon: Flame,
    title: "Hot Water Systems",
    desc: "Repairs, replacements & installations for all major brands. Gas, electric, solar, and heat pump systems.",
    features: ["Same-day repairs", "All brands serviced", "Energy-efficient upgrades", "10-year warranty"],
  },
  {
    icon: PipetteIcon,
    title: "Gas Fitting",
    desc: "Licensed gas fitters for installations, repairs, leak detection, and compliance certificates.",
    features: ["Gas leak detection", "Appliance installation", "Compliance certificates", "Safety inspections"],
  },
  {
    icon: AlertTriangle,
    title: "Emergency Plumbing",
    desc: "24/7 emergency plumbers at your door within 60 minutes. No call-out fee, ever.",
    features: ["60-min response", "No call-out fee", "Available 24/7/365", "Fixed pricing"],
  },
  {
    icon: ShowerHead,
    title: "Bathroom Renovations",
    desc: "Complete bathroom remodels from design to installation. Quality guaranteed with licensed tradespeople.",
    features: ["Full design service", "Quality fixtures", "Licensed tradespeople", "Project management"],
  },
  {
    icon: Wrench,
    title: "General Plumbing",
    desc: "Taps, toilets, pipes, and more. No job too big or small for our expert team.",
    features: ["Tap & toilet repairs", "Pipe relining", "Water pressure issues", "Plumbing inspections"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-primary py-16">
          <div className="container text-center">
            <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-foreground mb-4">
              Our Plumbing Services
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Professional plumbing solutions for every need — all with fixed upfront pricing and a satisfaction guarantee.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container space-y-12">
            {services.map(({ icon: Icon, title, desc, features }, i) => (
              <div
                key={title}
                className={`flex flex-col lg:flex-row gap-8 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <div className="bg-primary rounded-lg p-3 w-fit mb-4">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold font-heading text-foreground mb-3">{title}</h2>
                  <p className="text-muted-foreground mb-6">{desc}</p>
                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    {features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-success-green flex-shrink-0" />
                        <span className="font-medium text-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="cta" size="lg">Get a Quote</Button>
                  </Link>
                </div>
                <div className="flex-1 bg-secondary rounded-lg p-12 flex items-center justify-center">
                  <Icon className="h-24 w-24 text-primary/30" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-12">
          <div className="container text-center">
            <h2 className="text-3xl font-bold font-heading text-primary-foreground mb-4">Need a Plumber Now?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18005551234">
                <Button variant="cta" size="xl">
                  <Phone className="h-5 w-5" />
                  Call (800) 555-1234
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="ctaOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Book Online
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
