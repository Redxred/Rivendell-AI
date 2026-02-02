import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, Code, Globe, Cpu, LayoutTemplate, X, ChevronRight, Target, Users, Clock, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
};

const STAGGER = {
  visible: { transition: { staggerChildren: 0.08 } }
};

const projects = [
  {
    id: "nexus-ai",
    title: "Nexus AI Platform",
    category: "AI & Automation",
    shortDesc: "Enterprise AI assistant revolutionizing customer support.",
    description: "An enterprise-grade AI assistant platform that revolutionized customer support for a Fortune 500 company. We built a sophisticated natural language processing system that understands context, sentiment, and intent to provide human-like responses at scale.",
    challenge: "The client was drowning in 50,000+ daily support tickets with an average response time of 4 hours, leading to customer churn and frustrated support teams.",
    solution: "We designed a multi-layered AI system combining GPT-4 with custom fine-tuned models, integrated with their existing CRM and knowledge base.",
    results: [
      { label: "Response Time", value: "-80%", desc: "From 4 hours to 48 minutes" },
      { label: "Resolution Rate", value: "94%", desc: "First-contact resolution" },
      { label: "Cost Savings", value: "$2.4M", desc: "Annual operational savings" },
      { label: "CSAT Score", value: "+35%", desc: "Customer satisfaction increase" }
    ],
    tags: ["Machine Learning", "NLP", "React", "Python", "GPT-4", "Redis"],
    icon: Cpu,
    color: "from-amber-500/30 to-orange-600/30",
    accentColor: "#f59e0b",
    timeline: "8 months",
    team: "6 engineers"
  },
  {
    id: "solara-commerce",
    title: "Solara Commerce",
    category: "Web Development",
    shortDesc: "Next-gen e-commerce with AI recommendations.",
    description: "A next-generation e-commerce platform featuring real-time inventory management, AI-powered product recommendations, and a seamless checkout experience that converts browsers into buyers.",
    challenge: "The client's legacy platform was losing 67% of users at checkout due to slow load times and a confusing multi-page process.",
    solution: "We rebuilt the entire platform using Next.js with edge caching, implemented a single-page checkout flow, and integrated ML-based recommendations.",
    results: [
      { label: "Conversion Rate", value: "+45%", desc: "Overall purchase conversion" },
      { label: "Page Speed", value: "0.8s", desc: "Time to interactive" },
      { label: "Mobile Sales", value: "+120%", desc: "Mobile revenue growth" },
      { label: "Cart Value", value: "+28%", desc: "Average order value" }
    ],
    tags: ["Next.js", "PostgreSQL", "Stripe", "Redis", "Vercel", "TailwindCSS"],
    icon: Globe,
    color: "from-emerald-500/30 to-teal-600/30",
    accentColor: "#10b981",
    timeline: "6 months",
    team: "5 engineers"
  },
  {
    id: "mindflow-app",
    title: "MindFlow",
    category: "UI/UX Design",
    shortDesc: "Meditation app with biometric integration.",
    description: "A meditation and wellness app featuring serene, intuitive interfaces, personalized mindfulness journeys, and seamless biometric integration for real-time stress management.",
    challenge: "The wellness app market is saturated with generic solutions. The client needed to stand out with a premium experience that helps users build lasting habits.",
    solution: "We crafted a calming visual language with micro-animations that guide breathing, integrated Apple HealthKit and Google Fit for biometric feedback.",
    results: [
      { label: "User Retention", value: "92%", desc: "30-day retention rate" },
      { label: "Session Length", value: "+40%", desc: "Average session duration" },
      { label: "App Rating", value: "4.9", desc: "App Store rating" },
      { label: "Daily Active", value: "85%", desc: "DAU/MAU ratio" }
    ],
    tags: ["React Native", "Firebase", "HealthKit", "Motion Design", "Lottie"],
    icon: LayoutTemplate,
    color: "from-violet-500/30 to-purple-600/30",
    accentColor: "#8b5cf6",
    timeline: "5 months",
    team: "4 designers, 3 engineers"
  },
  {
    id: "quantum-analytics",
    title: "Quantum Analytics",
    category: "Business Intelligence",
    shortDesc: "Real-time data visualization dashboard.",
    description: "A comprehensive analytics dashboard that transforms complex data streams into actionable insights with beautiful real-time visualizations.",
    challenge: "The client's data team was spending 20+ hours weekly creating manual reports from disparate data sources.",
    solution: "We built a unified data platform that ingests from 15+ sources, processes millions of events per second, and presents insights through an intuitive dashboard.",
    results: [
      { label: "Data Processing", value: "10x", desc: "Faster than previous solution" },
      { label: "Report Time", value: "-90%", desc: "From hours to minutes" },
      { label: "Data Sources", value: "15+", desc: "Unified integrations" },
      { label: "Query Speed", value: "<100ms", desc: "Average response time" }
    ],
    tags: ["D3.js", "Node.js", "MongoDB", "WebSockets", "Apache Kafka"],
    icon: Code,
    color: "from-blue-500/30 to-cyan-600/30",
    accentColor: "#3b82f6",
    timeline: "7 months",
    team: "5 engineers"
  },
  {
    id: "aurora-fintech",
    title: "Aurora Fintech",
    category: "Financial Technology",
    shortDesc: "Secure banking with AI fraud detection.",
    description: "A secure, modern banking platform featuring advanced AI-powered fraud detection, instant transfers, and personalized financial advice.",
    challenge: "Traditional banks were eating into the client's market share with their digital offerings. They needed a mobile-first platform with enterprise-grade security.",
    solution: "We engineered a platform with bank-grade security, real-time fraud detection using behavioral biometrics, and an AI advisor for personalized insights.",
    results: [
      { label: "Fraud Prevention", value: "99.9%", desc: "Detection accuracy" },
      { label: "Onboarding", value: "3 min", desc: "Account creation time" },
      { label: "Transfer Speed", value: "<2s", desc: "Instant transfers" },
      { label: "User Growth", value: "+200%", desc: "YoY user acquisition" }
    ],
    tags: ["Security", "Blockchain", "React", "Go", "Plaid", "AWS"],
    icon: Globe,
    color: "from-rose-500/30 to-pink-600/30",
    accentColor: "#f43f5e",
    timeline: "10 months",
    team: "8 engineers"
  },
  {
    id: "echo-crm",
    title: "Echo CRM",
    category: "Business Process",
    shortDesc: "Intelligent CRM with automated workflows.",
    description: "An intelligent CRM system that automates lead scoring, streamlines pipeline management, and orchestrates personalized customer journeys at scale.",
    challenge: "Sales reps were spending 60% of their time on administrative tasks instead of selling. Lead quality was inconsistent.",
    solution: "We built an AI-powered CRM that automatically scores and routes leads, suggests optimal outreach timing, and automates repetitive tasks.",
    results: [
      { label: "Sales Efficiency", value: "+60%", desc: "Time spent selling" },
      { label: "Lead Conversion", value: "+35%", desc: "Qualified lead conversion" },
      { label: "Deal Velocity", value: "-25%", desc: "Faster sales cycles" },
      { label: "Revenue", value: "+40%", desc: "Annual revenue growth" }
    ],
    tags: ["Salesforce", "Python", "Machine Learning", "APIs", "Zapier"],
    icon: Cpu,
    color: "from-yellow-500/30 to-amber-600/30",
    accentColor: "#eab308",
    timeline: "6 months",
    team: "4 engineers"
  }
];

interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  description: string;
  challenge: string;
  solution: string;
  results: { label: string; value: string; desc: string }[];
  tags: string[];
  icon: typeof Cpu;
  color: string;
  accentColor: string;
  timeline: string;
  team: string;
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-2 sm:p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
      
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative w-full max-w-3xl my-4 rounded-2xl bg-card border border-[hsl(var(--gold)/0.2)] shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`relative h-40 sm:h-48 md:h-56 bg-gradient-to-br ${project.color} overflow-hidden`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="w-40 h-40 md:w-56 md:h-56 border border-white/10 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute w-28 h-28 md:w-40 md:h-40 border border-white/15 rounded-full"
            />
            <div 
              className="absolute w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: `${project.accentColor}30` }}
            >
              <project.icon className="w-8 h-8 md:w-10 md:h-10" style={{ color: project.accentColor }} />
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-[hsl(var(--gold)/0.2)] flex items-center justify-center text-foreground hover:text-[hsl(var(--gold))] transition-colors z-10"
            data-testid="button-close-modal"
          >
            <X className="w-4 h-4" />
          </motion.button>
          
          <div className="absolute bottom-3 left-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-[hsl(var(--gold)/0.2)]">
            <span className="text-xs font-medium text-[hsl(var(--gold))]">{project.category}</span>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 md:p-8 space-y-5 max-h-[60vh] overflow-y-auto">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-serif text-gold-gradient">{project.title}</h2>
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="w-3.5 h-3.5 text-[hsl(var(--gold))]" />
                <span>{project.timeline}</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground">
                <Users className="w-3.5 h-3.5 text-[hsl(var(--gold))]" />
                <span>{project.team}</span>
              </div>
            </div>
          </div>
          
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{project.description}</p>
          
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[hsl(var(--gold)/0.03)] border border-[hsl(var(--gold)/0.1)]">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-[hsl(var(--gold))]" />
                <h3 className="font-semibold text-sm text-[hsl(var(--gold))]">The Challenge</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
            </div>
            
            <div className="p-4 rounded-xl bg-[hsl(var(--gold)/0.03)] border border-[hsl(var(--gold)/0.1)]">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-[hsl(var(--gold))]" />
                <h3 className="font-semibold text-sm text-[hsl(var(--gold))]">Our Solution</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[hsl(var(--gold))]" />
              <h3 className="font-semibold text-sm text-[hsl(var(--gold))]">Key Results</h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.results.map((result) => (
                <div
                  key={result.label}
                  className="p-3 rounded-lg bg-background border border-[hsl(var(--gold)/0.1)] text-center"
                >
                  <div className="text-xl sm:text-2xl font-serif text-gold-gradient">{result.value}</div>
                  <div className="text-xs font-medium text-foreground mt-0.5">{result.label}</div>
                  <div className="text-xs text-muted-foreground hidden sm:block">{result.desc}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-[hsl(var(--gold)/0.08)] border border-[hsl(var(--gold)/0.15)] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="pt-3 border-t border-[hsl(var(--gold)/0.1)]">
            <Link href="/contact">
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center gap-2 text-[hsl(var(--gold))] font-medium text-sm group"
              >
                <span>Start a similar project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="pb-16 sm:pb-24">
      <div className="relative py-16 sm:py-24 mb-8 sm:mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--gold)/0.05)] to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-0.5 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-3xl"
          >
            <motion.div variants={FADE_UP} className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[hsl(var(--gold))]" />
              <span className="text-xs sm:text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-widest">Our Work</span>
            </motion.div>
            <motion.h1 variants={FADE_UP} className="text-4xl sm:text-5xl md:text-7xl font-serif mb-4 sm:mb-6">
              <span className="text-gold-gradient">Portfolio</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              A curated collection of our finest work. Click any project to explore the full story.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={STAGGER}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={SCALE_IN}
              whileHover={{ y: -4 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer border border-[hsl(var(--gold)/0.1)] bg-card hover:border-[hsl(var(--gold)/0.3)] transition-all duration-300"
              data-testid={`card-project-${project.id}`}
            >
              <div className={`relative h-40 sm:h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 sm:w-32 sm:h-32 border border-white/10 rounded-full"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                    className="absolute w-16 h-16 sm:w-20 sm:h-20 border border-white/20 rounded-full"
                  />
                  <motion.div 
                    animate={{ scale: hoveredIndex === i ? 1.1 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute w-12 h-12 sm:w-14 sm:h-14 backdrop-blur-sm rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${project.accentColor}25` }}
                  >
                    <project.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: project.accentColor }} />
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]"
                    >
                      <div className="px-3 py-1.5 rounded-full bg-[hsl(var(--gold))] text-background text-xs sm:text-sm font-medium flex items-center gap-1.5">
                        <span>View Details</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              <div className="p-4 sm:p-5 space-y-3">
                <div>
                  <span className="text-xs font-medium text-[hsl(var(--gold))] uppercase tracking-wider">{project.category}</span>
                  <h3 className="text-lg sm:text-xl font-serif mt-1 group-hover:text-gold-gradient transition-colors">{project.title}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{project.shortDesc}</p>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full bg-[hsl(var(--gold)/0.05)] border border-[hsl(var(--gold)/0.1)] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-2 border-t border-[hsl(var(--gold)/0.1)] flex items-center justify-between">
                  <div>
                    <span className="text-xl sm:text-2xl font-serif text-gold-gradient">{project.results[0].value}</span>
                    <span className="text-xs text-muted-foreground ml-1.5">{project.results[0].label}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[hsl(var(--gold))] opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mt-16 sm:mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center overflow-hidden border border-[hsl(var(--gold)/0.2)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold)/0.08)] to-transparent" />
          
          <div className="absolute top-4 left-4 w-8 h-8 sm:w-12 sm:h-12 border-l-2 border-t-2 border-[hsl(var(--gold)/0.3)] rounded-tl-lg sm:rounded-tl-xl" />
          <div className="absolute top-4 right-4 w-8 h-8 sm:w-12 sm:h-12 border-r-2 border-t-2 border-[hsl(var(--gold)/0.3)] rounded-tr-lg sm:rounded-tr-xl" />
          <div className="absolute bottom-4 left-4 w-8 h-8 sm:w-12 sm:h-12 border-l-2 border-b-2 border-[hsl(var(--gold)/0.3)] rounded-bl-lg sm:rounded-bl-xl" />
          <div className="absolute bottom-4 right-4 w-8 h-8 sm:w-12 sm:h-12 border-r-2 border-b-2 border-[hsl(var(--gold)/0.3)] rounded-br-lg sm:rounded-br-xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3 sm:mb-4">
              Have a project in <span className="text-gold-gradient">mind</span>?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mb-6 sm:mb-8">
              Let's create something extraordinary together.
            </p>
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-[hsl(var(--gold-dark))] via-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-background font-semibold text-base sm:text-lg transition-all"
                data-testid="button-start-project"
              >
                Start Your Project
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
