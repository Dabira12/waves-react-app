import React, {useState, useRef} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPlay, faAngleLeft, faAngleRight,faPause} from '@fortawesome/free-solid-svg-icons';
import {v4 as uuidv4} from "uuid";
import { duration } from '@material-ui/core';




function Player ({currentSong,isPlaying,setIsPlaying,songs,setCurrentSong}){
    let songsLength = songs.length;
    //State
    const [songInfo, setSongInfo] = useState({currentTime:0,duration:0,})

//ref
    const audioRef = useRef(null);

    

    // event handler
    function timeUpdateHandler(e){
        const current = e.target.currentTime;
        const duration = e.target.duration || 0;
        setSongInfo({...songInfo,currentTime:current, duration: duration});
    };
    function dragHandler(e){
        audioRef.current.currentTime =e.target.value;
        setSongInfo({...songInfo,currentTime:e.target.value});
    }

    function skipTrackHandler(direction){
        let currentIndex = songs.findIndex((song)=>song.id ===currentSong.id);
        
        if(direction==='skip-forward'){
            if(currentIndex===songsLength-1){
                setCurrentSong(songs[0]);
            }
            else{
                 setCurrentSong(songs[currentIndex+1]);
            }

           
        }

         if(direction==='skip-back'){
             if(currentIndex===0){
                 setCurrentSong(songs[songsLength-1]);

             }
             else{
                setCurrentSong(songs[currentIndex-1]);
             }
            
        }
       

    }

    function autoPlayHandler(){
        if(isPlaying){
            audioRef.current.play()
        }
    }



    function currentSongPlayer(){
        

        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }
        else{
            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    }

    function iconSwitcher(){
        if(isPlaying){
            return faPause
        }
        else{
            return faPlay
        }
    }

   
    return(
        <div className="Player">
            <div className="time-control">
                <p>{ getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration} value={songInfo.currentTime} type="range" onChange={dragHandler}/>
                <p> {getTime(songInfo.duration)}</p>
                
        
            </div>
            <div className="play-control"> 
                <FontAwesomeIcon onClick={()=> skipTrackHandler('skip-back')}className="skip-back" icon = {faAngleLeft} size='2x'/>
                <FontAwesomeIcon className="play" icon = { iconSwitcher()} size='2x' onClick={currentSongPlayer}/>
                <FontAwesomeIcon onClick={()=> skipTrackHandler('skip-forward')}className="skip-forward" icon = {faAngleRight} size='2x'/>
            </div>
            
            <audio 
                onTimeUpdate= {timeUpdateHandler} 
                ref = {audioRef} 
                src={currentSong.audio}
                onLoadedMetadata={timeUpdateHandler}
                onLoadedData={autoPlayHandler}

            ></audio> 
            
        </div>

    
    )
}


function getTime (time){
        return (
            Math.floor(time/60) + ":"  + ("0" + Math.floor(time%60)).slice(-2)
        );
    }


export default Player;

 