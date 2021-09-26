var networks = ['bsc', 'heco']

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
    }
}

var nodes = {
    bsc: 'https://bsc-dataseed1.defibit.io/',
    heco: 'https://http-mainnet.hecochain.com'
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
var getPayPerFight = async () => conCryptoBlades.methods.vars(5).call()

var getSkillPrice = async () => {
    const reserves = await skillPair.methods.getReserves().call()
    return reserves[1] / reserves[0]
}

var getGasPrice = async () => {
    const reserves = await gasPair.methods.getReserves().call()
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
    console.log(currentNetwork)
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

populateNetwork()