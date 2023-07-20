const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route 
https://api.giphy.com/v1/gifs/trending?api_key=RoJ4O0Lh2EQOZ6kh6gAlucu5lSMtPJP8
router.get('/', (req, res) => {
    axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}`)
    .then( response => {
        res.send(response.data)
    }).catch( err => {
        console.log('Error in router.get:', err);
    })
})

module.exports = router;