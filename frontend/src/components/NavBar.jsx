// Displays the navigation bar with app name & logo (Addtional - connect to github)
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';

export default function NavBar () {
    return (
        <nav className="navbar">
            <div className="navbar-logo"> 🚀 Astronaut's APOD</div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/timeline">Timeline</Link>
                <Link to="/favorites">Favorites</Link>
                <a 
                    href="https://airamaeo.github.io/astronaut-journal-app/"
                    target="_blank"
                >
                    GitHub
                </a>
            </div>
        </nav>
    )
}