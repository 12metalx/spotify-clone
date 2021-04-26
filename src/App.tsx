import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import Home from "./modules/Home"
import Menu from "./modules/Menu"
import Search from "./modules/Search"
import { useState } from 'react'
import Reproductor from "./modules/Reproductor"


interface Song{
    previewURL: string;
    name: string;
    albumName: string;
}

export const App = () => {
    const [currentSong, setCurrentSong] = useState<Song>({previewURL:'',name:'',albumName:''})
    return (
        <Router>
            <Menu/>
            <Reproductor song={currentSong} />
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/search">
                    <Search setCurrentSong={setCurrentSong}/>
                    
                </Route>
            </Switch>
            
        </Router>
    )
}

export default App