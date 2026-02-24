import { motion } from "framer-motion";
import { Brain, Sparkles, Rocket } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)",
        backgroundSize: "40px 40px",
      }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-primary text-sm font-mono font-medium tracking-wide">
            <Brain className="w-4 h-4" />
            Moringa AI Capstone Project
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6"
        >
          Prompt-Powered{" "}
          <span className="gradient-text">Kickstart</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building a Beginner's Toolkit for{" "}
          <span className="text-primary font-semibold">TailwindCSS in React</span>{" "}
          using Generative AI
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#overview" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-opacity">
            <Sparkles className="w-4 h-4" />
            Explore Toolkit
          </a>
          <a href="#ai-journal" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-display font-semibold hover:bg-muted transition-colors">
            <Rocket className="w-4 h-4" />
            AI Prompt Journal
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
