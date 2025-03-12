
import { Lightbulb, Cpu, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block mb-3 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium tracking-wider">
            OUR APPROACH
          </span>
          <h2 className="font-bold mb-4">Why Learn With 3D Visualizations?</h2>
          <p className="text-muted-foreground">
            Our revolutionary teaching approach uses 3D models and visualizations to transform 
            abstract programming concepts into tangible, interactive experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="glass p-8 rounded-2xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Visual Learning</h3>
            <p className="text-muted-foreground">
              Transform abstract concepts into visual, interactive 3D models that enhance understanding and retention.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Cpu className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Hands-On Projects</h3>
            <p className="text-muted-foreground">
              Apply your knowledge through practical, project-based learning experiences with real-time feedback.
            </p>
          </div>

          <div className="glass p-8 rounded-2xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Community Learning</h3>
            <p className="text-muted-foreground">
              Join a supportive community of learners and instructors who are passionate about programming and 3D visualization.
            </p>
          </div>
        </div>

        <div className="mt-20 glass rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4">Our Teaching Philosophy</h3>
              <p className="text-muted-foreground mb-6">
                We believe in making programming accessible and engaging through visual learning. 
                Our approach combines the precision of traditional teaching methods with the 
                immersive power of 3D visualization.
              </p>
              <p className="text-muted-foreground mb-6">
                By transforming abstract concepts into tangible models, we help learners build 
                a deeper understanding of programming principles and develop stronger mental models.
              </p>
              <a 
                href="/about"
                className="inline-flex items-center font-medium text-primary hover:underline"
              >
                Learn more about our methodology
              </a>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-8 md:p-10 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-sm">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-2xl animate-float"></div>
                <div className="absolute inset-0 -translate-y-4 translate-x-4 bg-primary/20 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '1s' }}></div>
                <div className="absolute inset-0 -translate-y-8 -translate-x-4 bg-primary/10 backdrop-blur-sm rounded-2xl animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
