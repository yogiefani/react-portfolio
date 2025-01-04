import { Background } from "../components/Background";
import { HeroSection } from "../components/sections/HeroSection";
import { NewsletterSection } from "../components/sections/NewsLetterSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#020617] relative overflow-hidden">
      <Background />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <HeroSection />
        <div className="mt-20">
          <ServicesSection />
        </div>
        <div className="mt-20">
          <ProjectsSection />
        </div>
        <div className="mt-20">
          <TestimonialsSection />
        </div>
        <div className="">
          <NewsletterSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
