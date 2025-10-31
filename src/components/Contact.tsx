import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent } from "./ui/card";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validatedData = contactSchema.parse(formData);
      
      // Create mailto link with validated data
      const mailtoLink = `mailto:vaidehirathore06@gmail.com?subject=${encodeURIComponent(validatedData.subject)}&body=${encodeURIComponent(`Name: ${validatedData.name}\n\n${validatedData.message}`)}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Opening email client...",
        description: "Your message will be composed in your default email application.",
      });
      
      setFormData({ name: "", subject: "", message: "" });
      setErrors({});
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
        
        toast({
          title: "Validation Error",
          description: "Please check the form for errors.",
          variant: "destructive",
        });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto space-y-12">
          <div className="text-center space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-glow-purple">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">
              Have a question or want to work together? Feel free to reach out!
            </p>
            <div className="flex items-center justify-center gap-2 text-primary pt-2">
              <Mail size={20} />
              <a href="mailto:vaidehirathore06@gmail.com" className="hover:text-primary/80 transition-colors">
                vaidehirathore06@gmail.com
              </a>
            </div>
          </div>

          <Card className="bg-card/50 backdrop-blur border-border animate-slide-up">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`bg-input border-border focus:border-primary ${errors.name ? 'border-destructive' : ''}`}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={`bg-input border-border focus:border-primary ${errors.subject ? 'border-destructive' : ''}`}
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive">{errors.subject}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={6}
                    className={`bg-input border-border focus:border-primary resize-none ${errors.message ? 'border-destructive' : ''}`}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message}</p>
                  )}
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <Send size={20} />
                  Send Message
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Mail size={20} />
                  <span>Or email directly at: vaidehirathore06@gmail.com</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
