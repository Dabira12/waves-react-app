import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

function Nav({libraryStatus,setLibraryStatus}){

    function updateLibraryStatus(){
        setLibraryStatus(!libraryStatus);
    }
    return(  
    <div className="nav">
        <h1> Waves</h1>
        <button onClick={updateLibraryStatus}>
           Library 
           <FontAwesomeIcon icon={faMusic}/>

        </button>
    </div>
    )
}

export default Nav;