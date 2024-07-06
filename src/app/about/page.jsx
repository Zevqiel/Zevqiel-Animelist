import Hero from "@/components/CarouselHeroSection/hero";
import Footer from "@/components/Footer";

// pages/about.jsx
export default function About() {
    return (
        <div>
            <Hero/>
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg max-w-xl w-full p-8 fade-in text-blue-500 text-center">
          <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
          <p className="text-gray-900 text-lg mb-4">
            Animelist Zevqiel Adalah
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.

          </p>
          <p className="text-gray-700 text-lg mb-4">
            Tim Kami Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <Footer/>
        </div>
    );
  }
  