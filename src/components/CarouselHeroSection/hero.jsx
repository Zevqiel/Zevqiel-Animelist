import Image from "next/image";
import CarouselHero from "./carouselHero";
import prisma from "@/libs/prisma";

const Hero = async() => {

  const hero = await prisma.carousel.findMany()
  
    return(
        <CarouselHero hero={hero}/>
    )
}

export default Hero