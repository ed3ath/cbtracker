const express = require('express');

const router = express.Router();

const {
  web3,
  isAddress,
  getStakedBalance,
  getStakedRewards,
  getStakedTimeLeft,
  getBNBBalance,
  getAccountCharacters,
  getAccountWeapons,
  getAccountSkillReward,
  getCharacterExp,
  getCharacterStamina,
  getCharacterData,
  getWeaponData,
  characterTargets,
  getOraclePrice,
  fetchFightGasOffset,
  fetchFightBaseline,
} = require('../helpers/web3');

const {
  characterFromContract,
  weaponFromContract,
  secondsToDDHHMMSS,
  getNextTargetExpLevel,
  getEnemyDetails,
  getWinChance,
  traitNumberToName,
} = require('../helpers/utils');

router.get('/', (req, res, next) => {
  if (req.get('host') !== 'cbtracker.cwsdev.net' && process.env.NODE_ENV === 'production') {
    return res.redirect('https://cbtracker.cwsdev.net');
  }
  return res.render('index', { title: 'CryptoBlades Tracker' });
});

router.get('/account/add/:address', (req, res, next) => {
  const { address } = req.params;
  if (!address) return res.json({ error: 'No address provided.' });
  return res.json({ valid: isAddress(req.params.address), address });
});

router.get('/simulate/:address/:weapData/:charData', async (req, res, next) => {
  let { address, charData, weapData } = req.params;
  if (!address || !isAddress(req.params.address)) return res.json({ error: 'No valid address provided.' });
  address = address.trim();
  if (!charData) return res.json({ error: 'No character data provided.' });
  if (!weapData) return res.json({ error: 'No weapon data provided.' });

  charData = JSON.parse(Buffer.from(charData, 'base64').toString('ascii'));
  weapData = JSON.parse(Buffer.from(weapData, 'base64').toString('ascii'));

  const fightGasOffset = web3.utils.fromWei(`${await fetchFightGasOffset()}`);
  const fightBaseline = web3.utils.fromWei(`${await fetchFightBaseline()}`);

  try {
    const targets = await characterTargets(address, charData.charId, weapData.id);
    const enemies = await getEnemyDetails(targets);
    return res.json(enemies.map((data) => {
      const chance = getWinChance(charData, weapData, data.power, data.trait);
      data.element = traitNumberToName(data.trait);

      const reward = (parseFloat(fightGasOffset) + (parseFloat(fightBaseline) * Math.sqrt(parseInt(data.power) / 1000)));
      return {
        enemy: data,
        chance,
        reward,
      };
    }));
  } catch (e) {
    console.log(e);
    return res.json({ error: 'We are currently being rate limited by BSC Network. Please wait a few minutes before trying again.' });
  }
});

router.get('/account/retrieve/:data', async (req, res, next) => {
  const { data } = req.params;
  if (!data) return res.json({ error: 'No data provided.' });
  const { accounts } = JSON.parse(Buffer.from(data, 'base64').toString('ascii'));
  if (!accounts) return res.json([]);
  try {
    const results = await Promise.all(accounts.map(async (address) => {
      const bnbBalance = await getBNBBalance(address);
      const accChars = await getAccountCharacters(address);
      const accWeaps = await getAccountWeapons(address);
      const balance = await getStakedBalance(address);
      const rewards = await getStakedRewards(address);
      const timeLeft = await getStakedTimeLeft(address);
      const skills = await getAccountSkillReward(address);
      const characters = await Promise.all(accChars.map(async (charId) => {
        const exp = await getCharacterExp(address, charId);
        const sta = await getCharacterStamina(charId);
        const charData = characterFromContract(charId, await getCharacterData(address, charId));
        const nextTargetExpLevel = getNextTargetExpLevel(charData.level);
        return {
          charId,
          exp,
          sta,
          trait: charData.trait,
          nextLevel: nextTargetExpLevel.level + 1,
          nextExp: nextTargetExpLevel.exp - (parseInt(charData.xp) + parseInt(exp)),
          mustClaim: nextTargetExpLevel.exp - (parseInt(charData.xp) + parseInt(exp)) <= 0,
          level: charData.level + 1,
          element: charData.traitName,
        };
      }));
      const weapons = await Promise.all(accWeaps.map(async weapId => weaponFromContract(weapId, await getWeaponData(address, weapId))));
      return {
        address,
        bnb: web3.utils.fromWei(`${bnbBalance}`, 'ether'),
        unclaimed: web3.utils.fromWei(`${skills}`, 'ether'),
        balance: web3.utils.fromWei(`${balance}`, 'ether'),
        rewards: web3.utils.fromWei(`${rewards}`, 'ether'),
        timeLeft: secondsToDDHHMMSS(timeLeft),
        total: web3.utils.fromWei(`${(parseFloat(rewards) + parseFloat(balance) + parseFloat(skills))}`, 'ether'),
        characters,
        weapons,
        action: `<button type="button" class="btn btn-success btn-sm mb-1" onclick="rename('${address}')">Rename</button><br>
                <button type="button" class="btn btn-warning btn-sm mb-1" onclick="simulate('${address}', '${Buffer.from(JSON.stringify({ characters, weapons })).toString('base64')}')">Combat Simulator</button><br>
                <button type="button" class="btn btn-danger btn-sm" onclick="remove('${address}')">Remove</button>`,
      };
    }));

    return res.json(results);
  } catch (e) {
    return res.json({ error: 'We are currently being rate limited by BSC Network. Please wait a few minutes before trying again.' });
  }
});

router.get('/oracle/price', async (req, res, next) => {
  try {
    const price = await getOraclePrice();
    return res.json({ price: (1 / parseFloat(web3.utils.fromWei(`${price}`, 'ether'))) });
  } catch (e) {
    return res.json({ price: 0 });
  }
});

module.exports = router;
