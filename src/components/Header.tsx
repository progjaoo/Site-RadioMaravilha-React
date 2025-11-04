import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Headphones, Video, Youtube, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl md:text-3xl font-bold">
              <span className="text-primary">89.</span>
              <span className="text-foreground">maravilha</span>
              <span className="text-xs md:text-sm text-muted-foreground ml-1">FM</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-2">
            <Link to="/">
              <Button
                variant={isActive("/") ? "default" : "ghost"}
                className="gap-2"
              >
                <Home size={18} />
                Home
              </Button>
            </Link>
            <Link to="/ouvir-ao-vivo">
              <Button
                variant={isActive("/ouvir-ao-vivo") ? "default" : "ghost"}
                className="gap-2"
              >
                <Headphones size={18} />
                Ouvir Ao vivo
              </Button>
            </Link>
            <Link to="/assistir-ao-vivo">
              <Button
                variant={isActive("/assistir-ao-vivo") ? "default" : "ghost"}
                className="gap-2"
              >
                <Video size={18} />
                Assistir ao Vivo
              </Button>
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light transition-colors"
            >
              <Youtube size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-light transition-colors"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex items-center justify-center space-x-1 mt-3">
          <Link to="/">
            <Button
              size="sm"
              variant={isActive("/") ? "default" : "ghost"}
              className="gap-1 text-xs"
            >
              <Home size={16} />
              Home
            </Button>
          </Link>
          <Link to="/ouvir-ao-vivo">
            <Button
              size="sm"
              variant={isActive("/ouvir-ao-vivo") ? "default" : "ghost"}
              className="gap-1 text-xs"
            >
              <Headphones size={16} />
              Ouvir
            </Button>
          </Link>
          <Link to="/assistir-ao-vivo">
            <Button
              size="sm"
              variant={isActive("/assistir-ao-vivo") ? "default" : "ghost"}
              className="gap-1 text-xs"
            >
              <Video size={16} />
              Assistir
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
