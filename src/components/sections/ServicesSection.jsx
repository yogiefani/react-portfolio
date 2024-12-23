export const ServicesSection = () => {
  const services = {
    design: ["Landing Page", "Web Design", "Presentation", "Email Signature"],
    development: [
      "Website Development",
      "Web Flow",
      "Elementor",
      "Android Apps",
    ],
  };

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Good Product Born from Good Designer
      </h2>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-white mb-6">
          <span className="text-pink-500">01</span> Design Visual
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.design.map((service, index) => (
            <div key={index} className="bg-gray-800 text-white p-4 rounded">
              {service}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-2xl font-bold text-white mb-6">
          <span className="text-pink-500">02</span> Development
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.development.map((service, index) => (
            <div key={index} className="bg-gray-800 text-white p-4 rounded">
              {service}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
