// Reusable card for each APOD entry
// Props: title, year, thumbnail, onClick
// On click -> navigates to the photo + year
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/TimelineCard.css';

export default function TimelineCard({year, dob}) {
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
            axios.get(`http://localhost:5000/api/nasa/photo/${year}?dob=${dob}`)
            .then((res) => {
                setPhoto(res.data);
                setLoading(false);
            })
            .catch((err) => {
                setError('Unable to load image');
                setLoading(false);
            });
    }, [year, dob]);

    return (
        <Link to={`/photo/${year}`} className='timeline-card'>
            <div className='card-content'>
                {loading && <p>loading...</p>}  {/* Show loading state */}
                {error && <p>{error}</p>}         {/* Show if error */}
                {!loading && photo && (         /* Show image & year */
                    <>
                        <img src={photo.image} alt={photo.title} className='timeline-thumbnail' />
                        <h4>{year}</h4>
                    </>
                )}
            </div>
        </Link>
    );
};