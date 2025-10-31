import { GraduationCap, Code2, Target } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan">About Me</h2>
            <p className="text-muted-foreground text-lg">
              A passionate student developer on a journey to master web technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card/50 backdrop-blur border-border hover:border-neon-cyan transition-all duration-300 animate-slide-up">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Education</h3>
                <p className="text-muted-foreground">
                  Currently studying at Lovely Professional University (LPU), Class of 2025
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border hover:border-neon-purple transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Code2 className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Learning</h3>
                <p className="text-muted-foreground">
                  Completed Python course on Tutorialspoint, continuously expanding my skill set
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border hover:border-neon-cyan transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold">Goals</h3>
                <p className="text-muted-foreground">
                  Aspiring to become a skilled web developer and contribute to innovative projects
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center space-y-4 pt-8">
            <p className="text-lg text-foreground leading-relaxed max-w-3xl mx-auto">
              I'm a dedicated student with a strong passion for coding and web development. 
              While I'm at the beginning of my professional journey, I'm committed to continuous 
              learning and eager to apply my knowledge in real-world projects. My goal is to grow 
              in the software and web-development field, creating meaningful digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
