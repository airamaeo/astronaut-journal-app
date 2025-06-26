// Reads :year from URL param
// Fetches single APOD from backend /api/nasa/photo/:year
// Displays: Image, Title, Full explanation, Back button
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

export default function PhotoDetail() {
    const {year} = useParams(); // Get year from URL

    // React state hooks
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [saved, setSaved] = useState(false);

    // Navigation hook for back button
    const navigate = useNavigate();

    // Get DOB from localStorage
    const dob = localStorage.getItem('dob');

    useEffect(() => {
        axios.get(`http://localhost:5000/api/nasa/photo/${year}?dob=${dob}`)
            .then((res) => {
                setPhoto(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Unable to load image details');
                setLoading(false);
            });
    }, [year, dob]);

    // Handle save to favorites
    const handleSaveToFavorites = () => {
        if (!photo) return <h4>{error}</h4>;

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

    // Handle loading & error
    if (loading) return <h4>Loading photo...</h4>;
    if (error) return <h4>{error}</h4>;

    return (
        <div className="photodetail-container">
            <button onClick={() => navigate('/timeline')} className="back-btn">
                Back to timeline
            </button>
            <div className="info-container">
                <h2>{photo.title}</h2>
                <p>{photo.date}</p>
                <img src={photo.image} alt={photo.title} className="photo-full-info"/>
                <p>{photo.description}</p>
                <button onClick={handleSaveToFavorites} className="favorite-btn" disabled={saved}>
                    {saved ? "Save to favorites" : "Save to favorites"}
                </button>
            </div>
        </div>
    )
}