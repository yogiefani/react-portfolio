import { useState, useEffect } from "react";
import StatCard from "../StatCard";
import SparklesHero from "../SparklesHero";
import MouseGlow from "../MouseGlow";
import profileImage from "../../assets/images/itsme.png";

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState(null);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const numberOfSparkles = 15;
    const newSparkles = Array.from({ length: numberOfSparkles }, (_, i) => ({
      id: i,
      initialPosition: {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      },
    }));
    setSparkles(newSparkles);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    requestAnimationFrame(() => {
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    });
  };

  const handleMouseLeave = () => {
    setMousePosition(null);
  };

  return (
    <div
      className="relative min-h-screen"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <MouseGlow mousePosition={mousePosition} />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {sparkles.map((sparkle) => (
          <SparklesHero
            key={sparkle.id}
            mousePosition={mousePosition}
            initialPosition={sparkle.initialPosition}
          />
        ))}
      </div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center backdrop-blur-sm">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Creative
            <span className="block">
              <span className="text-pink-500">UI/UX</span>
              <span className="text-blue-500"> Designer</span>
            </span>
            Professional
          </h1>
          <p className="text-gray-300 mb-8">
            Creative professional with expertise in UI/UX design, focusing on
            user-centered solutions and innovative digital experiences.
          </p>
          <button className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition">
            View My Portfolio
          </button>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            <StatCard title="Years Experience" value="15+" />
            <StatCard title="World Clients" value="2K+" />
            <StatCard title="Project Done" value="990+" />
          </div>
        </div>

        <div className="order-1 md:order-2 center">
          <div className="relative">
            <img
              className="w-80 m-auto md:w-full"
              src={profileImage}
              alt="Profile"
            />
          </div>
        </div>
      </div>
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full mix-blend-hard-light filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-hard-light filter blur-3xl" />
      </div>
    </div>
  );
};
