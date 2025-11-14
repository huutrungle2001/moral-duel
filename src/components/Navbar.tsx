import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import logoDark from "@/assets/logo-dark.png";
import logoLight from "@/assets/logo-light.png";

const Navbar = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress] = useState("0xABC...F91");

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/discover", label: "Discover" },
    { path: "/community", label: "Community" },
    { path: "/leaderboard", label: "Leaderboard" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-4">
              <img 
                src={isDark ? logoDark : logoLight} 
                alt="Moral Oracle" 
                className="w-16 h-16 p-1 rounded-lg" 
              />
              <span className="text-xl font-bold font-roboto text-foreground hidden sm:inline">
                Moral Oracle
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}>
                    <Button
                      variant="ghost"
                      className={`gap-2 ${isActive ? 'bg-primary/10 text-primary hover:bg-primary/20' : ''}`}
                    >
                      {item.label}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? '☀️' : '🌙'}
            </Button>
            
            <Link to="/wallet">
              <Button variant="outline" className="gap-2">
                <span className="hidden sm:inline">Thinking Profile</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-around pb-3 gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link key={item.path} to={item.path} className="flex-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className={`w-full gap-1 ${isActive ? 'bg-primary/10 text-primary hover:bg-primary/20' : ''}`}
                >
                  <span className="text-xs">{item.label}</span>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
