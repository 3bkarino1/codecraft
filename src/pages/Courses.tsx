
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, FileAxis3d, Terminal, GraduationCap, Search, Filter, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Course {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  icon: JSX.Element;
  category: string;
  rating: number;
  students: number;
  image: string;
}

const allCourses: Course[] = [
  {
    id: "web-fundamentals",
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript with interactive 3D visualizations of the DOM and CSS box model.",
    level: "Beginner",
    duration: "6 weeks",
    icon: <Code className="h-10 w-10 text-primary" />,
    category: "Web Development",
    rating: 4.8,
    students: 2456,
    image: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  {
    id: "3d-modeling",
    title: "3D Modeling for Developers",
    description: "Explore 3D modeling principles using WebGL and Three.js to create interactive visualizations.",
    level: "Intermediate",
    duration: "8 weeks",
    icon: <FileAxis3d className="h-10 w-10 text-primary" />,
    category: "3D Graphics",
    rating: 4.7,
    students: 1879,
    image: "https://images.unsplash.com/photo-1569748130764-3fed0c102c59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  {
    id: "algorithms-visualized",
    title: "Algorithms Visualized",
    description: "Master algorithms and data structures through interactive 3D visualizations and animations.",
    level: "Intermediate",
    duration: "10 weeks",
    icon: <Terminal className="h-10 w-10 text-primary" />,
    category: "Computer Science",
    rating: 4.9,
    students: 2134,
    image: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  {
    id: "advanced-webgl",
    title: "Advanced WebGL Programming",
    description: "Deep dive into WebGL shaders, advanced rendering techniques, and performance optimization.",
    level: "Advanced",
    duration: "12 weeks",
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
    category: "3D Graphics",
    rating: 4.6,
    students: 1562,
    image: "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  {
    id: "responsive-design",
    title: "Responsive Design Masterclass",
    description: "Create beautiful, responsive websites that work perfectly on any device.",
    level: "Beginner",
    duration: "4 weeks",
    icon: <Code className="h-10 w-10 text-primary" />,
    category: "Web Development",
    rating: 4.5,
    students: 2890,
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  },
  {
    id: "javascript-advanced",
    title: "Advanced JavaScript Concepts",
    description: "Master advanced JavaScript concepts with 3D visualizations of closures, prototype chains, and more.",
    level: "Advanced",
    duration: "8 weeks",
    icon: <Code className="h-10 w-10 text-primary" />,
    category: "Web Development",
    rating: 4.9,
    students: 1756,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
  }
];

const categories = ["All Categories", "Web Development", "3D Graphics", "Computer Science"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const Courses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedLevel, setSelectedLevel] = useState("All Levels");
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const filteredCourses = allCourses.filter((course) => {
    // Filter by search query
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by category
    const matchesCategory = selectedCategory === "All Categories" || course.category === selectedCategory;
    
    // Filter by level
    const matchesLevel = selectedLevel === "All Levels" || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Categories");
    setSelectedLevel("All Levels");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="font-bold mb-4">Explore Our Courses</h1>
            <p className="text-muted-foreground">
              Browse our selection of interactive programming courses with 3D visualizations 
              designed to make learning more intuitive and engaging.
            </p>
          </div>
          
          <div className="mb-10">
            <div className="glass p-4 rounded-2xl mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div className="hidden md:flex gap-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  
                  <select
                    value={selectedLevel}
                    onChange={(e) => setSelectedLevel(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    {levels.map((level) => (
                      <option key={level} value={level}>
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
                
                <button 
                  className="md:hidden flex items-center justify-center px-4 py-2 rounded-lg border border-border"
                  onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
                >
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </button>
              </div>
              
              {isFilterMenuOpen && (
                <div className="md:hidden mt-4 space-y-4 border-t border-border/30 pt-4 animate-fade-in">
                  <div>
                    <label className="block text-sm font-medium mb-1">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Level</label>
                    <select
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      {levels.map((level) => (
                        <option key={level} value={level}>
                          {level}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
            
            {(searchQuery || selectedCategory !== "All Categories" || selectedLevel !== "All Levels") && (
              <div className="flex items-center justify-between mb-6">
                <div className="text-sm">
                  <span className="text-muted-foreground">Showing</span>{" "}
                  <span className="font-medium">{filteredCourses.length}</span>{" "}
                  <span className="text-muted-foreground">
                    {filteredCourses.length === 1 ? "course" : "courses"}
                  </span>
                </div>
                
                <button
                  onClick={resetFilters}
                  className="flex items-center text-sm text-primary hover:underline"
                >
                  <X className="h-4 w-4 mr-1" /> Clear filters
                </button>
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <Link 
                    key={course.id} 
                    to={`/courses/${course.id}`}
                    className="featured-card overflow-hidden group h-full"
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="object-cover w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <div className="px-2 py-1 rounded-full bg-primary/20 backdrop-blur-sm text-primary text-xs font-medium">
                          {course.level}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-foreground/70">{course.category}</span>
                        <span className="flex items-center text-sm">
                          <svg className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {course.rating} ({course.students.toLocaleString()} students)
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                      <p className="text-muted-foreground mb-4">{course.description}</p>
                      <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/30">
                        <span className="text-sm flex items-center">
                          <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {course.duration}
                        </span>
                        <span className="text-primary font-medium">View Details</span>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="col-span-full py-16 text-center">
                  <div className="mb-4 text-muted-foreground">
                    <Search className="h-12 w-12 mx-auto mb-4 opacity-30" />
                    <h3 className="text-xl font-semibold mb-2">No courses found</h3>
                    <p>Try adjusting your search or filter criteria</p>
                  </div>
                  <button
                    onClick={resetFilters}
                    className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/80"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Courses;
