import SectionWrapper from "./SectionWrapper";
import { BookOpen, Palette, Zap, CheckCircle, AlertTriangle, ExternalLink, Lightbulb, Monitor, Package, MessageSquare, Rocket } from "lucide-react";

const CodeBlock = ({ children, title }: { children: string; title?: string }) => (
  <div className="my-4">
    {title && (
      <div className="bg-secondary px-4 py-2 rounded-t-lg border border-b-0 border-border">
        <span className="text-sm font-mono text-muted-foreground">{title}</span>
      </div>
    )}
    <pre className={`code-block ${title ? "rounded-t-none" : ""}`}>
      <code>{children}</code>
    </pre>
  </div>
);

const InfoCard = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
  <div className="rounded-lg border border-border bg-card p-5 glow-green">
    <div className="flex items-center gap-3 mb-3">
      <Icon className="w-5 h-5 text-primary" />
      <h4 className="font-display font-semibold text-lg">{title}</h4>
    </div>
    <div className="text-muted-foreground leading-relaxed text-sm">{children}</div>
  </div>
);

const ToolkitContent = () => {
  return (
    <>
      {/* Overview */}
      <SectionWrapper id="overview" number="01" title="Title & Objective">
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <h3 className="text-xl font-display font-semibold text-foreground">
            "Getting Started with TailwindCSS in React — A Beginner's Guide"
          </h3>
          <div className="grid gap-4 md:grid-cols-3 mt-6">
            <InfoCard icon={Palette} title="Technology">
              <p>TailwindCSS — a utility-first CSS framework that lets you style directly in your markup.</p>
            </InfoCard>
            <InfoCard icon={Lightbulb} title="Why This Tech?">
              <p>Rapid prototyping, no context-switching between CSS files, and excellent React integration.</p>
            </InfoCard>
            <InfoCard icon={Zap} title="End Goal">
              <p>Render a fully styled, responsive UI component using only Tailwind utility classes.</p>
            </InfoCard>
          </div>
        </div>
      </SectionWrapper>

      {/* Quick Summary */}
      <SectionWrapper id="summary" number="02" title="Quick Summary">
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            <span className="text-primary font-semibold">TailwindCSS</span> is a utility-first CSS framework packed with classes like{" "}
            <code className="text-primary bg-secondary px-1.5 py-0.5 rounded text-sm font-mono">flex</code>,{" "}
            <code className="text-primary bg-secondary px-1.5 py-0.5 rounded text-sm font-mono">pt-4</code>,{" "}
            <code className="text-primary bg-secondary px-1.5 py-0.5 rounded text-sm font-mono">text-center</code>{" "}
            that can be composed to build any design, directly in your markup.
          </p>
          <div className="grid gap-4 md:grid-cols-2 mt-6">
            <InfoCard icon={BookOpen} title="Where It's Used">
              <p>Web applications, dashboards, landing pages, e-commerce sites. Used by Shopify, GitHub, and Netflix.</p>
            </InfoCard>
            <InfoCard icon={Zap} title="Real-World Example">
              <p>This very page is built with TailwindCSS + React, demonstrating responsive design, dark themes, and utility-first styling.</p>
            </InfoCard>
          </div>
        </div>
      </SectionWrapper>

      {/* System Requirements */}
      <SectionWrapper id="requirements" number="03" title="System Requirements">
        <div className="grid gap-4 md:grid-cols-3">
          <InfoCard icon={Monitor} title="Operating System">
            <p>Linux, macOS, or Windows 10+</p>
          </InfoCard>
          <InfoCard icon={Package} title="Tools Required">
            <ul className="space-y-1 mt-1">
              <li>• Node.js (v18+)</li>
              <li>• npm or yarn</li>
              <li>• VS Code (recommended)</li>
            </ul>
          </InfoCard>
          <InfoCard icon={Package} title="Extensions">
            <ul className="space-y-1 mt-1">
              <li>• Tailwind CSS IntelliSense</li>
              <li>• ES7+ React Snippets</li>
              <li>• Prettier</li>
            </ul>
          </InfoCard>
        </div>
      </SectionWrapper>

      {/* Installation */}
      <SectionWrapper id="setup" number="04" title="Installation & Setup">
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>Follow these steps to set up TailwindCSS in a new React project:</p>

          <div>
            <h4 className="text-foreground font-display font-semibold mb-2">Step 1: Create a React app with Vite</h4>
            <CodeBlock title="Terminal">{`npm create vite@latest my-tailwind-app -- --template react
cd my-tailwind-app
npm install`}</CodeBlock>
          </div>

          <div>
            <h4 className="text-foreground font-display font-semibold mb-2">Step 2: Install TailwindCSS</h4>
            <CodeBlock title="Terminal">{`npm install -D tailwindcss @tailwindcss/vite`}</CodeBlock>
          </div>

          <div>
            <h4 className="text-foreground font-display font-semibold mb-2">Step 3: Configure Vite plugin</h4>
            <CodeBlock title="vite.config.js">{`import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})`}</CodeBlock>
          </div>

          <div>
            <h4 className="text-foreground font-display font-semibold mb-2">Step 4: Add Tailwind to your CSS</h4>
            <CodeBlock title="src/index.css">{`@import "tailwindcss";`}</CodeBlock>
          </div>

          <div>
            <h4 className="text-foreground font-display font-semibold mb-2">Step 5: Start the dev server</h4>
            <CodeBlock title="Terminal">{`npm run dev`}</CodeBlock>
          </div>
        </div>
      </SectionWrapper>

      {/* Minimal Working Example */}
      <SectionWrapper id="example" number="05" title="Minimal Working Example">
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            This example renders a responsive card component using only Tailwind utility classes — no custom CSS needed.
          </p>

          <CodeBlock title="src/App.jsx">{`function App() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
            <span className="text-white text-xl">🌱</span>
          </div>
          <div>
            <h1 className="text-white text-xl font-bold">Hello, Tailwind!</h1>
            <p className="text-gray-400 text-sm">Built with utility-first CSS</p>
          </div>
        </div>
        <p className="text-gray-300 leading-relaxed">
          This card is styled entirely with Tailwind utility classes.
          No CSS files needed!
        </p>
        <button className="mt-6 w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;`}</CodeBlock>

          <div className="rounded-lg border border-border bg-secondary/50 p-5">
            <h4 className="font-display font-semibold text-foreground flex items-center gap-2 mb-2">
              <CheckCircle className="w-4 h-4 text-primary" />
              Expected Output
            </h4>
            <p className="text-sm">
              A centered dark card with a green avatar, title, description text, and a green CTA button — fully responsive.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* AI Prompt Journal */}
      <SectionWrapper id="ai-journal" number="06" title="AI Prompt Journal">
        <div className="space-y-6">
          {[
            {
              prompt: "Give me a step-by-step guide to initialize TailwindCSS in a React app using Vite",
              summary: "The AI provided a clear 5-step guide including Vite setup, Tailwind installation, config scaffolding, and CSS import. It also suggested the Vite plugin approach over PostCSS.",
              rating: "⭐⭐⭐⭐⭐ — Accurate and saved ~30 minutes of docs reading.",
            },
            {
              prompt: "What are the most commonly used Tailwind utility classes for layout and spacing?",
              summary: "Response covered flex, grid, padding, margin, gap, and responsive prefixes (sm:, md:, lg:). Included practical examples.",
              rating: "⭐⭐⭐⭐ — Great overview, though some edge cases were missing.",
            },
            {
              prompt: "Help me debug: Tailwind classes aren't applying in my React component",
              summary: "AI identified the issue as missing content paths in tailwind.config.js. Also suggested checking the CSS import order and purge settings.",
              rating: "⭐⭐⭐⭐⭐ — Pinpointed the exact issue immediately.",
            },
          ].map((entry, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-6 space-y-3">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-mono text-sm font-medium">"{entry.prompt}"</p>
                </div>
              </div>
              <div className="pl-8 space-y-2">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <span className="text-primary font-semibold">AI Response:</span> {entry.summary}
                </p>
                <p className="text-muted-foreground text-sm">
                  <span className="text-highlight font-semibold">Evaluation:</span> {entry.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Common Issues */}
      <SectionWrapper id="issues" number="07" title="Common Issues & Fixes">
        <div className="space-y-4">
          {[
            {
              issue: "Tailwind classes not applying",
              fix: "Ensure your tailwind.config.js content array includes the path to your component files: content: ['./src/**/*.{js,jsx,ts,tsx}']",
            },
            {
              issue: "PostCSS plugin error on startup",
              fix: "Switch to the Vite plugin approach (@tailwindcss/vite) instead of PostCSS for cleaner integration with Vite-based projects.",
            },
            {
              issue: "Styles not updating on save",
              fix: "Restart the dev server. Some config changes require a fresh build. Also verify HMR is working in your terminal output.",
            },
          ].map((entry, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-highlight mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-display font-semibold text-foreground">{entry.issue}</h4>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">{entry.fix}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* References */}
      <SectionWrapper id="references" number="08" title="References">
        <div className="grid gap-3">
          {[
            { title: "TailwindCSS Official Docs", url: "https://tailwindcss.com/docs" },
            { title: "Vite Getting Started", url: "https://vitejs.dev/guide/" },
            { title: "Tailwind + React Tutorial (YouTube)", url: "https://youtube.com" },
            { title: "Tailwind Cheat Sheet", url: "https://nerdcave.com/tailwind-cheat-sheet" },
            { title: "Moringa School AI Platform", url: "https://ai.moringaschool.com" },
          ].map((ref, i) => (
            <a
              key={i}
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors group"
            >
              <span className="font-display font-medium group-hover:text-primary transition-colors">{ref.title}</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper id="timeline" number="09" title="Project Timeline">
        <div className="space-y-4">
          {[
            { day: "Monday", task: "Select tech, create AI prompt plan", icon: Lightbulb },
            { day: "Tuesday", task: "Scaffold basic setup with AI help", icon: Package },
            { day: "Wednesday", task: "Finalize minimal example, fix issues", icon: Zap },
            { day: "Thursday", task: "Document toolkit + test with a peer", icon: BookOpen },
            { day: "Friday (AM)", task: "Final edits, polish, and submit", icon: Rocket },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="flex-shrink-0 w-28 text-right">
                <span className="font-mono text-sm text-primary font-semibold">{item.day}</span>
              </div>
              <div className="w-3 h-3 rounded-full bg-primary flex-shrink-0" />
              <div className="flex-1 p-4 rounded-lg border border-border bg-card">
                <div className="flex items-center gap-2">
                  <item.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{item.task}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Evaluation */}
      <SectionWrapper id="evaluation" number="10" title="Evaluation Criteria">
        <div className="space-y-3">
          {[
            { criteria: "Clarity & completeness of docs", weight: 30 },
            { criteria: "Use of GenAI for learning", weight: 20 },
            { criteria: "Functionality of example", weight: 20 },
            { criteria: "Testing & iteration", weight: 20 },
            { criteria: "Creativity in chosen tech", weight: 10 },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-display font-medium">{item.criteria}</span>
                  <span className="text-sm font-mono text-primary">{item.weight}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all duration-1000"
                    style={{ width: `${item.weight}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="py-16 px-6 text-center border-t border-border">
        <p className="text-muted-foreground text-sm font-mono">
          Built with <span className="text-primary">♥</span> using React + TailwindCSS — Moringa AI Capstone 2026
        </p>
        <p className="text-muted-foreground/50 text-xs mt-2">
          🚀 Prompt smart. Build something small but mighty.
        </p>
      </footer>
    </>
  );
};

export default ToolkitContent;
