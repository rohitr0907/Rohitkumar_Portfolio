
import { useEffect, useRef, useState } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/layout/Navbar";
import Background from "@/components/layout/Background";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const observer = useRef<IntersectionObserver | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Handle scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set up intersection observer for detecting active section
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

  // Component mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Helper function to scroll to sections
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <TooltipProvider>
      <div style={{ minHeight: "100vh", background: "var(--background)", color: "var(--foreground)" }}>
        <Background />
        <Navbar 
          scrollY={scrollY} 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
        />
        <Hero scrollY={scrollY} scrollToSection={scrollToSection} />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </TooltipProvider>
  );
};

export default Index;
