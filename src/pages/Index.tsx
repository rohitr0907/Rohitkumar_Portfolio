
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
        {/* Background Elements */}
        <div style={{ position: "fixed", inset: 0, zIndex: -10, overflow: "hidden" }}>
          <div style={{ 
            position: "absolute", 
            top: "-30%", 
            right: "-10%", 
            width: "80%", 
            height: "70%", 
            background: "linear-gradient(to bottom, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1))", 
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
            background: "linear-gradient(to top right, rgba(45, 212, 191, 0.1), rgba(59, 130, 246, 0.1))", 
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
            background: "linear-gradient(to bottom right, rgba(244, 114, 182, 0.1), rgba(var(--accent), 0.1))", 
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

        {/* Navigation */}
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
                    background: "linear-gradient(to right, var(--primary), var(--accent))",
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
                        background: "var(--primary)",
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
                      document.querySelector('[data-radix-collection-item]')?.click();
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

        {/* Hero Section */}
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
              <div style={{ animation: "fade-in 0.5s ease-out forwards", animationDelay: "0.1s" }}>
                <Badge variant="outline" style={{ padding: "0.25rem 1rem", marginBottom: "0.5rem" }}>Frontend Developer</Badge>
                <h1 style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: "bold", letterSpacing: "-0.05em", lineHeight: 1.1 }}>
                  <span style={{ display: "block" }}>Hi, I'm Your Name</span>
                  <span style={{ 
                    display: "block", 
                    marginTop: "0.25rem", 
                    background: "linear-gradient(to right, var(--primary), var(--accent))",
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
                animation: "fade-in 0.5s ease-out forwards",
                animationDelay: "0.3s"
              }}>
                I specialize in creating exceptional digital experiences. 
                Currently focused on building accessible, human-centered products.
              </p>
              
              <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "1rem", 
                marginTop: "1rem", 
                animation: "fade-in 0.5s ease-out forwards",
                animationDelay: "0.5s"
              }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
                  <Button 
                    size="lg" 
                    onClick={() => scrollToSection('projects')}
                  >
                    View My Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => scrollToSection('contact')}
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

        {/* About Section */}
        <section id="about" style={{ padding: "6rem 0" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
              <div style={{ position: "relative" }}>
                <div style={{ aspectRatio: "1/1", borderRadius: "1rem", overflow: "hidden", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom right, rgba(var(--primary), 0.2), rgba(var(--accent), 0.2))", mixBlendMode: "multiply" }}></div>
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom right, var(--background), transparent)", opacity: 0.2 }}></div>
                  <div style={{ width: "100%", height: "100%", background: "rgb(229, 231, 235)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: "rgb(156, 163, 175)", fontSize: "1.125rem" }}>Your Photo Here</span>
                  </div>
                </div>
                
                <div style={{ position: "absolute", bottom: "-1.5rem", left: "-1.5rem", width: "6rem", height: "6rem", background: "rgba(var(--accent), 0.1)", borderRadius: "9999px", filter: "blur(24px)" }}></div>
                <div style={{ position: "absolute", top: "-1.5rem", right: "-1.5rem", width: "8rem", height: "8rem", background: "rgba(var(--primary), 0.1)", borderRadius: "9999px", filter: "blur(24px)" }}></div>
              </div>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div>
                  <Badge style={{ marginBottom: "0.75rem" }}>About Me</Badge>
                  <h2 style={{ fontSize: "clamp(1.875rem, 3vw, 2.25rem)", fontWeight: "bold", letterSpacing: "-0.025em" }}>
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
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>GitHub</TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon" asChild>
                        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                          <Linkedin className="h-5 w-5" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>LinkedIn</TooltipContent>
                  </Tooltip>
                  
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline">
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

        {/* Expertise Section */}
        <section style={{ padding: "6rem 0", background: "var(--secondary)/0.3" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <Badge style={{ marginBottom: "0.75rem" }}>What I Do</Badge>
              <h2 style={{ fontSize: "clamp(1.875rem, 3vw, 2.25rem)", fontWeight: "bold", letterSpacing: "-0.025em", marginBottom: "1rem" }}>My Expertise</h2>
              <p style={{ fontSize: "1.125rem", color: "var(--muted-foreground)", maxWidth: "32rem", margin: "0 auto" }}>
                I specialize in building modern web applications with a focus on performance, accessibility, and user experience.
              </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginTop: "4rem" }}>
              <Card>
                <CardHeader>
                  <div style={{ 
                    background: "rgba(var(--primary), 0.1)", 
                    width: "3rem", 
                    height: "3rem", 
                    borderRadius: "9999px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    marginBottom: "1rem" 
                  }}>
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Frontend Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: "var(--muted-foreground)" }}>
                    Building responsive and interactive user interfaces with modern frameworks like React. 
                    Creating seamless user experiences with attention to detail.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div style={{ 
                    background: "rgba(var(--accent), 0.1)", 
                    width: "3rem", 
                    height: "3rem", 
                    borderRadius: "9999px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    marginBottom: "1rem" 
                  }}>
                    <Palette className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>UI/UX Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p style={{ color: "var(--muted-foreground)" }}>
                    Designing intuitive interfaces that balance aesthetics and functionality. 
                    Creating cohesive design systems for consistent user experiences.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div style={{ 
                    background: "rgba(59, 130, 246, 0.1)", 
                    width: "3rem", 
                    height: "3rem", 
                    borderRadius: "9999px", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    marginBottom: "1rem" 
                  }}>
                    <Database className="h-6 w-6 text-blue-500" />
                  </div>
                  <CardTitle>API Integration</CardTitle>
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

        {/* Projects Section */}
        <section id="projects" style={{ padding: "6rem 0" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
            <div style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
              <Badge style={{ marginBottom: "0.75rem" }}>My Work</Badge>
              <h2 style={{ fontSize: "clamp(1.875rem, 3vw, 2.25rem)", fontWeight: "bold", letterSpacing: "-0.025em", marginBottom: "1rem" }}>Featured Projects</h2>
              <p style={{ fontSize: "1.125rem", color: "var(--muted-foreground)" }}>
                Here's a selection of my recent projects that showcase my technical abilities and creative problem-solving.
              </p>
            </div>
            
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {[1, 2, 3].map((project) => (
                  <CarouselItem key={project} className="md:basis-1/2 lg:basis-1/2">
                    <div style={{ padding: "0.25rem" }}>
                      <Card>
                        <div style={{ aspectRatio: "16/9", background: "rgb(229, 231, 235)", position: "relative" }}>
                          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <span style={{ color: "rgb(156, 163, 175)" }}>Project Image {project}</span>
                          </div>
                        </div>
                        
                        <CardHeader>
                          <CardTitle>Project Title {project}</CardTitle>
                          <CardDescription>
                            A brief description of the project, what technologies were used, and what problems it solves.
                          </CardDescription>
                        </CardHeader>
                        
                        <CardContent>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1rem" }}>
                            <Badge variant="secondary">React</Badge>
                            <Badge variant="secondary">TypeScript</Badge>
                            <Badge variant="secondary">Tailwind CSS</Badge>
                          </div>
                        </CardContent>
                        
                        <CardFooter>
                          <div style={{ display: "flex", gap: "0.75rem" }}>
                            <Button size="sm" variant="outline">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Live Demo
                            </Button>
                            <Button size="sm" variant="outline">
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
                <CarouselPrevious style={{ position: "static", transform: "none", margin: "0 0.5rem" }} />
                <CarouselNext style={{ position: "static", transform: "none", margin: "0 0.5rem" }} />
              </div>
            </Carousel>
            
            <div style={{ textAlign: "center", marginTop: "4rem" }}>
              <Button variant="outline">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={{ padding: "6rem 0", background: "var(--secondary)/0.3" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
            <div style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
              <Badge style={{ marginBottom: "0.75rem" }}>My Toolkit</Badge>
              <h2 style={{ fontSize: "clamp(1.875rem, 3vw, 2.25rem)", fontWeight: "bold", letterSpacing: "-0.025em", marginBottom: "1rem" }}>Skills & Technologies</h2>
              <p style={{ fontSize: "1.125rem", color: "var(--muted-foreground)" }}>
                Here's a look at the technologies and tools I work with to bring ideas to life.
              </p>
            </div>
            
            <Tabs defaultValue="frontend">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
              </TabsList>
              
              <TabsContent value="frontend">
                <Card>
                  <CardContent className="pt-6 space-y-6">
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                        <span style={{ fontWeight: 500 }}>React</span>
                        <span>{skillProgress.react}%</span>
                      </div>
                      <Progress value={skillProgress.react} className="h-2" />
                    </div>
                    
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                        <span style={{ fontWeight: 500 }}>JavaScript</span>
                        <span>{skillProgress.javascript}%</span>
                      </div>
                      <Progress value={skillProgress.javascript} className="h-2" />
                    </div>
                    
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                        <span style={{ fontWeight: 500 }}>TypeScript</span>
                        <span>{skillProgress.typescript}%</span>
                      </div>
                      <Progress value={skillProgress.typescript} className="h-2" />
                    </div>
                    
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                        <span style={{ fontWeight: 500 }}>HTML & CSS</span>
                        <span>{skillProgress.html}%</span>
                      </div>
                      <Progress value={skillProgress.html} className="h-2" />
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="backend">
                <Card>
                  <CardContent className="pt-6">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "1rem" }}>
                      {["Node.js", "Express", "MongoDB", "SQL", "Firebase", "REST APIs"].map((tool) => (
                        <HoverCard key={tool}>
                          <HoverCardTrigger asChild>
                            <Button variant="outline" style={{ width: "100%", height: "100%", justifyContent: "center" }}>
                              {tool}
                            </Button>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
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
                <Card>
                  <CardContent className="pt-6">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "1rem" }}>
                      {["Figma", "Adobe XD", "UI Design", "UX Research", "Wireframing", "Prototyping"].map((tool) => (
                        <HoverCard key={tool}>
                          <HoverCardTrigger asChild>
                            <Button variant="outline" style={{ width: "100%", height: "100%", justifyContent: "center" }}>
                              {tool}
                            </Button>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
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
                <Card>
                  <CardContent className="pt-6">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: "1rem" }}>
                      {["Git", "Webpack", "Jest", "GitHub Actions", "VS Code", "Docker"].map((tool) => (
                        <HoverCard key={tool}>
                          <HoverCardTrigger asChild>
                            <Button variant="outline" style={{ width: "100%", height: "100%", justifyContent: "center" }}>
                              {tool}
                            </Button>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-80">
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

        {/* Contact Section */}
        <section id="contact" style={{ padding: "6rem 0" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
            <div style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center", marginBottom: "4rem" }}>
              <Badge style={{ marginBottom: "0.75rem" }}>Get In Touch</Badge>
              <h2 style={{ fontSize: "clamp(1.875rem, 3vw, 2.25rem)", fontWeight: "bold", letterSpacing: "-0.025em", marginBottom: "1rem" }}>Let's Work Together</h2>
              <p style={{ fontSize: "1.125rem", color: "var(--muted-foreground)" }}>
                I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out!
              </p>
            </div>
            
            <div style={{ maxWidth: "28rem", margin: "0 auto" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <Card>
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
                        background: "rgba(var(--primary), 0.1)", 
                        padding: "0.75rem", 
                        borderRadius: "9999px" 
                      }}>
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 style={{ fontWeight: 600 }}>Email</h3>
                        <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>your-email@example.com</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
                
                <Card>
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
                        background: "rgba(59, 130, 246, 0.1)", 
                        padding: "0.75rem", 
                        borderRadius: "9999px" 
                      }}>
                        <Linkedin className="h-6 w-6 text-blue-500" />
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
                <Button size="lg">
                  <Mail className="h-4 w-4 mr-2" />
                  Send me an email
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer style={{ padding: "2rem 0", borderTop: "1px solid var(--border)" }}>
          <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "0 1rem" }}>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
              <div style={{ marginBottom: "1rem" }}>
                <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>
                  &copy; {new Date().getFullYear()} Your Name. All rights reserved.
                </p>
              </div>
              
              <div style={{ display: "flex", gap: "1rem" }}>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
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
