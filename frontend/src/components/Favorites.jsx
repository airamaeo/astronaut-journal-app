// Reads the favorites array from localStorage
// Displays: Each saved favorite in a card/ grid layout (Including Title, Image, Date)
// Remove from favorites button

import { useState, useEffect } from "react";

export default function Favorites(){
    // React state hooks
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const stored = localStorage.getItem('favorites');

        if(stored){
            try {
                const favorites = JSON.parse(stored);
                setPhotos(favorites);
            } catch (err) {
                setError('Unable to load favorites');
            }
        } else {
            setError('No favorites found');
        }
        setLoading(false);
    },[]);

    return (
        <div className="favorites-container"></div>
    )
}