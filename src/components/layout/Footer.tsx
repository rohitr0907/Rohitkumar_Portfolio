
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
