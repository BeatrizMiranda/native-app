import React, { useState } from 'react'
import uuid from 'uuid/v1';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'Silhouette', id: 1},
        {title: 'Busyhead', id: 2},
        {title: 'Havana', id: 3}
    ]);

    const addSong = () => {
        setSongs([...songs, {title: 'new song', id: uuid() }]);
    }

    return ( 
        <div className="songList">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id} >{song.title}</li>)
                })}
            </ul>
            <button className="add" onClick={addSong}>Add song</button>
        </div>
    );
}
 
export default SongList;