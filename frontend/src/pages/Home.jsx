// HOME Page to contain name & DOB input form -> validates userInput
// onSubmit -> Save name & DOB to localStorage
// Redirect to /timeline page
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

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
            <h1>Welcome to Astronaut's Journal</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter your DOB to explore your cosmic timeline:
                    <br />
                    <input
                        type='date'
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                    />
                </label>
                <button type='submit' className='explore-Btn'>Explore timeline</button>
            </form>
        </div>
    )
}