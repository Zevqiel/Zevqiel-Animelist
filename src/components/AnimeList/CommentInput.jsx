"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {

    const [comment, setComment] = useState("")
    const [isCreated, setIsCreated] = useState(false)
    const [err, setErr] = useState("")
    const [rating, setRating] = useState(0)

    const router = useRouter()

    const handleComment = (event) => {
        setComment(event.target.value)
        if(event.target.value.length >= 3) {
            setErr("")
        }
    }

    const handleRating = (event) => {
        setRating(event.target.value)
        if(event.target.value < 1 || event.target.value > 5) {
            setErr("Rating Harus Diantara 1 Sampai 5")
        } else {
            setErr("")
        }
    }

    const handleInput = async(event) => {
        event.preventDefault()

        const data = { anime_mal_id, user_email, comment, username, anime_title, rating: parseFloat(rating) }

        if(comment.length <3 ) {
            setErr("Komentar Harus Lebih Dari 3 Huruf")
            return
        }

        const response = await fetch(`/api/v1/comment`, {
            method: "POST",
            body: JSON.stringify(data)
        })

        const postComment = await response.json()
        if(postComment.status === 200) {
            setIsCreated(true)
            setComment("")
            setRating("")
            router.refresh()
        }
        return
    }

    return(
        <div className="flex flex-col gap-2">
            {err && <p className="text-red-500">{err}</p>}
            <div className="flex items-center gap-2">
                <label className="text-slate-200">Rating:</label>
                <input type="number" min="1" max="5" step="0.1" value={rating} onChange={handleRating} className="w-16 text-black p-1 border rounded" />
            </div>
            <textarea className="w-full h-32 p-2 border rounded text-black" value={comment} onChange={handleComment}></textarea>
            <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors" onClick={handleInput}>Kirim</button>
        </div>
    )
}

export default CommentInput