"use client"

import { BookmarkSimple } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const CollectionButton = ({ anime_mal_id, user_email, image_url, Title, Year, col, id }) => {

    const [isCreated, setIsCreated] = useState(false)
    
    const router = useRouter()

    const handleCollection = async (event) => {
        event.preventDefault()

        const data = { anime_mal_id, user_email, image_url, Title, Year }

        const response = await fetch("/api/v1/collection" , {
            method: "POST",
            body: JSON.stringify(data)
        })
        const collection = await response.json()
        if(collection.status === 200) {
            setIsCreated(true)
            router.refresh()
        }
        return
    }

    const handleDelCollection = async (event) => {
        event.preventDefault()

        const data = { id }

        const response = await fetch("/api/v1/collection" , {
            method: "DELETE",
            body: JSON.stringify(data)
        })
        const delCollection = await response.json()
        if(delCollection.status === 200) {
            setIsCreated(false)
            router.refresh()
        }
        return
    }

    return (
        <>
        <div className="p-0 flex justify-center md:justify-start items-center">
            {
                col || isCreated ?
                <button onClick={handleDelCollection} className="p-0 text-blue-500">
                    <BookmarkSimple size={32}/>
                </button>
                :
                <button onClick={handleCollection} className="p-0 text-slate-200">
                    <BookmarkSimple size={32}/>
                </button>
            }
        </div>

        </>
    )
}

export default CollectionButton