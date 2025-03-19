
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Github, Linkedin, Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
          <div style={{ position: "relative" }}>
            <div style={{ 
              aspectRatio: "1/1", 
              borderRadius: "1rem", 
              overflow: "hidden", 
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              transform: "rotate(-3deg)",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "rotate(0deg) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 25px 50px -8px rgba(59, 130, 246, 0.4)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "rotate(-3deg)";
              e.currentTarget.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
            }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom right, rgba(59, 130, 246, 0.3), rgba(139, 92, 246, 0.3))", mixBlendMode: "multiply" }}></div>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom right, var(--background), transparent)", opacity: 0.2 }}></div>
              <div style={{ width: "100%", height: "100%", background: "rgb(229, 231, 235)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "rgb(156, 163, 175)", fontSize: "1.125rem" }}>Your Photo Here</span>
              </div>
            </div>
            
            <div style={{ position: "absolute", bottom: "-1.5rem", left: "-1.5rem", width: "6rem", height: "6rem", background: "rgba(139, 92, 246, 0.3)", borderRadius: "9999px", filter: "blur(24px)" }}></div>
            <div style={{ position: "absolute", top: "-1.5rem", right: "-1.5rem", width: "8rem", height: "8rem", background: "rgba(59, 130, 246, 0.3)", borderRadius: "9999px", filter: "blur(24px)" }}></div>
          </div>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <Badge style={{ 
                marginBottom: "0.75rem",
                background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                color: "white",
                animation: "pulse 3s infinite"
              }}>About Me</Badge>
              <h2 style={{ 
                fontSize: "clamp(1.875rem, 3vw, 2.25rem)",
                fontWeight: "bold", 
                letterSpacing: "-0.025em", 
                background: "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
                backgroundSize: "200% auto",
                animation: "gradient-x 3s ease-in-out infinite",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}>
                Passionate about creating meaningful digital experiences
              </h2>
            </div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", fontSize: "1.125rem", color: "var(--muted-foreground)" }}>
              <p>
                I'm a frontend developer who loves creating clean, elegant, and efficient solutions to complex problems. 
                My journey in web development started several years ago, and I've been refining my craft ever since.
              </p>
              <p>
                With a strong foundation in modern JavaScript frameworks and libraries like React, 
                I bring a user-centered approach to every project I work on. I believe that great products 
                arise from the perfect blend of functionality, performance, and aesthetics.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying outdoor activities.
              </p>
            </div>
            
            <div style={{ display: "flex", gap: "1rem", paddingTop: "1rem" }}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" asChild
                    style={{ 
                      transition: "all 0.3s ease",
                      transform: "translateY(0)",
                      borderColor: "rgba(59, 130, 246, 0.3)" 
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px) rotate(8deg)";
                      e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0) rotate(0deg)";
                      e.currentTarget.style.background = "";
                    }}
                  >
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>GitHub</TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon" asChild
                    style={{ 
                      transition: "all 0.3s ease",
                      transform: "translateY(0)",
                      borderColor: "rgba(59, 130, 246, 0.3)" 
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px) rotate(-8deg)";
                      e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0) rotate(0deg)";
                      e.currentTarget.style.background = "";
                    }}
                  >
                    <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline"
                    style={{
                      borderColor: "rgba(59, 130, 246, 0.3)",
                      transition: "all 0.3s ease",
                      transform: "translateY(0)",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "translateY(-3px)";
                      e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
                      e.currentTarget.style.background = "rgba(59, 130, 246, 0.05)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.3)";
                      e.currentTarget.style.background = "";
                    }}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Get my resume</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
