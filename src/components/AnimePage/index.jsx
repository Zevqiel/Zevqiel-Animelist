"use client"

import AnimeList from "@/components/AnimeList"
import Header from "@/components/AnimeList/header"
import Hero from "@/components/CarouselHeroSection/hero"
import Footer from "@/components/Footer"
import Pagination from "@/components/Utilities/pagination"
import { getAnimeResponse } from "@/libs/apiLibs"
import { useEffect, useState } from "react"

const AnimePage = ({ title, linkHref }) => {

    const [page, setPage] = useState(1)
    const [animePage, setAnimePage] = useState([])
    const [linkPage, setLinkPage] = useState(linkHref)

    const fetchData = async () => {
        const animePage = await getAnimeResponse(linkPage, `page=${page}`)
        setAnimePage(animePage)
    }

    useEffect(() => {
        fetchData()
    }, [page, linkPage])

    return (
        <section className="py-6 md:py-10 animate__animated animate__fadeInUp px-8 space-y-3 bg-gray-900">
            <Header title={`${title} #${page}`} link={setLinkPage} />
            <AnimeList api={animePage} />
            <Pagination setPage={setPage} lastPage={animePage.pagination?.last_visible_page} dataPage={page} />
        </section>
    )
}

export default AnimePage