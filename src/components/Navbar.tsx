
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 md:py-5",
        isScrolled
          ? "glass shadow-sm backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <NavLink 
          to="/" 
          className="flex items-center text-2xl font-bold text-foreground transition-transform hover:scale-105"
        >
          <span className="text-primary">Code</span>Craft
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn("nav-item", isActive && "nav-item-active")
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              cn("nav-item", isActive && "nav-item-active")
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn("nav-item", isActive && "nav-item-active")
            }
          >
            About
          </NavLink>
          <a
            href="/#contact"
            className="ml-4 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-colors hover:bg-primary/90"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col glass shadow-md animate-fade-in absolute top-full left-0 right-0 border-t border-border/10 pb-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn("nav-item py-3 px-6", isActive && "nav-item-active")
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              cn("nav-item py-3 px-6", isActive && "nav-item-active")
            }
            onClick={() => setIsMenuOpen(false)}
          >
            Courses
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn("nav-item py-3 px-6", isActive && "nav-item-active")
            }
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
          <div className="px-6 mt-2">
            <a
              href="/#contact"
              className="inline-block w-full text-center px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-colors hover:bg-primary/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
