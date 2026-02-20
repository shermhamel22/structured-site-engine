import { Droplets, Flame, Wrench, AlertTriangle, ShowerHead, PipetteIcon } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Blocked Drains",
    desc: "Fast drain clearing using the latest jet blasting technology. We clear any blockage.",
  },
  {
    icon: Flame,
    title: "Hot Water Systems",
    desc: "Repairs, replacements & installations for all brands. Gas, electric & solar.",
  },
  {
    icon: PipetteIcon,
    title: "Gas Fitting",
    desc: "Licensed gas fitters for installations, repairs, and safety checks.",
  },
  {
    icon: AlertTriangle,
    title: "Emergency Plumbing",
    desc: "24/7 emergency plumbers at your door within 60 minutes. No call-out fee.",
  },
  {
    icon: ShowerHead,
    title: "Bathroom Renovations",
    desc: "Complete bathroom remodels from design to installation. Quality guaranteed.",
  },
  {
    icon: Wrench,
    title: "General Plumbing",
    desc: "Taps, toilets, pipes, and more. No job too big or small for our expert team.",
  },
];

const ServiceGrid = () => {
  return (
    <section id="services" className="py-16 lg:py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-primary mb-3">
            Our Plumbing Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From emergency repairs to full renovations, we handle all your plumbing needs with fixed upfront pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group border border-border rounded-lg p-6 hover:border-action-red hover:shadow-lg transition-all duration-200 bg-card"
            >
              <div className="bg-primary rounded-lg p-3 w-fit mb-4 group-hover:bg-action-red transition-colors">
                <Icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold font-heading text-card-foreground mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{desc}</p>
              <a
                href="#quote"
                className="text-sm font-bold text-action-red hover:underline uppercase tracking-wide"
              >
                Get a Quote →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
