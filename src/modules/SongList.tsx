import { Song } from "./Song"

interface Song{
    previewURL: string;
    name: string;
    albumName: string;
}
interface Props{
    songs: Song[];
    setCurrentSong: (song:Song) => void;
}
export const SongList = ({songs,setCurrentSong}:Props) => {
    return (
        <>
            {songs.map((song:Song)=>{
                return(
                    <Song song={song} setCurrentSong={setCurrentSong}/>
                )
            })}
        </>
    )
}
export default SongList