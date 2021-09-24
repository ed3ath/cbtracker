const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => res.render('home', { title: 'CryptoBlades Tracker', page: 'home' }));
router.get('/calculator', (req, res, next) => res.render('calculator', { title: 'CryptoBlades Tracker - Rewards Calculator', page: 'calculator' }));
router.get('/market', (req, res, next) => res.render('market', { title: 'CryptoBlades Tracker - eD3ath\'s Market Listing', page: 'market' }));

module.exports = router;
