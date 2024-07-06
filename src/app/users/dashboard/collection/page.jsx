import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/header";
import Hero from "@/components/CarouselHeroSection/hero";
import Footer from "@/components/Footer";
import DashEmpty from "@/components/Utilities/dashEmpty"; // pastikan Anda import DashEmpty
import { getAnimeResponse } from "@/libs/apiLibs";
import { authUserSession } from "@/libs/authLibs";
import prisma from "@/libs/prisma";
import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const user = await authUserSession();

  const collection = await prisma.collection.findMany({
    where: { user_email: user.email }
  });

  // const dataCollection = await Promise.all(collection.map(async (collect) => {
    //     const id = collect.anime_mal_id
    //     const animeData =  await getAnimeResponse(`anime/${id}`)
    //     return {
    //         id: animeData.data.mal_id,
    //         title: animeData.data.title,
    //         image_url: animeData.data.images.webp.image_url,
    //         year: animeData.data.year
    //     }
    // }))

  return (
    <>
      <Hero />
      {collection.length > 0 ? (
        <section className="py-6 md:py-10 animate__animated animate__fadeInUp px-8 space-y-3 bg-gray-900">
          <Header title={`My Collection`} />
          <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
            {collection.map((collect, index) => {
              return (
                <Link href={`/anime/${collect.anime_mal_id}`} className="relative" key={index}>
                  <Image src={collect.image_url} alt="..." unoptimized width={200} height={200} className="w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-50% dark-opacity transition-all ease-in"></div>
                  <div className="absolute bottom-0 hover:bottom-2 transition-all ease-in text-slate-200 p-2">
                    <h3 className="text-xs sm:text-md md:text-xl font-bold">{collect.Title}</h3>
                    <p className="text-xs sm:text-sm md:text-md">{collect.Year}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      ) : (
        <DashEmpty title="Koleksi" />
      )}
      <Footer />
    </>
  );
};

export default Page;
