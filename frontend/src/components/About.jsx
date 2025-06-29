import React from 'react';
import StarfieldBackground from '../components/StarfieldBackground';
import '../styles/About.css';

export default function About() {
return (
        <div className="about-page">
        <StarfieldBackground />
        <div className="about-box">
            <h1 className="about-title">About NASA Photo Explorer</h1>
            <p>
            NASA Photo Explorer is a web app that lets you view and save Astronomy Pictures of the Day (APOD)
            from NASA’s public archive. It's a fun way to discover what the universe looked like on the day you were born—or any day since July 1995.
            </p>

            <h2>What is APOD?</h2>
            <p>
            The <a href="https://apod.nasa.gov/apod/" target="_blank" rel="noopener noreferrer" className="about-link">
                Astronomy Picture of the Day (APOD)
            </a> is a daily NASA archive of stunning space images and videos, each curated and explained by professional astronomers.
            </p>

            <h2>Why July 1995?</h2>
            <p>
            The APOD archive begins in June 1995, but consistent daily entries started from July 1, 1995. Any date before that may not return results.
            </p>

            <h2>Features</h2>
            <ul className="about-list">
            <li>Select your date of birth or any date since July 1995</li>
            <li>View NASA's APOD for that day</li>
            <li>Save your favorites to your timeline</li>
            <li>View or clear your saved APODs anytime</li>
            </ul>

            <h2>Credits</h2>
            <p>
            This project uses the <a href="https://api.nasa.gov/" target="_blank" rel="noopener noreferrer" className="about-link">
                NASA APOD API
            </a> and is built with React.
            </p>
        </div>
        </div>
    );
}