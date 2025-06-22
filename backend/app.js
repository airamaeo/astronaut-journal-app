const express = require('express'); // Loads express framework to handle HTTP requests
const cors = require('cors'); // CORS (Cross-Origin Resource Sharing) support for frontend & backend communication
const dotenv = require('dotenv'); // Loads environment variables from .env file (required to use NASA API Key securely)
const nasaRoutes = require('./routes/nasaRoutes'); // Loads all routes(URLs) in nasaRoutes

dotenv.config(); // Makes variables in .env available

const app = express(); // Creates express app

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/nasa', nasaRoutes);

// Root route
app.get('/', (req, res) => {
    res.send('Astronaut Journal API is running...');
  });

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});