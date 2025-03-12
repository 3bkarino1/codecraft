
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { LogOut, Menu, User, X } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

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

  const handleLogout = () => {
    logout();
    toast("Logged out successfully");
    navigate("/");
  };

  const getInitials = () => {
    if (user?.name) {
      return user.name.split(" ").map(n => n[0]).join("").toUpperCase();
    }
    return user?.email.substring(0, 2).toUpperCase() || "U";
  };

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
          
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {getInitials()}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer" onClick={() => navigate("/profile")}>
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer" onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <NavLink
              to="/auth"
              className={({ isActive }) =>
                cn("ml-4 px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-colors hover:bg-primary/90", isActive && "bg-primary/80")
              }
            >
              Sign In
            </NavLink>
          )}
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
            {isAuthenticated ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="inline-block w-full text-center px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-colors hover:bg-primary/90"
              >
                Log out
              </button>
            ) : (
              <NavLink
                to="/auth"
                className="inline-block w-full text-center px-4 py-2 rounded-full bg-primary text-primary-foreground font-medium text-sm transition-colors hover:bg-primary/90"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </NavLink>
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
