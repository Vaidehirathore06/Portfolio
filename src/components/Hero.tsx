import { ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Animated particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl animate-float top-20 left-20" />
        <div className="absolute w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-float animation-delay-2000 bottom-20 right-20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <Avatar className="w-40 h-40 mx-auto border-4 border-primary shadow-[0_0_30px_rgba(6,182,212,0.5)] animate-float">
            <AvatarImage src={profileImg} alt="Vaidehi Rathore" />
            <AvatarFallback>VR</AvatarFallback>
          </Avatar>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-glow-cyan">Vaidehi</span>{" "}
              <span className="text-glow-purple">Rathore</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Passionate about coding and web development
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Student developer crafting modern web experiences with creativity and dedication
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>
            <Button 
              variant="neon" 
              size="lg"
              onClick={scrollToAbout}
            >
              Learn More
            </Button>
          </div>

          <div className="pt-8 animate-bounce">
            <ArrowDown className="mx-auto text-primary" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
