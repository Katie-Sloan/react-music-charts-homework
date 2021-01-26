import React from "react";
import SongItem from "./SongItem";

const SongList = ({songs, loaded}) => {
    
    
    if(!loaded){
        return <p>Loading...</p>
    }

    const getIndexPosition = (song) => songs["feed"]["entry"].indexOf(song);

    const SongItems = songs["feed"]["entry"].map((song) => { 
        const ChartPosition = getIndexPosition(song) + 1;
        return (
            <SongItem song={song} 
            key={getIndexPosition(song)}
            ChartPosition={ChartPosition}
            />
        )
    })   

    return(
        <>
            <ul>
                {SongItems}
                {/* song={song}
                loaded={loaded} */}
            </ul>
        </>
    )
}

export default SongList;