import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript (ES6+)", "TypeScript"],
      color: "primary",
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Vue", "Nuxt.js", "Next.js", "Remotion"],
      color: "accent",
    },
    {
      title: "State Management",
      skills: [
        "Redux",
        "Recoil",
        "Zustand",
        "Vuex",
        "Pinia",
        "Redux-Saga",
        "Redux-Thunk",
        "React Query",
      ],
      color: "primary",
    },
    {
      title: "CSS & Styling",
      skills: [
        "Tailwind CSS",
        "Material UI",
        "Ant Design",
        "Bootstrap",
        "Shadcn",
        "SCSS",
        "styled-components",
        "CSS Modules",
      ],
      color: "accent",
    },
    {
      title: "Testing & Tools",
      skills: ["Cypress", "Figma", "Adobe XD", "Zeplin"],
      color: "primary",
    },
    {
      title: "Development Tools",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "Vite",
        "Webpack",
        "WebSocket",
        "Scrum",
        "Jira",
      ],
      color: "accent",
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Expertise across modern web development technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="glass p-6 hover:bg-card/80 transition-all duration-300 hover:scale-105 border-primary/20"
              >
                <h3 className="text-xl font-bold mb-4 gradient-text">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className={`${
                        category.color === "primary"
                          ? "bg-primary/20 text-primary hover:bg-primary/30"
                          : "bg-accent/20 text-accent hover:bg-accent/30"
                      } border-0`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
