"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"
import { ArrowLeft } from "@phosphor-icons/react"
import validator from "validator"

const SearchInput = ({ search }) => {

    const searchRef = useRef()
    const router = useRouter()
    const handleSearch = (event) => {
        const keyword = searchRef.current.value
        if(!keyword || keyword.trim() === "" || !validator.isAlphanumeric(keyword)) return;

        if(event.key === "Enter" || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }

    }


    return(
        <div className="relative flex items-center justify-center space-x-1">
          <button className="bg-white p-1 rounded sm:hidden" onClick={search}>
          <ArrowLeft size={24} />
        </button>
        <input
          type="text"
          placeholder="Cari Anime..."
          className="w-full p-2 rounded max-h-8"
          ref={searchRef}
          onKeyDown={handleSearch}
        />
        <button className="absolute right-2" onClick={handleSearch}>
          <MagnifyingGlass size={24} />
        </button>
      </div>
    )
}

export default SearchInput