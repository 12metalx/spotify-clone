import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./modules/Home"
import Menu from "./modules/Menu"
import Search from "./modules/Search"
import { useState } from 'react'
import Reproductor from "./modules/Reproductor"
import Favorites from "./modules/Favorites"


interface Song{
    previewURL: string;
    name: string;
    albumName: string;
}

export const App = () => {
    const [currentSong, setCurrentSong] = useState<Song>({previewURL:'',name:'',albumName:''})
    const [favorites, setFavorites] = useState<Song[]>([])
    const addFavorite = (newSong:Song) =>{
        if(!favorites.includes(newSong)){
            setFavorites([...favorites,newSong])
            console.log("Ok");
            
        }
    }
    const deleteFavorite = (songDel:Song) =>{
        if(favorites.includes(songDel)){
            setFavorites(favorites.filter(song => song.previewURL !== songDel.previewURL))
        }
    }
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