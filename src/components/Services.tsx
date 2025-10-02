import { Globe, Search, Share2, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Globe size={48} />,
      title: "Website Development",
      description:
        "Custom web applications built with modern technologies, responsive design, and optimized performance for all devices.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Modern UI/UX"],
    },
    {
      icon: <Search size={48} />,
      title: "SEO Optimization",
      description:
        "Comprehensive SEO strategies to improve your website's visibility, rankings, and organic traffic on search engines.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics"],
    },
    {
      icon: <Share2 size={48} />,
      title: "Marketing Posts",
      description:
        "Creative and engaging marketing content designed to boost your brand's social media presence and engagement.",
      features: ["Social Media", "Content Strategy", "Brand Awareness", "Engagement"],
    },
    {
      icon: <Calendar size={48} />,
      title: "Festival Posts",
      description:
        "Custom festival and occasion-based creative designs to celebrate with your audience and enhance brand connection.",
      features: ["Custom Designs", "Quick Turnaround", "Brand Aligned", "High Quality"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">My Services</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Professional services tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">{service.title}</h3>
              <p className="text-foreground/70 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-foreground/80">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
