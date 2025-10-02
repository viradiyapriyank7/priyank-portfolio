import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I offer web development, including frontend development with React and Next.js, backend development with Node.js, database design Supabase, SEO optimization, and marketing content creation.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on complexity and requirements. A simple website typically takes 2-3 weeks, while a complex web application can take 2-3 months. I provide detailed timelines during the initial consultation.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes, I offer ongoing maintenance and support packages to ensure your website remains secure, up-to-date, and performing optimally. This includes bug fixes, security updates, and feature enhancements.",
    },
    {
      question: "What is your development process?",
      answer:
        "My process includes: 1) Discovery and planning, 2) Design and wireframing, 3) Development and testing, 4) Client review and feedback, 5) Final deployment and launch, 6) Post-launch support. I maintain clear communication throughout each phase.",
    },
    {
      question: "Can you work with my existing website?",
      answer:
        "Absolutely! I can work with existing websites to add new features, improve performance, redesign the UI/UX, fix bugs, or migrate to modern technologies. I'm experienced with various platforms and frameworks.",
    },
    {
      question: "What are your payment terms?",
      answer:
        "I typically work with a 50% upfront deposit and 50% upon project completion. For larger projects, I can arrange milestone-based payments. All terms are discussed and agreed upon before starting the project.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Have Questions?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Find answers to common questions about my services and process
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
            
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
