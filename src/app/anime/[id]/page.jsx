import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"
import Hero from "@/components/CarouselHeroSection/hero"
import Footer from "@/components/Footer"
import { getAnimeResponse } from "@/libs/apiLibs"
import Image from "next/image"
import VideoPlayer from "@/components/Utilities/videoPlayer"
import CollectionButton from "@/components/AnimeList/CollectionButton"
import { authUserSession } from "@/libs/authLibs"
import prisma from "@/libs/prisma"
import CommentInput from "@/components/AnimeList/CommentInput"
import CommentBox from "@/components/AnimeList/CommentBox"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    const user = await authUserSession()
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id }
    })
    return (
        <>
            <Hero />
            <section className="py-6 md:py-10 animate__animated animate__fadeInUp px-2 md:px-8 bg-gray-900">
                <div className="flex justify-center items-center md:items-start flex-col md:flex-row space-x-4 space-y-2 text-slate-200">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex space-x-4">
                            <Image
                                src={anime.data.images.webp.image_url}
                                width={250}
                                height={250}
                                alt={anime.data.images.webp.image_url}
                                className="rounded object-cover max-w-32 sm:max-w-40 md:max-w-60" />
                            <div className="md:hidden text-xs md:text-base justify-center items-center">
                                <div className="flex flex-col justify-center items-center rounded border border-color-primary py-2 px-4">
                                    <h3>Peringkat</h3>
                                    <p>{anime.data.rank}</p>
                                </div>
                                <div className="flex flex-col justify-center items-center rounded border border-color-primary py-2 px-4">
                                    <h3>Score</h3>
                                    <p>{anime.data.score}</p>
                                </div>
                                <div className="flex flex-col justify-center items-center rounded border border-color-primary py-2 px-4">
                                    <h3>Anggota</h3>
                                    <p>{anime.data.members}</p>
                                </div>
                                <div className="flex flex-col justify-center items-center rounded border border-color-primary py-2 px-4">
                                    <h3>Episode</h3>
                                    <p>{anime.data.episodes}</p>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="">
                        <div className="md:space-y-2">
                            <div className="hidden md:flex text-xs md:text-base justify-start items-center">
                                <div className="flex flex-col justify-center items-center rounded border border-color-primary py-2 px-4">
                                    <h3>Peringkat</h3>
                                    <p>{anime.data.rank}</p>
                                </div>
                                <div className="flex flex-col justify-center items-center rounded border border-color-primary py-2 px-4">
                                    <h3>Score</h3>
                                    <p>{anime.data.score}</p>
                                </div>
                                <div className="flex flex-col justify-center items-center rounded border border-color-primary py-2 px-4">
                                    <h3>Anggota</h3>
                                    <p>{anime.data.members}</p>
                                </div>
                                <div className="flex flex-col justify-center items-center rounded border border-color-primary py-2 px-4">
                                    <h3>Episode</h3>
                                    <p>{anime.data.episodes}</p>
                                </div>
                            </div>
                            {
                                user && <CollectionButton 
                                anime_mal_id={id} 
                                user_email={user?.email} 
                                image_url={anime.data.images.webp.image_url}
                                Title={anime.data.title}
                                Year={anime.data.year}
                                col={collection}
                                id={collection ? collection.id : null}/>
                            }
                        </div>
                        <div className="space-y-2 mt-2">
                            <h3 className="text-sm md:text-2xl font-bold text-center md:text-left">{anime.data.title}</h3>
                            <p className="text-justify text-xs md:text-md lg:text-xl">{anime.data.synopsis}</p>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col px-4 py-2 gap-4 text-slate-200">
                
                    <CommentBox anime_mal_id={id}/>
                    {user && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name} anime_title={anime.data?.title}/>}
                    
                </div>
            </section>
            <Footer />
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
        </>
    )
}

export default Page