import React from "react";

const SongItem = ({song, ChartPosition}) => {

    return(
        <>
            <h3 id="chart-position">Chart Position: {ChartPosition}</h3>
            <p id="title"><b>Title:</b> {song["title"]["label"]}</p>
            <p id="artist"><b>Artist:</b> {song["im:artist"]["label"]}</p>
        </>  
    )
}

export default SongItem;