const express = require('express');

const router = express.Router();

const { getWeaponList, addWeaponList, removeWeaponList } = require('../models/weapons');

const config = require('../../config/config');

router.get('/', (req, res, next) => res.render('home', { title: 'CryptoBlades Tracker', page: 'home' }));
router.get('/logger', (req, res, next) => res.render('logger', { title: 'CryptoBlades Tracker - Fight logger', page: 'logger' }));
router.get('/calculator', (req, res, next) => res.render('calculator', { title: 'CryptoBlades Tracker - Rewards Calculator', page: 'calculator' }));
router.get('/market', (req, res, next) => res.render('market', { title: 'CryptoBlades Tracker - eD3ath\'s Market Listing', page: 'market' }));
router.get('/listing/weapons', async (req, res, next) => res.json(await getWeaponList()));
router.post('/listing/weapons', async (req, res, next) => {
  const { secret, weapId } = req.body;
  try {
    if (secret !== config.secret) throw Error('unauthorized');
    await addWeaponList(weapId);
    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, error: e.message });
  }
});
router.delete('/listing/weapons', async (req, res, next) => {
  const { secret, weapId } = req.body;
  try {
    if (secret !== config.secret) throw Error('unauthorized');
    await removeWeaponList(weapId);
    return res.json({ success: true });
  } catch (e) {
    return res.json({ success: false, error: e.message });
  }
});
module.exports = router;
