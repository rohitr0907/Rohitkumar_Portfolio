
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, Github, ExternalLink, Mail, Linkedin, Download, ArrowDown, Code, Palette, Lightbulb, Database } from "lucide-react";

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
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[80%] h-[70%] bg-gradient-to-b from-blue-400/10 to-purple-500/10 rounded-full blur-3xl animate-float opacity-80"></div>
        <div className="absolute top-[60%] -left-[10%] w-[60%] h-[60%] bg-gradient-to-tr from-teal-400/10 to-blue-500/10 rounded-full blur-3xl opacity-70" style={{ animation: 'float 6s ease-in-out infinite 2s' }}></div>
        <div className="absolute top-[30%] left-[40%] w-[25%] h-[25%] bg-gradient-to-br from-pink-400/10 to-accent/10 rounded-full blur-3xl opacity-60" style={{ animation: 'float 6s ease-in-out infinite 4s' }}></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMDEiLz48cGF0aCBkPSJNMCAzMGgzMHYzMEgweiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjAyIi8+PC9nPjwvc3ZnPg==')] bg-repeat opacity-[0.15]"></div>
      </div>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 ${scrollY > 10 ? 'bg-white/70 dark:bg-gray-900/70 backdrop-blur-md border-b border-white/20 dark:border-gray-800/30 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <a 
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                }}
                className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
                style={{ animation: 'background-shine 2s linear infinite' }}
              >
                YourName
              </a>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(section);
                  }}
                  className={`text-sm font-medium transition-all duration-200 ${
                    activeSection === section ? 'text-primary' : 'hover:text-primary'
                  } relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
                    activeSection === section ? 'after:w-full' : ''
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>
            
            <div className="md:hidden">
              <Button variant="ghost" size="icon">
                <span className="sr-only">Open menu</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <section 
        id="home" 
        className="min-h-screen flex items-center relative overflow-hidden pt-20"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
          opacity: 1 - scrollY * 0.001,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col gap-6 md:gap-8 max-w-4xl">
            <div className="space-y-2" style={{ animation: 'fade-in 0.5s ease-out forwards 0.1s' }}>
              <Badge variant="outline" className="px-4 py-1">Frontend Developer</Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block">Hi, I'm Your Name</span>
                <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  I build things for the web
                </span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl" style={{ animation: 'fade-in 0.5s ease-out forwards 0.3s' }}>
              I specialize in creating exceptional digital experiences. 
              Currently focused on building accessible, human-centered products.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4" style={{ animation: 'fade-in 0.5s ease-out forwards 0.5s' }}>
              <Button 
                size="lg" 
                className="group"
                onClick={() => scrollToSection('projects')}
              >
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
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
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" style={{ animation: 'bounce 2s infinite' }}>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => scrollToSection('about')} 
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </section>

      <section id="about" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl" style={{ animation: 'fade-in 0.5s ease-out forwards' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-background to-transparent opacity-20"></div>
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Your Photo Here</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/10 rounded-full blur-xl" style={{ animation: 'pulse 3s ease-in-out infinite' }}></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-xl" style={{ animation: 'pulse 3s ease-in-out infinite 1s' }}></div>
            </div>
            
            <div className="space-y-6">
              <div>
                <Badge className="mb-3">About Me</Badge>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Passionate about creating meaningful digital experiences</h2>
              </div>
              
              <div className="space-y-4 text-lg text-muted-foreground">
                <p style={{ animation: 'slide-in 0.5s ease-out forwards 0.1s' }}>
                  I'm a frontend developer who loves creating clean, elegant, and efficient solutions to complex problems. 
                  My journey in web development started several years ago, and I've been refining my craft ever since.
                </p>
                <p style={{ animation: 'slide-in 0.5s ease-out forwards 0.2s' }}>
                  With a strong foundation in modern JavaScript frameworks and libraries like React, 
                  I bring a user-centered approach to every project I work on. I believe that great products 
                  arise from the perfect blend of functionality, performance, and aesthetics.
                </p>
                <p style={{ animation: 'slide-in 0.5s ease-out forwards 0.3s' }}>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or enjoying outdoor activities.
                </p>
              </div>
              
              <div className="flex gap-4 pt-4" style={{ animation: 'slide-in 0.5s ease-out forwards 0.4s' }}>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-3">What I Do</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">My Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I specialize in building modern web applications with a focus on performance, accessibility, and user experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <div className="bg-card rounded-lg p-6 shadow-md border border-border/50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]" style={{ animation: 'fade-in 0.5s ease-out forwards' }}>
              <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
              <p className="text-muted-foreground">
                Building responsive and interactive user interfaces with modern frameworks like React. 
                Creating seamless user experiences with attention to detail.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md border border-border/50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]" style={{ animation: 'fade-in 0.5s ease-out forwards 0.2s' }}>
              <div className="bg-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Palette className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Designing intuitive interfaces that balance aesthetics and functionality. 
                Creating cohesive design systems for consistent user experiences.
              </p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-md border border-border/50 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]" style={{ animation: 'fade-in 0.5s ease-out forwards 0.4s' }}>
              <div className="bg-blue-400/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">API Integration</h3>
              <p className="text-muted-foreground">
                Connecting frontend applications to backend services and APIs.
                Implementing efficient data fetching and state management strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-3">My Work</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">
              Here's a selection of my recent projects that showcase my technical abilities and creative problem-solving.
            </p>
          </div>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[1, 2, 3].map((project) => (
                <CarouselItem key={project} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <div className="overflow-hidden rounded-lg bg-card shadow-md border border-border/50 hover:shadow-lg transition-all duration-300">
                      <div className="aspect-video bg-gray-200 relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-gray-400">Project Image {project}</span>
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <h3 className="text-xl font-bold mb-2">Project Title {project}</h3>
                        <p className="text-muted-foreground mb-4">
                          A brief description of the project, what technologies were used, and what problems it solves.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary">React</Badge>
                          <Badge variant="secondary">TypeScript</Badge>
                          <Badge variant="secondary">Tailwind CSS</Badge>
                        </div>
                        <div className="flex space-x-3">
                          <Button size="sm" variant="outline" className="gap-1">
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </Button>
                          <Button size="sm" variant="outline" className="gap-1">
                            <Github className="h-4 w-4" />
                            Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
          
          <div className="text-center mt-16">
            <Button variant="outline" className="gap-2">
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 relative bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-3">My Toolkit</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Skills & Technologies</h2>
            <p className="text-lg text-muted-foreground">
              Here's a look at the technologies and tools I work with to bring ideas to life.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="space-y-8">
              <h3 className="text-xl font-semibold mb-6">Frontend</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">React</span>
                    <span>{skillProgress.react}%</span>
                  </div>
                  <Progress value={skillProgress.react} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">JavaScript</span>
                    <span>{skillProgress.javascript}%</span>
                  </div>
                  <Progress value={skillProgress.javascript} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">TypeScript</span>
                    <span>{skillProgress.typescript}%</span>
                  </div>
                  <Progress value={skillProgress.typescript} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">HTML & CSS</span>
                    <span>{skillProgress.html}%</span>
                  </div>
                  <Progress value={skillProgress.html} className="h-2" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Tools & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "Redux", "Next.js", "Tailwind CSS", "Git", "Webpack", 
                  "Jest", "React Query", "CSS-in-JS", "Figma"
                ].map((tool) => (
                  <HoverCard key={tool}>
                    <HoverCardTrigger asChild>
                      <div className="bg-card p-4 rounded-lg border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300 cursor-pointer flex items-center justify-center">
                        <span className="font-medium text-center">{tool}</span>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="flex justify-between space-x-4">
                        <div className="space-y-1">
                          <h4 className="text-sm font-semibold">{tool}</h4>
                          <p className="text-sm text-muted-foreground">
                            Experienced with {tool} in professional projects.
                          </p>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge className="mb-3">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground">
              I'm currently open to new opportunities and collaborations. If you have a project in mind or just want to say hello, feel free to reach out!
            </p>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col gap-8">
              <a 
                href="mailto:your-email@example.com" 
                className="bg-card p-6 rounded-lg border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300 flex items-center gap-4"
              >
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-sm text-muted-foreground">your-email@example.com</p>
                </div>
              </a>
              
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-card p-6 rounded-lg border border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300 flex items-center gap-4"
              >
                <div className="bg-blue-500/10 p-3 rounded-full">
                  <Linkedin className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/yourprofile</p>
                </div>
              </a>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="gap-2">
                <Mail className="h-4 w-4" />
                Send me an email
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Your Name. All rights reserved.
              </p>
            </div>
            
            <div className="flex space-x-4">
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
  );
};

export default Index;
