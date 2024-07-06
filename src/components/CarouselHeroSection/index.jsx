"use client"
import Image from "next/image";
import Link from "next/link";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const CarouselHeroSection = ({ carousel }) => {

  useEffect(() => {
    AOS.init({
         duration: 800,
         once: false,
       })
 }, [])

  return (
    <section className="relative h-screen flex items-center box-border bg-gray-900">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
      >
        {carousel.map((car, index) => {
          return (
            <div className="relative" key={index} data-aos="fade-up">
              <Image
                className="w-full h-screen object-cover"
                src={car.image_url}
                unoptimized
                width={1000} height={400}   // Ganti dengan path foto pertama Anda
                alt="Hero Section 1"
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white z-10">
                  <h1 className="text-4xl font-bold">{car.title}</h1>
                  <p className="mt-4 text-lg">{car.sub_title}</p>
                  <Link href={`/anime/${car.anime_mal_id}`} className="mt-8 inline-block bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200 transition duration-300 ease-in-out transform hover:scale-105">View More</Link>
                </div>
              </div>
            </div>
          )

        })}
      </Carousel>
    </section>
  )
}

export default CarouselHeroSection