import React from 'react';
import LibrarySong from './LibrarySong'

function Library({songs,setCurrentSong,currentSong,libraryStatus}){

    function libraryAnimator(){
        if(libraryStatus===true){
            return ("active-library");
        }
        else{
            return("");
        }
    }
    return(
        <div className= {`library ${libraryStatus ?'active-library':''}`}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => <LibrarySong 
                song={song} 
                setCurrentSong= {setCurrentSong} 
                currentSong={currentSong}
                songs={songs} 
                id={song.id} 
                key={song.id}/>)}
                 
            </div>
        </div>
    )
}

export default Library;


