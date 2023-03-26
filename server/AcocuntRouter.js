const express = require('express');
const router = express.Router();

const PAGE_PREFIX = 'account/'

/**
 * /view/account/login
 */
router.get("/login", (req, res) => {
    res.render(PAGE_PREFIX + 'login');
    res.end();
})

/**
 * /view/account/sign-up
 */
// router.get("/sign-up",(req,res) => {
//     res.render(PAGE_PREFIX + 'register');
//     res.end();
// })

/**
 * /view/account/reset-password
 */
router.get("/reset-password",(req,res) => {
    res.render(PAGE_PREFIX + 'forgot-password');
    res.end();
})

module.exports = router