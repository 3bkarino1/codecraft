
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "sonner";

const Profile = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if not authenticated
    if (!isAuthenticated) {
      navigate("/auth");
    }
  }, [isAuthenticated, navigate]);

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
  
  if (!isAuthenticated) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-4 py-20">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="flex flex-col items-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                {getInitials()}
              </AvatarFallback>
            </Avatar>
            <CardTitle className="text-center">{user?.name || "CodeCraft User"}</CardTitle>
            <CardDescription className="text-center mt-1">
              {user?.email}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-medium mb-2">Account Information</h3>
                <p className="text-sm text-muted-foreground">
                  You have access to all basic CodeCraft features.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Your Progress</h3>
                <p className="text-sm text-muted-foreground">
                  Start exploring our 3D programming courses to track your progress here.
                </p>
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex justify-center">
            <Button variant="outline" onClick={handleLogout} className="w-full">
              Log out
            </Button>
          </CardFooter>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;
