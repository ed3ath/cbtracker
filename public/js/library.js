var networks = ['bsc', 'heco', 'okex', 'poly']

var conAddress = {
    bsc: {
        staking: '0xd6b2D8f59Bf30cfE7009fB4fC00a7b13Ca836A2c',
        token: '0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab',
        cryptoBlades: '0x39Bea96e13453Ed52A734B6ACEeD4c41F57B2271',
        character: '0xc6f252c2cdd4087e30608a35c022ce490b58179b',
        weapon: '0x7e091b0a220356b157131c831258a9c98ac8031a',
        market: '0x90099dA42806b21128A094C713347C7885aF79e2',
        skillPair: '0x0deb588c1ec6f1d9f348126d401f05c4c7b7a80c',
        tokenPair: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16'
    },
    heco: {
        staking: '0x6109A500e5b9CE40FFe075Ea3A6beA6e93c23BcF',
        token: '0x27d4DfDB3fDf58e198bA4dbc23B2F82c0b8e3405',
        cryptoBlades: '0x29869EDb088466a49f75654d8F04edd16Bf60e75',
        character: '0xF6092CDEaabd02069cB56E2b770367AAcf49dfba',
        weapon: '0xa0f254436E43239D2B3947A9D590C495738B6A4C',
        market: '0x0f6dAA5F4b4277BE496c80aeCD0D101b8dEE6440',
        skillPair: '0x7c9739ecD7882157b1C526a832FfD5A50860078d',
        tokenPair: '0x3289250099cF4cF9e59Fd728a93F36594C1369f0'
    },
    okex: {
        staking: '0xC5707a6a16CCe1963Ec3E6cdEE0A91e4876Be395',
        token: '0xcC137b0713E0DC63b1fA136272014F2A54Dd7aCB',
        cryptoBlades: '0x98145a2fEBac238280bbdEDc2757dC162318b16e',
        character: '0x6A1d1803d4EDF5CF27EDb64ae95A22F81707eA38',
        weapon: '0x364759180A6484e57ECD73C042264A6Da75770e8',
        market: '0x5ea2373e281E92FE3c53dc36cE855D89BF25F6F8',
        skillPair: '0x2d9cdad4b89d91e6a44ec1c8b227b0c2b0d4e2cf',
        tokenPair: '0xa75bd9f086bbc1168b01fd5e750986b5170c2b26'
    },
    poly: {
        staking: '0xE34e7cA8e64884E3b5Cd48991ba229d8302E85da',
        token: '0x863D6074aFaF02D9D41A5f8Ea83278DF7089aA86',
        cryptoBlades: '0x070b1A95898B927A900A1F9F42b114154648E51A',
        character: '0x929059Fef67b88CE2F4127e59B50bEA123981998',
        weapon: '0xD9C5449EfB3f99952F73e824688724aAFB81dE6E',
        market: '0xeE6e8467268eA752b027676B3EBcD4eB05749874',
        skillPair: '0x42ba6f3aF9d8A2A30F5e55362c45e7121a932b77',
        tokenPair: '0x65d43b64e3b31965cd5ea367d4c2b94c03084797'
    }
}

var nodes = {
    bsc: 'https://bsc-dataseed1.defibit.io/',
    heco: 'https://http-mainnet.hecochain.com',
    okex: 'https://exchainrpc.okex.org',
    poly: 'https://matic-mainnet.chainstacklabs.com'
}

var currentNetwork = localStorage.getItem('network')

if (!networks.includes(currentNetwork)) {
    currentNetwork = 'bsc'    
    localStorage.setItem('network', currentNetwork)  
}

var web3 = new Web3(nodes[currentNetwork]);

var conStakingReward = new web3.eth.Contract(IStakingRewards, conAddress[currentNetwork].staking);
var conStakingToken = new web3.eth.Contract(IERC20, conAddress[currentNetwork].token);
var conCryptoBlades = new web3.eth.Contract(CryptoBlades, conAddress[currentNetwork].cryptoBlades);
var conCharacters = new web3.eth.Contract(Characters, conAddress[currentNetwork].character);
var conWeapons = new web3.eth.Contract(Weapons, conAddress[currentNetwork].weapon);
var conMarket = new web3.eth.Contract(NFTMarket, conAddress[currentNetwork].market);
var skillPair = new web3.eth.Contract(SwapPair, conAddress[currentNetwork].skillPair)
var gasPair = new web3.eth.Contract(SwapPair, conAddress[currentNetwork].tokenPair)

var isAddress = address => web3.utils.isAddress(address);
var getBNBBalance = address => web3.eth.getBalance(address);
var fromEther = (value) => web3.utils.fromWei(BigInt(value).toString(), 'ether');

var getRewardsPoolBalance = () => conStakingReward.methods.balanceOf(mainAddress).call();
var getStakingPoolBalance = () => conStakingToken.methods.balanceOf(stakingRewardAddress).call();

var getStakedBalance = address => conStakingToken.methods.balanceOf(address).call();
var getStakedRewards = address => conStakingReward.methods.balanceOf(address).call();
var getStakedTimeLeft = address => conStakingReward.methods.getStakeUnlockTimeLeft().call({ from: address });
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
var getAccountSkillReward = address => conCryptoBlades.methods.getTokenRewardsFor(address).call();
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
var getTokenGainForFight = async (power, calculator) => conCryptoBlades.methods.getTokenGainForFight(power, calculator).call()
var getCurrentAllowance = async () => conCryptoBlades.methods.vars(13).call()
var getHourlyAllowance = async () => conCryptoBlades.methods.vars(18).call()
var getHourlyPowerAvg = async () => conCryptoBlades.methods.vars(4).call()
var getPayPerFight = async () => conCryptoBlades.methods.vars(5).call()
var getMaxPayPerFight = async () => conCryptoBlades.methods.vars(12).call()
var getLastReset = async () => conCryptoBlades.methods.vars(6).call()
var getMaxClaim = async () => conCryptoBlades.methods.vars(7).call()

var getSkillPrice = async () => {
    const reserves = await skillPair.methods.getReserves().call()
    if (currentNetwork === 'okex' || currentNetwork === 'poly') return reserves[0] / reserves[1]
    return reserves[1] / reserves[0]
}

var getGasPrice = async () => {
    const reserves = await gasPair.methods.getReserves().call()
    if (currentNetwork === 'okex') return reserves[0] / reserves[1]
    return reserves[1] / reserves[0]
}

function populateNetwork() {
    $('#select-network').html('');
    $("#select-network").append(new Option(currentNetwork.toUpperCase(), currentNetwork));
    networks.forEach(net => {
        if (currentNetwork !== net) {
            $("#select-network").append(new Option(net.toUpperCase(), net));
        }
    })
}

function updateNetwork(network) {    
    currentNetwork = network
    localStorage.setItem('network', currentNetwork)  
    web3 = new Web3(nodes[currentNetwork]);
    conStakingReward = new web3.eth.Contract(IStakingRewards, conAddress[currentNetwork].staking);
    conStakingToken = new web3.eth.Contract(IERC20, conAddress[currentNetwork].token);
    conCryptoBlades = new web3.eth.Contract(CryptoBlades, conAddress[currentNetwork].cryptoBlades);
    conCharacters = new web3.eth.Contract(Characters, conAddress[currentNetwork].character);
    conWeapons = new web3.eth.Contract(Weapons, conAddress[currentNetwork].weapon);
    conMarket = new web3.eth.Contract(NFTMarket, conAddress[currentNetwork].market);
    skillPair = new web3.eth.Contract(SwapPair, conAddress[currentNetwork].skillPair)
    gasPair = new web3.eth.Contract(SwapPair, conAddress[currentNetwork].tokenPair)
}

async function getTokenReward(power) {
    return getTokenGainForFight(power, false)
}

populateNetwork()