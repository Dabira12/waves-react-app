import React from 'react';

function Song({currentSong}){
    return(
        <div className="song-container">
            <img src={currentSong.cover} alt="" />
            <h1>{currentSong.name}</h1>
             <h1> {currentSong.artist}</h1>
        </div>
    )
}

export default Song;