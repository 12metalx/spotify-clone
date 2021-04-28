import { Link, Route, Router, Switch } from "react-router-dom"


export const Menu = () => {
    return (
        <nav id="menu">
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/favorites">Favorites</Link>
        </nav>  
    )
}

export default Menu