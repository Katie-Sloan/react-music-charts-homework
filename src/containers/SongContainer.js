import React, { useState, useEffect } from "react";
import SongList from "../components/SongList";
import "./SongContainer.css"

const SongContainer = () => {

    const [songs, setSongs] = useState({});
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = () => {
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => setSongs(data))
        .then(() => setLoaded(true))
    }
      
    return(
        <>
            <h1 id="heading">UK Top 20 Song Chart</h1>
            <SongList 
                songs={songs} 
                loaded={loaded}
            />
        </>
    )
}

export default SongContainer;