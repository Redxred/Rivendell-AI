import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const tiers = [
  {
    name: "Fellowship",
    desc: "For startups and small teams beginning their journey.",
    price: "$2,500",
    period: "/project starting",
    features: [
      "Custom Landing Page",
      "Basic CMS Integration",
      "Mobile Responsive Design",
      "SEO Fundamentals",
      "1 Month Support"
    ],
    cta: "Start Fellowship",
    featured: false
  },
  {
    name: "The Council",
    desc: "Comprehensive solutions for growing businesses.",
    price: "$5,000",
    period: "/month retainer",
    features: [
      "Full Web Application",
      "User Authentication",
      "Database Design",
      "Payment Processing",
      "Admin Dashboard",
      "Priority Support"
    ],
    cta: "Join the Council",
    featured: true
  },
  {
    name: "Elder",
    desc: "Enterprise-grade architecture for large scale operations.",
    price: "Custom",
    period: "Pricing",
    features: [
      "Microservices Architecture",
      "AI/LLM Integration",
      "Advanced Security",
      "24/7 SLA Support",
      "Dedicated Team",
      "Infrastructure Scaling"
    ],
    cta: "Consult Elders",
    featured: false
  }
];

export default function Pricing() {
  return (
    <div className="pb-24 pt-12">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl mb-16">
        <h1 className="text-5xl font-serif mb-6">Tribute & Investment</h1>
        <p className="text-xl text-muted-foreground">
          Transparent pricing for premium craftsmanship. Choose the alliance that suits your quest.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-8">
        {tiers.map((tier, i) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative rounded-3xl p-8 border flex flex-col ${
              tier.featured 
                ? "bg-card border-primary/50 shadow-2xl shadow-primary/10 scale-105 z-10" 
                : "bg-background border-border"
            }`}
          >
            {tier.featured && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-serif mb-2">{tier.name}</h3>
              <p className="text-sm text-muted-foreground h-10">{tier.desc}</p>
            </div>

            <div className="mb-8 flex items-baseline gap-1">
              <span className="text-4xl font-bold">{tier.price}</span>
              <span className="text-muted-foreground text-sm">{tier.period}</span>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact">
              <button 
                className={`w-full py-3 rounded-xl font-medium transition-all ${
                  tier.featured
                    ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                    : "bg-primary/10 text-primary hover:bg-primary/20"
                }`}
              >
                {tier.cta}
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
