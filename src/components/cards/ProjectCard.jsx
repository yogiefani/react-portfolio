export const ProjectCard = ({ title, description }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden">
    <div className="bg-gray-700 h-48 flex items-center justify-center">
      <span className="text-gray-500">Image Placeholder</span>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-2 rounded-full">
        See Project
      </button>
    </div>
  </div>
);
