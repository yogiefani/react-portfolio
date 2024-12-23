import { useState, useEffect, useRef } from "react";

const SparklesHero = ({ mousePosition, initialPosition }) => {
  const positionRef = useRef(initialPosition);
  const [rendered, setRendered] = useState(initialPosition);
  const animationFrameId = useRef();

  useEffect(() => {
    let velocity = {
      x: (Math.random() - 0.5) * 0.5,
      y: (Math.random() - 0.5) * 0.5,
    };

    const animate = () => {
      positionRef.current = {
        x: positionRef.current.x + velocity.x,
        y: positionRef.current.y + velocity.y,
      };

      if (
        positionRef.current.x < 0 ||
        positionRef.current.x > window.innerWidth
      ) {
        velocity.x = -velocity.x;
      }
      if (
        positionRef.current.y < 0 ||
        positionRef.current.y > window.innerHeight
      ) {
        velocity.y = -velocity.y;
      }

      if (mousePosition) {
        const dx = positionRef.current.x - mousePosition.x;
        const dy = positionRef.current.y - mousePosition.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          velocity.x += Math.cos(angle) * 0.2;
          velocity.y += Math.sin(angle) * 0.2;
        }
      }

      setRendered(positionRef.current);
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [mousePosition]);

  return (
    <div
      className="absolute w-1 h-1 bg-white rounded-full"
      style={{
        left: rendered.x,
        top: rendered.y,
        transform: "translate(-50%, -50%)",
        opacity: 0.6,
      }}
    />
  );
};

export default SparklesHero;
