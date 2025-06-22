const express = require('express');
const router = express.Router();
const { getTimeline, getPhotoByYear } = require('../controllers/nasaController');

// GET /api/nasa/timeline?dob=YYYY-MM-DD
router.get('/timeline', getTimeline);

// GET /api/nasa/photo/:year?dob=YYYY-MM-DD
router.get('/photo/:year', getPhotoByYear);

module.exports = router;