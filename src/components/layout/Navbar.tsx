import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarProps {
  scrollY: number;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navbar = ({ scrollY, activeSection, scrollToSection }: NavbarProps) => {
  return (
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
              Personal Portfolio
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
  );
};

export default Navbar;
