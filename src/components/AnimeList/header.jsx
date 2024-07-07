"use client"
import { ArrowSquareDown } from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

const Header = ({ title, linkTitle, linkHref, link, season }) => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const handleSetLink = (newLink) => {
        link(newLink)
    }

    return (
        <div className="flex justify-between relative">
            <div className="text-slate-200 flex gap-6">
                <h2 className="font-bold md:text-3xl text-sm text-slate-200">{title}</h2>
                {
                    season ? 
                    <div
                    className="flex items-center md:text-base text-xs focus:outline-none transition-all ease-in gap-2"
                >
                    Pilih Season
                    <button className="mobile-menu-button text-slate-200 w-2" onClick={toggleMenu}>
                        <ArrowSquareDown size={24} />
                    </button>
                </div> : null
                }
                
            </div>
            <div className={`flex flex-col ${isOpen ? "" : "hidden"} bg-blue-500 text-slate-200 text-xs md:text-base transition-all ease-in absolute z-10 top-8 box-border`}>
                <div className="hover:bg-slate-200 hover:text-blue-500 transition-all ease-in box-border p-2">
                    <button onClick={() => handleSetLink("seasons/now")}>New Season</button>
                </div>
                <div className="hover:bg-slate-200 hover:text-blue-500 transition-all ease-in box-border p-2">
                    <button onClick={() => handleSetLink("seasons/upcoming")}>Upcoming Season</button>
                </div>
                <div className="hover:bg-slate-200 hover:text-blue-500 transition-all ease-in box-border p-2">
                    <button onClick={() => handleSetLink("seasons/2024/spring")}>Latest Season</button>
                </div>
                <div className="hover:bg-slate-200 hover:text-blue-500 transition-all ease-in box-border p-2">
                    <button onClick={() => handleSetLink("seasons/2024/winter")}>WInter 2024 Season</button>
                </div>
                <div className="hover:bg-slate-200 hover:text-blue-500 transition-all ease-in box-border p-2">
                    <button onClick={() => handleSetLink("seasons/2023/fall")}>Fall 2023 Season</button>
                </div>
            </div>
            {
                linkTitle && linkHref ?
                    <Link href={linkHref} className="md:text-xl text-md underline text-slate-200 hover:text-blue-500 transition-all ease-in">{linkTitle}</Link>
                    : null
            }
        </div>
    )
}

export default Header