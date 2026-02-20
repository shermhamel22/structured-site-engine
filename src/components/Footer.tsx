import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-4">Advance Plumbing Solutions</h3>
            <p className="text-sm opacity-80 mb-4">
              Your trusted local plumbers serving all of Florida. Licensed, insured, and committed to excellence.
            </p>
            <div className="space-y-2 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+18005551234" className="hover:opacity-100">(800) 555-1234</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@advanceplumbing.com" className="hover:opacity-100">info@advanceplumbing.com</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Serving All of Florida</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm opacity-80">
              {["Blocked Drains", "Hot Water Systems", "Gas Fitting", "Emergency Plumbing", "Bathroom Renovations", "General Plumbing"].map(s => (
                <li key={s}>
                  <a href="#services" className="hover:opacity-100">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h3 className="text-lg font-bold font-heading mb-4">Service Areas</h3>
            <ul className="space-y-2 text-sm opacity-80">
              {["Miami", "Fort Lauderdale", "Tampa", "Orlando", "Jacksonville", "West Palm Beach"].map(a => (
                <li key={a}>
                  <a href="#areas-we-serve" className="hover:opacity-100">{a}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} Advance Plumbing Solutions. All rights reserved. Licensed & Insured.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
