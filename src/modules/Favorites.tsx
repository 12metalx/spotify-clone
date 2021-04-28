import React from 'react'
import SongList from './SongList'
interface Song{
    previewURL: string;
    name: string;
    albumName: string;
}
interface Props{
    favorites:Song[];
    deleteFavorite: (song:Song) => void;
    setCurrentSong: (song:Song) => void;
    addFavorite: (song:Song) => void;
}
const Favorites = ({favorites,deleteFavorite,setCurrentSong,addFavorite}:Props) => {
    return (
        <main id="favorites">
             <SongList songs={favorites} 
             setCurrentSong={setCurrentSong} 
             addFavorite={addFavorite} 
             deleteFavorite={deleteFavorite}
             isFavorites={true}/>
        </main>
    )
}

export default Favorites
