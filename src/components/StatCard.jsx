const StatCard = ({ title, value }) => {
  return (
    <div className="bg-gray-800 bg-opacity-50 p-4 rounded-lg">
      <h3 className="text-2xl font-bold text-white">{value}</h3>
      <p className="text-gray-400 text-sm">{title}</p>
    </div>
  );
};

export default StatCard;
