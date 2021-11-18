const express = require('express');
const router = express.Router();
const siteController = require('../controllers/SiteController');

router.get('/home', siteController.auth);
router.get('/login', siteController.index);


module.exports = router;