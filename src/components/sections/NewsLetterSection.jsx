export const NewsletterSection = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl p-8">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <h2 className="text-3xl font-bold text-white mb-2">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-white/80">
            By subscribing you agree with our Privacy Policy and provide consent
            to receive updates from our company.
          </p>
        </div>
        <div className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="px-4 py-2 rounded-l-full w-full md:w-64"
          />
          <button className="bg-white text-pink-500 px-6 py-2 rounded-r-full font-medium">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};
