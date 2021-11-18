const express = require('express');
const router = express.Router();

const siteController = require('../controllers/SiteController');

router.get('/login', siteController.index);
router.post('/home', siteController.auth);



module.exports = router;