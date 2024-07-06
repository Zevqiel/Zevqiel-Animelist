import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"
import Hero from "@/components/CarouselHeroSection/hero"
import Footer from "@/components/Footer"
import { getAnimeResponse } from "@/libs/apiLibs"

const Page = async({ params }) => {

    const { keyword } = params
    const decodeKeyword = decodeURI(keyword)
    const searchAnime =await getAnimeResponse(`anime`, `q=${decodeKeyword}`)

    return(
        <>
            <Hero/>
            <section className="py-6 md:py-10 animate__animated animate__fadeInUp px-8 space-y-3 bg-gray-900">

            <Header title={`Hasil Pencarian Untuk ${decodeKeyword}...`}/>
            <AnimeList api={searchAnime}/>
            </section>
            <Footer/>
        </>
    )
}

export default Page