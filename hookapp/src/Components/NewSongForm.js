import React, { useState } from 'react'

const NewSongForm = ({addSong}) => {
    const [newSong, setNewSong] = useState('');
    const handdleSubmit = (e) => {
        e.preventDefault();
        addSong(newSong);
        setNewSong('');
    }
    return ( 
        <form onSubmit={handdleSubmit}>
            <label>Song name: </label>
            <input type="text" value={newSong} required onChange={(e) => setNewSong(e.target.value)} />      
            <input type="submit" value="add Song "/>  
        </form>
    );
}
 
export default NewSongForm;