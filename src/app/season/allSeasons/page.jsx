import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import CarouselHero from "@/components/CarouselHeroSection";
import Hero from "@/components/CarouselHeroSection/hero";
import Footer from "@/components/Footer";
import { getAnimeResponse, getNestedAnimeResponse, reProduce } from "@/libs/apiLibs";
import prisma from "@/libs/prisma";

const Page = async () => {

  const seasonNowAnime = await getAnimeResponse(`seasons/now`, `limit=6`)
  const seasonUpcomingAnime = await getAnimeResponse(`seasons/upcoming`, `limit=6`)
  const seasonLatestAnime = await getAnimeResponse(`seasons/2024/spring`, `limit=6`)
  const seasonAnime = await getAnimeResponse(`seasons/2024/winter`, `limit=6`)

  return (
    <>
      <Hero/>
    
      <section className="pt-10 md:pt-16 px-8 space-y-3 bg-gray-900">
        <Header title="New Season" linkTitle="Lihat Semua" linkHref="./newSeason" />
        <AnimeList api={seasonNowAnime} />
      </section>
      <section className="pt-10 md:pt-16 px-8 space-y-3 bg-gray-900">
        <Header title="Upcoming Season" linkTitle="Lihat Semua" linkHref="./newSeason" />
        <AnimeList api={seasonUpcomingAnime} />
      </section>
      <section className="pt-10 md:pt-16 px-8 space-y-3 bg-gray-900">
        <Header title="Latest Season" linkTitle="Lihat Semua" linkHref="./newSeason" />
        <AnimeList api={seasonLatestAnime} />
      </section>
      <section className="py-10 md:py-16 px-8 space-y-3 bg-gray-900">
        <Header title="Winter Season" linkTitle="Lihat Semua" linkHref="./newSeason" />
        <AnimeList api={seasonAnime} />
      </section>
      <Footer/>

    </>
  );
}

export default Page
