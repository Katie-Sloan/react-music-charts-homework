import React from "react";

const SongItem = ({song, ChartPosition}) => {

    // if(!loaded){
    //     return <p>Loading...</p>
    // }

    return(
        <>
            ChartPosition: {ChartPosition}
            Title: {song["title"]["label"]}
            Artist: {song["im:artist"]["label"]}
            {/* {song["category"]["attributes"]["im:id"]} */}
            {/* {song["im:name"]["label"]} */}
        </>
        
    )
}

export default SongItem