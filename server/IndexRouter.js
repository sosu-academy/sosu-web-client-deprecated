const express = require('express');
const router = express.Router();

/**
 * /
 */
router.get("/", (req, res) => {
    res.render('index');
    res.end();
})

// [s] 임시 페이지
/**
 * /tables
 */
router.get('/tables',(req,res) => {
    res.render('tables')
})
// [e] 임시 페이지

module.exports = router