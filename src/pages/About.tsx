import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Award, Clock, Shield, Heart, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "10,000+", label: "Happy Customers" },
  { value: "24/7", label: "Emergency Service" },
  { value: "100%", label: "Satisfaction Rate" },
];

const values = [
  { icon: Shield, title: "Integrity", desc: "We provide honest assessments and transparent pricing on every job." },
  { icon: Heart, title: "Customer First", desc: "Your satisfaction is our top priority. We treat your home like our own." },
  { icon: Award, title: "Excellence", desc: "Our team is trained to the highest industry standards with ongoing education." },
  { icon: Clock, title: "Reliability", desc: "We show up on time, every time — or the service call is free." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="bg-primary py-16">
          <div className="container text-center">
            <h1 className="text-4xl lg:text-5xl font-bold font-heading text-primary-foreground mb-4">About Us</h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg">
              Family-owned and operated, serving Florida communities for over 15 years.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-secondary py-10">
          <div className="container grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold font-heading text-action-red">{value}</div>
                <div className="text-sm font-semibold text-foreground uppercase tracking-wide mt-1">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section className="py-16 lg:py-20">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold font-heading text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Advance Plumbing Solutions was founded with a simple mission: to provide Florida homeowners with honest, reliable plumbing services at fair, transparent prices.
              </p>
              <p>
                What started as a one-man operation has grown into a team of over 30 licensed plumbers serving communities across the state. But our core values haven't changed — we still treat every customer like family.
              </p>
              <p>
                We pioneered the fixed-price model in Florida plumbing because we believe no homeowner should face surprise bills after a job is done. When we quote a price, that's the price you pay — guaranteed.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <h2 className="text-3xl font-bold font-heading text-foreground text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-card rounded-lg p-6 border border-border">
                  <div className="bg-primary rounded-lg p-3 w-fit mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-card-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-12">
          <div className="container text-center">
            <h2 className="text-3xl font-bold font-heading text-primary-foreground mb-4">Ready to Work With Us?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+18005551234">
                <Button variant="cta" size="xl"><Phone className="h-5 w-5" />Call (800) 555-1234</Button>
              </a>
              <Link to="/contact">
                <Button variant="ctaOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">Book Online</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
