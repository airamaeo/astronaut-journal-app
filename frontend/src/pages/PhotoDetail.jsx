// Reads :year from URL param
// Fetches single APOD from backend /api/nasa/photo/:year
// Displays: Image, Title, Full explanation, Back button
import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import StarfieldBackground from '../components/StarfieldBackground';
import '../styles/PhotoDetail.css';

export default function PhotoDetail() {
    const { year } = useParams(); // Get year from URL
    const location = useLocation();
    const statePhoto = location.state?.photo;
    console.log("Photo from route state:", statePhoto);

    // React state hooks
    const [photo, setPhoto] = useState(statePhoto || null);
    const [loading, setLoading] = useState(!statePhoto);
    const [error, setError] = useState('');
    const [saved, setSaved] = useState(false);

    // Navigation hook for back button
    const navigate = useNavigate();

    // Get DOB from localStorage
    const dob = localStorage.getItem('dob');

    // Backend URL from environment variable
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        if (!statePhoto) {
            axios.get(`${backendUrl}/api/nasa/photo/${year}?dob=${dob}`)
                .then((res) => {
                    setPhoto(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError('Unable to load image details');
                    setLoading(false);
                });
        }
    }, [year, dob, statePhoto, backendUrl]);

    console.log("Inside useEffect. statePhoto is:", statePhoto);

    // Handle save to favorites
    const handleSaveToFavorites = () => {
        if (!photo) return;

        const existing = JSON.parse(localStorage.getItem('favorites')) || [];
        const alreadySaved = existing.some(item => item.date === photo.date);
        if (alreadySaved) {
            setSaved(true);
            return;
        }

        const updated = [...existing, photo];
        localStorage.setItem('favorites', JSON.stringify(updated));
        setSaved(true);
    }

    // Handle loading & error states
    if (loading) return <h4>Loading photo...</h4>;
    if (error) return <h4>{error}</h4>;

    return (
        <div className="photodetail-container">
            <StarfieldBackground />
            <div className="info-container">
                <h2>{photo.title}</h2>
                <p>{photo.date}</p>
                <img src={photo.image} alt={photo.title} className="photo-full-info" />
                <p>{photo.description}</p>
                <button onClick={handleSaveToFavorites} className="favorites-btn" disabled={saved}>
                    {saved ? "Saved to favorites" : "Save to favorites"}
                </button>
            </div>

            <div className="navF-buttons">
                <button onClick={() => navigate('/favorites')} className="viewFavesP-btn">
                    View Favorites
                </button>
                <button onClick={() => navigate('/timeline')} className="backP-btn">
                    Back to timeline
                </button>
            </div>
        </div>
    )
}