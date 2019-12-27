import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'Silhouette', id: 1},
        {title: 'Busyhead', id: 2},
        {title: 'Havana', id: 3}
    ]);

    const [age, setAge] = useState(20)

    const addSong = (title) => {
        setSongs([...songs, {title, id: uuid() }]);
    }
 
    // run just on songs update
    useEffect(() => {
        console.log('useeffect hook songs ran ', songs)
    }, [songs])

     // run just on songs update
     useEffect(() => {
        console.log('useeffect hook age ran ', age)
    }, [age])

    return ( 
        <div className="songList">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id} >{song.title}</li>)
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={() => setAge(age +1)}>Add 1 to age: {age}</button>
        </div>
    );
}
 
export default SongList;