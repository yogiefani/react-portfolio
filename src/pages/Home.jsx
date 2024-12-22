import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStats } from "../store/statsSlice";
import StatCard from "../components/StatCard";

const Home = () => {
  const dispatch = useDispatch();
  const stats = useSelector((state) => state.stats);

  useEffect(() => {
    dispatch(
      setStats({
        clients: 1500,
        privacy: 100,
        rating: 98,
        projects: 990,
      })
    );
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <StatCard title="Happy Clients" value="1.5K" />
            <StatCard title="Safety Privacy" value="100%" />
            <StatCard title="Event Rating" value="98%" />
            <StatCard title="Project Done" value="990+" />
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative">
            <div className="w-full h-full absolute bg-gradient-to-r from-pink-500 to-blue-500 opacity-20 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-4 gap-4 text-center text-white text-xl">
        <div className="bg-pink-500 py-4">UX DESIGN</div>
        <div className="bg-purple-500 py-4">APPS DESIGN</div>
        <div className="bg-blue-500 py-4">DEVELOPMENT</div>
        <div className="bg-cyan-500 py-4">WEB DESIGN</div>
      </div>
    </div>
  );
};

export default Home;
