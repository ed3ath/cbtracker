const fs = require('fs-extra');
const fetch = require('node-fetch');
const ethers = require('ethers')

const ABIS = [
  'CryptoBlades',
  'IERC20',
  'Characters',
  'Weapons',
  'Shields',
  'Treasury',
  'Blacksmith',
  'Raid1',
  'IStakingRewards',
  'SimpleQuests',
  'EquipmentManager',
  'SkillStakingRewardsUpgradeable',
  'SkillStakingRewardsUpgradeable90',
  'SkillStakingRewardsUpgradeable180'
];
const APP_CONFIG_URL = 'https://config.cryptoblades.io';
const ABI_URL = 'https://app.cryptoblades.io/abi'
const APP_CONFIG = 'app-config';

const task = async () => {
  fs.ensureDirSync('./build/contracts');

  await Promise.all(ABIS.map(async (name) => {
    const abi = await fetch(`${ABI_URL}/${name}.json`).then((res) => res.json());

    await fs.writeJson(`./build/contracts/${name}.json`, abi);
  }));

  const ts = await fetch(`${ABI_URL}/abi-interfaces.ts`).then((res) => res.text());
  await fs.writeFile(`./build/abi-interfaces.ts`, ts);

};

const appConfigTask = async () => {
  fs.ensureDirSync('./');

  const appConfig = await fetch(`${APP_CONFIG_URL}/${APP_CONFIG}.json`).then((res) => res.text());

  await fs.writeFile(`./build/app-config.json`, appConfig);
};

const nftRetrievalTask = async () => {
  const config = require('../build/app-config.json')
  const { abi } = require('../build/contracts/CryptoBlades.json')

  const other = {}

  for (const chain of config.supportedChains) {
    const contract = new ethers.Contract(config.environments.production.chains[chain].VUE_APP_CRYPTOBLADES_CONTRACT_ADDRESS, abi, new ethers.providers.JsonRpcProvider(config.environments.production.chains[chain].rpcUrls[0]))
    const characters = await contract.characters()
    const weapons = await contract.weapons()
    const blacksmith = await contract.blacksmith()

    const bsContract = new ethers.Contract(blacksmith, require('../build/contracts/Blacksmith.json').abi, new ethers.providers.JsonRpcProvider(config.environments.production.chains[chain].rpcUrls[0]))
    const raidContract = new ethers.Contract(config.environments.production.chains[chain].VUE_APP_RAID_CONTRACT_ADDRESS, require('../build/contracts/Raid1.json').abi, new ethers.providers.JsonRpcProvider(config.environments.production.chains[chain].rpcUrls[0]))
    const shields = await bsContract.shields()
    const linkId = (await raidContract.LINK_EQUIPMENT_MANAGER()).toString()
    console.log(linkId)
    const equipment = await raidContract.links(linkId)

    other[chain] = {
      characters,
      weapons,
      shields,
      equipment
    }
  }
  await fs.writeFile(`./build/other.json`, JSON.stringify(other));
}

task().then(() => appConfigTask().then(() => nftRetrievalTask()))

