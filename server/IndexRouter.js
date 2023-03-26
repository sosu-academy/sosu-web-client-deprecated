const express = require('express');
const router = express.Router();

/**
 * /
 */
router.get("/", (req, res) => {
    res.render('index');
    res.end();
})

/**
 * /main
 */
router.get("/main", (req, res) => {
    res.render('index');
    res.end();
})

// [s] 임시 페이지
/**
 * /tables
 */
router.get('/tables',(req,res) => {
    res.render("etc/tables")
})

router.get("/buttons",(req,res) => {
    res.render("etc/buttons")
})

router.get("/cards",(req,res) => {
    res.render("etc/cards")
})

router.get("/charts",(req,res) => {
    res.render("etc/charts")
})

router.get("/utilities-animation",(req,res) => {
    res.render("etc/utilities-animation")
})

router.get("/utilities-border",(req,res) => {
    res.render("etc/utilities-border")
})

router.get("/utilities-color",(req,res) => {
    res.render("etc/utilities-color")
})

router.get("/utilities-other",(req,res) => {
    res.render("etc/utilities-other")
})

router.get("/blank",(req,res) => {
    res.render("etc/blank")
})
// [e] 임시 페이지

module.exports = router