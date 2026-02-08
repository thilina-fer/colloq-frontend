import { useEffect, useRef, useState } from "react";

export default function DottedBackground() {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -1000 });
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const spacing = 45;
    const baseDotSize = 2;
    const rippleRadius = 200; // Distance of ripple effect

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const drawDots = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          // Calculate distance from mouse
          const dx = x - mousePos.x;
          const dy = y - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Calculate ripple effect
          let scale = 1;
          let opacity = 0.18; // Base opacity (from #6e6d6d2e)

          if (distance < rippleRadius) {
            const influence = 1 - distance / rippleRadius;
            scale = 1 + influence * 3; // Dots grow up to 4x size
            opacity = 0.18 + influence * 0.5; // Increase opacity
          }

          const dotSize = baseDotSize * scale;
          ctx.fillStyle = `rgba(110, 109, 109, ${opacity})`;
          ctx.fillRect(
            x - (dotSize - baseDotSize) / 2,
            y - (dotSize - baseDotSize) / 2,
            dotSize,
            dotSize,
          );
        }
      }

      animationRef.current = requestAnimationFrame(drawDots);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize();
    drawDots();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePos]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "transparent",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
        }}
      />
    </div>
  );
}
