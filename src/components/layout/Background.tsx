import React from 'react';

const Background = () => {
  return (
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
  );
};

export default Background;
