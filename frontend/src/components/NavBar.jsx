// Displays the navigation bar with app name & logo (Addtional - connect to github)
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

export default function NavBar () {
    return (
        <nav className="navbar">
            <div className="navbar-logo"> 🚀 NASA Photo Explorer</div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/timeline">Timeline</Link>
                <Link to="/favorites">Favorites</Link>
                <a 
                    href="https://github.com/airamaeo/astronaut-journal-app"
                    target="_blank"
                >
                    GitHub
                </a>
            </div>
        </nav>
    )
}