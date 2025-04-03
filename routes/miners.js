const express = require('express');
const router = express.Router();
const minerController = require('../controllers/minerController');

router.post('/create', minerController.createMiner);
router.get('/', minerController.getAllMiners);

module.exports = router;
