import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: (
        <svg viewBox="0 0 452 520" className="w-10 h-10">
          <path fill="#E34F26" d="M41 460L0 0h451l-41 460-185 52" />
          <path fill="#EF652A" d="M226 472l149-41 35-394H226" />
          <path fill="#EBEBEB" d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z" />
          <path fill="#FFF" d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z" />
        </svg>
      ),
      name: "HTML",
      description: "Semantic markup and structure",
    },
    {
      icon: (
        <svg viewBox="0 0 452 520" className="w-10 h-10">
          <path fill="#1572B6" d="M41 460L0 0h451l-41 460-185 52" />
          <path fill="#33A9DC" d="M226 472l149-41 35-394H226" />
          <path fill="#EBEBEB" d="M226 208H94l5 57h127zm0-114H84l5 56h137zm0 261l-124-33 7 60 117 32z" />
          <path fill="#FFF" d="M226 265h69l-7 73-62 17v59l115-32 26-288H226v56h80l-5 58h-75z" />
        </svg>
      ),
      name: "CSS",
      description: "Modern styling and animations",
    },
    {
      icon: (
        <svg viewBox="0 0 256 256" className="w-10 h-10">
          <rect fill="#F7DF1E" width="256" height="256" rx="28" />
          <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.889-3.092 12.889-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
        </svg>
      ),
      name: "JavaScript",
      description: "ES6+ and modern frameworks",
    },
    {
      icon: (
        <svg viewBox="0 0 256 256" className="w-10 h-10">
          <defs>
            <linearGradient id="nextjs-grad" x1="55.633%" x2="83.228%" y1="56.385%" y2="96.08%">
              <stop offset="0%" stopColor="#FFF" />
              <stop offset="100%" stopColor="#FFF" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="128" cy="128" r="128" fill="#000" />
          <path fill="url(#nextjs-grad)" d="M212.634 224.028L98.335 76.8H76.8v102.357h17.228V98.68l99.014 125.348a128.433 128.433 0 0019.592-0z" />
          <path fill="#FFF" d="M163.556 76.8h17.067v102.4h-17.067z" />
        </svg>
      ),
      name: "Next.js",
      description: "Server-side rendering & optimization",
    },
    {
      icon: (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" 
          alt="MySQL" 
          className="w-10 h-10"
        />
      ),
      name: "MySQL",
      description: "Relational database management",
    },
    {
      icon: (
        <img 
          src="https://i.pinimg.com/474x/cb/03/e4/cb03e4961860f0271e6ac73e663f26fa.jpg" 
          alt="Supabase" 
          className="w-10 h-10"
        />
      ),
      name: "Supabase",
      description: "Backend-as-a-Service platform",
    },
    {
      icon: (
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" 
          alt="MERN Stack" 
          className="w-10 h-10"
        />
      ),
      name: "MERN Stack",
      description: "MongoDB, Express, React, Node.js",
    },
    {
      icon: (
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg" 
          alt="NestJS" 
          className="w-10 h-10"
        />
      ),
      name: "NestJS",
      description: "Progressive Node.js framework",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Technical Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">My Skills</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A comprehensive set of modern web development technologies and frameworks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-primary group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4 text-primary group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{skill.name}</h3>
              <p className="text-sm text-foreground/60">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
