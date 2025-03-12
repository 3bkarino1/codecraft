
import { useEffect } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Courses from "@/components/Courses";
import About from "@/components/About";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Welcome toast when page loads
    const timeout = setTimeout(() => {
      toast("Welcome to CodeCraft", {
        description: "Explore our interactive 3D programming courses",
        action: {
          label: "Explore",
          onClick: () => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })
        }
      });
    }, 1500);
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Courses />
      <About />
      
      {/* Newsletter Section */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest courses, tutorials, and programming resources.
          </p>
          
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-lg border border-border/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button className="px-4 py-3 rounded-r-lg bg-primary text-primary-foreground flex items-center transition-colors hover:bg-primary/90">
              Subscribe <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
          
          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
