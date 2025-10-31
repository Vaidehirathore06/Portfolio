import { Award, FolderGit2, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Python Course Completion",
      description: "Successfully completed a comprehensive Python programming course on Tutorialspoint, covering fundamentals, data structures, and practical applications.",
      icon: Award,
      tags: ["Python", "Programming", "Learning"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-glow-cyan">Projects & Achievements</h2>
            <p className="text-muted-foreground text-lg">
              My learning journey and accomplishments
            </p>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="bg-card/50 backdrop-blur border-border hover:border-neon-purple transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <project.icon className="text-primary" size={24} />
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="bg-card/30 backdrop-blur border-dashed border-2 border-border animate-slide-up">
              <CardContent className="p-12 text-center space-y-4">
                <FolderGit2 className="mx-auto text-muted-foreground" size={48} />
                <h3 className="text-xl font-semibold">More Projects Coming Soon</h3>
                <p className="text-muted-foreground">
                  I'm actively working on new projects and will update this section as I complete them
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
