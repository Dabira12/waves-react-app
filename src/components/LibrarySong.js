import React from 'react';

function LibrarySong({song, setCurrentSong,currentSong,id}){
    console.log(song.id)

    function songSelectHandler(){
        setCurrentSong(song)
        
        console.log(song)
    }
    return(
        
        <div  onClick={songSelectHandler } className={`library-song ${id === currentSong.id ? "selected" : ""} `} >
            <img src={song.cover} alt="" />

            <div className="song-description">
            <h3> {song.name}</h3>
             <h4> {song.artist}</h4>
            </div>
            
        </div>
    )
}

export default LibrarySong;