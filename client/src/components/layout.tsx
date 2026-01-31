import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Sanctuary" },
  { href: "/services", label: "Craft" },
  { href: "/process", label: "Council" },
  { href: "/about", label: "Lore" },
  { href: "/pricing", label: "Tribute" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b border-transparent",
          isScrolled ? "bg-background/80 backdrop-blur-md border-border/50 py-4" : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3 z-50">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
              <div className="w-3 h-3 rotate-45 bg-primary rounded-sm group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="font-serif text-xl font-medium tracking-tight text-foreground">
              Rivendell AI
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full",
                  location === link.href ? "w-full" : ""
                )} />
              </Link>
            ))}
            <Link href="/contact" className="ml-4">
              <button className="px-5 py-2.5 rounded-full bg-primary/10 hover:bg-primary/20 text-primary text-sm font-medium border border-primary/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                Begin Journey <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden z-50 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden flex flex-col gap-6"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-3xl font-serif font-medium",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="mt-8">
              <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg">
                Begin Journey
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 min-h-screen relative overflow-hidden">
        {/* Ambient background effects */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px]" />
        </div>
        {children}
      </main>

      <footer className="border-t border-border/40 py-16 bg-background relative z-10">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <span className="font-serif text-xl font-bold text-foreground block">Rivendell AI</span>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Where elven serenity meets modern technological precision. Crafting digital sanctuaries for the future.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-6 text-foreground">Sanctuary</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">Lore</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors">Join the Council</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-foreground">Craft</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/process" className="hover:text-primary transition-colors">Methodology</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Tribute</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-6 text-foreground">Contact</h4>
            <p className="text-sm text-muted-foreground mb-4">San Francisco & Remote</p>
            <Link href="/contact" className="text-primary text-sm hover:underline">
              council@rivendell.ai
            </Link>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-6 mt-16 pt-8 border-t border-border/40 text-center md:text-left text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Rivendell AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
