import Footer from "@/components/Footer";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const projects = [
    {
      title: "Kiran Beauty Shop",
      description:
        "A modern billing platform built for beauty shops with product management, billing, and receipt generation. Features include secure login, invoice history, and a clean, user-friendly dashboard.",
      image: "/assets/kiranBeautyShop.png",
      tags: ["Next JS", "Supabase"],
    },
    {
      title: "Namish Marketing",
      description:
        "Namish Marketing – Digital Marketing Agency Website A modern, responsive website designed to showcase services, boost client trust, and drive leads with a clean orange-white theme and engaging CTAs.",
      image: "/assets/namishMarketing.png",
      tags: ["Next.js"],
      liveUrl: "https://www.namishmarketing.com/",
      githubUrl: "https://github.com/hiajaysingh/NamishMarketing",
    },

    {
      title: "PixelCraft Studio",
      description:
        "A sleek, modern website built for a photography studio, featuring service highlights, portfolio showcase, client testimonials, and elegant design elements to capture the essence of premium photography.",
      image: "/assets/pixelCraft.png",
      tags: ["Next Js", "Tailwind CSS"],
      liveUrl: "https://pixelcraft-studio.vercel.app/",
      githubUrl: "https://github.com/viradiyapriyank7/pixel-craft",
    },
    {
      title: "Ceramic Tiles & Interior Design Website",
      description:
        "A premium, dark-themed website crafted to showcase elegant ceramic collections, modern interiors, and versatile tile solutions with a focus on style, quality, and user experience.",
      image: "/assets/tiles.png",
      tags: ["Html", "Css", "Js", "Jquery"],
    },
    {
      title: "ArtisticTouch – Mehendi & Nail Art",
      description:
        "A drag-and-drop website builder for creating professional portfolios with customizable templates and hosting options.",
      image:
        "/assets/Mehendi_Nails.png",
      tags: ["Next JS", "Tailwind CSS"],
      liveUrl: "https://mehendi-nail-art.vercel.app",
      githubUrl: "https://github.com/viradiyapriyank7/mehendi-nail-Art",
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link
              to="/"
              className="text-2xl font-bold text-primary transition-colors hover:text-primary/80"
            >
              PV
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=600&fit=crop"
            alt="Projects Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/90 via-secondary/80 to-background" />
        </div>

        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white text-sm font-medium mb-6 animate-fade-in border border-white/20">
            <Sparkles size={16} />
            Portfolio Showcase
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-slide-up">
            Featured Projects
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto animate-fade-in">
            Explore my collection of web applications, from e-commerce platforms
            to AI-powered tools. Each project showcases modern technologies and
            best practices.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl transition-all duration-500 group animate-scale-in glass-card border-2 hover:border-primary/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                    <div className="flex gap-3">
                      {project.githubUrl && project.liveUrl ? (
                        <>
                          <Button size="lg" className="shadow-lg" asChild>
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={18} className="mr-2" />
                              Live Demo
                            </a>
                          </Button>
                          <Button
                            size="lg"
                            variant="outline"
                            className="bg-background/90 hover:bg-background shadow-lg"
                            asChild
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github size={18} className="mr-2" />
                              Code
                            </a>
                          </Button>
                        </>
                      ) : (
                        <p className="text-sm text-white italic">
                          For security reasons, Live Demo and Code cannot be
                          shared.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-card/50 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20 hover:bg-primary/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="glass-card rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 animate-pulse" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-secondary">
                Let's Build Something Amazing
              </h2>
              <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
                Have a project in mind? I'd love to help bring your ideas to
                life with clean code and beautiful design.
              </p>
              <Button size="lg" className="text-lg px-8 py-6" asChild>
                <a href="/#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectsPage;
