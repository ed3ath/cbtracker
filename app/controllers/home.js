const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => res.render('home', { title: 'CryptoBlades Tracker', page: 'home' }));
router.get('/logger', (req, res, next) => res.render('logger', { title: 'CryptoBlades Tracker - Fight logger', page: 'logger' }));
router.get('/calculator', (req, res, next) => res.render('calculator', { title: 'CryptoBlades Tracker - Rewards Calculator', page: 'calculator' }));

module.exports = router;
