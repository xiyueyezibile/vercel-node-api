const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get('/', homeController.getHome);

router.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = router;
