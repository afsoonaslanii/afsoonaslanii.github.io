import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "afsoonaslanii@gmail.com",
      href: "mailto:afsoonaslanii@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "Currently on silent mode since 2018.",
      href: "",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "afsoonaslanii",
      href: "https://github.com/afsoonaslanii",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "afsoonaslanii",
      href: "https://linkedin.com/in/afsoonaslanii",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss your next project or opportunity
            </p>
          </div>

          <Card className="glass p-8 border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-muted-foreground mb-4">
                Available for remote opportunities worldwide
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Based in Iran, working globally</span>
              </div>
            </div>
          </Card>

          <div className="text-center">
            <Button
              size="lg"
              className="gradient-primary hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="mailto:afsoonaslanii@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
