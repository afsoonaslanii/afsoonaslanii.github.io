import { Card } from "@/components/ui/card";
import { Building2, MapPin, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Zebracat AI",
      role: "Senior Front-End Developer",
      location: "Berlin, Germany – Remote",
      period: "Jul 2024 - Present",
      highlights: [
        "Shrunk bundle size by 99% (20MB → 30KB) through package optimization and API integration",
        "Launched new features in video editor and dashboard based on Figma designs",
        "Enhanced performance through lazy loading, code-splitting, and asset caching",
        "Refactored legacy code for improved maintainability and readability",
      ],
    },
    {
      company: "Cloudzy",
      role: "Senior Front-End Developer",
      location: "Tehran, Iran – Hybrid",
      period: "Aug 2023 - Aug 2024",
      highlights: [
        "Migrated main site from Gatsby to Nuxt.js, improving maintainability",
        "Built reusable components to streamline development workflow",
        "Reduced bundle size by 10% through dead code elimination",
        "Delivered business-critical features supporting product growth",
      ],
    },
    {
      company: "Digikala-Group/Smartech",
      role: "Front-End Developer",
      location: "Tehran, Iran – On-site",
      period: "Nov 2022 - Aug 2023",
      highlights: [
        "Enhanced scalability by decoupling services from Redux (30% faster response time)",
        "Implemented business features driving user engagement and conversion",
        "Boosted development velocity by ~5% through ESLint configurations",
        "Optimized components for improved load times",
      ],
    },
    {
      company: "Rental Tracker",
      role: "Senior Front-End Developer",
      location: "Tehran, Iran – On-site",
      period: "Apr 2020 - Nov 2022",
      highlights: [
        "Automated complex components, reducing development time by 50%",
        "Implemented reusable Mixins for consistent styling",
        "Collaborated with cross-functional teams on warehouse management software",
        "Maintained adaptability through changing project priorities",
      ],
    },
    {
      company: "Pezeshkekhoob",
      role: "Front-End Developer",
      location: "Tehran, Iran – On-site",
      period: "Aug 2018 - Mar 2020",
      highlights: [
        "Migrated platform from legacy stack to React for better maintainability",
        "Led UI/UX redesign using Next.js, Redux, and Thunk",
        "Built scalable admin panel from scratch with React and Redux",
        "Developed BI dashboard enabling data-driven decision making",
      ],
    },
  ];

  return (
    <section id="work" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Building exceptional products across innovative companies
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 -ml-2 bg-primary rounded-full border-4 border-background z-10" />

                  {/* Content */}
                  <div className="md:w-1/2 pl-8 md:pl-0">
                    <Card className="glass p-6 hover:bg-card/80 transition-all duration-300 hover:scale-105 border-primary/20">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-bold text-primary mb-1">
                            {exp.company}
                          </h3>
                          <p className="text-lg font-semibold mb-2">{exp.role}</p>
                          <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex gap-2">
                              <span className="text-accent mt-1">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Card>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
