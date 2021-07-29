const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  if (req.get('host') !== 'cbtracker.cwsdev.net' && process.env.NODE_ENV === 'production') {
    return res.redirect('https://cbtracker.cwsdev.net');
  }
  return res.render('index', { title: 'CryptoBlades Tracker' });
});


router.get('/version', (req, res, next) => res.json({ version: '2.0.5' }));

module.exports = router;
