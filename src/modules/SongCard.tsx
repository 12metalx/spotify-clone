
interface Song{
    previewURL: string;
    name: string;
    albumName: string;
}
interface Props{
    song: Song;
    setCurrentSong: (song:Song) => void;
    addFavorite: (song:Song) => void;
    deleteFavorite: (song:Song) => void;
    isFavorites: boolean;
}

const SongCard = ({song,setCurrentSong,addFavorite,deleteFavorite,isFavorites}:Props) => {
   const handlePlay = () =>{
        setCurrentSong(song)
   }
   const handleAdd = () => {
        addFavorite(song)
   }
   const handleDelete = () => {
       deleteFavorite(song)
   }
    return (
        <section>
            <h3>{song.name} - {song.albumName}</h3>
            <button onClick={handlePlay}>Play</button>
            {isFavorites ? <button onClick={handleDelete}>Delete</button> : <button onClick={handleAdd}>Add to Favorites</button>}
            
        </section>

    )
}
export default SongCard
