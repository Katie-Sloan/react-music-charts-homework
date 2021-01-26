import React from "react";
import SongItem from "./SongItem";

const SongList = ({songs, loaded}) => {
    
    
    if(!loaded){
        return <p>Loading...</p>
    }

    const SongItems = songs["feed"]["entry"].map((song) => {
        return (
            <SongItem song={song} 
            // key={song["feed"]["entry]["id"]["attributes"]["im:id"]}
            />
        )
    })

    return(
        <>
            <ul>
                {SongItems}
            </ul>
        </>
    )
}

export default SongList;