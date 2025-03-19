
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowDown } from "lucide-react";

interface HeroProps {
  scrollY: number;
  scrollToSection: (sectionId: string) => void;
}

const Hero = ({ scrollY, scrollToSection }: HeroProps) => {
  return (
    <section 
      id="home" 
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "5rem",
        transform: `translateY(${scrollY * 0.1}px)`,
        opacity: 1 - scrollY * 0.001,
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem", paddingTop: "6rem", paddingBottom: "6rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "64rem" }}>
          <div style={{ animation: "fade-in-up 0.7s ease-out forwards", animationDelay: "0.1s", opacity: 0 }}>
            <Badge variant="outline" style={{ 
              padding: "0.25rem 1rem", 
              marginBottom: "0.5rem",
              borderColor: "rgba(59, 130, 246, 0.3)",
              boxShadow: "0 0 10px rgba(59, 130, 246, 0.2)" 
            }}>Frontend Developer</Badge>
            <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "bold", letterSpacing: "-0.05em", lineHeight: 1.1 }}>
              <span style={{ display: "block" }}>Hi, I'm Your Name</span>
              <span style={{ 
                display: "block", 
                marginTop: "0.25rem", 
                background: "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
                backgroundSize: "200% auto",
                animation: "gradient-x 3s ease-in-out infinite",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                I build things for the web
              </span>
            </h1>
          </div>
          
          <p style={{ 
            fontSize: "clamp(1.25rem, 2vw, 1.5rem)", 
            color: "var(--muted-foreground)", 
            maxWidth: "48rem",
            animation: "fade-in-up 0.7s ease-out forwards",
            animationDelay: "0.3s",
            opacity: 0
          }}>
            I specialize in creating exceptional digital experiences. 
            Currently focused on building accessible, human-centered products.
          </p>
          
          <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "1rem", 
            marginTop: "1rem", 
            animation: "fade-in-up 0.7s ease-out forwards",
            animationDelay: "0.5s",
            opacity: 0
          }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="shine-effect"
                style={{
                  background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                  transition: "all 0.3s ease",
                  transform: "translateY(0)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(59, 130, 246, 0.5)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                style={{
                  borderColor: "rgba(59, 130, 246, 0.3)",
                  transition: "all 0.3s ease",
                  transform: "translateY(0)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.3)";
                }}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", animation: "bounce 2s infinite" }}>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => scrollToSection('about')} 
          style={{ opacity: 0.7 }}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
