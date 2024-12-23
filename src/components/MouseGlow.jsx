import { useEffect, useState } from "react";

const MouseGlow = ({ mousePosition }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (mousePosition) {
      requestAnimationFrame(() => {
        setPosition(mousePosition);
      });
    }
  }, [mousePosition]);

  return (
    <div
      className="pointer-events-none fixed opacity-50 mix-blend-hard-light"
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        width: "300px",
        height: "300px",
        background:
          "radial-gradient(circle, rgba(255,0,255,0.2) 0%, rgba(70,0,255,0.1) 45%, rgba(0,0,0,0) 70%)",
        filter: "blur(20px)",
      }}
    />
  );
};

export default MouseGlow;
