
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Clock, ChevronRight, User, BarChart3, Check, Star } from "lucide-react";
import { toast } from "sonner";

// Mock course data
const coursesData = {
  "web-fundamentals": {
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript with interactive 3D visualizations of the DOM and CSS box model.",
    longDescription: "This comprehensive course introduces you to the core technologies of web development through interactive 3D visualizations. Instead of just reading about how the DOM works, you'll see it visualized in 3D space. You'll learn how CSS affects layout through actual 3D models of the box model, and understand JavaScript execution through visual animations of the event loop and call stack.",
    level: "Beginner",
    duration: "6 weeks",
    instructors: ["Sarah Johnson", "Michael Chen"],
    modules: [
      "Introduction to HTML and the DOM Visualized",
      "CSS Fundamentals and the 3D Box Model",
      "JavaScript Basics and Visual Execution",
      "Responsive Design Principles",
      "Introduction to Web APIs",
      "Building Your First Interactive Website"
    ],
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  "3d-modeling": {
    title: "3D Modeling for Developers",
    description: "Explore 3D modeling principles using WebGL and Three.js to create interactive visualizations.",
    longDescription: "This intermediate course bridges the gap between web development and 3D graphics programming. You'll learn fundamental 3D concepts like meshes, materials, lighting, and cameras, all using JavaScript and popular libraries like Three.js. By the end of the course, you'll be able to create interactive 3D visualizations that can be embedded in websites and web applications.",
    level: "Intermediate",
    duration: "8 weeks",
    instructors: ["Alex Rivera", "Priya Patel"],
    modules: [
      "Introduction to 3D Graphics Concepts",
      "Setting Up Three.js in Web Projects",
      "Working with Meshes and Materials",
      "Lighting and Cameras",
      "Animation and Interaction",
      "Performance Optimization",
      "Building Complex 3D Scenes",
      "Final Project: Interactive 3D Visualization"
    ],
    image: "https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  "algorithms-visualized": {
    title: "Algorithms Visualized",
    description: "Master algorithms and data structures through interactive 3D visualizations and animations.",
    longDescription: "Understanding algorithms and data structures is essential for any programmer, but these concepts can be difficult to grasp through text alone. This course uses interactive 3D visualizations to make these abstract concepts concrete. You'll see sorting algorithms manipulate 3D objects in real-time, understand tree structures through explorable 3D models, and learn graph algorithms through interactive network visualizations.",
    level: "Intermediate",
    duration: "10 weeks",
    instructors: ["David Kim", "Elena Rodriguez"],
    modules: [
      "Introduction to Algorithm Analysis",
      "Array Operations Visualized",
      "Sorting Algorithms in 3D",
      "Tree Structures Explored",
      "Graph Algorithms and Interactive Networks",
      "Hash Tables and Collision Resolution",
      "Dynamic Programming Visualized",
      "Advanced Data Structures",
      "Algorithm Design Techniques",
      "Final Project: Visual Algorithm Explorer"
    ],
    image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  "advanced-webgl": {
    title: "Advanced WebGL Programming",
    description: "Deep dive into WebGL shaders, advanced rendering techniques, and performance optimization.",
    longDescription: "This advanced course takes your WebGL and 3D programming skills to the next level. You'll learn how to write custom shaders, implement advanced rendering techniques, and optimize your 3D applications for maximum performance. Through hands-on projects, you'll create stunning visual effects and build complex 3D applications that run smoothly in web browsers.",
    level: "Advanced",
    duration: "12 weeks",
    instructors: ["James Wilson", "Nina Takahashi"],
    modules: [
      "WebGL Architecture Deep Dive",
      "GLSL Shader Programming Fundamentals",
      "Advanced Material Systems",
      "Post-Processing Effects",
      "Particle Systems and Simulation",
      "Shadow Mapping Techniques",
      "Physically Based Rendering",
      "Scene Organization and Management",
      "Performance Optimization Strategies",
      "Memory Management in WebGL",
      "Integration with Web Applications",
      "Final Project: Advanced 3D Web Application"
    ],
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  }
};

const Course = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState<any>(null);

  useEffect(() => {
    // Simulate loading course data
    setLoading(true);
    setTimeout(() => {
      if (id && coursesData[id as keyof typeof coursesData]) {
        setCourse(coursesData[id as keyof typeof coursesData]);
      } else {
        // Handle course not found
        toast.error("Course not found", {
          description: "The requested course could not be found."
        });
      }
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-16 w-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The requested course could not be found.
        </p>
        <Link 
          to="/courses" 
          className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105"
        >
          Back to All Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Link 
            to="/courses" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Courses
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <div className="glass rounded-2xl overflow-hidden">
                <div className="relative aspect-[16/9]">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end">
                    <div className="p-6 sm:p-10">
                      <div className="flex items-center mb-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                          {course.level}
                        </span>
                        <span className="inline-flex items-center ml-3 text-sm text-foreground/70">
                          <Clock className="h-4 w-4 mr-1" /> {course.duration}
                        </span>
                      </div>
                      <h1 className="text-3xl sm:text-4xl font-bold">{course.title}</h1>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-10">
                  <div className="flex items-center mb-6">
                    <div className="flex -space-x-2">
                      {course.instructors.map((instructor: string, index: number) => (
                        <div 
                          key={index}
                          className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border-2 border-background text-primary font-medium"
                        >
                          {instructor.charAt(0)}
                        </div>
                      ))}
                    </div>
                    <div className="ml-4">
                      <div className="text-sm text-muted-foreground">Instructors</div>
                      <div>{course.instructors.join(", ")}</div>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-3">About this course</h2>
                  <p className="text-muted-foreground mb-6">{course.longDescription}</p>
                  
                  <h2 className="text-xl font-semibold mb-3">What you'll learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {course.modules.map((module: string, index: number) => (
                      <div key={index} className="flex items-start">
                        <div className="mt-0.5 mr-3 text-primary">
                          <Check className="h-4 w-4" />
                        </div>
                        <div>{module}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="glass rounded-2xl p-6 sticky top-24">
                <div className="mb-4">
                  <div className="text-3xl font-bold mb-1">$99</div>
                  <div className="text-muted-foreground line-through">$129</div>
                </div>
                
                <button 
                  className="w-full px-4 py-3 rounded-full bg-primary text-primary-foreground font-medium mb-4 transition-transform hover:scale-105"
                  onClick={() => {
                    toast.success("Course added to cart", {
                      description: "You can now proceed to checkout."
                    });
                  }}
                >
                  Enroll Now
                </button>
                
                <button className="w-full px-4 py-3 rounded-full bg-secondary text-secondary-foreground font-medium mb-6 transition-transform hover:scale-105">
                  Try Free Preview
                </button>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-primary mr-3" />
                    <span>Access for 12 months</span>
                  </div>
                  <div className="flex items-center">
                    <BarChart3 className="h-5 w-5 text-primary mr-3" />
                    <span>Progress tracking</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-primary mr-3" />
                    <span>Certificate on completion</span>
                  </div>
                </div>
                
                <div className="border-t border-border/30 my-6"></div>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Have a question?</p>
                  <a 
                    href="mailto:support@codecraft.com" 
                    className="text-primary font-medium hover:underline"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold mb-4">More Courses You May Like</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Continue your learning journey with these related courses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(coursesData)
                .filter(([key]) => key !== id)
                .slice(0, 3)
                .map(([key, course]) => (
                  <Link 
                    key={key} 
                    to={`/courses/${key}`}
                    className="featured-card overflow-hidden group"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img 
                        src={(course as any).image} 
                        alt={(course as any).title} 
                        className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center mb-2">
                        <span className="inline-block px-2 py-0.5 rounded-full bg-secondary text-xs font-medium">
                          {(course as any).level}
                        </span>
                        <span className="ml-2 text-sm text-foreground/70">
                          {(course as any).duration}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{(course as any).title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{(course as any).description}</p>
                      <div className="flex items-center text-primary font-medium">
                        View course <ChevronRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Course;
