import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-card/50 backdrop-blur border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="text-destructive animate-glow-pulse" size={16} /> by Vaidehi Rathore
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
