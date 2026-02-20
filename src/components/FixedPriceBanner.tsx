import { DollarSign, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const FixedPriceBanner = () => {
  return (
    <section className="bg-primary py-16 lg:py-20">
      <div className="container text-center">
        <div className="inline-flex items-center gap-2 bg-action-red px-4 py-2 rounded-lg mb-6">
          <DollarSign className="h-5 w-5 text-accent-foreground" />
          <span className="font-bold font-heading text-accent-foreground tracking-widest text-sm">
            FIXED PRICE GUARANTEE
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-bold font-heading text-primary-foreground mb-4">
          No Surprises. No Hidden Fees.
        </h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
          We provide an upfront, fixed-price quote before any work begins. If the job costs more than our quote,
          we absorb the difference — not you. That's our promise to every Florida homeowner.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#quote">
            <Button variant="cta" size="xl">
              Get Your Fixed Quote
            </Button>
          </a>
          <a href="tel:+18005551234">
            <Button variant="ctaOutline" size="xl" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Phone className="h-5 w-5" />
              (800) 555-1234
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FixedPriceBanner;
