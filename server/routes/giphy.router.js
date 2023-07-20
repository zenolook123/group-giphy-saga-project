const express = require('express');
const router = express.Router();
const axios = require('axios');
// Route 

router.get('/', (req, res) => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=?${searchQuery}api_key=${process.env.GIPHY_API_KEY}`)
    .then( response => {
        res.send(response.data)
        console.log('response.data is ',response.data)
    }).catch( err => {
        console.log('Error in router.get:', err);
    })
})

module.exports = router;