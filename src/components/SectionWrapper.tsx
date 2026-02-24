import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  number: string;
  title: string;
  children: ReactNode;
}

const SectionWrapper = ({ id, number, title, children }: SectionWrapperProps) => {
  return (
    <section id={id} className="py-20 px-6 border-b border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-primary font-mono text-sm font-semibold">{number}</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
