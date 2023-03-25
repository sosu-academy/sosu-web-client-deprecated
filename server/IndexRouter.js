const express = require('express');
const router = express.Router();

/**
 * /view/index
 */
router.get("/", (req, res) => {
    res.render('index');
    res.end();
})

router.get("/test",(req,res) => {
    res.render('/views/index.html');
    res.end();
})

module.exports = router