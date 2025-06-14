import { MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-secondary text-secondary-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Sai Motors</h3>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Your trusted partner for new cars and exceptional service. Discover your dream car with us.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm text-secondary-foreground/80">Hospet Rd, Koppal, Karnataka</span>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/models" className="hover:text-primary transition-colors text-secondary-foreground/80">Our Models</Link></li>
              <li><Link href="/test-drive" className="hover:text-primary transition-colors text-secondary-foreground/80">Book Test Drive</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors text-secondary-foreground/80">Contact Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors text-secondary-foreground/80">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-secondary-foreground/80 hover:text-primary transition-colors"><Facebook size={22} /></Link>
              <Link href="#" aria-label="Twitter" className="text-secondary-foreground/80 hover:text-primary transition-colors"><Twitter size={22} /></Link>
              <Link href="#" aria-label="Instagram" className="text-secondary-foreground/80 hover:text-primary transition-colors"><Instagram size={22} /></Link>
              <Link href="#" aria-label="YouTube" className="text-secondary-foreground/80 hover:text-primary transition-colors"><Youtube size={22} /></Link>
            </div>
          </div>
        </div>
        <div className="border-t border-primary/20 pt-8 text-center text-sm text-secondary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Sai Motors. All rights reserved. Designed by AI.</p>
        </div>
      </div>
    </footer>
  );
}
