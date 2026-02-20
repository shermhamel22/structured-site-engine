import { Shield, Star, Users, Clock, Award } from "lucide-react";

const items = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Star, label: "5-Star Google Rated" },
  { icon: Users, label: "Local Family Owned" },
  { icon: Clock, label: "Same Day Service" },
  { icon: Award, label: "Satisfaction Guaranteed" },
];

const TrustStrip = () => {
  return (
    <section className="bg-secondary border-y border-border">
      <div className="container py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 justify-center">
              <div className="bg-primary rounded-lg p-2 flex-shrink-0">
                <Icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-sm font-bold text-foreground font-heading tracking-wide uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
