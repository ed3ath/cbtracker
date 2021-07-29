const express = require('express');
const moment = require('moment');

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
  getIngameSkill,
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

router.get('/simulate/:charId/:weapId/:time', async (req, res, next) => {
  const { charId, weapId } = req.params;
  if (!charId) return res.json({ error: 'No character id provided.' });
  if (!weapId) return res.json({ error: 'No weapon id provided.' });

  try {
    const fightGasOffset = web3.utils.fromWei(`${await fetchFightGasOffset()}`);
    const fightBaseline = web3.utils.fromWei(`${await fetchFightBaseline()}`);

    const charData = characterFromContract(charId, await getCharacterData(charId));
    const weapData = weaponFromContract(weapId, await getWeaponData(weapId));
    const targets = await characterTargets(charId, weapId);
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
      const wallet = await getStakedBalance(address);
      const staked = await getStakedRewards(address);
      const timeLeft = await getStakedTimeLeft(address);
      const skills = await getAccountSkillReward(address);
      const ingame = await getIngameSkill(address);
      const characters = await Promise.all(accChars.map(async (charId) => {
        const exp = await getCharacterExp(charId);
        const sta = await getCharacterStamina(charId);
        const charData = characterFromContract(charId, await getCharacterData(charId));
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
      const weapons = await Promise.all(accWeaps.map(async weapId => weaponFromContract(weapId, await getWeaponData(weapId))));
      return {
        address,
        bnb: web3.utils.fromWei(`${bnbBalance}`, 'ether'),
        balance: {
          ingame: web3.utils.fromWei(`${ingame}`, 'ether'),
          unclaimed: web3.utils.fromWei(`${skills}`, 'ether'),
          wallet: web3.utils.fromWei(`${wallet}`, 'ether'),
          staked: web3.utils.fromWei(`${staked}`, 'ether'),
        },
        total: web3.utils.fromWei(`${(parseFloat(staked) + parseFloat(wallet) + parseFloat(skills) + parseFloat(ingame))}`, 'ether'),
        timeLeft: (timeLeft > 0 ? moment(new Date(new Date().getTime() + (timeLeft * 1000))).fromNow() : (parseFloat(staked) > 0 ? '<span style="color: gold">Claim now</span>' : '')),
        characters,
        weapons,
        action: `<button type="button" class="btn btn-success btn-sm mb-1" onclick="rename('${address}')">Rename</button><br>
                <button type="button" class="btn btn-warning btn-sm mb-1" onclick="simulate('${address}', '${Buffer.from(JSON.stringify({ characters, weapons })).toString('base64')}')">Combat Simulator</button><br>
                <button type="button" class="btn btn-danger btn-sm" onclick="remove('${address}')">Remove</button>`,
      };
    }));

    return res.json(results);
  } catch (e) {
    console.log(e);
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
