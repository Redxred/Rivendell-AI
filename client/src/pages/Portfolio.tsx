import { motion } from "framer-motion";
import { ExternalLink, Sparkles, Code, Globe, Cpu, LayoutTemplate } from "lucide-react";
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
    description: "An enterprise-grade AI assistant platform that revolutionized customer support for a Fortune 500 company, reducing response times by 80%.",
    tags: ["Machine Learning", "NLP", "React", "Python"],
    icon: Cpu,
    color: "from-amber-500/20 to-orange-600/20",
    metrics: { label: "Response Time", value: "-80%" }
  },
  {
    id: "solara-commerce",
    title: "Solara Commerce",
    category: "Web Development",
    description: "A next-generation e-commerce platform with real-time inventory, AI-powered recommendations, and seamless checkout experiences.",
    tags: ["Next.js", "PostgreSQL", "Stripe", "Redis"],
    icon: Globe,
    color: "from-emerald-500/20 to-teal-600/20",
    metrics: { label: "Conversion Rate", value: "+45%" }
  },
  {
    id: "mindflow-app",
    title: "MindFlow",
    category: "UI/UX Design",
    description: "A meditation and wellness app featuring serene interfaces, personalized journeys, and biometric integration for stress management.",
    tags: ["React Native", "Firebase", "HealthKit", "Motion Design"],
    icon: LayoutTemplate,
    color: "from-violet-500/20 to-purple-600/20",
    metrics: { label: "User Retention", value: "92%" }
  },
  {
    id: "quantum-analytics",
    title: "Quantum Analytics",
    category: "Business Intelligence",
    description: "A comprehensive analytics dashboard that transforms complex data into actionable insights with real-time visualization.",
    tags: ["D3.js", "Node.js", "MongoDB", "WebSockets"],
    icon: Code,
    color: "from-blue-500/20 to-cyan-600/20",
    metrics: { label: "Data Processing", value: "10x" }
  },
  {
    id: "aurora-fintech",
    title: "Aurora Fintech",
    category: "Financial Technology",
    description: "A secure banking platform with advanced fraud detection, instant transfers, and personalized financial advice powered by AI.",
    tags: ["Security", "Blockchain", "React", "Go"],
    icon: Globe,
    color: "from-rose-500/20 to-pink-600/20",
    metrics: { label: "Fraud Prevention", value: "99.9%" }
  },
  {
    id: "echo-crm",
    title: "Echo CRM",
    category: "Business Process",
    description: "An intelligent CRM system that automates lead scoring, pipeline management, and customer journey orchestration.",
    tags: ["Salesforce", "Python", "Machine Learning", "APIs"],
    icon: Cpu,
    color: "from-yellow-500/20 to-amber-600/20",
    metrics: { label: "Sales Efficiency", value: "+60%" }
  }
];

export default function Portfolio() {
  return (
    <div className="pb-24">
      {/* Header */}
      <div className="relative py-24 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--gold)/0.05)] to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-[hsl(var(--gold))] to-transparent" />
        <div className="absolute inset-0 gold-particles opacity-20" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={STAGGER}
            className="max-w-3xl"
          >
            <motion.div variants={FADE_UP} className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-[hsl(var(--gold))]" />
              <span className="text-sm font-medium text-[hsl(var(--gold))] uppercase tracking-widest">Our Work</span>
            </motion.div>
            <motion.h1 variants={FADE_UP} className="text-5xl md:text-7xl font-serif mb-6">
              <span className="text-gold-gradient">Portfolio</span>
            </motion.h1>
            <motion.p variants={FADE_UP} className="text-xl text-muted-foreground leading-relaxed">
              A curated collection of our finest work. Each project represents our commitment to excellence, innovation, and meaningful impact.
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
              className="group relative rounded-2xl overflow-hidden border border-[hsl(var(--gold)/0.1)] bg-card hover:border-[hsl(var(--gold)/0.3)] transition-all duration-500"
              data-testid={`card-project-${project.id}`}
            >
              {/* Project Visual */}
              <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                <div className="absolute inset-0 gold-particles opacity-30" />
                
                {/* Abstract decoration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-32 h-32 border border-white/10 rounded-full"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute w-20 h-20 border border-white/20 rounded-full"
                  />
                  <div className="absolute w-14 h-14 bg-[hsl(var(--gold)/0.2)] backdrop-blur-xl rounded-xl flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-[hsl(var(--gold))]" />
                  </div>
                </div>
                
                {/* Metric Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-[hsl(var(--gold)/0.2)]">
                  <span className="text-xs font-medium text-[hsl(var(--gold))]">{project.metrics.value}</span>
                  <span className="text-xs text-muted-foreground ml-1">{project.metrics.label}</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-medium text-[hsl(var(--gold))] uppercase tracking-widest">{project.category}</span>
                  <h3 className="text-xl font-serif mt-1 group-hover:text-gold-gradient transition-all">{project.title}</h3>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                  {project.description}
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
                
                {/* View Link */}
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-[hsl(var(--gold))] text-sm font-medium pt-2 cursor-pointer group/link"
                >
                  <span>View Case Study</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                </motion.div>
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
          <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-[hsl(var(--gold)/0.3)] rounded-tl-xl" />
          <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-[hsl(var(--gold)/0.3)] rounded-tr-xl" />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-l-2 border-b-2 border-[hsl(var(--gold)/0.3)] rounded-bl-xl" />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-[hsl(var(--gold)/0.3)] rounded-br-xl" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Have a project in <span className="text-gold-gradient">mind</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's create something extraordinary together. Our Council is ready to bring your vision to life.
            </p>
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
    </div>
  );
}
