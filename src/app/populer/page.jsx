import AnimePage from "@/components/AnimePage"
import Hero from "@/components/CarouselHeroSection/hero"
import Footer from "@/components/Footer"

const Page = () => {

    return(
        <>
        <Hero/>
        <AnimePage title={`Anime Terpopuler`} linkHref={`top/anime`}/>
        <Footer/>
        </>
    )
}

export default Page