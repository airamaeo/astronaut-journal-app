// HOME Page to contain name & DOB input form -> validates userInput
// onSubmit -> Save name & DOB to localStorage
// Redirect to /timeline page

export default function Home() {
    return(
        <div className="home-container">
            <h1>Welcome to Astronaut's Journal</h1>
            <form>
                <label>Enter your DOB to explore your cosmic timeline:
                    <br />
                    <input type="date" />
                </label>
            </form>
        </div>
    )
}