// Fetches data from backend /api/nasa/timeline?dob=YYYY-MM-DD
// Displays series of timelineCards & handles loading & error states
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TimelineCard from '../components/TimelineCard';

export default function Timeline() {
    const [timeline, setTimeline] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate(); 
    const dob = localStorage.getItem('dob');

    useEffect(() => {
        if(!dob){
            setError('DOB not found. Please set your date of birth.');
            setLoading(false);
            return;
        }

        axios.get(`http://localhost:5000/api/nasa/timeline?dob=${dob}`)
            .then((res) => {
                setTimeline(res.data.timeline);
                setLoading(false);
            })
            .catch((error) => {
                setError('Unable to load timeline');
                setLoading(false);
            });
    }, []);

    if(loading) return <h4>Loading timeline...</h4>;
    if(error) return <h4>{error}</h4>;

    return (
        <div className='timeline-grid'>
            {timeline.map((year) => (
                <TimelineCard key={year} year={year} dob={dob} />
            ))}
            
            <button onClick={() => navigate('/')} className="back-btn">
                Back to home
            </button>
            <button onClick={() => navigate('/favorites')}>
                    View Favorites
            </button>
        </div>
    );
}  