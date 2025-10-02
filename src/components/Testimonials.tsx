import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Jayesh Kakadiya",
      role: "Kiran Beauty Shop",
      content:
        "Priyank delivered an exceptional PWA that exceeded our expectations. His attention to detail and technical expertise are outstanding. The project was completed on time and within budget.",
      rating: 5,
    },
    {
      name: "Ajay Singh",
      role: "CEO, Namish Marketing",
      content:
        "Working with Priyank was a pleasure. He understood our requirements perfectly and delivered a stunning, user-friendly website. Highly recommended for any web development project!",
      rating: 5,
    },
    {
      name: "Viraj Patel",
      role: "Founder, Pixel Studio",
      content:
        "Priyank's expertise in Web development is impressive. He built a beautiful website for us. Professional, responsive, and highly skilled.",
      rating: 5,
    },
    {
      name: "Kartik Shukla",
      role: "Maketing Manager, E-Commerce Co",
      content:
        "Priyank’s creativity brought our festival poster to life! The design perfectly captured the spirit of the event and attracted a record number of attendees. His understanding of vibrant visuals and layouts is outstanding.",
      rating: 5,
    },
  ];

  // Auto-sliding functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Client Feedback
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">Testimonials</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 relative animate-scale-in overflow-hidden">
            <Quote className="text-primary opacity-20 absolute top-8 left-8" size={48} />
            <div className="relative z-10 transition-all duration-500 ease-in-out">
              <p className="text-lg md:text-xl text-foreground/80 mb-6 italic transition-opacity duration-500">
                "{testimonials[currentIndex].content}"
              </p>
              <div className="flex items-center justify-between">
                <div className="transition-opacity duration-500">
                  <h4 className="text-xl font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-foreground/60">{testimonials[currentIndex].role}</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <span key={i} className="text-primary">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </Button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-primary w-8" : "bg-primary/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
