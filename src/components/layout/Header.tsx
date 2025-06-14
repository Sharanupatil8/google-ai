
"use client";

import Link from "next/link";
import { Car, Home, CalendarDays, Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
  { href: "/models", label: "Models", icon: <Car className="h-5 w-5" /> },
  { href: "/test-drive", label: "Test Drive", icon: <CalendarDays className="h-5 w-5" /> },
  { href: "/contact", label: "Contact Us", icon: <Phone className="h-5 w-5" /> },
];

export function Header() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
        <div className="container flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <span className="font-bold text-2xl text-primary">Sai Motors</span>
          </Link>
          <div className="h-8 w-8 bg-muted animate-pulse rounded-md md:hidden"></div>
           <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-md font-medium text-foreground hover:text-primary transition-colors"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
           <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary h-9 w-9"><path d="m10 14 5-5"/><path d="M2 12h4"/><path d="M3.46 6.04 6.05 8.6"/><path d="m14 10 5 5"/><path d="M18 12h4"/><path d="m8.6 3.46 2.53 2.58"/><circle cx="12" cy="12" r="10"/></svg>
          <span className="font-bold text-2xl text-primary">Sai Motors</span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="border-foreground/30">
                <Menu className="h-6 w-6 text-foreground" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <nav className="grid gap-6 text-lg font-medium mt-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-4 px-2.5 text-foreground hover:text-primary"
                      prefetch={false}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-md font-medium text-foreground hover:text-primary transition-colors"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
