import house from '../assets/house.jpg';
import { motion } from "motion/react"

export const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-8 md:px-20 lg:px-32 w-full overflow-hidden"
      id="about"
    >
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide text-center text-gray-900 mb-4">
        About
      </h1>

      {/* Subheading */}
      <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl font-medium italic text-center max-w-2xl mb-10">
        Your dream home is waiting for you — make it a reality with us!
      </p>

      {/* Content Area */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Image */}
        <img src={house} alt="house" className="w-full max-w-lg rounded-xl shadow-md" />

        {/* Text Content */}
        <div className="flex flex-col items-center lg:items-start text-gray-700">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28 mt-6 lg:mt-0">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-gray-700">2+</p>
              <p className="text-sm sm:text-base">Years of experience</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold  text-gray-700">10+</p>
              <p className="text-sm sm:text-base">Projects completed</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold  text-gray-700">20+</p>
              <p className="text-sm sm:text-base">MN. sq. ft. Delivered</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold  text-gray-700">6+</p>
              <p className="text-sm sm:text-base">Ongoing Projects</p>
            </div>
          </div>

          {/* Description */}
          <p className="my-10 max-w-lg text-center lg:text-left text-sm sm:text-base md:text-lg leading-relaxed">
            We believe in turning your dreams into beautiful realities. With a strong legacy of excellence and trust, our team delivers high-quality spaces tailored to your lifestyle and expectations. From conceptual design to timely delivery — we’re building the future, one brick at a time.
          </p>

          {/* Button */}
          <button className="bg-blue-600 hover:bg-blue-400 transition-colors duration-300 text-white px-8 py-2 rounded shadow-md text-sm sm:text-base">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};
