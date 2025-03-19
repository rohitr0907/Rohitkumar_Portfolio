
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Code, Palette, Database } from "lucide-react";

const Services = () => {
  return (
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
  );
};

export default Services;
