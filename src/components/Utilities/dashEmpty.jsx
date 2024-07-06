import { getAnimeResponse, getNestedAnimeResponse, reProduce } from "@/libs/apiLibs"
import AnimeList from "../AnimeList"
import Header from "../AnimeList/header"

const { default: Link } = require("next/link")

const DashEmpty = async({ title }) => {

    const seasonNowAnime = await getAnimeResponse(`seasons/now`, `limit=6`)
    let recommendationAnime = await getNestedAnimeResponse(`recommendations/anime`, `entry`)
    recommendationAnime = reProduce(recommendationAnime, 6)

    return(
        <>

        <div className="flex flex-col text-center text-slate-200 justify-center items-center gap-2 md:gap-6 bg-gray-900 pt-8">
                <h2 className="text-xl md:text-3xl font-bold">Kamu Belum Menambahkan {title}</h2>
                <p className="text-sm md:text-xl">Ayo Buat {title}mu</p>
                <Link href={`/`} className="bg-blue-500 text-slate-200 rounded-lg px-8 py-2 text-xs md:text-base hover:bg-blue-600 transition-all ease-in">Buat
                </Link>
            
        </div>
        <section className="py-10 px-8 space-y-3 bg-gray-900">
        <Header title="Anime Musim Ini" linkTitle="Lihat Semua" linkHref="../../season" />
        <AnimeList api={seasonNowAnime} />
      </section>
        <section className="py-10 px-8 space-y-3 bg-gray-900">
        <Header title="Rekomendasi Anime"/>
        <AnimeList api={recommendationAnime} />
      </section>
        </>
    )
}

export default DashEmpty