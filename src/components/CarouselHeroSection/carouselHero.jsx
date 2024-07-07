"use client"
import Image from "next/image";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselHero = ({ hero }) => {
    return(
        <section className="flex bg-gray-900">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          useKeyboardArrows
          autoPlay
          swipeable={false}
        >

{hero.map((car, index) => {
          return (
            <div className="mt-10 sm:mt-0 max-h-96" key={index}>
            <Image  
              className="w-full object-cover"
              src={car.image_url}
              unoptimized width={1000} height={1000}   // Ganti dengan path foto pertama Anda
              alt="Hero Section 1"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 mt-10 sm:mt-0 flex items-center justify-center">
              <div className="text-center text-white z-10">
                <h1 className="text-md sm:text-4xl font-bold">{car.title}</h1>
                <p className="mt-0 sm:mt-4 text-xs sm:text-lg">{car.sub_title}</p>
                <a href={`/anime/${car.anime_mal_id}`} className="mt-2 md:mt-8 inline-block bg-white text-sm text-blue-500 py-1 px-2 md:py-2 md:px-4 rounded hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">Explore Our Services</a>
              </div>
            </div>
          </div>
          )

        })}
          {/* <div className="mt-10 sm:mt-0 max-h-96">
            <Image  
              className="w-full object-cover"
              src={`https://wutheringwaves.gg/wp-content/uploads/sites/8/2024/04/Wuthering-Waves-Key-Art-April-2024.jpg`}
              unoptimized width={1000} height={400}   // Ganti dengan path foto pertama Anda
              alt="Hero Section 1"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 mt-10 sm:mt-0 flex items-center justify-center">
              <div className="text-center text-white z-10">
                <h1 className="text-md sm:text-4xl font-bold">Wuthering Wave</h1>
                <p className="mt-0 sm:mt-4 text-xs sm:text-lg">Your success is our mission.</p>
                <a href="#services" className="mt-2 md:mt-8 inline-block bg-white text-sm text-blue-500 py-1 px-2 md:py-2 md:px-4 rounded hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">Learn More</a>
              </div>
            </div>
          </div>
          <div className="mt-10 sm:mt-0 max-h-96">
            <Image  
              className="w-full object-cover"
              src={`https://genshin.global/wp-content/uploads/2023/10/Stars-Shining-Depths-official-wallpaper-genshin.jpg`}
              unoptimized width={1000} height={400}   // Ganti dengan path foto pertama Anda
              alt="Hero Section 1"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 mt-10 sm:mt-0 flex items-center justify-center">
              <div className="text-center text-white z-10">
                <h1 className="text-md sm:text-4xl font-bold">Genshin Impact</h1>
                <p className="mt-0 sm:mt-4 text-xs sm:text-lg">Join us in our journey.</p>
                <a href="#services" className="mt-2 md:mt-8 inline-block bg-white text-sm text-blue-500 py-1 px-2 md:py-2 md:px-4 rounded hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">Get Started</a>
              </div>
            </div>
          </div> */}
        </Carousel>
      </section>
    )
}

export default CarouselHero