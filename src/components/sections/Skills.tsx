import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skillProgress, setSkillProgress] = useState({
    react: 0,
    javascript: 0,
    typescript: 0,
    html: 0,
    css: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkillProgress({
        react: 95,
        javascript: 90,
        typescript: 85,
        html: 95,
        css: 92,
      });
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" style={{ padding: "6rem 0", background: "var(--secondary)/0.05" }}>
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
          <Badge style={{ 
            marginBottom: "0.75rem",
            background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
            color: "white" 
          }}>My Toolkit</Badge>
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
          }}>Skills & Technologies</h2>
          <p style={{ fontSize: "1.125rem", color: "var(--muted-foreground)" }}>
            Here's a look at the technologies and tools I work with to bring ideas to life.
          </p>
        </div>
        
        <Tabs defaultValue="frontend">
          <TabsList className="grid grid-cols-4 mb-8" style={{ 
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(8px)"
          }}>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>
          
          <TabsContent value="frontend">
            <Card style={{ 
              border: "1px solid rgba(59, 130, 246, 0.1)",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(8px)"
            }}>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                    <span style={{ fontWeight: 500 }}>React</span>
                    <span>{skillProgress.react}%</span>
                  </div>
                  <Progress value={skillProgress.react} className="h-2" style={{ 
                    background: "rgba(59, 130, 246, 0.2)"
                  }} />
                </div>
                
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                    <span style={{ fontWeight: 500 }}>JavaScript</span>
                    <span>{skillProgress.javascript}%</span>
                  </div>
                  <Progress value={skillProgress.javascript} className="h-2" style={{ 
                    background: "rgba(139, 92, 246, 0.2)"
                  }} />
                </div>
                
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                    <span style={{ fontWeight: 500 }}>TypeScript</span>
                    <span>{skillProgress.typescript}%</span>
                  </div>
                  <Progress value={skillProgress.typescript} className="h-2" style={{ 
                    background: "rgba(236, 72, 153, 0.2)"
                  }} />
                </div>
                
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                    <span style={{ fontWeight: 500 }}>HTML & CSS</span>
                    <span>{skillProgress.html}%</span>
                  </div>
                  <Progress value={skillProgress.html} className="h-2" style={{ 
                    background: "rgba(249, 115, 22, 0.2)"
                  }} />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="backend">
            <Card style={{ 
              border: "1px solid rgba(59, 130, 246, 0.1)",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(8px)"
            }}>
              <CardContent className="pt-6">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "1rem" }}>
                  {["Node.js", "Express", "MongoDB", "SQL", "Firebase", "REST APIs"].map((tool) => (
                    <HoverCard key={tool}>
                      <HoverCardTrigger asChild>
                        <Button variant="outline" style={{ 
                          width: "100%", 
                          height: "100%", 
                          justifyContent: "center",
                          borderColor: "rgba(59, 130, 246, 0.3)",
                          transition: "all 0.3s ease"
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "translateY(-3px)";
                          e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(59, 130, 246, 0.1)";
                          e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
                          e.currentTarget.style.background = "linear-gradient(to right, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "";
                          e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.3)";
                          e.currentTarget.style.background = "";
                        }}>
                          {tool}
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80" style={{ 
                        border: "1px solid rgba(59, 130, 246, 0.1)",
                        background: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(8px)"
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                            <h4 style={{ fontSize: "0.875rem", fontWeight: 600 }}>{tool}</h4>
                            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
                              Experienced with {tool} in professional projects.
                            </p>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="design">
            <Card style={{ 
              border: "1px solid rgba(59, 130, 246, 0.1)",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(8px)"
            }}>
              <CardContent className="pt-6">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "1rem" }}>
                  {["Figma", "Adobe XD", "UI Design", "UX Research", "Wireframing", "Prototyping"].map((tool) => (
                    <HoverCard key={tool}>
                      <HoverCardTrigger asChild>
                        <Button variant="outline" style={{ 
                          width: "100%", 
                          height: "100%", 
                          justifyContent: "center",
                          borderColor: "rgba(139, 92, 246, 0.3)",
                          transition: "all 0.3s ease"
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "translateY(-3px)";
                          e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(139, 92, 246, 0.1)";
                          e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.5)";
                          e.currentTarget.style.background = "linear-gradient(to right, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "";
                          e.currentTarget.style.borderColor = "rgba(139, 92, 246, 0.3)";
                          e.currentTarget.style.background = "";
                        }}>
                          {tool}
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80" style={{ 
                        border: "1px solid rgba(139, 92, 246, 0.1)",
                        background: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(8px)"
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                            <h4 style={{ fontSize: "0.875rem", fontWeight: 600 }}>{tool}</h4>
                            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
                              Experienced with {tool} in design processes.
                            </p>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tools">
            <Card style={{ 
              border: "1px solid rgba(59, 130, 246, 0.1)",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(8px)"
            }}>
              <CardContent className="pt-6">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "1rem" }}>
                  {["Git", "Webpack", "GitHub Actions", "VS Code", "Docker"].map((tool) => (
                    <HoverCard key={tool}>
                      <HoverCardTrigger asChild>
                        <Button variant="outline" style={{ 
                          width: "100%", 
                          height: "100%", 
                          justifyContent: "center",
                          borderColor: "rgba(236, 72, 153, 0.3)",
                          transition: "all 0.3s ease"
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = "translateY(-3px)";
                          e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(236, 72, 153, 0.1)";
                          e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.5)";
                          e.currentTarget.style.background = "linear-gradient(to right, rgba(236, 72, 153, 0.1), rgba(249, 115, 22, 0.1))";
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "";
                          e.currentTarget.style.borderColor = "rgba(236, 72, 153, 0.3)";
                          e.currentTarget.style.background = "";
                        }}>
                          {tool}
                        </Button>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80" style={{ 
                        border: "1px solid rgba(236, 72, 153, 0.1)",
                        background: "rgba(255, 255, 255, 0.95)",
                        backdropFilter: "blur(8px)"
                      }}>
                        <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                            <h4 style={{ fontSize: "0.875rem", fontWeight: 600 }}>{tool}</h4>
                            <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
                              Experienced with {tool} in development workflows.
                            </p>
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
