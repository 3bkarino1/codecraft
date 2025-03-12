
import { useState } from "react";
import { Link } from "react-router-dom";
import { Code, FileAxis3d, Terminal, GraduationCap, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Course {
  id: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  icon: JSX.Element;
  featured?: boolean;
}

const courses: Course[] = [
  {
    id: "web-fundamentals",
    title: "Web Development Fundamentals",
    description: "Learn HTML, CSS, and JavaScript with interactive 3D visualizations of the DOM and CSS box model.",
    level: "Beginner",
    duration: "6 weeks",
    icon: <Code className="h-10 w-10 text-primary" />,
    featured: true,
  },
  {
    id: "3d-modeling",
    title: "3D Modeling for Developers",
    description: "Explore 3D modeling principles using WebGL and Three.js to create interactive visualizations.",
    level: "Intermediate",
    duration: "8 weeks",
    icon: <FileAxis3d className="h-10 w-10 text-primary" />,
    featured: true,
  },
  {
    id: "algorithms-visualized",
    title: "Algorithms Visualized",
    description: "Master algorithms and data structures through interactive 3D visualizations and animations.",
    level: "Intermediate",
    duration: "10 weeks",
    icon: <Terminal className="h-10 w-10 text-primary" />,
    featured: true,
  },
  {
    id: "advanced-webgl",
    title: "Advanced WebGL Programming",
    description: "Deep dive into WebGL shaders, advanced rendering techniques, and performance optimization.",
    level: "Advanced",
    duration: "12 weeks",
    icon: <GraduationCap className="h-10 w-10 text-primary" />,
  },
];

const CourseCard = ({ course }: { course: Course }) => {
  return (
    <div 
      className={cn(
        "featured-card p-6 h-full flex flex-col",
        course.featured ? "md:col-span-2 lg:col-span-1" : ""
      )}
    >
      <div className="mb-6">
        {course.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-muted-foreground mb-4 flex-grow">{course.description}</p>
      <div className="flex justify-between items-center mt-auto">
        <div className="flex space-x-2">
          <span className="inline-block px-2 py-1 rounded-full bg-secondary text-xs font-medium">
            {course.level}
          </span>
          <span className="inline-block px-2 py-1 rounded-full bg-secondary text-xs font-medium">
            {course.duration}
          </span>
        </div>
        <Link
          to={`/courses/${course.id}`}
          className="flex items-center text-primary font-medium text-sm hover:underline"
        >
          View course <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

const Courses = () => {
  const [selectedLevel, setSelectedLevel] = useState<string>("all");

  const filteredCourses = selectedLevel === "all" 
    ? courses 
    : courses.filter(course => course.level.toLowerCase() === selectedLevel.toLowerCase());

  return (
    <section id="courses" className="section-container">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block mb-3 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium tracking-wider">
          OUR CURRICULUM
        </span>
        <h2 className="font-bold mb-4">Interactive Learning Experiences</h2>
        <p className="text-muted-foreground">
          Our courses combine programming fundamentals with interactive 3D visualizations, 
          making complex concepts easier to understand and more engaging to learn.
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-12">
        <button
          onClick={() => setSelectedLevel("all")}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            selectedLevel === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          All Levels
        </button>
        <button
          onClick={() => setSelectedLevel("beginner")}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            selectedLevel === "beginner"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          Beginner
        </button>
        <button
          onClick={() => setSelectedLevel("intermediate")}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            selectedLevel === "intermediate"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          Intermediate
        </button>
        <button
          onClick={() => setSelectedLevel("advanced")}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-colors",
            selectedLevel === "advanced"
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          Advanced
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/courses"
          className="inline-flex items-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/80"
        >
          View All Courses <ChevronRight className="h-4 w-4 ml-2" />
        </Link>
      </div>
    </section>
  );
};

export default Courses;
