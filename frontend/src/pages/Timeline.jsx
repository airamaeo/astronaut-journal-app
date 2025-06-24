// Fetches data from backend /api/nasa/timeline?dob=YYYY-MM-DD
// Displays series of timelineCards & handles loading & error states
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Timeline() {
    const [timeline, setTimeline] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const dob = localStorage.getItem('dob');
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
        <div>
            <h2>This is the Timeline page</h2>
            <ul> 
                {timeline.map((year) => (
                    <li key={year}>{year}</li> // Display each year inside a list
                ))}
            </ul>
        </div>
    );
}  