import { Code, Database } from "lucide-react";
import { Progress } from "./ui/progress";
import { Card, CardContent } from "./ui/card";

const Skills = () => {
  const skills = [
    {
      name: "Python",
      level: 70,
      icon: Code,
      color: "primary",
      description: "Completed comprehensive course on Tutorialspoint",
    },
    {
      name: "Java",
      level: 50,
      icon: Database,
      color: "secondary",
      description: "Learning the basics and fundamentals",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-glow-purple">Skills</h2>
            <p className="text-muted-foreground text-lg">
              Technologies I'm working with and continuously improving
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="bg-card/50 backdrop-blur border-border hover:border-neon-cyan transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-${skill.color}/10 flex items-center justify-center`}>
                      <skill.icon className={`text-${skill.color}`} size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="text-xl font-semibold">{skill.name}</h3>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center pt-8">
            <p className="text-muted-foreground">
              Currently expanding my knowledge in web development technologies including HTML, CSS, and JavaScript
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
