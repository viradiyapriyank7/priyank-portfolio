import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Projects = () => {
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
      tags: ["Html", "Css", "Js","Jquery"],
    },
    
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Featured Projects</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-2">
                    {project.githubUrl && project.liveUrl ? (
                      <>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
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
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-foreground">{project.title}</h3>
                <p className="text-foreground/70 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12 animate-fade-in">
          <Button size="lg" asChild className="group">
            <Link to="/projects">
              View More Projects
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
