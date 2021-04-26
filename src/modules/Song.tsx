
interface Song{
    previewURL: string;
    name: string;
    albumName: string;
}
interface Props{
    song: Song;
    setCurrentSong: (song:Song) => void;
}

export const Song = ({song,setCurrentSong}:Props) => {
   const handleClick = () =>{
        setCurrentSong(song)
   }
    return (
        <section>
            <h3>{song.name}</h3>
            <h3>{song.albumName}</h3>
            <button onClick={handleClick}>Play</button>
        </section>

    )
}
export default Song
