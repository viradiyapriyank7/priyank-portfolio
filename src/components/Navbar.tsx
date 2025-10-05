import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "skills", label: "Skills", path: "/#skills" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "services", label: "Services", path: "/#services" },
    { id: "testimonials", label: "Testimonials", path: "/#testimonials" },
    { id: "faq", label: "FAQ", path: "/#faq" },
    { id: "contact", label: "Contact", path: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only handle section-based active states on the home page
      if (location.pathname === "/") {
        const sections = navItems.map((item) => document.getElementById(item.id));
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        location.pathname === "/projects" 
          ? "bg-transparent" 
          : isScrolled 
            ? "bg-background/95 backdrop-blur-md shadow-lg" 
            : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="text-2xl font-bold text-primary transition-colors"
          >
            PV
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isProjectsPage = item.id === "projects";
              const isActive = isProjectsPage 
                ? location.pathname === "/projects" || (location.pathname === "/" && activeSection === "projects")
                : location.pathname === "/" && activeSection === item.id;
              
              if (isProjectsPage) {
                return (
                  <Link
                    key={item.id}
                    to="/projects"
                    className={`text-sm font-medium transition-colors ${
                      isActive 
                        ? "text-primary font-semibold" 
                        : location.pathname === "/projects"
                          ? "text-white/90 hover:text-white"
                          : isScrolled 
                            ? "text-foreground/70 hover:text-primary"
                            : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }
              
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (location.pathname !== "/") {
                      window.location.href = `/#${item.id}`;
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className={`text-sm font-medium transition-colors ${
                    isActive 
                      ? "text-primary font-semibold" 
                      : location.pathname === "/projects"
                        ? "text-white/90 hover:text-white"
                        : isScrolled 
                          ? "text-foreground/70 hover:text-primary"
                          : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors ${
              location.pathname === "/projects"
                ? "text-white hover:text-white/80"
                : isScrolled 
                  ? "text-foreground hover:text-primary" 
                  : "text-white hover:text-white/80"
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm animate-fade-in" onClick={() => setIsOpen(false)}>
            <div className="absolute top-20 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-scale-in">
              <div className="px-6 py-4">
                <div className="space-y-1">
                  {navItems.map((item, index) => {
                    const isProjectsPage = item.id === "projects";
                    const isActive = isProjectsPage 
                      ? location.pathname === "/projects" || (location.pathname === "/" && activeSection === "projects")
                      : location.pathname === "/" && activeSection === item.id;
                    
                    if (isProjectsPage) {
                      return (
                        <Link
                          key={item.id}
                          to="/projects"
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:bg-gray-50 hover:scale-[1.02] ${
                            isActive 
                              ? "text-primary bg-primary/10 border border-primary/20" 
                              : "text-gray-700 hover:text-primary"
                          }`}
                          style={{ animationDelay: `${index * 50}ms` }}
                        >
                          <span className="flex-1">{item.label}</span>
                          {isActive && (
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          )}
                        </Link>
                      );
                    }
                    
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          if (location.pathname !== "/") {
                            window.location.href = `/#${item.id}`;
                          } else {
                            scrollToSection(item.id);
                          }
                          setIsOpen(false);
                        }}
                        className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 hover:bg-gray-50 hover:scale-[1.02] ${
                          isActive 
                            ? "text-primary bg-primary/10 border border-primary/20" 
                            : "text-gray-700 hover:text-primary"
                        }`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <span className="flex-1">{item.label}</span>
                        {isActive && (
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                        )}
                      </a>
                    );
                  })}
                </div>
                
                {/* Footer */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="text-center">
                    <span className="text-sm text-gray-500">Portfolio by PV</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
