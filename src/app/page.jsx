import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import CarouselHeroSection from "@/components/CarouselHeroSection";
import Footer from "@/components/Footer";
import { getAnimeResponse, getNestedAnimeResponse, reProduce } from "@/libs/apiLibs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";


const Page = async () => {

  const topAnime = await getAnimeResponse(`top/anime`, `limit=8`)
  const seasonNowAnime = await getAnimeResponse(`seasons/now`, `limit=6`)
  let recommendationAnime = await getNestedAnimeResponse(`recommendations/anime`, `entry`)
  recommendationAnime = reProduce(recommendationAnime, 6)

  const carousel = await prisma.carousel.findMany()

  return (
    <>
      <CarouselHeroSection carousel={carousel}/>

      <div>
        <section className="pt-10 md:pt-16 px-8 space-y-3 bg-gray-900">
          <Header title="Paling Populer" linkTitle="Lihat Semua" linkHref="/populer" />
          <AnimeList api={topAnime} />
        </section>
        <section className="pt-10 md:pt-16 px-8 space-y-3 bg-gray-900">
          <Header title="Musim Ini" linkTitle="Lihat Semua" linkHref="/season/newSeason" />
          <AnimeList api={seasonNowAnime} />
        </section>
        <section className="py-10 px-8 space-y-3 bg-gray-900">
          <Header title="Rekomendasi Anime"/>
          <AnimeList api={recommendationAnime} />
        </section>

      </div>

      <Footer/>

    </>
  );
}

export default Page
