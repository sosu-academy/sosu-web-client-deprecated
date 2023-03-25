const express = require('express');
const router = express.Router();

const PAGE_PREFIX = 'error/'

/**
 * /view/error/401
 */
router.get("/401", (req, res) => {
    res.render(PAGE_PREFIX + '401');
    res.end();
})

/**
 * /view/error/404
 */
router.get("/404",(req,res) => {
    res.render(PAGE_PREFIX + '404');
    res.end();
})

/**
 * /view/error/500
 */
router.get("/500",(req,res) => {
    res.render(PAGE_PREFIX + '500');
    res.end();
})

module.exports = router