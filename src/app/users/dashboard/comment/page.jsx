import Header from "@/components/AnimeList/header"
import Hero from "@/components/CarouselHeroSection/hero"
import DashEmpty from "@/components/Utilities/dashEmpty"
import { authUserSession } from "@/libs/authLibs"
import prisma from "@/libs/prisma"
import Link from "next/link"
import React from "react"

const Page = async () => {
    const user = await authUserSession()
    const comments = await prisma.comment.findMany({ where: { user_email: user.email } })

    return (
        <>
            <Hero />
            {
                comments.length > 0 ? (
                    <section className="py-6 md:py-10 animate__animated animate__fadeInUp px-8 space-y-3 bg-gray-900">

                        <Header title={`My Comment`} />
                        <div className="grid grid-cols-1 px-4 py-8 gap-4">
                            {comments.map((comment) => {
                                return (
                                    <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id} className="bg-blue-500 text-slate-200 p-4">
                                        <p className="text-sm">{comment.anime_title}</p>
                                        <p className="italic">{comment.comment}</p>
                                    </Link>
                                )
                            })}
                        </div>
                    </section>
                ) : <DashEmpty title={`Komentar`} />
            }

        </>
    )
}

export default Page