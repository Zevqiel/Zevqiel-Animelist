import prisma from "@/libs/prisma"
import React from "react"

const CommentBox = async({ anime_mal_id }) => {
    const comments = await prisma.comment.findMany({ where: {anime_mal_id} })
    return(
        <>

            <h2 className="text-sm md:text-xl font-bold">{comments.length} Komentar</h2>
        <div className="grid grid-cols-1 gap-4 p-0 max-h-96 overflow-y-auto">
            
            {comments.map((comment) => {
                return(
                    <div key={comment.id} className="p-2 bg-blue-500 text-slate-200 rounded shadow text-xs md:text-base">
                        <div className="flex gap-2">

                        <p className="font-bold">{comment.username}</p>
                        <p className="">Rating: {comment.rating}/5</p>
                        </div>
                        <p className="">{comment.comment}</p>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default CommentBox