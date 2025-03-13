
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToNextSection = () => {
    document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20"
    >
      {/* Content overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="animate-fade-up">
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium tracking-wider">
            LEARN. CREATE. INNOVATE.
          </span>
          <h1 className="font-bold mb-6 leading-tight">
            Master Programming Through<br />
            <span className="text-primary">Interactive Learning</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover a revolutionary approach to learning programming with immersive visualization 
            and hands-on projects that transform abstract concepts into tangible experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#courses"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Explore Courses
            </a>
            <a
              href="/#about"
              className="px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToNextSection}
      >
        <ChevronDown className="h-8 w-8 text-foreground/70" />
      </div>
    </div>
  );
};

export default Hero;
