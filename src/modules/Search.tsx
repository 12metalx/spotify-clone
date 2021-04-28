import {useRef,useState} from "react";
import SongList from "./SongList";
interface Song{
    previewURL: string;
    name: string;
    albumName: string;
}
interface Props{
    setCurrentSong: (song:Song) => void;
    addFavorite: (song:Song) => void;
    deleteFavorite: (song:Song) => void;
}

export const Search = ({setCurrentSong,addFavorite,deleteFavorite}:Props) => {
    const queryRef = useRef<HTMLInputElement>(document.createElement("input"))
    const [songs, setSongs] = useState<Song[]>([])
    const search = async (e:React.FormEvent<HTMLFormElement>) => {
		setSongs([]);
        e.preventDefault()
		const queryString:String = queryRef.current.value;
		let baseURL = 'https://api.napster.com';
		let key = 'apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm';
		let query = `query=${queryString}`;
		let url = baseURL + `/v2.2/search/verbose?${key}&${query}`;

		let response = await fetch(url);
		let json = await response.json();
		setSongs(json.search.data.tracks);
        
        
	};


    return (
        <>
        <form onSubmit={search} id="search">
            
            <label>Buscar</label>
            <input type="text" placeholder="Nirvana" ref={queryRef}/>
            <button>Buscar</button>
            
        </form>
        <main id="lsearch">
            <SongList songs={songs} 
            setCurrentSong={setCurrentSong} 
            addFavorite={addFavorite} 
            deleteFavorite={deleteFavorite}
            isFavorites={false}/>
        </main>
        </>
    )
}
export default Search