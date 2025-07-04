// HOME Page to contain name & DOB input form -> validates userInput
// onSubmit -> Save name & DOB to localStorage
// Redirect to /timeline page
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
    const [dob, setDob] = useState('');
    const navigate = useNavigate(); // Navigate/ change pages without <Link/> component

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents default form submission

        if(!dob){
            alert('Please enter your date of birth');
            return; 
        }

        localStorage.setItem('dob', dob); // Saves DOB
        navigate('/timeline'); // Redirect to Timeline page
    }
    return(
        <div className="home-container">
            <h1>Welcome to the Astronaut's Journal</h1>
            <form onSubmit={handleSubmit}>
                <label><strong>Enter your DOB to explore your cosmic timeline:</strong>
                    <br />
                    <br />
                    <input
                        type='date'
                        value={dob}
                        min='1995-07-01' // Limit the DOB range according to NASA APOD start date
                        max={new Date().toISOString().split('T')[0]}
                        onChange={(e) => setDob(e.target.value)}
                        required
                    />
                </label>
                <button type='submit' className='explore-Btn'>Explore timeline</button>
            </form>
        </div>
    )
}