"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {

    const [isOpen, setIsOpen] = useState(true)

    const handlePlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
        return(
            <div className="fixed bottom-2 right-2">
                <button 
                onClick={handlePlayer}
                className="text-slate-200 float-right bg-blue-500 px-3 mb-1 text-2xl transition-all hover:text-gray-900 shadow-sm ease-in">
                    X
                </button>

                <YouTube 
                videoId={youtubeId}
                onReady={(event) => event.target.pauseVideo()}
                opts={option}
                onError={() => alert("Video Goblok Rusak Anying")}
                />
            </div>
        )
    }

    const ButtonOpenPlayer = () => {
        return(
            <button onClick={handlePlayer}
            className="rounded fixed bottom-5 px-2 py-1 right-5 bg-gray-900 text-slate-200 text-xl hover:text-blue-500 transition-all ease-in">
                Tonton Trailer
            </button>
        )
    }
    
    return isOpen ? <Player/> : <ButtonOpenPlayer/>

}

export default VideoPlayer