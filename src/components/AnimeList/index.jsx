"use client"

import Image from "next/image";
import Link from "next/link";
import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AnimeList = ({ api }) => {

    useEffect(() => {
        AOS.init({
             duration: 800,
             once: false,
           })
     }, [])

    return (
        <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4" data-aos="fade-up">
            {api.data?.map((anime, index) => {
                return (

                    <Link href={`/anime/${anime.mal_id}`} className="relative" key={index}>
                        <Image src={anime.images.webp.image_url} alt="..." unoptimized width={200} height={200} className="w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-50% dark-opacity transition-all ease-in"></div>
                        <div className="absolute bottom-0 hover:bottom-2 transition-all ease-in text-slate-200 p-2">
                            <h3 className="text-xs sm:text-md md:text-xl font-bold">{anime.title}</h3>
                            <p className="text-xs sm:text-sm md:text-md">{anime.year}</p>
                        </div>
                    </Link>

                )
            })}
        </div>
    )
}

export default AnimeList