import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
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
                  href="mailto:rohitkumar.rajamanickam@gmail.com" 
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
                    <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>rohitkumar.rajamanickam@gmail.com</p>
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
                  href="https://www.linkedin.com/in/rohitkumar0907/" 
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
                    <p style={{ fontSize: "0.875rem", color: "var(--muted-foreground)" }}>linkedin.com/in/rohitkumar0907/</p>
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
  );
};

export default Contact;
