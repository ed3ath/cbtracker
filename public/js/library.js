const stakingRewardAddress = '0xd6b2D8f59Bf30cfE7009fB4fC00a7b13Ca836A2c';
const conStakingTokenAddress = '0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab';
const mainAddress = '0x39Bea96e13453Ed52A734B6ACEeD4c41F57B2271';
const charAddress = '0xc6f252c2cdd4087e30608a35c022ce490b58179b';
const weapAddress = '0x7e091b0a220356b157131c831258a9c98ac8031a';
const oracleAddress = '0x1cbfa0ec28da66896946474b2a93856eb725fbba';
const marketAddress = '0x90099dA42806b21128A094C713347C7885aF79e2';
const defaultAddress = '0x0000000000000000000000000000000000000000';

const web3 = new Web3('https://bsc-dataseed1.defibit.io/');

const conStakingReward = new web3.eth.Contract(IStakingRewards, stakingRewardAddress);
const conStakingToken = new web3.eth.Contract(IERC20, conStakingTokenAddress);
const conCryptoBlades = new web3.eth.Contract(CryptoBlades, mainAddress);
const conCharacters = new web3.eth.Contract(Characters, charAddress);
const conWeapons = new web3.eth.Contract(Weapons, weapAddress);
const conMarket = new web3.eth.Contract(NFTMarket, marketAddress);
const conOracle = new web3.eth.Contract(BasicPriceOracle, oracleAddress);

const isAddress = address => web3.utils.isAddress(address);
const getBNBBalance = address => web3.eth.getBalance(address);
const fromEther = (value) => web3.utils.fromWei(BigInt(value).toString(), 'ether');

const getRewardsPoolBalance = () => conStakingToken.methods.balanceOf(mainAddress).call();
const getStakingPoolBalance = () => conStakingToken.methods.balanceOf(stakingRewardAddress).call();

const getStakedBalance = address => conStakingToken.methods.balanceOf(address).call();
const getStakedRewards = address => conStakingReward.methods.balanceOf(address).call();
const getStakedTimeLeft = address => conStakingReward.methods.getStakeUnlockTimeLeft().call({ from: address });
const getAccountCharacters = async address => {
    const numberOfCharacters = parseInt(await conCharacters.methods.balanceOf(address).call(), 10)
    const characters = await Promise.all(
        [...Array(numberOfCharacters).keys()].map((_, i) =>
            conCharacters.methods.tokenOfOwnerByIndex(address, i).call())
    );
    return characters;
};
const getAccountWeapons = async address => {
    const numberOfWeapons = parseInt(await conWeapons.methods.balanceOf(address).call(), 10)
    const weapons = await Promise.all(
        [...Array(numberOfWeapons).keys()].map((_, i) => 
            conWeapons.methods.tokenOfOwnerByIndex(address, i).call())
    );
    return weapons;
};
const getAccountSkillReward = address => conCryptoBlades.methods.getTokenRewards().call({ from: address });
const getOwnRewardsClaimTax = address => conCryptoBlades.methods.getOwnRewardsClaimTax().call({ from: address });
const getRewardsClaimTaxMax = address => conCryptoBlades.methods.REWARDS_CLAIM_TAX_MAX().call({ from: address });
const getIngameSkill = address => conCryptoBlades.methods.inGameOnlyFunds(address).call({ from: address });
const getCharacterExp = charId => conCryptoBlades.methods.getXpRewards(`${charId}`).call();
const characterTargets = (charId, weapId) => conCryptoBlades.methods.getTargets(charId, weapId).call();
const getCharacterStamina = charId => conCharacters.methods.getStaminaPoints(`${charId}`).call();
const getCharacterData = charId => conCharacters.methods.get(`${charId}`).call();
const getWeaponData = weapId => conWeapons.methods.get(`${weapId}`).call();
const getOraclePrice = () => conOracle.methods.currentPrice().call();
const fetchFightGasOffset = async () => conCryptoBlades.methods.fightRewardGasOffset().call();
const fetchFightBaseline = async () => conCryptoBlades.methods.fightRewardBaseline().call();
const usdToSkill = async value => conCryptoBlades.methods.usdToSkill(value).call();
const decodeAbi = (types, data) => web3.eth.abi.decodeParameters(types, data);
const getPastLogs = options => web3.eth.getPastLogs(options);
const getLatestBlock = async () =>  web3.eth.getBlock('latest')
const getPastEvents = async (event, fromBlock, toBlock, address, topics) =>  conCryptoBlades.getPastEvents(event, {fromBlock, toBlock, address, topics})
const getTransaction = async hash => web3.eth.getTransaction(hash)
const getTransactionReceipt = async hash => web3.eth.getTransactionReceipt(hash)
const getFinalPrice = async (contract, tokenId) => conMarket.methods.getFinalPrice(contract, tokenId).call()
const getTokenGainForFight = async power => conCryptoBlades.methods.getTokenGainForFight(power).call()