// Reads the favorites array from localStorage
// Displays: Each saved favorite in a card/ grid layout (Including Title, Image, Date)
// Remove from favorites button
import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Favorites.css';
import StarfieldBackground from '../components/StarfieldBackground';

export default function Favorites() {
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [feedbackMsg, setFeedbackMsg] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const stored = localStorage.getItem('favorites');

        if (stored) {
            try {
                const favorites = JSON.parse(stored);
                favorites.sort((a, b) => new Date(b.date) - new Date(a.date));
                setPhotos(favorites);
            } catch (err) {
                setError('Unable to load favorites');
            }
        } else {
            setError('No favorites found');
        }
        setLoading(false);
    }, []);

    const handleRemove = (dateToRemove) => {
        const updated = photos.filter(p => p.date !== dateToRemove);
        setPhotos(updated);
        localStorage.setItem('favorites', JSON.stringify(updated));
        setFeedbackMsg('Removed from favorites');
        setTimeout(() => setFeedbackMsg(''), 2000);
    };

    const handleClearAllFavorites = () => {
        localStorage.removeItem('favorites');
        setPhotos([]);
        setFeedbackMsg("Removed from favorites");
        setTimeout(() => setFeedbackMsg(""), 2000);
    }

    if (loading) return <h4>Loading favorites...</h4>;
    if (error) return <h4>{error}</h4>;

    return (
        <div className="favorites-container">
            <StarfieldBackground />
            <h2>Your Favorites:</h2>

            {photos.length === 0 ? (
                <p>No favorite photos saved</p>
            ) : (
                <>
                    <div className="photos-grid">
                        {photos.map(photo => (
                            <div key={photo.date} className="photos-card">
                                <Link
                                    to={`/photo/${photo.date.slice(0, 4)}`}
                                    state={{ photo }}
                                    className="photo-link"
                                >
                                    <h3>{photo.title}</h3>
                                    <p>{photo.date}</p>
                                    <img
                                        src={photo.image}
                                        alt={photo.title}
                                        className="photo-thumb"
                                    />
                                </Link>

                                <button
                                    onClick={() => handleRemove(photo.date)}
                                    className="remove-btn"
                                >
                                    Remove from favorites
                                </button>
                            </div>
                        ))}
                    </div>
                </>
            )}

            <button
                onClick={handleClearAllFavorites}
                className="clear-btn"
            >
                Clear all favorites
            </button>

            <button onClick={() => navigate('/')} className="backF-btn">
                Back to home
            </button>

            {feedbackMsg && <p className="feedback-msg">{feedbackMsg}</p>}
        </div>
    )
}