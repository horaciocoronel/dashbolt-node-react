const express = require('express');
const router = express.Router();

// @route 	GET api/test
// @desc 		Test users route
// @access	Public
router.get('/test', (req, res) => res.json({msg: 'Pictures works'}));


module.exports = router;