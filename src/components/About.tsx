import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users, Award } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "7+ Years Experience",
      description: "Expertise in modern web development",
    },
    {
      icon: Rocket,
      title: "Performance Focused",
      description: "Optimizing bundle sizes up to 99%",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Leading projects across time zones",
    },
    {
      icon: Award,
      title: "Clean Code Advocate",
      description: "Maintainability and scalability first",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced Front-End Developer with a strong focus on React and modern web technologies. 
              Committed to delivering scalable, maintainable applications and continuous professional development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="glass p-6 hover:bg-card/80 transition-all duration-300 hover:scale-105 border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
