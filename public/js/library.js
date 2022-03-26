var networks = ['bnb', 'heco', 'oec', 'poly', 'avax']

var conAddress = {
    bnb: {
        staking: '0xd6b2D8f59Bf30cfE7009fB4fC00a7b13Ca836A2c',
        token: '0x154a9f9cbd3449ad22fdae23044319d6ef2a1fab',
        cryptoBlades: '0x39Bea96e13453Ed52A734B6ACEeD4c41F57B2271',
        character: '0xc6f252c2cdd4087e30608a35c022ce490b58179b',
        weapon: '0x7e091b0a220356b157131c831258a9c98ac8031a',
        shield: '0xf9E9F6019631bBE7db1B71Ec4262778eb6C3c520',
        market: '0x90099dA42806b21128A094C713347C7885aF79e2',
        skillPair: '0x0deb588c1ec6f1d9f348126d401f05c4c7b7a80c',
        tokenPair: '0x58f876857a02d6762e0101bb5c46a8c1ed44dc16',
        treasury: '0x812Fa2f7d89e5d837450702bd51120920dccaA99',
        multicall: '0x1ee38d535d541c55c9dae27b12edf090c608e6fb',
        skillStaking30: '0xd6b2D8f59Bf30cfE7009fB4fC00a7b13Ca836A2c',
        skillStaking90: '0xc42dF5397B3C0B45DeDaCB83F7aDb1F30B73097d',
        skillStaking180: '0x3C06533B42A802f3Ac0E770CCBBeA9fa7Cae9572',
        quest: '0xD6CDf4072EB6bcF10ef1b715aaA0fDF755B52327',
        pvp: '0x8ADB6c9f7FAdB959a9847fd9Bd0ED503446942Ca',
        raid: '0x1067d34D7bEBe2BE81657e8a2E3CFEBb0161F96b',
        garrison: '0x0D0Ebe222F8Fc996cC1BcF497d653082708b45E4'
    },
    heco: {
        staking: '0x6109A500e5b9CE40FFe075Ea3A6beA6e93c23BcF',
        token: '0x27d4DfDB3fDf58e198bA4dbc23B2F82c0b8e3405',
        cryptoBlades: '0x29869EDb088466a49f75654d8F04edd16Bf60e75',
        character: '0xF6092CDEaabd02069cB56E2b770367AAcf49dfba',
        weapon: '0xa0f254436E43239D2B3947A9D590C495738B6A4C',
        shield: '0xb4eD70aC5B00ca0fd9526089489979e116E45ec0',
        market: '0x0f6dAA5F4b4277BE496c80aeCD0D101b8dEE6440',
        skillPair: '0x7c9739ecD7882157b1C526a832FfD5A50860078d',
        tokenPair: '0x3289250099cF4cF9e59Fd728a93F36594C1369f0',
        treasury: '0x7843Bd2aDdE5E54bD6e61C28fA89009240a48C08',
        multicall: '0xCeBFbFb4Bd0d28E5a2662193e35E534ca6465f73',
        skillStaking30: '',
        skillStaking90: '',
        skillStaking180: '',
        quest: '0xd3813bb74A8AB232e5CF61319b7b686CFd8788DA',
        pvp: '0x0cA50Cc9481FB3c5C0E8a02fAca97B25b0C73D5C',
        raid: '0x0aBb23EA06960608a4fa1529678C9abc208b4E8d',
        garrison: '0x17afD75CBD5B51B4baE8D071ED9394f4Ef13ceCe'
    },
    oec: {
        staking: '0xC5707a6a16CCe1963Ec3E6cdEE0A91e4876Be395',
        token: '0xcC137b0713E0DC63b1fA136272014F2A54Dd7aCB',
        cryptoBlades: '0x98145a2fEBac238280bbdEDc2757dC162318b16e',
        character: '0x6A1d1803d4EDF5CF27EDb64ae95A22F81707eA38',
        weapon: '0x364759180A6484e57ECD73C042264A6Da75770e8',
        shield: '0x8c52FabF2442b0EB83518DaB93A8073Ce5B0BA15',
        market: '0x5ea2373e281E92FE3c53dc36cE855D89BF25F6F8',
        skillPair: '0x2d9cdad4b89d91e6a44ec1c8b227b0c2b0d4e2cf',
        tokenPair: '0xa75bd9f086bbc1168b01fd5e750986b5170c2b26',
        treasury: '0xcBEfF02841370997054AdfF624dC490C8cB20406',
        multicall: '0xddBDA43E5675C8A35dcA19007061A1D4A28F9452',
        skillStaking30: '',
        skillStaking90: '',
        skillStaking180: '',
        quest: '0x47a3c3e3925624beBf5193717d80EF494Bc9B8A7',
        pvp: '0x306d0D035b802a13cBfa389faFfb488ca1bbA874',
        raid: '0x29F8917c2E6e6bAcc9FD813354bCBEd8A8dD89E3',
        garrison: '0xb1f45Dbd94013B379BEC270B9cE9da14A476b649'
    },
    poly: {
        staking: '0xE34e7cA8e64884E3b5Cd48991ba229d8302E85da',
        token: '0x863D6074aFaF02D9D41A5f8Ea83278DF7089aA86',
        cryptoBlades: '0x070b1A95898B927A900A1F9F42b114154648E51A',
        character: '0x929059Fef67b88CE2F4127e59B50bEA123981998',
        weapon: '0xD9C5449EfB3f99952F73e824688724aAFB81dE6E',
        shield: '0x68a288c2A96e2cd5c45769e02f2bbc2E90BAE39B',
        market: '0xeE6e8467268eA752b027676B3EBcD4eB05749874',
        skillPair: '0x42ba6f3aF9d8A2A30F5e55362c45e7121a932b77',
        tokenPair: '0x65d43b64e3b31965cd5ea367d4c2b94c03084797',
        treasury: '0x216AC39765D920D7f86162Daf9BE1f045f321A8D',
        multicall: '0x35e4aA226ce52e1E59E5e5Ec24766007bCbE2e7D',
        skillStaking30: '',
        skillStaking90: '',
        skillStaking180: '',
        quest: '0xc97011880a37139BD5eEEAE7A2cf683a82D615e0',
        pvp: '0x1229Aad0b813fb5636834Eb82a7732A3f90a0149',
        raid: '0x6F104F58fFFC13b66A1BD45AA228167c4ADf746F',
        garrison: '0x4D1559DF0B0724aC4bb095C713564211613683Ed'
    },
    avax: {
        staking: '0x96438Debb1419bF0B53119Edae6e664c931504CA',
        token: '0x483416eB3aFA601B9C6385f63CeC0C82B6aBf1fb',
        cryptoBlades: '0x46419526a59ec1d73b72620ae16da091bE8486bd',
        character: '0x28857ccCCa599f0876792094870758A18F581Dc0',
        weapon: '0xe8f172B51186A4c8127D5eE05617dCA6aAf478fE',
        shield: '0x1609BD8ea43b1c23dE90071B82CD08FA098DdCF3',
        market: '0x9469ED8d4b86e4442b4AA848bB94B9f9130f123E',
        skillPair: '0xF52B3Df311182F43202806ee0E72aCB92d777879',
        tokenPair: '0xe28984e1ee8d431346d32bec9ec800efb643eef4',
        treasury: '0x5B1cCb62D2F9c8523abBa89A56432005cef03b99',
        multicall: '0x0FB54156B496b5a040b51A71817aED9e2927912E',
        skillStaking30: '',
        skillStaking90: '',
        skillStaking180: '',
        quest: '',
        pvp: '0xC4Ca6D299ed56318FcB30344f47F5763aFB3c396',
        raid: '0xbAC6B71a5bC3517Bee588299980B3C357a518e5C',
        garrison: '0xB861C1196BEb96856FD0733Bba108304b1B51806'
    }
}

var nodes = {
    bnb: 'https://bsc-dataseed1.defibit.io/',
    heco: 'https://http-mainnet.hecochain.com',
    oec: 'https://exchainrpc.okex.org',
    poly: 'https://polygon-rpc.com/',
    avax: 'https://api.avax.network/ext/bc/C/rpc'
}

var currentNetwork = localStorage.getItem('network')

if (!networks.includes(currentNetwork)) {
    currentNetwork = 'bnb'
    localStorage.setItem('network', currentNetwork)
}

var web3 = new Web3(nodes[currentNetwork]);

var conStakingReward = new web3.eth.Contract(IStakingRewards, conAddress[currentNetwork].staking);
var conStakingToken = new web3.eth.Contract(IERC20, conAddress[currentNetwork].token);
var conCryptoBlades = new web3.eth.Contract(CryptoBlades, conAddress[currentNetwork].cryptoBlades);
var conCharacters = new web3.eth.Contract(Characters, conAddress[currentNetwork].character);
var conWeapons = new web3.eth.Contract(Weapons, conAddress[currentNetwork].weapon);
var conShields = new web3.eth.Contract(Shields, conAddress[currentNetwork].shield);
var conMarket = new web3.eth.Contract(NFTMarket, conAddress[currentNetwork].market);
var conTreasury = new web3.eth.Contract(Treasury, conAddress[currentNetwork].treasury)
var skillPair = new web3.eth.Contract(SwapPair, conAddress[currentNetwork].skillPair)
var gasPair = new web3.eth.Contract(SwapPair, conAddress[currentNetwork].tokenPair)
var conMultiCall = new web3.eth.Contract(MultiCall, conAddress[currentNetwork].multicall)
var conPvp = new web3.eth.Contract(PvpArena, conAddress[currentNetwork].pvp)
var conRaid = new web3.eth.Contract(Raid, conAddress[currentNetwork].raid)
var conGarrison = new web3.eth.Contract(Garrison, conAddress[currentNetwork].garrison)

var isAddress = address => web3.utils.isAddress(address);
var getBNBBalance = address => web3.eth.getBalance(address);
var fromEther = (value) => web3.utils.fromWei(BigInt(Math.trunc(value)).toString(), 'ether');
var toEther = (value) => web3.utils.toWei(value.toFixed(18), 'ether');

var getRewardsPoolBalance = () => conStakingReward.methods.balanceOf(mainAddress).call();
var getStakingPoolBalance = () => conStakingToken.methods.balanceOf(stakingRewardAddress).call();

var getSkillWallet = address => conStakingToken.methods.balanceOf(address).call();
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
var getAccountSkillReward = address => conCryptoBlades.methods.getTokenRewardsFor(address).call()
var getOwnRewardsClaimTax = address => conCryptoBlades.methods.getOwnRewardsClaimTax().call({ from: address })
var getRewardsClaimTaxMax = address => conCryptoBlades.methods.REWARDS_CLAIM_TAX_MAX().call({ from: address })
var getIngameSkill = address => conCryptoBlades.methods.inGameOnlyFunds(address).call({ from: address })
var getCharacterExp = charId => conCryptoBlades.methods.getXpRewards(`${charId}`).call()
var characterTargets = (charId, weapId) => conCryptoBlades.methods.getTargets(charId, weapId).call()
var getCharacterStamina = charId => conCharacters.methods.getStaminaPoints(`${charId}`).call()
var getCharacterData = charId => conCharacters.methods.get(`${charId}`).call()
var getWeaponData = weapId => conWeapons.methods.get(`${weapId}`).call()
var getShieldData = shieldId => conShields.methods.get(`${shieldId}`).call()
var fetchFightGasOffset = () => conCryptoBlades.methods.fightRewardGasOffset().call()
var fetchFightBaseline = () => conCryptoBlades.methods.fightRewardBaseline().call()
var usdToSkill = value => conCryptoBlades.methods.usdToSkill(value).call()
var decodeAbi = (types, data) => web3.eth.abi.decodeParameters(types, data)
var getPastLogs = options => web3.eth.getPastLogs(options)
var getLatestBlock = () =>  web3.eth.getBlock('latest')
var getPastEvents = (event, fromBlock, toBlock, address) =>  conCryptoBlades.getPastEvents(event, {fromBlock, toBlock, filter: {owner: web3.utils.toChecksumAddress(address)}})
var getTransaction = hash => web3.eth.getTransaction(hash)
var getTransactionReceipt = hash => web3.eth.getTransactionReceipt(hash)
var getFinalPrice = (contract, tokenId) => conMarket.methods.getFinalPrice(contract, tokenId).call()
var getTokenGainForFight = (power, calculator) => conCryptoBlades.methods.getTokenGainForFight(power, calculator).call()
var getCurrentAllowance = () => conCryptoBlades.methods.vars(13).call()
var getHourlyAllowance = () => conCryptoBlades.methods.vars(18).call()
var getHourlyPowerAvg = () => conCryptoBlades.methods.vars(4).call()
var getPayPerFight = () => conCryptoBlades.methods.vars(5).call()
var getMaxPayPerFight = () => conCryptoBlades.methods.vars(12).call()
var getLastReset = () => conCryptoBlades.methods.vars(6).call()
var getMaxClaim = () => conCryptoBlades.methods.vars(7).call()
var getHourlyFights = () => conCryptoBlades.methods.vars(2).call()
var getHourlyPowerSum = () => conCryptoBlades.methods.vars(3).call()
var getTotalCharacters = () => conCharacters.methods.totalSupply().call()
var getTotalWeapons = () => conWeapons.methods.totalSupply().call()
var getTotalShields = () => conShields.methods.totalSupply().call()
var getLastClaim = address => conCryptoBlades.methods.userVars(address, 10002).call()
var getClaimable = address => conCryptoBlades.methods.getRemainingTokenClaimAmountPreTax().call({ from: address })
var getSkillMultiplier = (id) => conTreasury.methods.getProjectMultiplier(id).call()
var getActivePartnerProjectsIds = () => conTreasury.methods.getActivePartnerProjectsIds().call()

var getSkillPartnerId = async () => {
    var activePartnerIds = await getActivePartnerProjectsIds()
    return BigInt((await multicall(getNFTCall(Treasury, conAddress[currentNetwork].treasury, 'getPartnerProject', activePartnerIds.map(id => [id])))).find((data) => data[2] === 'SKILL')[0]).toString()
}

var getReputationLevelRequirements = async () => {
    const conQuest = new web3.eth.Contract(SimpleQuest, conAddress[currentNetwork].quest)
    const VAR_REPUTATION_LEVEL_2 = await conQuest.methods.VAR_REPUTATION_LEVEL_2().call();
    const VAR_REPUTATION_LEVEL_3 = await conQuest.methods.VAR_REPUTATION_LEVEL_3().call();
    const VAR_REPUTATION_LEVEL_4 = await conQuest.methods.VAR_REPUTATION_LEVEL_4().call();
    const VAR_REPUTATION_LEVEL_5 = await conQuest.methods.VAR_REPUTATION_LEVEL_5().call();
    const requirementsRaw = await conQuest.methods.getVars([
      VAR_REPUTATION_LEVEL_2,
      VAR_REPUTATION_LEVEL_3,
      VAR_REPUTATION_LEVEL_4,
      VAR_REPUTATION_LEVEL_5,
    ]).call();

    return {
      level2: +requirementsRaw[0],
      level3: +requirementsRaw[1],
      level4: +requirementsRaw[2],
      level5: +requirementsRaw[3],
    };
}


var getReputationTier = (reputation, reputationLevelRequirements) => {
    if (reputation < reputationLevelRequirements.level2) {
      return ReputationTier.PEASANT;
    } else if (reputation < reputationLevelRequirements.level3) {
      return ReputationTier.TRADESMAN;
    } else if (reputation < reputationLevelRequirements.level4) {
      return ReputationTier.NOBLE;
    } else if (reputation < reputationLevelRequirements.level5) {
      return ReputationTier.KNIGHT;
    } else {
      return ReputationTier.KING;
    }
}

var multicall = async ({abi, calls}) => {
    const { Interface } = ethers.utils
    const itf = new Interface(abi);

    const calldata = calls.map((call) => [
        call.address.toLowerCase(),
        itf.encodeFunctionData(call.name, call.params),
    ]);
    const { returnData } = await conMultiCall.methods.aggregate(calldata).call();
    const res = returnData.map((call, i) => itf.decodeFunctionResult(calls[i].name, call));
    return res
}


var getNFTCall = (abi, address, name, params) => ({
    abi,
    calls: params.map((param) => ({
      address,
      name,
      params: param,
    })),
})

var getSkillPrice = async () => {
    const reserves = await skillPair.methods.getReserves().call()
    if (currentNetwork === 'oec' || currentNetwork === 'poly') return reserves[0] / reserves[1]
    return reserves[1] / reserves[0]
}

var getGasPrice = async () => {
    const reserves = await gasPair.methods.getReserves().call()
    if (currentNetwork === 'oec') return reserves[0] / reserves[1]
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
    conStakingReward = new web3.eth.Contract(IStakingRewards, conAddress[currentNetwork].staking)
    conStakingToken = new web3.eth.Contract(IERC20, conAddress[currentNetwork].token)
    conCryptoBlades = new web3.eth.Contract(CryptoBlades, conAddress[currentNetwork].cryptoBlades)
    conCharacters = new web3.eth.Contract(Characters, conAddress[currentNetwork].character)
    conWeapons = new web3.eth.Contract(Weapons, conAddress[currentNetwork].weapon)
    conShields = new web3.eth.Contract(Shields, conAddress[currentNetwork].shield)
    conMarket = new web3.eth.Contract(NFTMarket, conAddress[currentNetwork].market)
    conTreasury = new web3.eth.Contract(Treasury, conAddress[currentNetwork].treasury)
    skillPair = new web3.eth.Contract(SwapPair, conAddress[currentNetwork].skillPair)
    gasPair = new web3.eth.Contract(SwapPair, conAddress[currentNetwork].tokenPair)
    conMultiCall = new web3.eth.Contract(MultiCall, conAddress[currentNetwork].multicall)
    conPvp = new web3.eth.Contract(PvpArena, conAddress[currentNetwork].pvp)
    conRaid = new web3.eth.Contract(Raid, conAddress[currentNetwork].raid)
    conGarrison = new web3.eth.Contract(Garrison, conAddress[currentNetwork].garrison)
}

async function getTokenReward(power) {
    return getTokenGainForFight(power, false)
}

populateNetwork()
