import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section id="projects" style={{ padding: "6rem 0" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
          <Badge style={{ 
            marginBottom: "0.75rem",
            background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
            color: "white" 
          }}>My Work</Badge>
          <h2 style={{ 
            fontSize: "clamp(1.875rem, 3vw, 2.25rem)", 
            fontWeight: "bold", 
            letterSpacing: "-0.025em", 
            marginBottom: "1rem",
            background: "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
            backgroundSize: "200% auto",
            animation: "gradient-x 3s ease-in-out infinite",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>Featured Projects</h2>
          <p style={{ fontSize: "1.125rem", color: "var(--muted-foreground)" }}>
            Here's a selection of my recent projects that showcase my technical abilities and creative problem-solving.
          </p>
        </div>
        
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {[1, 2, 3].map((project) => (
              <CarouselItem key={project} className="md:basis-1/2 lg:basis-1/2">
                <div style={{ padding: "0.25rem" }}>
                  <Card style={{ 
                    overflow: "hidden", 
                    border: "1px solid rgba(59, 130, 246, 0.1)",
                    background: "rgba(255, 255, 255, 0.8)",
                    backdropFilter: "blur(8px)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)";
                    e.currentTarget.style.border = "1px solid rgba(59, 130, 246, 0.3)";
                    e.currentTarget.style.transform = "translateY(-10px)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.boxShadow = "";
                    e.currentTarget.style.border = "1px solid rgba(59, 130, 246, 0.1)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}>
                    <div style={{ 
                      aspectRatio: "16/9", 
                      background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                      position: "relative",
                      overflow: "hidden"
                    }}>
                      <div style={{ 
                        position: "absolute", 
                        inset: 0, 
                        background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
                        backgroundSize: "200% 200%",
                        animation: "gradient-y 5s ease infinite",
                        opacity: 0.7
                      }}></div>
                      <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span style={{ color: "white", fontSize: "1.125rem", fontWeight: "600" }}>Project {project}</span>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <CardTitle style={{ 
                        background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}>Project Title {project}</CardTitle>
                      <CardDescription>
                        A brief description of the project, what technologies were used, and what problems it solves.
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                        <Badge variant="secondary" style={{ background: "rgba(59, 130, 246, 0.1)", color: "#3b82f6", borderColor: "rgba(59, 130, 246, 0.3)" }}>React</Badge>
                        <Badge variant="secondary" style={{ background: "rgba(139, 92, 246, 0.1)", color: "#8b5cf6", borderColor: "rgba(139, 92, 246, 0.3)" }}>TypeScript</Badge>
                        <Badge variant="secondary" style={{ background: "rgba(236, 72, 153, 0.1)", color: "#ec4899", borderColor: "rgba(236, 72, 153, 0.3)" }}>Tailwind CSS</Badge>
                      </div>
                    </CardContent>
                    
                    <CardFooter>
                      <div style={{ display: "flex", gap: "0.75rem" }}>
                        <Button size="sm" variant="outline" style={{ 
                          borderColor: "rgba(59, 130, 246, 0.3)",
                          transition: "all 0.3s ease"
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
                          e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = "";
                          e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.3)";
                        }}>
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                        <Button size="sm" variant="outline" style={{ 
                          borderColor: "rgba(59, 130, 246, 0.3)",
                          transition: "all 0.3s ease"
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = "rgba(59, 130, 246, 0.1)";
                          e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = "";
                          e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.3)";
                        }}>
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
            <CarouselPrevious style={{ 
              position: "static", 
              transform: "none", 
              margin: "0 0.5rem",
              borderColor: "rgba(59, 130, 246, 0.3)" 
            }} />
            <CarouselNext style={{ 
              position: "static", 
              transform: "none", 
              margin: "0 0.5rem",
              borderColor: "rgba(59, 130, 246, 0.3)" 
            }} />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
