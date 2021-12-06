const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => res.render('home', { title: 'CryptoBlades Tracker', page: 'home' }));
router.get('/calculator', (req, res, next) => res.render('calculator', { title: 'CryptoBlades Tracker - Rewards Calculator', page: 'calculator' }));
router.get('/stats', (req, res, next) => res.render('stats', { title: 'CryptoBlades Tracker - Statistics', page: 'stats' }));
router.get('/market', (req, res, next) => {
  const { type } = req.query;
  if (type === 'weapon') return res.render('weapon', { title: 'CryptoBlades Tracker - eD3ath\'s Market Listing', page: 'weapon' });
  else if (type === 'character') return res.render('character', { title: 'CryptoBlades Tracker - eD3ath\'s Market Listing', page: 'character' });
  return res.redirect('/market?type=weapon');
});

module.exports = router;
