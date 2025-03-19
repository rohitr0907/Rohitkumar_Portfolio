
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { ArrowRight, Github, ExternalLink, Mail, Linkedin, Download, ArrowDown, Code, Palette, Lightbulb, Database, Menu } from "lucide-react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const observer = useRef<IntersectionObserver | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [skillProgress, setSkillProgress] = useState({
    react: 0,
    javascript: 0,
    typescript: 0,
    html: 0,
    css: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.current?.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.current?.unobserve(section);
      });
    };
  }, []);

  useEffect(() => {
    setIsMounted(true);
    
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

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <TooltipProvider>
      <div style={{ minHeight: "100vh", background: "var(--background)", color: "var(--foreground)" }}>
        <div style={{ position: "fixed", inset: 0, zIndex: -10, overflow: "hidden" }}>
          <div style={{ 
            position: "absolute", 
            top: "-30%", 
            right: "-10%", 
            width: "80%", 
            height: "70%", 
            background: "linear-gradient(to bottom, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))", 
            borderRadius: "9999px", 
            filter: "blur(64px)",
            opacity: 0.8,
            animation: "float 6s ease-in-out infinite"
          }}></div>
          <div style={{ 
            position: "absolute", 
            top: "60%", 
            left: "-10%", 
            width: "60%", 
            height: "60%", 
            background: "linear-gradient(to top right, rgba(45, 212, 191, 0.2), rgba(59, 130, 246, 0.2))", 
            borderRadius: "9999px", 
            filter: "blur(64px)",
            opacity: 0.7,
            animation: "float 6s ease-in-out infinite",
            animationDelay: "2s"
          }}></div>
          <div style={{ 
            position: "absolute", 
            top: "30%", 
            left: "40%", 
            width: "25%", 
            height: "25%", 
            background: "linear-gradient(to bottom right, rgba(244, 114, 182, 0.2), rgba(168, 85, 247, 0.2))", 
            borderRadius: "9999px", 
            filter: "blur(64px)",
            opacity: 0.6,
            animation: "float 6s ease-in-out infinite",
            animationDelay: "4s"
          }}></div>
          <div style={{ 
            position: "absolute", 
            inset: 0, 
            background: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDEiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+PC9nPjwvc3ZnPg==')",
            backgroundRepeat: "repeat",
            opacity: 0.15
          }}></div>
        </div>

        <Sheet>
          <nav style={{ 
            position: "fixed", 
            top: 0, 
            left: 0, 
            right: 0, 
            zIndex: 50, 
            transition: "all 0.3s", 
            padding: scrollY > 10 ? "0.75rem 0" : "1.5rem 0",
            background: scrollY > 10 ? "var(--card)" : "transparent",
            backdropFilter: scrollY > 10 ? "blur(12px)" : "none",
            borderBottom: scrollY > 10 ? "1px solid var(--border)" : "none"
          }}>
            <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <Button 
                  variant="link" 
                  onClick={() => scrollToSection('home')}
                  style={{ 
                    fontSize: "1.5rem", 
                    fontWeight: "bold", 
                    letterSpacing: "-0.05em",
                    background: "linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)",
                    backgroundSize: "200% auto",
                    animation: "gradient-x 3s ease-in-out infinite",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  YourName
                </Button>
              </div>
              
              <div style={{ display: "none", gap: "2rem", alignItems: "center" }}>
                {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                  <Button
                    key={section}
                    variant="link"
                    onClick={() => scrollToSection(section)}
                    style={{ 
                      color: activeSection === section ? "var(--primary)" : "var(--foreground)",
                      position: "relative"
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                    {activeSection === section && (
                      <span style={{ 
                        position: "absolute", 
                        bottom: "-2px", 
                        left: 0, 
                        height: "2px", 
                        width: "100%",
                        background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                        transition: "all 0.3s"
                      }}></span>
                    )}
                  </Button>
                ))}
              </div>
              
              <div className="md:hidden">
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
              </div>
            </div>
          </nav>
          
          <SheetContent side="right">
            <ScrollArea className="h-full py-8">
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2.5rem" }}>
                {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                  <Button
                    key={section}
                    variant="ghost"
                    onClick={() => {
                      scrollToSection(section);
                      const element = document.querySelector('[data-radix-collection-item]');
                      if (element) {
                        (element as HTMLElement).click();
                      }
                    }}
                    size="lg"
                    style={{ justifyContent: "flex-start" }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>

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

        <section style={{ padding: "6rem 0", background: "var(--secondary)/0.05" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <Badge style={{ 
                marginBottom: "0.75rem",
                background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                color: "white" 
              }}>What I Do</Badge>
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
              }}>My Expertise</h2>
              <p style={{ fontSize: "1.125rem", color: "var(--muted-foreground)", maxWidth: "32rem", margin: "0 auto" }}>
                I specialize in building modern web applications with a focus on performance, accessibility, and user experience.
              </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "4rem" }}>
              <Card className="shine-effect" style={{ 
                transition: "all 0.3s ease",
                transform: "translateY(0)",
                border: "1px solid rgba(59, 130, 246, 0.1)",
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(8px)"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)";
                e.currentTarget.style.border = "1px solid rgba(59, 130, 246, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.border = "1px solid rgba(59, 130, 246, 0.1)";
              }}>
                <CardHeader>
                  <div style={{ 
                    background: "linear-gradient(to right, #3b82f6, #8b5cf6)", 
                    width: "3rem", 
                    height: "3rem", 
                    borderRadius: "9999px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    marginBottom: "1rem",
                    boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)"
                  }}>
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle style={{ color: "#3b82f6" }}>Frontend Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: "var(--muted-foreground)" }}>
                    Building responsive and interactive user interfaces with modern frameworks like React. 
                    Creating seamless user experiences with attention to detail.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shine-effect" style={{ 
                transition: "all 0.3s ease",
                transform: "translateY(0)",
                border: "1px solid rgba(139, 92, 246, 0.1)",
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(8px)"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)";
                e.currentTarget.style.border = "1px solid rgba(139, 92, 246, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.border = "1px solid rgba(139, 92, 246, 0.1)";
              }}>
                <CardHeader>
                  <div style={{ 
                    background: "linear-gradient(to right, #8b5cf6, #ec4899)", 
                    width: "3rem", 
                    height: "3rem", 
                    borderRadius: "9999px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    marginBottom: "1rem",
                    boxShadow: "0 10px 15px -3px rgba(139, 92, 246, 0.3)"
                  }}>
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle style={{ color: "#8b5cf6" }}>UI/UX Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: "var(--muted-foreground)" }}>
                    Designing intuitive interfaces that balance aesthetics and functionality. 
                    Creating cohesive design systems for consistent user experiences.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="shine-effect" style={{ 
                transition: "all 0.3s ease",
                transform: "translateY(0)",
                border: "1px solid rgba(236, 72, 153, 0.1)",
                background: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(8px)"
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(236, 72, 153, 0.1), 0 10px 10px -5px rgba(236, 72, 153, 0.04)";
                e.currentTarget.style.border = "1px solid rgba(236, 72, 153, 0.3)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.border = "1px solid rgba(236, 72, 153, 0.1)";
              }}>
                <CardHeader>
                  <div style={{ 
                    background: "linear-gradient(to right, #ec4899, #ef4444)", 
                    width: "3rem", 
                    height: "3rem", 
                    borderRadius: "9999px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    marginBottom: "1rem",
                    boxShadow: "0 10px 15px -3px rgba(236, 72, 153, 0.3)"
                  }}>
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle style={{ color: "#ec4899" }}>API Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: "var(--muted-foreground)" }}>
                    Connecting frontend applications to backend services and APIs.
                    Implementing efficient data fetching and state management strategies.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

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
            
            <div style={{ textAlign: "center", marginTop: "4rem" }}>
              <Button variant="outline" style={{ 
                borderColor: "rgba(59, 130, 246, 0.3)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden"
              }}
              className="shine-effect"
              onMouseOver={(e) => {
                e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.5)";
                e.currentTarget.style.background = "rgba(59, 130, 246, 0.05)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.3)";
                e.currentTarget.style.background = "";
              }}>
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

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
                      {["Git", "Webpack", "Jest", "GitHub Actions", "VS Code", "Docker"].map((tool) => (
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

        <section id="contact" style={{ padding: "6rem 0" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
            <div style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
              <Badge style={{ 
                marginBottom: "0.75rem",
                background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                color: "white" 
              }}>Get In Touch</Badge>
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
              }}>Let's Work Together</h2>
              <p style={{ fontSize: "1.125rem", color: "var(--muted-foreground)" }}>
                I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out!
              </p>
            </div>
            
            <div style={{ maxWidth: "28rem", margin: "0 auto" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <Card className="shine-effect" style={{ 
                  border: "1px solid rgba(59, 130, 246, 0.1)",
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(59, 130, 246, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                  e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.1)";
                }}>
                  <CardContent className="p-0">
                    <a 
                      href="mailto:your-email@example.com" 
                      style={{ 
                        padding: "1.5rem", 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "1rem",
                        textDecoration: "none",
                        color: "inherit"
                      }}
                    >
                      <div style={{ 
                        background: "linear-gradient(to right, #3b82f6, #8b5cf6)", 
                        padding: "0.75rem", 
                        borderRadius: "9999px",
                        boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.2)"
                      }}>
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 style={{ fontWeight: 600 }}>Email</h3>
                        <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>your-email@example.com</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
                
                <Card className="shine-effect" style={{ 
                  border: "1px solid rgba(59, 130, 246, 0.1)",
                  background: "rgba(255, 255, 255, 0.8)",
                  backdropFilter: "blur(8px)",
                  transition: "all 0.3s ease"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(59, 130, 246, 0.1)";
                  e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.3)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                  e.currentTarget.style.borderColor = "rgba(59, 130, 246, 0.1)";
                }}>
                  <CardContent className="p-0">
                    <a 
                      href="https://linkedin.com/in/yourprofile" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ 
                        padding: "1.5rem", 
                        display: "flex", 
                        alignItems: "center", 
                        gap: "1rem",
                        textDecoration: "none",
                        color: "inherit"
                      }}
                    >
                      <div style={{ 
                        background: "linear-gradient(to right, #8b5cf6, #ec4899)", 
                        padding: "0.75rem", 
                        borderRadius: "9999px",
                        boxShadow: "0 10px 15px -3px rgba(139, 92, 246, 0.2)"
                      }}>
                        <Linkedin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 style={{ fontWeight: 600 }}>LinkedIn</h3>
                        <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>linkedin.com/in/yourprofile</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              </div>
              
              <div style={{ textAlign: "center", marginTop: "3rem" }}>
                <Button size="lg" className="shine-effect" style={{ 
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
                }}>
                  <Mail className="h-4 w-4 mr-2" />
                  Send me an email
                </Button>
              </div>
            </div>
          </div>
        </section>

        <footer style={{ 
          padding: "2rem 0", 
          borderTop: "1px solid var(--border)",
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(8px)"
        }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
                  &copy; {new Date().getFullYear()} Your Name. All rights reserved.
                </p>
              </div>
              
              <div style={{ display: "flex", gap: "1rem" }}>
                <Button variant="ghost" size="icon" asChild style={{ 
                  transition: "all 0.3s ease",
                  transform: "translateY(0) rotate(0deg)"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px) rotate(8deg)";
                  e.currentTarget.style.color = "#3b82f6";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) rotate(0deg)";
                  e.currentTarget.style.color = "";
                }}>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild style={{ 
                  transition: "all 0.3s ease",
                  transform: "translateY(0) rotate(0deg)"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px) rotate(-8deg)";
                  e.currentTarget.style.color = "#8b5cf6";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) rotate(0deg)";
                  e.currentTarget.style.color = "";
                }}>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild style={{ 
                  transition: "all 0.3s ease",
                  transform: "translateY(0) rotate(0deg)"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px) rotate(8deg)";
                  e.currentTarget.style.color = "#ec4899";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0) rotate(0deg)";
                  e.currentTarget.style.color = "";
                }}>
                  <a href="mailto:your-email@example.com" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </TooltipProvider>
  );
};

export default Index;
