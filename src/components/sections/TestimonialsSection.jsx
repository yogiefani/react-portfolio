export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Miriam S. Pattison",
      handle: "@youraccount",
      date: "21 December 2023",
      rating: 4.8,
      text: "Li Europan lingues es membres del sam familie. Lor separat existentie es un. Por scientie, musica, sport etc",
    },
    {
      name: "Angelina Juli",
      handle: "@youraccount",
      date: "21 August 2023",
      rating: 4.8,
      text: "Li Europan lingues es membres del sam familie. Lor separat existentie es un. Por scientie, musica, sport etc",
    },
    // Add more testimonials as needed
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">What they say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-white font-bold">{testimonial.name}</h3>
                <p className="text-pink-500">{testimonial.handle}</p>
              </div>
              <div className="flex items-center">
                <span className="text-white mr-1">{testimonial.rating}</span>
                <span className="text-yellow-400">★</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">{testimonial.text}</p>
            <p className="text-gray-500">{testimonial.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
