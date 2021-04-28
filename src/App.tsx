import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./modules/Home"
import Menu from "./modules/Menu"
import Search from "./modules/Search"
import { useEffect, useState } from 'react'
import Reproductor from "./modules/Reproductor"
import Favorites from "./modules/Favorites"


interface Song{
    previewURL: string;
    name: string;
    albumName: string;
}



export const App = () => {
    const jsonFavorites = JSON.parse(localStorage.getItem('favoritos') || '{}')
const jsonCurrent = JSON.parse(localStorage.getItem('current') || '{}')
    const [currentSong, setCurrentSong] = useState<Song>(jsonCurrent)
    const [favorites, setFavorites] = useState<Song[]>(jsonFavorites)
    const addFavorite = async(newSong:Song) =>{
        const isEmpty = favorites.length ? false: true
        if(isEmpty){
                setFavorites([newSong])
        } else{
            const prevState = favorites.filter(song => song.previewURL !== newSong.previewURL) 
            setFavorites([...prevState,newSong])
            
        }
    }
    const deleteFavorite = (songDel:Song) =>{
        
            setFavorites(favorites.filter(song => song.previewURL !== songDel.previewURL))
        
    }
    useEffect(
		() => {
			localStorage.setItem('favoritos', JSON.stringify(favorites));
		},
		[ favorites ]
	);
    useEffect(
		() => {
			localStorage.setItem('current', JSON.stringify(currentSong));
		},
		[ currentSong ]
	);
   
    return (
        <Router>
            <Menu/>
            
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/search">
                    <Search setCurrentSong={setCurrentSong}
                     addFavorite={addFavorite}
                      deleteFavorite={deleteFavorite}/>
                    
                </Route>
                <Route path="/favorites">
                    <Favorites favorites={favorites} 
                    addFavorite={addFavorite} 
                    deleteFavorite={deleteFavorite} 
                    setCurrentSong={setCurrentSong}/>
                    
                </Route>
            </Switch>
            <Reproductor song={currentSong} />
        </Router>
    )
}

export default App