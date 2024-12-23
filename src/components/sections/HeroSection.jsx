import StatCard from "../StatCard";
import profileImage from "../../assets/images/itsme.png";

export const HeroSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12 items-center">
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

      <div className="order-1 md:order-2">
        <div className="relative">
          <img className="w-full" src={profileImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
};
