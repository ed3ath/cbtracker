const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => res.render('home', { title: 'CryptoBlades Tracker', page: 'home' }));
router.get('/calculator', (req, res, next) => res.render('calculator', { title: 'CryptoBlades Tracker - Rewards Calculator', page: 'calculator' }));
router.get('/stats', (req, res, next) => res.render('stats', { title: 'CryptoBlades Tracker - Statistics', page: 'stats' }));
router.get('/diagnostic', (req, res, next) => res.render('diagnostic', { title: 'Tools - Diagnostic', page: 'diagnostic' }));

module.exports = router;
