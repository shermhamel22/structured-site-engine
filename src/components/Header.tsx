import { Phone, Clock, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = ["Services", "About Us", "Pricing", "Areas We Serve", "Contact"];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top utility bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-emergency-yellow" />
            <span className="font-semibold">24/7 Emergency Service</span>
          </div>
          <a
            href="tel:+18005551234"
            className="flex items-center gap-2 text-lg font-bold font-heading tracking-wider hover:text-emergency-yellow transition-colors"
          >
            <Phone className="h-5 w-5" />
            (800) 555-1234
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-background border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-lg p-2">
              <span className="text-primary-foreground font-heading text-xl font-bold">APS</span>
            </div>
            <div className="leading-tight">
              <span className="font-heading text-lg font-bold text-primary block">Advance Plumbing</span>
              <span className="font-heading text-xs text-muted-foreground tracking-widest">SOLUTIONS</span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm font-semibold text-foreground hover:text-accent transition-colors uppercase tracking-wide"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a href="tel:+18005551234">
              <Button variant="default" size="lg">
                <Phone className="h-4 w-4" />
                Call Now
              </Button>
            </a>
            <a href="#quote">
              <Button variant="cta" size="lg">
                Book Online
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <a href="tel:+18005551234">
              <Button variant="cta" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2">
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background px-4 pb-4">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                className="block py-3 text-sm font-semibold text-foreground border-b border-border uppercase tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="mt-4">
              <a href="#quote">
                <Button variant="cta" size="lg" className="w-full">
                  Book Online
                </Button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
