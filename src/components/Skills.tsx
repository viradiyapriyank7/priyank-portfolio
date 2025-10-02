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
        <svg viewBox="0 0 256 252" className="w-10 h-10">
          <path fill="#00758F" d="M235.648 194.212c-13.918 7.935-92.729 51.178-106.817 59.113a25.026 25.026 0 01-24.55 0C90.203 245.39 11.392 202.147-2.527 194.212a23.957 23.957 0 01.002-42.636l106.65-58.147a24.972 24.972 0 0124.479.037l106.815 58.11a23.957 23.957 0 01.229 42.636z" />
          <path fill="#F29111" d="M235.648 135.074c-13.918 7.935-92.729 51.178-106.817 59.113a25.026 25.026 0 01-24.55 0C90.203 186.252 11.392 143.009-2.527 135.074a23.957 23.957 0 01.002-42.636l106.65-58.147a24.972 24.972 0 0124.479.037l106.815 58.11a23.957 23.957 0 01.229 42.636z" />
          <path fill="#00758F" d="M235.648 75.936c-13.918 7.935-92.729 51.178-106.817 59.113a25.026 25.026 0 01-24.55 0C90.203 127.114 11.392 83.871-2.527 75.936a23.957 23.957 0 01.002-42.636l106.65-58.147a24.972 24.972 0 0124.479.037l106.815 58.11a23.957 23.957 0 01.229 42.636z" />
        </svg>
      ),
      name: "MySQL",
      description: "Relational database management",
    },
    {
      icon: (
        <svg viewBox="0 0 256 263" className="w-10 h-10">
          <path fill="#3ECF8E" d="M128 0C57.308 0 0 57.307 0 128c0 70.692 57.308 128 128 128 70.693 0 128-57.308 128-128C256 57.307 198.693 0 128 0zm0 233.739c-58.41 0-105.74-47.33-105.74-105.74S69.59 22.261 128 22.261c58.41 0 105.74 47.33 105.74 105.74S186.41 233.739 128 233.739z" />
          <path fill="#3ECF8E" d="M164.252 116.626l-36.204 36.204-20.664-20.664a11.13 11.13 0 00-15.732 15.732l28.53 28.53a11.13 11.13 0 0015.732 0l43.87-43.87a11.13 11.13 0 00-15.732-15.732z" />
        </svg>
      ),
      name: "Supabase",
      description: "Backend-as-a-Service platform",
    },
    {
      icon: (
        <svg viewBox="0 0 256 289" className="w-10 h-10">
          <path fill="#4DB33D" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 00-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.58 31.108 421.58l1.917 1.28c0-2.55 16.05-258.19 62.214-422.86zm-63.064 123.814c-2.67 1.918-5.077 3.837-7.484 5.755 0-.254 0-.254 0 0 0 .255.019.574.019.893v61.636H82.377V131.747c-4.048 2.55-8.096 5.1-12.144 7.65v113.967h-15.07V139.396h-.765c-23.394 17.21-46.533 38.01-70.182 63.85C-9.341 191.847 1.28 178.55 11.91 164.489c4.867-6.396 9.734-12.791 14.6-19.187 16.06-21.148 32.883-42.296 51.37-63.444-.51-2.038-1.784-5.875-3.058-10.496-8.095 8.095-17.21 16.699-26.325 26.324-18.232 19.442-37.173 40.845-57.463 68.065C-6.018 173.199.447 179.869 6.912 186.54l1.063 1.063c24.157-26.835 48.822-48.747 73.488-67.233zm100.237-123.814c23.01 27.301 42.825 55.03 46.873 60.788a1.03 1.03 0 011.493 0c4.048-5.758 23.862-33.487 46.873-60.788 197.506-251.896-31.108-421.58-31.108-421.58l-1.917-1.28c0 2.55-16.05 258.19-62.214 422.86z" />
        </svg>
      ),
      name: "MERN Stack",
      description: "MongoDB, Express, React, Node.js",
    },
    {
      icon: (
        <svg viewBox="0 0 256 259" className="w-10 h-10">
          <path fill="#E0234E" d="M152.977 37.888L128 10.877 103.023 37.888a128 128 0 100 180.223L128 245.122l24.977-26.011a128 128 0 000-180.223z" />
          <path fill="#FFF" d="M152.977 128L128 154.011 103.023 128a32 32 0 110-45.254L128 108.757l24.977-26.011a32 32 0 010 45.254z" />
          <path fill="#FFF" d="M128 128h96a96 96 0 01-96 96V128z" />
        </svg>
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
