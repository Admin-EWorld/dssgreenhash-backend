const express = require('express');
const router = express.Router();
const referralController = require('../controllers/referralController');

router.post('/create', referralController.createReferral);
router.get('/:userId', referralController.getReferralsByUser);

module.exports = router;
