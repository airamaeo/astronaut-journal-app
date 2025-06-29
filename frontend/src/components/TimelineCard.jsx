// Reusable card for each APOD entry
// Props: title, year, thumbnail, onClick
// On click -> navigates to the photo + year
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/TimelineCard.css';

export default function TimelineCard({ year, dob }) {
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        setLoading(true);
        axios.get(`${backendUrl}/api/nasa/photo/${year}?dob=${dob}`)
            .then((res) => {
                setPhoto(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Unable to load image');
                setLoading(false);
            });
    }, [year, dob, backendUrl]);

    return (
        <div className="timeline-card">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {!loading && photo && (
                <>
                    <img src={photo.image} alt={photo.title} className="timeline-thumbnail" />
                    <h3>{year}</h3>
                    <Link to={`/photo/${year}`} className="view-link">
                        View APOD
                    </Link>
                </>
            )}
        </div>
    );
};