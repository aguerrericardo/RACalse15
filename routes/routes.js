const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send("Hello World de nuevo!!");
})

module.exports = router;