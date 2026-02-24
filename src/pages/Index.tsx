import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ToolkitContent from "../components/ToolkitContent";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <ToolkitContent />
    </div>
  );
};

export default Index;
