const axios = require('axios');


const getTimeline = async (req, res) => {
    try {
      const { dob } = req.query;

      res.json({ message: `Timeline route hit! DOB: ${dob}` });
    } catch (error) {
      res.status(500).json({ error: 'Server error in getTimeline' });
    }
};

const getPhotoByYear = async (req, res) => {
    try {
      const { year } = req.params;
      const { dob } = req.query;
  
      res.json({ message: `Photo detail route hit! Year: ${year}, DOB: ${dob}` });
    } catch (error) {
      res.status(500).json({ error: 'Server error in getPhotoByYear' });
    }
  };

module.exports = { getTimeline, getPhotoByYear };
