
import ReactDOM from 'react-dom'; 
import './styles/app.scss';
import Player from './components/Player';
import Song from './components/Song';
import Button from '@material-ui/core/Button';
import {songData} from './data';
import React, { useEffect, useState,useRef } from "react";
import Library from "./components/Library"
import Nav from "./components/nav"


function App() {
  const [songs, setSongs] = useState(songData());
  const[currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus,setLibraryStatus] = useState(false);

  

  return (

    
    
    <div className="App">
      <Nav libraryStatus = {libraryStatus} setLibraryStatus= {setLibraryStatus}/>
      
      <Song currentSong={currentSong} setCurrentSong={setCurrentSong} />
      <Player 
        currentSong = {currentSong} 
        isPlaying= {isPlaying} 
        setIsPlaying= {setIsPlaying}
        songs = {songs}
        setCurrentSong= {setCurrentSong}
        />

        <Library songs={songs} setCurrentSong={setCurrentSong} currentSong={currentSong} libraryStatus={libraryStatus}/>
    </div>
  )
}

export default App;
