const express = require('express');
const router = express.Router();

router.use("/view/account", require('./AcocuntRouter'))
router.use("/view/error", require('./ErrorRouter'))
router.use("/",require('./IndexRouter'))
module.exports = router;