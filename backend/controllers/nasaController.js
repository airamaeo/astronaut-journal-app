const axios = require('axios');


const getTimeline = async (req, res) => {
    try {
      const { dob } = req.query;

      res.json({ message: `Timeline route hit! DOB: ${dob}` });
    } catch (error) {
      res.status(500).json({ error: 'Server error in getTimeline' });
    }
};

// GET method - /api/nasa/photo/:year?dob=YYYY-MM-DD
const getPhotoByYear = async (req, res) => {
    try {
      const { year } = req.params;
      const dob = req.query.dob?.trim();
      console.log('Clean DOB: ', dob);

      // If DOB is not provided in the URL - send error message
      if(!dob){
        return res.status(400).json({error: 'DOB is required'});
      }

      // Take only MM-DD of DOB
      const monthDay = dob.slice(5);

      // Combine with year the user clicked on
      const photoDate = `${year}-${monthDay}`;

      // MAke the request to NASA APOD with date
      const response = await axios.get('https://api.nasa.gov/planetary/apod', {
        params: {
          date: photoDate,
          api_key: process.env.NASA_API_KEY,
        },
      });

      // Deconstructure important info from API response
      const {title, url, explanation, date} = response.data;

      // Send info back to frontend (or Postman for testing)
      res.json({
        title,        // Photo title
        image: url,   // Image URL
        description: explanation, // Photo description
        date,         // Actual date
      });

    } catch (error) {
      // If error, print the error and send error response
      console.error('Error in fetching NASA photo: ', error.response?.data || error.message);
      res.status(500).json({ error: 'Failed to fetch photo from NASA API' });
    }
  };

module.exports = { getTimeline, getPhotoByYear };
