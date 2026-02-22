import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroAreas from "@/assets/hero-areas.jpg";

const areas = [
  { region: "South Florida", cities: ["Miami", "Fort Lauderdale", "West Palm Beach", "Boca Raton", "Hollywood", "Pompano Beach"] },
  { region: "Central Florida", cities: ["Orlando", "Tampa", "St. Petersburg", "Kissimmee", "Lakeland", "Daytona Beach"] },
  { region: "North Florida", cities: ["Jacksonville", "Tallahassee", "Gainesville", "St. Augustine", "Pensacola", "Panama City"] },
  { region: "Southwest Florida", cities: ["Naples", "Fort Myers", "Sarasota", "Bradenton", "Cape Coral", "Port Charlotte"] },
];

const Areas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative bg-primary py-16 overflow-hidden">
          <img src={heroAreas} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" loading="eager" fetchPriority="high" decoding="async" />
          <div className="container text-center relative z-10">
            <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-foreground mb-4">
              Areas We Serve
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Serving communities across the entire state of Florida with fast, reliable plumbing.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {areas.map(({ region, cities }) => (
                <div key={region} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-primary rounded-lg p-2">
                      <MapPin className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h2 className="text-xl font-bold font-heading text-card-foreground">{region}</h2>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {cities.map((city) => (
                      <div key={city} className="text-sm text-muted-foreground py-1.5 border-b border-border">
                        {city}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">Don't see your area? Give us a call — we likely service your location too.</p>
              <a href="tel:+18005551234">
                <Button variant="cta" size="xl"><Phone className="h-5 w-5" />(800) 555-1234</Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Areas;
