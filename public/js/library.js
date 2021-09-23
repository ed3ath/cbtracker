var stakingRewardAddress = '0xd6b2D8f59Bf30cfE7009fB4fC00a7b13Ca836A2c';
var stakingTokenAddress = '0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab';
var mainAddress = '0x39Bea96e13453Ed52A734B6ACEeD4c41F57B2271';
var charAddress = '0xc6f252c2cdd4087e30608a35c022ce490b58179b';
var weapAddress = '0x7e091b0a220356b157131c831258a9c98ac8031a';
var oracleAddress = '0x1cbfa0ec28da66896946474b2a93856eb725fbba';
var marketAddress = '0x90099dA42806b21128A094C713347C7885aF79e2';
var defaultAddress = '0x0000000000000000000000000000000000000000';

var conAddress = {
    bsc: {
        staking: '0xd6b2D8f59Bf30cfE7009fB4fC00a7b13Ca836A2c',
        token: '0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab',
        cryptoBlades: '0x39Bea96e13453Ed52A734B6ACEeD4c41F57B2271',
        character: '0xc6f252c2cdd4087e30608a35c022ce490b58179b',
        weapon: '0x7e091b0a220356b157131c831258a9c98ac8031a',
        market: '0x90099dA42806b21128A094C713347C7885aF79e2'
    },
    heco: {
        staking: '0x6109A500e5b9CE40FFe075Ea3A6beA6e93c23BcF',
        token: '0x27d4DfDB3fDf58e198bA4dbc23B2F82c0b8e3405',
        cryptoBlades: '0x29869EDb088466a49f75654d8F04edd16Bf60e75',
        character: '0xF6092CDEaabd02069cB56E2b770367AAcf49dfba',
        weapon: '0xa0f254436E43239D2B3947A9D590C495738B6A4C',
        market: '0x0f6dAA5F4b4277BE496c80aeCD0D101b8dEE6440'
    }
}

var nodes = {
    bsc: 'https://bsc-dataseed1.defibit.io/',
    heco: 'https://http-mainnet.hecochain.com'
}

var currentNetwork = localStorage.getItem('network') || 'bsc'

var web3 = new Web3(nodes[currentNetwork]);

var varakingReward = new web3.eth.Contract(IStakingRewards, conAddress[currentNetwork].staking);
var varakingToken = new web3.eth.Contract(IERC20, conAddress[currentNetwork].token);
var conCryptoBlades = new web3.eth.Contract(CryptoBlades, conAddress[currentNetwork].cryptoBlades);
var conCharacters = new web3.eth.Contract(Characters, conAddress[currentNetwork].character);
var conWeapons = new web3.eth.Contract(Weapons, conAddress[currentNetwork].weapon);
var conMarket = new web3.eth.Contract(NFTMarket, conAddress[currentNetwork].market);

var isAddress = address => web3.utils.isAddress(address);
var getBNBBalance = address => web3.eth.getBalance(address);
var fromEther = (value) => web3.utils.fromWei(BigInt(value).toString(), 'ether');

var getRewardsPoolBalance = () => varakingToken.methods.balanceOf(mainAddress).call();
var getStakingPoolBalance = () => varakingToken.methods.balanceOf(stakingRewardAddress).call();

var getStakedBalance = address => varakingToken.methods.balanceOf(address).call();
var getStakedRewards = address => varakingReward.methods.balanceOf(address).call();
var getStakedTimeLeft = address => varakingReward.methods.getStakeUnlockTimeLeft().call({ from: address });
var getAccountCharacters = async address => {
    var numberOfCharacters = parseInt(await conCharacters.methods.balanceOf(address).call(), 10)
    var characters = await Promise.all(
        [...Array(numberOfCharacters).keys()].map((_, i) =>
            conCharacters.methods.tokenOfOwnerByIndex(address, i).call())
    );
    return characters;
};
var getAccountWeapons = async address => {
    var numberOfWeapons = parseInt(await conWeapons.methods.balanceOf(address).call(), 10)
    var weapons = await Promise.all(
        [...Array(numberOfWeapons).keys()].map((_, i) => 
            conWeapons.methods.tokenOfOwnerByIndex(address, i).call())
    );
    return weapons;
};
var getAccountSkillReward = address => conCryptoBlades.methods.getTokenRewards().call({ from: address });
var getOwnRewardsClaimTax = address => conCryptoBlades.methods.getOwnRewardsClaimTax().call({ from: address });
var getRewardsClaimTaxMax = address => conCryptoBlades.methods.REWARDS_CLAIM_TAX_MAX().call({ from: address });
var getIngameSkill = address => conCryptoBlades.methods.inGameOnlyFunds(address).call({ from: address });
var getCharacterExp = charId => conCryptoBlades.methods.getXpRewards(`${charId}`).call();
var characterTargets = (charId, weapId) => conCryptoBlades.methods.getTargets(charId, weapId).call();
var getCharacterStamina = charId => conCharacters.methods.getStaminaPoints(`${charId}`).call();
var getCharacterData = charId => conCharacters.methods.get(`${charId}`).call();
var getWeaponData = weapId => conWeapons.methods.get(`${weapId}`).call();
var fetchFightGasOffset = async () => conCryptoBlades.methods.fightRewardGasOffset().call();
var fetchFightBaseline = async () => conCryptoBlades.methods.fightRewardBaseline().call();
var usdToSkill = async value => conCryptoBlades.methods.usdToSkill(value).call();
var decodeAbi = (types, data) => web3.eth.abi.decodeParameters(types, data);
var getPastLogs = options => web3.eth.getPastLogs(options);
var getLatestBlock = async () =>  web3.eth.getBlock('latest')
var getPastEvents = async (event, fromBlock, toBlock, address, topics) =>  conCryptoBlades.getPastEvents(event, {fromBlock, toBlock, address, topics})
var getTransaction = async hash => web3.eth.getTransaction(hash)
var getTransactionReceipt = async hash => web3.eth.getTransactionReceipt(hash)
var getFinalPrice = async (contract, tokenId) => conMarket.methods.getFinalPrice(contract, tokenId).call()
var getTokenGainForFight = async power => conCryptoBlades.methods.getTokenGainForFight(power).call()