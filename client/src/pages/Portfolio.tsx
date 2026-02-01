import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles, Code, Globe, Cpu, LayoutTemplate, X, ChevronRight, Target, Users, Clock, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
};

const SCALE_IN = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  visible: { transition: { staggerChildren: 0.1 } }
};

const projects = [
  {
    id: "nexus-ai",
    title: "Nexus AI Platform",
    category: "AI & Automation",
    shortDesc: "Enterprise AI assistant revolutionizing customer support.",
    description: "An enterprise-grade AI assistant platform that revolutionized customer support for a Fortune 500 company. We built a sophisticated natural language processing system that understands context, sentiment, and intent to provide human-like responses at scale.",
    challenge: "The client was drowning in 50,000+ daily support tickets with an average response time of 4 hours, leading to customer churn and frustrated support teams.",
    solution: "We designed a multi-layered AI system combining GPT-4 with custom fine-tuned models, integrated with their existing CRM and knowledge base. The system handles 80% of queries autonomously while seamlessly escalating complex issues to human agents.",
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
    challenge: "The client's legacy platform was losing 67% of users at checkout due to slow load times and a confusing multi-page process. Mobile conversion was particularly poor at just 0.8%.",
    solution: "We rebuilt the entire platform using Next.js with edge caching, implemented a single-page checkout flow, and integrated ML-based recommendations that understand shopping patterns and preferences.",
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
    description: "A meditation and wellness app featuring serene, intuitive interfaces, personalized mindfulness journeys, and seamless biometric integration for real-time stress management and progress tracking.",
    challenge: "The wellness app market is saturated with generic solutions. The client needed to stand out with a premium experience that actually helps users build lasting meditation habits.",
    solution: "We crafted a calming visual language with micro-animations that guide breathing, integrated Apple HealthKit and Google Fit for biometric feedback, and designed an adaptive journey system that evolves with each user.",
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
    description: "A comprehensive analytics dashboard that transforms complex data streams into actionable insights with beautiful real-time visualizations and intelligent alerting systems.",
    challenge: "The client's data team was spending 20+ hours weekly creating manual reports from disparate data sources. Decision-makers lacked real-time visibility into key business metrics.",
    solution: "We built a unified data platform that ingests from 15+ sources, processes millions of events per second, and presents insights through an intuitive dashboard with natural language querying.",
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
    description: "A secure, modern banking platform featuring advanced AI-powered fraud detection, instant transfers, and personalized financial advice that helps users achieve their money goals.",
    challenge: "Traditional banks were eating into the client's market share with their digital offerings. They needed a mobile-first platform that could match fintech UX while maintaining enterprise-grade security.",
    solution: "We engineered a platform with bank-grade security, real-time fraud detection using behavioral biometrics, and an AI advisor that provides personalized insights based on spending patterns.",
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
    challenge: "Sales reps were spending 60% of their time on administrative tasks instead of selling. Lead quality was inconsistent and follow-up timing was based on gut feeling rather than data.",
    solution: "We built an AI-powered CRM that automatically scores and routes leads, suggests optimal outreach timing, and automates repetitive tasks while integrating seamlessly with existing tools.",
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-md" />
      
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-card border border-[hsl(var(--gold)/0.2)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with gradient */}
        <div className={`relative h-64 bg-gradient-to-br ${project.color} overflow-hidden`}>
          <div className="absolute inset-0 gold-particles opacity-40" />
          
          {/* Decorative orbitals */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="w-64 h-64 border border-white/10 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-48 h-48 border border-white/15 rounded-full"
            />
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-32 h-32 border border-white/20 rounded-full"
            />
            <motion.div
              animate={{ 
                boxShadow: [
                  `0 0 30px ${project.accentColor}40`,
                  `0 0 60px ${project.accentColor}60`,
                  `0 0 30px ${project.accentColor}40`
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute w-20 h-20 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: `${project.accentColor}30` }}
            >
              <project.icon className="w-10 h-10" style={{ color: project.accentColor }} />
            </motion.div>
          </div>
          
          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-[hsl(var(--gold)/0.2)] flex items-center justify-center text-foreground hover:text-[hsl(var(--gold))] transition-colors"
            data-testid="button-close-modal"
          >
            <X className="w-5 h-5" />
          </motion.button>
          
          {/* Category badge */}
          <div className="absolute bottom-4 left-6 px-4 py-2 rounded-full bg-background/80 backdrop-blur-sm border border-[hsl(var(--gold)/0.2)]">
            <span className="text-sm font-medium text-[hsl(var(--gold))]">{project.category}</span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 md:p-10 space-y-8">
          {/* Title & Quick Info */}
          <div className="space-y-4">
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl md:text-4xl font-serif text-gold-gradient"
            >
              {project.title}
            </motion.h2>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-[hsl(var(--gold))]" />
                <span className="text-sm">{project.timeline}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-4 h-4 text-[hsl(var(--gold))]" />
                <span className="text-sm">{project.team}</span>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            {project.description}
          </motion.p>
          
          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-2xl bg-[hsl(var(--gold)/0.03)] border border-[hsl(var(--gold)/0.1)]"
            >
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-[hsl(var(--gold))]" />
                <h3 className="font-semibold text-[hsl(var(--gold))]">The Challenge</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 rounded-2xl bg-[hsl(var(--gold)/0.03)] border border-[hsl(var(--gold)/0.1)]"
            >
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-[hsl(var(--gold))]" />
                <h3 className="font-semibold text-[hsl(var(--gold))]">Our Solution</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{project.solution}</p>
            </motion.div>
          </div>
          
          {/* Results */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[hsl(var(--gold))]" />
              <h3 className="font-semibold text-[hsl(var(--gold))]">Key Results</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {project.results.map((result, i) => (
                <motion.div
                  key={result.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ scale: 1.05, borderColor: "hsl(var(--gold) / 0.4)" }}
                  className="p-4 rounded-xl bg-background border border-[hsl(var(--gold)/0.1)] text-center transition-all"
                >
                  <div className="text-2xl md:text-3xl font-serif text-gold-gradient mb-1">{result.value}</div>
                  <div className="text-xs font-medium text-foreground mb-1">{result.label}</div>
                  <div className="text-xs text-muted-foreground">{result.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Tags */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-2"
          >
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full bg-[hsl(var(--gold)/0.08)] border border-[hsl(var(--gold)/0.15)] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </motion.div>
          
          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="pt-4 border-t border-[hsl(var(--gold)/0.1)]"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 text-[hsl(var(--gold))] font-medium group"
              >
                <span>Start a similar project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="pb-24">
      {/* Header */}
      <div className="relative py-24 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--gold)/0.05)] to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent" />
        <div className="absolute inset-0 gold-particles opacity-20" />
        
        {/* Floating elements */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 right-[20%] w-16 h-16 rounded-full bg-[hsl(var(--gold)/0.05)] border border-[hsl(var(--gold)/0.1)] hidden md:block"
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-20 left-[15%] w-12 h-12 rounded-full bg-[hsl(var(--gold)/0.05)] border border-[hsl(var(--gold)/0.1)] hidden md:block"
        />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-3xl"
          >
            <motion.div variants={FADE_UP} className="flex items-center gap-2 mb-6">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5 text-[hsl(var(--gold))]" />
              </motion.div>
              <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-widest">Our Work</span>
            </motion.div>
            <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-serif mb-6">
              <span className="text-gold-gradient shimmer-text">Portfolio</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-xl text-muted-foreground leading-relaxed">
              A curated collection of our finest work. Click any project to explore the full story behind our craft.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={STAGGER}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              variants={SCALE_IN}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-visible cursor-pointer"
              data-testid={`card-project-${project.id}`}
            >
              {/* Glow effect on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                className="absolute -inset-1 rounded-3xl blur-xl transition-opacity"
                style={{ background: `linear-gradient(135deg, ${project.accentColor}30, transparent)` }}
              />
              
              <div className="relative rounded-2xl overflow-hidden border border-[hsl(var(--gold)/0.1)] bg-card hover:border-[hsl(var(--gold)/0.3)] transition-all duration-500">
                {/* Project Visual */}
                <div className={`relative h-52 bg-gradient-to-br ${project.color} overflow-hidden`}>
                  <div className="absolute inset-0 gold-particles opacity-30" />
                  
                  {/* Abstract decoration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      animate={{ rotate: 360, scale: hoveredIndex === i ? 1.1 : 1 }}
                      transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 0.3 } }}
                      className="w-32 h-32 border border-white/10 rounded-full"
                    />
                    <motion.div 
                      animate={{ rotate: -360, scale: hoveredIndex === i ? 1.15 : 1 }}
                      transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, scale: { duration: 0.3 } }}
                      className="absolute w-20 h-20 border border-white/20 rounded-full"
                    />
                    <motion.div 
                      animate={{ 
                        scale: hoveredIndex === i ? 1.1 : 1,
                        boxShadow: hoveredIndex === i 
                          ? `0 0 30px ${project.accentColor}50` 
                          : `0 0 0px ${project.accentColor}00`
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute w-14 h-14 backdrop-blur-xl rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${project.accentColor}20` }}
                    >
                      <project.icon className="w-6 h-6" style={{ color: project.accentColor }} />
                    </motion.div>
                  </div>
                  
                  {/* Click indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: hoveredIndex === i ? 1 : 0, scale: hoveredIndex === i ? 1 : 0.8 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                  >
                    <div className="px-4 py-2 rounded-full bg-[hsl(var(--gold))] text-background text-sm font-medium flex items-center gap-2">
                      <span>View Case Study</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </motion.div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <span className="text-xs font-medium text-[hsl(var(--gold))] uppercase tracking-widest">{project.category}</span>
                    <h3 className="text-xl font-serif mt-1 group-hover:text-gold-gradient transition-all">{project.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.shortDesc}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-[hsl(var(--gold)/0.05)] border border-[hsl(var(--gold)/0.1)] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs px-2 py-1 text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  
                  {/* Results preview */}
                  <div className="pt-3 border-t border-[hsl(var(--gold)/0.1)] flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-serif text-gold-gradient">{project.results[0].value}</span>
                      <span className="text-xs text-muted-foreground ml-2">{project.results[0].label}</span>
                    </div>
                    <motion.div
                      animate={{ x: hoveredIndex === i ? 5 : 0 }}
                      className="text-[hsl(var(--gold))]"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 md:px-6 mt-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden border border-[hsl(var(--gold)/0.2)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gold)/0.1)] to-transparent" />
          <div className="absolute inset-0 gold-particles opacity-20" />
          
          {/* Decorative corners */}
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-[hsl(var(--gold)/0.3)] rounded-tl-xl"
          />
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-[hsl(var(--gold)/0.3)] rounded-tr-xl"
          />
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-[hsl(var(--gold)/0.3)] rounded-bl-xl"
          />
          <motion.div 
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-[hsl(var(--gold)/0.3)] rounded-br-xl"
          />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-serif mb-4"
            >
              Have a project in <span className="text-gold-gradient shimmer-text">mind</span>?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              Let's create something extraordinary together. Our Council is ready to bring your vision to life.
            </motion.p>
            <Link href="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[hsl(var(--gold-dark))] via-[hsl(var(--gold))] to-[hsl(var(--gold-light))] text-background font-semibold text-lg glow-gold hover:shadow-2xl transition-all"
                data-testid="button-start-project"
              >
                Start Your Project
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
