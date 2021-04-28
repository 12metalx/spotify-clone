import SongCard from "./SongCard"


interface Song{
    previewURL: string;
    name: string;
    albumName: string;
}
interface Props{
    songs: Song[];
    setCurrentSong: (song:Song) => void;
    addFavorite: (song:Song) => void;
    deleteFavorite: (song:Song) => void;
    isFavorites: boolean;
}
export const SongList = ({songs,setCurrentSong,addFavorite,deleteFavorite,isFavorites}:Props) => {
    
    return (
        <>
            {songs.length ? songs.map((song:Song)=>{
                return(
                    <SongCard key={song.previewURL}
                    song={song} 
                    setCurrentSong={setCurrentSong} 
                    addFavorite={addFavorite} 
                    deleteFavorite={deleteFavorite}
                    isFavorites={isFavorites}/>
                    
                )
            }) : <p></p>}
            
        </>
    )
}
export default SongList