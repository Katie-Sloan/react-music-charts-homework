import React, { useState, useEffect } from "react";
import SongList from "../components/SongList";
import SongItem from "../components/SongItem";

const SongContainer = () => {

    const [songs, setSongs] = useState({});
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        getSongs();
    }, [])

    const getSongs = () => {
        console.log("getting songs");
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => setSongs(data))
        .then(() => setLoaded(true))
    }
    
    
    return(
        <>
            <h1>Top 20 Charts</h1>
            <SongList 
                songs={songs} 
                loaded={loaded}
            />
        </>
    )
}

export default SongContainer;