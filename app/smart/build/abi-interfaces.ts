import { Web3JsAbiCall } from '../abi-common';

export interface ABDKMath64x64 {

}

export interface AccessControl {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
}

export interface AccessControlUpgradeable {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
}

export interface Address {

}

export interface AddressUpgradeable {

}

export interface BasicPriceOracle {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  PRICE_UPDATER(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  currentPrice(): Web3JsAbiCall<string>;
  setCurrentPrice(_currentPrice: string | number): Web3JsAbiCall<void>;
}

export interface BytesChunker {
  toBytes32Array(data: string): Web3JsAbiCall<string[]>;
}

export interface ChainlinkRandoms {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  RANDOMNESS_REQUESTER(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  paused(): Web3JsAbiCall<boolean>;
  rawFulfillRandomness(requestId: string, randomness: string | number): Web3JsAbiCall<void>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  getRandomSeed(user: string): Web3JsAbiCall<string>;
  requestRandomNumber(): Web3JsAbiCall<void>;
  pause(): Web3JsAbiCall<void>;
  unpause(): Web3JsAbiCall<void>;
  withdrawLink(tokenAmount: string | number): Web3JsAbiCall<void>;
}

export interface Characters {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  NO_OWNED_LIMIT(): Web3JsAbiCall<string>;
  RECEIVE_DOES_NOT_SET_TRANSFER_TIMESTAMP(): Web3JsAbiCall<string>;
  TRANSFER_COOLDOWN(): Web3JsAbiCall<string>;
  approve(to: string, tokenId: string | number): Web3JsAbiCall<void>;
  balanceOf(owner: string): Web3JsAbiCall<string>;
  baseURI(): Web3JsAbiCall<string>;
  getApproved(tokenId: string | number): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  isApprovedForAll(owner: string, operator: string): Web3JsAbiCall<boolean>;
  lastTransferTimestamp(arg0: string | number): Web3JsAbiCall<string>;
  maxStamina(): Web3JsAbiCall<string>;
  name(): Web3JsAbiCall<string>;
  ownerOf(tokenId: string | number): Web3JsAbiCall<string>;
  promos(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number, _data: string): Web3JsAbiCall<void>;
  secondsPerStamina(): Web3JsAbiCall<string>;
  setApprovalForAll(operator: string, approved: boolean): Web3JsAbiCall<void>;
  supportsInterface(interfaceId: string): Web3JsAbiCall<boolean>;
  symbol(): Web3JsAbiCall<string>;
  tokenByIndex(index: string | number): Web3JsAbiCall<string>;
  tokenOfOwnerByIndex(owner: string, index: string | number): Web3JsAbiCall<string>;
  tokenURI(tokenId: string | number): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  migrateTo_1ee400a(): Web3JsAbiCall<void>;
  migrateTo_951a020(): Web3JsAbiCall<void>;
  migrateTo_ef994e2(_promos: string): Web3JsAbiCall<void>;
  transferCooldownEnd(tokenId: string | number): Web3JsAbiCall<string>;
  transferCooldownLeft(tokenId: string | number): Web3JsAbiCall<string>;
  get(id: string | number): Web3JsAbiCall<[string, string, string, string, string, string, string, string, string, string]>;
  mint(minter: string, seed: string | number): Web3JsAbiCall<void>;
  getLevel(id: string | number): Web3JsAbiCall<string>;
  getRequiredXpForNextLevel(currentLevel: string | number): Web3JsAbiCall<string>;
  getPower(id: string | number): Web3JsAbiCall<string>;
  getPowerAtLevel(level: string | number): Web3JsAbiCall<string>;
  getTrait(id: string | number): Web3JsAbiCall<string>;
  getXp(id: string | number): Web3JsAbiCall<string>;
  gainXp(id: string | number, xp: string | number): Web3JsAbiCall<void>;
  getStaminaTimestamp(id: string | number): Web3JsAbiCall<string>;
  setStaminaTimestamp(id: string | number, timestamp: string | number): Web3JsAbiCall<void>;
  getStaminaPoints(id: string | number): Web3JsAbiCall<string>;
  getStaminaPointsFromTimestamp(timestamp: string | number): Web3JsAbiCall<string>;
  isStaminaFull(id: string | number): Web3JsAbiCall<boolean>;
  getStaminaMaxWait(): Web3JsAbiCall<string>;
  getFightDataAndDrainStamina(id: string | number, amount: string | number): Web3JsAbiCall<string>;
}

export interface Context {

}

export interface ContextUpgradeable {

}

export interface CryptoBlades {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  REWARDS_CLAIM_TAX_DURATION(): Web3JsAbiCall<string>;
  REWARDS_CLAIM_TAX_MAX(): Web3JsAbiCall<string>;
  characters(): Web3JsAbiCall<string>;
  fightRewardBaseline(): Web3JsAbiCall<string>;
  fightRewardGasOffset(): Web3JsAbiCall<string>;
  fightTraitBonus(): Web3JsAbiCall<string>;
  fightXpGain(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  inGameOnlyFunds(arg0: string): Web3JsAbiCall<string>;
  mintCharacterFee(): Web3JsAbiCall<string>;
  mintWeaponFee(): Web3JsAbiCall<string>;
  oneFrac(): Web3JsAbiCall<string>;
  priceOracleSkillPerUsd(): Web3JsAbiCall<string>;
  promos(): Web3JsAbiCall<string>;
  randoms(): Web3JsAbiCall<string>;
  refillStaminaFee(): Web3JsAbiCall<string>;
  reforgeWeaponFee(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  skillToken(): Web3JsAbiCall<string>;
  stakeFromGameImpl(): Web3JsAbiCall<string>;
  totalInGameOnlyFunds(): Web3JsAbiCall<string>;
  weapons(): Web3JsAbiCall<string>;
  initialize(_skillToken: string, _characters: string, _weapons: string, _priceOracleSkillPerUsd: string, _randoms: string): Web3JsAbiCall<void>;
  migrateTo_1ee400a(): Web3JsAbiCall<void>;
  migrateTo_aa9da90(): Web3JsAbiCall<void>;
  migrateTo_ef994e2(_promos: string): Web3JsAbiCall<void>;
  migrateTo_23b3a8b(_stakeFromGame: string): Web3JsAbiCall<void>;
  migrateTo_7dd2a56(): Web3JsAbiCall<void>;
  recoverSkill(amount: string | number): Web3JsAbiCall<void>;
  getSkillToSubtract(_inGameOnlyFunds: string | number, _tokenRewards: string | number, _skillNeeded: string | number): Web3JsAbiCall<[string, string, string]>;
  getSkillNeededFromUserWallet(playerAddress: string, skillNeeded: string | number): Web3JsAbiCall<string>;
  getMyCharacters(): Web3JsAbiCall<string[]>;
  getMyWeapons(): Web3JsAbiCall<string[]>;
  unpackFightData(playerData: string | number): Web3JsAbiCall<[string, string, string]>;
  fight(char: string | number, wep: string | number, target: string | number): Web3JsAbiCall<void>;
  verifyFight(playerBasePower: string | number, wepMultiplier: string | number, wepBonusPower: string | number, staminaTimestamp: string | number, hour: string | number, target: string | number): Web3JsAbiCall<void>;
  getMonsterPower(target: string | number): Web3JsAbiCall<string>;
  getPlayerPower(basePower: string | number, weaponMultiplier: string | number, bonusPower: string | number): Web3JsAbiCall<string>;
  getPlayerTraitBonusAgainst(traitsCWE: string | number): Web3JsAbiCall<string>;
  getTargets(char: string | number, wep: string | number): Web3JsAbiCall<[string, string, string, string]>;
  isTraitEffectiveAgainst(attacker: string | number, defender: string | number): Web3JsAbiCall<boolean>;
  mintCharacter(): Web3JsAbiCall<void>;
  mintWeapon(): Web3JsAbiCall<void>;
  reforgeWeapon(reforgeID: string | number, burnID: string | number): Web3JsAbiCall<void>;
  migrateRandoms(_newRandoms: string): Web3JsAbiCall<void>;
  payContract(playerAddress: string, usdAmount: string | number): Web3JsAbiCall<void>;
  payContractConverted(playerAddress: string, convertedAmount: string | number): Web3JsAbiCall<void>;
  payPlayer(playerAddress: string, baseAmount: string | number): Web3JsAbiCall<void>;
  payPlayerConverted(playerAddress: string, convertedAmount: string | number): Web3JsAbiCall<void>;
  approveContractCharacterFor(characterID: string | number, playerAddress: string): Web3JsAbiCall<void>;
  approveContractWeaponFor(weaponID: string | number, playerAddress: string): Web3JsAbiCall<void>;
  setCharacterMintValue(cents: string | number): Web3JsAbiCall<void>;
  setFightRewardBaselineValue(tenthcents: string | number): Web3JsAbiCall<void>;
  setFightRewardGasOffsetValue(cents: string | number): Web3JsAbiCall<void>;
  setWeaponMintValue(cents: string | number): Web3JsAbiCall<void>;
  setReforgeWeaponValue(cents: string | number): Web3JsAbiCall<void>;
  setStaminaCostFight(points: string | number): Web3JsAbiCall<void>;
  setFightXpGain(average: string | number): Web3JsAbiCall<void>;
  setCharacterLimit(max: string | number): Web3JsAbiCall<void>;
  giveInGameOnlyFunds(to: string, skillAmount: string | number): Web3JsAbiCall<void>;
  giveInGameOnlyFundsFromContractBalance(to: string, skillAmount: string | number): Web3JsAbiCall<void>;
  usdToSkill(usdAmount: string | number): Web3JsAbiCall<string>;
  getCurrentHour(): Web3JsAbiCall<string>;
  claimTokenRewards(): Web3JsAbiCall<void>;
  stakeUnclaimedRewards(): Web3JsAbiCall<void>;
  claimXpRewards(): Web3JsAbiCall<void>;
  getTokenRewards(): Web3JsAbiCall<string>;
  getXpRewards(char: string | number): Web3JsAbiCall<string>;
  getTokenRewardsFor(wallet: string): Web3JsAbiCall<string>;
  getTotalSkillOwnedBy(wallet: string): Web3JsAbiCall<string>;
  getOwnRewardsClaimTax(): Web3JsAbiCall<string>;
}

export interface DummyRandoms {
  main(): Web3JsAbiCall<string>;
  owner(): Web3JsAbiCall<string>;
  renounceOwnership(): Web3JsAbiCall<void>;
  setMain(newMain: string): Web3JsAbiCall<void>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  getRandomSeed(user: string): Web3JsAbiCall<string>;
  setRandomNumberForTestingPurposes(randomValue: string | number): Web3JsAbiCall<void>;
}

export interface EnumerableMapUpgradeable {

}

export interface EnumerableSet {

}

export interface EnumerableSetUpgradeable {

}

export interface ERC165Checker {

}

export interface ERC165Upgradeable {
  supportsInterface(interfaceId: string): Web3JsAbiCall<boolean>;
}

export interface ERC20 {
  name(): Web3JsAbiCall<string>;
  symbol(): Web3JsAbiCall<string>;
  decimals(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  transfer(recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
  allowance(owner: string, spender: string): Web3JsAbiCall<string>;
  approve(spender: string, amount: string | number): Web3JsAbiCall<boolean>;
  transferFrom(sender: string, recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
  increaseAllowance(spender: string, addedValue: string | number): Web3JsAbiCall<boolean>;
  decreaseAllowance(spender: string, subtractedValue: string | number): Web3JsAbiCall<boolean>;
}

export interface ERC721Upgradeable {
  supportsInterface(interfaceId: string): Web3JsAbiCall<boolean>;
  balanceOf(owner: string): Web3JsAbiCall<string>;
  ownerOf(tokenId: string | number): Web3JsAbiCall<string>;
  name(): Web3JsAbiCall<string>;
  symbol(): Web3JsAbiCall<string>;
  tokenURI(tokenId: string | number): Web3JsAbiCall<string>;
  baseURI(): Web3JsAbiCall<string>;
  tokenOfOwnerByIndex(owner: string, index: string | number): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  tokenByIndex(index: string | number): Web3JsAbiCall<string>;
  approve(to: string, tokenId: string | number): Web3JsAbiCall<void>;
  getApproved(tokenId: string | number): Web3JsAbiCall<string>;
  setApprovalForAll(operator: string, approved: boolean): Web3JsAbiCall<void>;
  isApprovedForAll(owner: string, operator: string): Web3JsAbiCall<boolean>;
  transferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number, _data: string): Web3JsAbiCall<void>;
}

export interface ExperimentToken {
  allowance(owner: string, spender: string): Web3JsAbiCall<string>;
  approve(spender: string, amount: string | number): Web3JsAbiCall<boolean>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  decimals(): Web3JsAbiCall<string>;
  decreaseAllowance(spender: string, subtractedValue: string | number): Web3JsAbiCall<boolean>;
  increaseAllowance(spender: string, addedValue: string | number): Web3JsAbiCall<boolean>;
  name(): Web3JsAbiCall<string>;
  symbol(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transfer(recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
  transferFrom(sender: string, recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
}

export interface ExperimentToken2 {
  allowance(owner: string, spender: string): Web3JsAbiCall<string>;
  approve(spender: string, amount: string | number): Web3JsAbiCall<boolean>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  decimals(): Web3JsAbiCall<string>;
  decreaseAllowance(spender: string, subtractedValue: string | number): Web3JsAbiCall<boolean>;
  increaseAllowance(spender: string, addedValue: string | number): Web3JsAbiCall<boolean>;
  name(): Web3JsAbiCall<string>;
  symbol(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transfer(recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
  transferFrom(sender: string, recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
}

export interface Failsafe {
  acceptOwnership(): Web3JsAbiCall<void>;
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  nominateNewOwner(_owner: string): Web3JsAbiCall<void>;
  nominatedOwner(): Web3JsAbiCall<string>;
  owner(): Web3JsAbiCall<string>;
  enableFailsafeMode(): Web3JsAbiCall<void>;
}

export interface FailsafeUpgradeable {
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  owner(): Web3JsAbiCall<string>;
  renounceOwnership(): Web3JsAbiCall<void>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  enableFailsafeMode(): Web3JsAbiCall<void>;
}

export interface HasMain {
  main(): Web3JsAbiCall<string>;
  owner(): Web3JsAbiCall<string>;
  renounceOwnership(): Web3JsAbiCall<void>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  setMain(newMain: string): Web3JsAbiCall<void>;
}

export interface IERC165 {
  supportsInterface(interfaceId: string): Web3JsAbiCall<boolean>;
}

export interface IERC165Upgradeable {
  supportsInterface(interfaceId: string): Web3JsAbiCall<boolean>;
}

export interface IERC20 {
  totalSupply(): Web3JsAbiCall<string>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  transfer(recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
  allowance(owner: string, spender: string): Web3JsAbiCall<string>;
  approve(spender: string, amount: string | number): Web3JsAbiCall<boolean>;
  transferFrom(sender: string, recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
}

export interface IERC721 {
  supportsInterface(interfaceId: string): Web3JsAbiCall<boolean>;
  balanceOf(owner: string): Web3JsAbiCall<string>;
  ownerOf(tokenId: string | number): Web3JsAbiCall<string>;
  transferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  approve(to: string, tokenId: string | number): Web3JsAbiCall<void>;
  getApproved(tokenId: string | number): Web3JsAbiCall<string>;
  setApprovalForAll(operator: string, _approved: boolean): Web3JsAbiCall<void>;
  isApprovedForAll(owner: string, operator: string): Web3JsAbiCall<boolean>;
  safeTransferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number, data: string): Web3JsAbiCall<void>;
}

export interface IERC721EnumerableUpgradeable {
  approve(to: string, tokenId: string | number): Web3JsAbiCall<void>;
  balanceOf(owner: string): Web3JsAbiCall<string>;
  getApproved(tokenId: string | number): Web3JsAbiCall<string>;
  isApprovedForAll(owner: string, operator: string): Web3JsAbiCall<boolean>;
  ownerOf(tokenId: string | number): Web3JsAbiCall<string>;
  safeTransferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number, data: string): Web3JsAbiCall<void>;
  setApprovalForAll(operator: string, _approved: boolean): Web3JsAbiCall<void>;
  supportsInterface(interfaceId: string): Web3JsAbiCall<boolean>;
  transferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  totalSupply(): Web3JsAbiCall<string>;
  tokenOfOwnerByIndex(owner: string, index: string | number): Web3JsAbiCall<string>;
  tokenByIndex(index: string | number): Web3JsAbiCall<string>;
}

export interface IERC721MetadataUpgradeable {
  approve(to: string, tokenId: string | number): Web3JsAbiCall<void>;
  balanceOf(owner: string): Web3JsAbiCall<string>;
  getApproved(tokenId: string | number): Web3JsAbiCall<string>;
  isApprovedForAll(owner: string, operator: string): Web3JsAbiCall<boolean>;
  ownerOf(tokenId: string | number): Web3JsAbiCall<string>;
  safeTransferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number, data: string): Web3JsAbiCall<void>;
  setApprovalForAll(operator: string, _approved: boolean): Web3JsAbiCall<void>;
  supportsInterface(interfaceId: string): Web3JsAbiCall<boolean>;
  transferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  name(): Web3JsAbiCall<string>;
  symbol(): Web3JsAbiCall<string>;
  tokenURI(tokenId: string | number): Web3JsAbiCall<string>;
}

export interface IERC721ReceiverUpgradeable {
  onERC721Received(operator: string, from: string, tokenId: string | number, data: string): Web3JsAbiCall<string>;
}

export interface IERC721Upgradeable {
  supportsInterface(interfaceId: string): Web3JsAbiCall<boolean>;
  balanceOf(owner: string): Web3JsAbiCall<string>;
  ownerOf(tokenId: string | number): Web3JsAbiCall<string>;
  transferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  approve(to: string, tokenId: string | number): Web3JsAbiCall<void>;
  getApproved(tokenId: string | number): Web3JsAbiCall<string>;
  setApprovalForAll(operator: string, _approved: boolean): Web3JsAbiCall<void>;
  isApprovedForAll(owner: string, operator: string): Web3JsAbiCall<boolean>;
  safeTransferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number, data: string): Web3JsAbiCall<void>;
}

export interface Initializable {

}

export interface IPriceOracle {
  currentPrice(): Web3JsAbiCall<string>;
  setCurrentPrice(price: string | number): Web3JsAbiCall<void>;
}

export interface IRandoms {
  getRandomSeed(user: string): Web3JsAbiCall<string>;
}

export interface IStakeFromGame {
  stakeFromGame(player: string, amount: string | number): Web3JsAbiCall<void>;
}

export interface IStakingRewards {
  lastTimeRewardApplicable(): Web3JsAbiCall<string>;
  rewardPerToken(): Web3JsAbiCall<string>;
  earned(account: string): Web3JsAbiCall<string>;
  getRewardForDuration(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  minimumStakeTime(): Web3JsAbiCall<string>;
  getStakeRewardDistributionTimeLeft(): Web3JsAbiCall<string>;
  getStakeUnlockTimeLeft(): Web3JsAbiCall<string>;
  rewardRate(): Web3JsAbiCall<string>;
  rewardsDuration(): Web3JsAbiCall<string>;
  stake(amount: string | number): Web3JsAbiCall<void>;
  withdraw(amount: string | number): Web3JsAbiCall<void>;
  getReward(): Web3JsAbiCall<void>;
  exit(): Web3JsAbiCall<void>;
}

export interface ITransferCooldownable {
  lastTransferTimestamp(tokenId: string | number): Web3JsAbiCall<string>;
  transferCooldownEnd(tokenId: string | number): Web3JsAbiCall<string>;
  transferCooldownLeft(tokenId: string | number): Web3JsAbiCall<string>;
}

export interface LinkTokenInterface {
  allowance(owner: string, spender: string): Web3JsAbiCall<string>;
  approve(spender: string, value: string | number): Web3JsAbiCall<boolean>;
  balanceOf(owner: string): Web3JsAbiCall<string>;
  decimals(): Web3JsAbiCall<string>;
  decreaseApproval(spender: string, addedValue: string | number): Web3JsAbiCall<boolean>;
  increaseApproval(spender: string, subtractedValue: string | number): Web3JsAbiCall<void>;
  name(): Web3JsAbiCall<string>;
  symbol(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transfer(to: string, value: string | number): Web3JsAbiCall<boolean>;
  transferAndCall(to: string, value: string | number, data: string): Web3JsAbiCall<boolean>;
  transferFrom(from: string, to: string, value: string | number): Web3JsAbiCall<boolean>;
}

export interface LP2StakingRewardsUpgradeable {
  balanceOf(account: string): Web3JsAbiCall<string>;
  earned(account: string): Web3JsAbiCall<string>;
  enableFailsafeMode(): Web3JsAbiCall<void>;
  exit(): Web3JsAbiCall<void>;
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  getReward(): Web3JsAbiCall<void>;
  getRewardForDuration(): Web3JsAbiCall<string>;
  getStakeRewardDistributionTimeLeft(): Web3JsAbiCall<string>;
  getStakeUnlockTimeLeft(): Web3JsAbiCall<string>;
  initialize(_owner: string, _rewardsDistribution: string, _rewardsToken: string, _stakingToken: string, _minimumStakeTime: string | number): Web3JsAbiCall<void>;
  lastTimeRewardApplicable(): Web3JsAbiCall<string>;
  lastUpdateTime(): Web3JsAbiCall<string>;
  minimumStakeTime(): Web3JsAbiCall<string>;
  notifyRewardAmount(reward: string | number): Web3JsAbiCall<void>;
  owner(): Web3JsAbiCall<string>;
  pause(): Web3JsAbiCall<void>;
  paused(): Web3JsAbiCall<boolean>;
  periodFinish(): Web3JsAbiCall<string>;
  recoverERC20(tokenAddress: string, tokenAmount: string | number): Web3JsAbiCall<void>;
  recoverExtraStakingTokensToOwner(): Web3JsAbiCall<void>;
  recoverOwnStake(): Web3JsAbiCall<void>;
  renounceOwnership(): Web3JsAbiCall<void>;
  rewardPerToken(): Web3JsAbiCall<string>;
  rewardPerTokenStored(): Web3JsAbiCall<string>;
  rewardRate(): Web3JsAbiCall<string>;
  rewards(arg0: string): Web3JsAbiCall<string>;
  rewardsDistribution(): Web3JsAbiCall<string>;
  rewardsDuration(): Web3JsAbiCall<string>;
  rewardsToken(): Web3JsAbiCall<string>;
  setMinimumStakeTime(_minimumStakeTime: string | number): Web3JsAbiCall<void>;
  setRewardsDistribution(_rewardsDistribution: string): Web3JsAbiCall<void>;
  setRewardsDuration(_rewardsDuration: string | number): Web3JsAbiCall<void>;
  stake(amount: string | number): Web3JsAbiCall<void>;
  stakingToken(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  unpause(): Web3JsAbiCall<void>;
  updatePeriodFinish(timestamp: string | number): Web3JsAbiCall<void>;
  userRewardPerTokenPaid(arg0: string): Web3JsAbiCall<string>;
  withdraw(amount: string | number): Web3JsAbiCall<void>;
}

export interface LPStakingRewards {
  acceptOwnership(): Web3JsAbiCall<void>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  earned(account: string): Web3JsAbiCall<string>;
  enableFailsafeMode(): Web3JsAbiCall<void>;
  exit(): Web3JsAbiCall<void>;
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  getReward(): Web3JsAbiCall<void>;
  getRewardForDuration(): Web3JsAbiCall<string>;
  getStakeRewardDistributionTimeLeft(): Web3JsAbiCall<string>;
  getStakeUnlockTimeLeft(): Web3JsAbiCall<string>;
  lastPauseTime(): Web3JsAbiCall<string>;
  lastTimeRewardApplicable(): Web3JsAbiCall<string>;
  lastUpdateTime(): Web3JsAbiCall<string>;
  minimumStakeTime(): Web3JsAbiCall<string>;
  nominateNewOwner(_owner: string): Web3JsAbiCall<void>;
  nominatedOwner(): Web3JsAbiCall<string>;
  notifyRewardAmount(reward: string | number): Web3JsAbiCall<void>;
  owner(): Web3JsAbiCall<string>;
  paused(): Web3JsAbiCall<boolean>;
  periodFinish(): Web3JsAbiCall<string>;
  recoverERC20(tokenAddress: string, tokenAmount: string | number): Web3JsAbiCall<void>;
  recoverExtraStakingTokensToOwner(): Web3JsAbiCall<void>;
  recoverOwnStake(): Web3JsAbiCall<void>;
  rewardPerToken(): Web3JsAbiCall<string>;
  rewardPerTokenStored(): Web3JsAbiCall<string>;
  rewardRate(): Web3JsAbiCall<string>;
  rewards(arg0: string): Web3JsAbiCall<string>;
  rewardsDistribution(): Web3JsAbiCall<string>;
  rewardsDuration(): Web3JsAbiCall<string>;
  rewardsToken(): Web3JsAbiCall<string>;
  setMinimumStakeTime(_minimumStakeTime: string | number): Web3JsAbiCall<void>;
  setPaused(_paused: boolean): Web3JsAbiCall<void>;
  setRewardsDistribution(_rewardsDistribution: string): Web3JsAbiCall<void>;
  setRewardsDuration(_rewardsDuration: string | number): Web3JsAbiCall<void>;
  stake(amount: string | number): Web3JsAbiCall<void>;
  stakingToken(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  updatePeriodFinish(timestamp: string | number): Web3JsAbiCall<void>;
  userRewardPerTokenPaid(arg0: string): Web3JsAbiCall<string>;
  withdraw(amount: string | number): Web3JsAbiCall<void>;
}

export interface LPStakingRewardsUpgradeable {
  balanceOf(account: string): Web3JsAbiCall<string>;
  earned(account: string): Web3JsAbiCall<string>;
  enableFailsafeMode(): Web3JsAbiCall<void>;
  exit(): Web3JsAbiCall<void>;
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  getReward(): Web3JsAbiCall<void>;
  getRewardForDuration(): Web3JsAbiCall<string>;
  getStakeRewardDistributionTimeLeft(): Web3JsAbiCall<string>;
  getStakeUnlockTimeLeft(): Web3JsAbiCall<string>;
  initialize(_owner: string, _rewardsDistribution: string, _rewardsToken: string, _stakingToken: string, _minimumStakeTime: string | number): Web3JsAbiCall<void>;
  lastTimeRewardApplicable(): Web3JsAbiCall<string>;
  lastUpdateTime(): Web3JsAbiCall<string>;
  minimumStakeTime(): Web3JsAbiCall<string>;
  notifyRewardAmount(reward: string | number): Web3JsAbiCall<void>;
  owner(): Web3JsAbiCall<string>;
  pause(): Web3JsAbiCall<void>;
  paused(): Web3JsAbiCall<boolean>;
  periodFinish(): Web3JsAbiCall<string>;
  recoverERC20(tokenAddress: string, tokenAmount: string | number): Web3JsAbiCall<void>;
  recoverExtraStakingTokensToOwner(): Web3JsAbiCall<void>;
  recoverOwnStake(): Web3JsAbiCall<void>;
  renounceOwnership(): Web3JsAbiCall<void>;
  rewardPerToken(): Web3JsAbiCall<string>;
  rewardPerTokenStored(): Web3JsAbiCall<string>;
  rewardRate(): Web3JsAbiCall<string>;
  rewards(arg0: string): Web3JsAbiCall<string>;
  rewardsDistribution(): Web3JsAbiCall<string>;
  rewardsDuration(): Web3JsAbiCall<string>;
  rewardsToken(): Web3JsAbiCall<string>;
  setMinimumStakeTime(_minimumStakeTime: string | number): Web3JsAbiCall<void>;
  setRewardsDistribution(_rewardsDistribution: string): Web3JsAbiCall<void>;
  setRewardsDuration(_rewardsDuration: string | number): Web3JsAbiCall<void>;
  stake(amount: string | number): Web3JsAbiCall<void>;
  stakingToken(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  unpause(): Web3JsAbiCall<void>;
  updatePeriodFinish(timestamp: string | number): Web3JsAbiCall<void>;
  userRewardPerTokenPaid(arg0: string): Web3JsAbiCall<string>;
  withdraw(amount: string | number): Web3JsAbiCall<void>;
}

export interface Math {

}

export interface Migrations {
  last_completed_migration(): Web3JsAbiCall<string>;
  owner(): Web3JsAbiCall<string>;
  setCompleted(completed: string | number): Web3JsAbiCall<void>;
}

export interface MultiAccessUpgradeable {
  initialize(): Web3JsAbiCall<void>;
  grantAccess(to: string): Web3JsAbiCall<void>;
  revokeAccess(from: string): Web3JsAbiCall<void>;
}

export interface NFTMarket {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  defaultTax(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  isTokenBanned(arg0: string): Web3JsAbiCall<boolean>;
  isUserBanned(arg0: string): Web3JsAbiCall<boolean>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  skillToken(): Web3JsAbiCall<string>;
  tax(arg0: string): Web3JsAbiCall<string>;
  taxRecipient(): Web3JsAbiCall<string>;
  initialize(_skillToken: string, _taxRecipient: string): Web3JsAbiCall<void>;
  migrateTo_a98a9ac(_charactersContract: string, _weaponsContract: string): Web3JsAbiCall<void>;
  isTokenAllowed(_tokenAddress: string): Web3JsAbiCall<boolean>;
  getAllowedTokenTypes(): Web3JsAbiCall<string[]>;
  getSellerOfNftID(_tokenAddress: string, _tokenId: string | number): Web3JsAbiCall<string>;
  defaultTaxAsRoundedPercentRoughEstimate(): Web3JsAbiCall<string>;
  getListedTokenTypes(): Web3JsAbiCall<string[]>;
  getListingIDs(_tokenAddress: string): Web3JsAbiCall<string[]>;
  getWeaponListingIDsPage(_tokenAddress: string, _limit: string | number, _pageNumber: string | number, _trait: string | number, _stars: string | number): Web3JsAbiCall<string[]>;
  getCharacterListingIDsPage(_tokenAddress: string, _limit: string | number, _pageNumber: string | number, _trait: string | number, _minLevel: string | number, _maxLevel: string | number): Web3JsAbiCall<string[]>;
  getNumberOfListingsBySeller(_tokenAddress: string, _seller: string): Web3JsAbiCall<string>;
  getListingIDsBySeller(_tokenAddress: string, _seller: string): Web3JsAbiCall<string[]>;
  getNumberOfListingsForToken(_tokenAddress: string): Web3JsAbiCall<string>;
  getNumberOfCharacterListings(_tokenAddress: string, _trait: string | number, _minLevel: string | number, _maxLevel: string | number): Web3JsAbiCall<string>;
  getNumberOfWeaponListings(_tokenAddress: string, _trait: string | number, _stars: string | number): Web3JsAbiCall<string>;
  getSellerPrice(_tokenAddress: string, _id: string | number): Web3JsAbiCall<string>;
  getFinalPrice(_tokenAddress: string, _id: string | number): Web3JsAbiCall<string>;
  getTaxOnListing(_tokenAddress: string, _id: string | number): Web3JsAbiCall<string>;
  addListing(_tokenAddress: string, _id: string | number, _price: string | number): Web3JsAbiCall<void>;
  changeListingPrice(_tokenAddress: string, _id: string | number, _newPrice: string | number): Web3JsAbiCall<void>;
  cancelListing(_tokenAddress: string, _id: string | number): Web3JsAbiCall<void>;
  purchaseListing(_tokenAddress: string, _id: string | number, _maxPrice: string | number): Web3JsAbiCall<void>;
  setTaxRecipient(_taxRecipient: string): Web3JsAbiCall<void>;
  setDefaultTax(_defaultTax: string | number): Web3JsAbiCall<void>;
  setDefaultTaxAsRational(_numerator: string | number, _denominator: string | number): Web3JsAbiCall<void>;
  setDefaultTaxAsPercent(_percent: string | number): Web3JsAbiCall<void>;
  setTaxOnTokenType(_tokenAddress: string, _newTax: string | number): Web3JsAbiCall<void>;
  setTaxOnTokenTypeAsRational(_tokenAddress: string, _numerator: string | number, _denominator: string | number): Web3JsAbiCall<void>;
  setTaxOnTokenTypeAsPercent(_tokenAddress: string, _percent: string | number): Web3JsAbiCall<void>;
  setUserBan(user: string, to: boolean): Web3JsAbiCall<void>;
  allowToken(_tokenAddress: string): Web3JsAbiCall<void>;
  disallowToken(_tokenAddress: string): Web3JsAbiCall<void>;
  recoverSkill(amount: string | number): Web3JsAbiCall<void>;
  onERC721Received(arg0: string, arg1: string, _id: string | number, arg3: string): Web3JsAbiCall<string>;
}

export interface OwnableUpgradeable {
  owner(): Web3JsAbiCall<string>;
  renounceOwnership(): Web3JsAbiCall<void>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
}

export interface Owned {
  nominatedOwner(): Web3JsAbiCall<string>;
  owner(): Web3JsAbiCall<string>;
  nominateNewOwner(_owner: string): Web3JsAbiCall<void>;
  acceptOwnership(): Web3JsAbiCall<void>;
}

export interface Pausable {
  paused(): Web3JsAbiCall<boolean>;
}

export interface PausableUpgradeable {
  paused(): Web3JsAbiCall<boolean>;
}

export interface Promos {
  BIT_FIRST_CHARACTER(): Web3JsAbiCall<string>;
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  bits(arg0: string): Web3JsAbiCall<string>;
  firstCharacterPromoInGameOnlyFundsGivenInUsd(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  migrateTo_f73df27(): Web3JsAbiCall<void>;
  setBit(user: string, bit: string | number): Web3JsAbiCall<void>;
  unsetBit(user: string, bit: string | number): Web3JsAbiCall<void>;
  getBit(user: string, bit: string | number): Web3JsAbiCall<boolean>;
  firstCharacterPromoInGameOnlyFundsGivenInUsdAsCents(): Web3JsAbiCall<string>;
  setFirstCharacterPromoInGameOnlyFundsGivenInUsdAsCents(_usdCents: string | number): Web3JsAbiCall<void>;
  setFirstCharacterPromoInGameOnlyFundsGivenInUsdAsRational(_numerator: string | number, _denominator: string | number): Web3JsAbiCall<void>;
}

export interface Raid {
  grantAccess(to: string): Web3JsAbiCall<void>;
  revokeAccess(from: string): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  initialize(gameContract: string): Web3JsAbiCall<void>;
  reset(): Web3JsAbiCall<void>;
  isRaider(character: string | number): Web3JsAbiCall<boolean>;
  getRaiderCount(): Web3JsAbiCall<string>;
  getExpectedFinishTime(): Web3JsAbiCall<string>;
  setExpectedFinishTime(time: string | number): Web3JsAbiCall<void>;
  addRaider(characterID: string | number, weaponID: string | number): Web3JsAbiCall<void>;
  completeRaid(seed: string | number): Web3JsAbiCall<void>;
}

export interface RaidBasic {
  getExpectedFinishTime(): Web3JsAbiCall<string>;
  getRaiderCount(): Web3JsAbiCall<string>;
  grantAccess(to: string): Web3JsAbiCall<void>;
  isRaider(character: string | number): Web3JsAbiCall<boolean>;
  revokeAccess(from: string): Web3JsAbiCall<void>;
  setExpectedFinishTime(time: string | number): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  initialize(gameContract: string): Web3JsAbiCall<void>;
  addRaider(characterID: string | number, weaponID: string | number): Web3JsAbiCall<void>;
  completeRaid(seed: string | number): Web3JsAbiCall<void>;
  reset(): Web3JsAbiCall<void>;
  setBossTrait(trait: string | number): Web3JsAbiCall<void>;
  getTotalPower(): Web3JsAbiCall<string>;
  addRewardWeapon(id: string | number): Web3JsAbiCall<void>;
  mintRewardWeapon(stars: string | number, seed: string | number): Web3JsAbiCall<void>;
  removeRewardWeapon(index: string | number): Web3JsAbiCall<void>;
  getWeaponDrops(): Web3JsAbiCall<string[]>;
  setStaminaDrainSeconds(secs: string | number): Web3JsAbiCall<void>;
  getStaminaDrainSeconds(): Web3JsAbiCall<string>;
}

export interface RandomUtil {

}

export interface ReentrancyGuard {

}

export interface ReentrancyGuardUpgradeable {

}

export interface RewardsDistributionRecipient {
  acceptOwnership(): Web3JsAbiCall<void>;
  nominateNewOwner(_owner: string): Web3JsAbiCall<void>;
  nominatedOwner(): Web3JsAbiCall<string>;
  owner(): Web3JsAbiCall<string>;
  rewardsDistribution(): Web3JsAbiCall<string>;
  notifyRewardAmount(reward: string | number): Web3JsAbiCall<void>;
  setRewardsDistribution(_rewardsDistribution: string): Web3JsAbiCall<void>;
}

export interface RewardsDistributionRecipientUpgradeable {
  owner(): Web3JsAbiCall<string>;
  renounceOwnership(): Web3JsAbiCall<void>;
  rewardsDistribution(): Web3JsAbiCall<string>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  notifyRewardAmount(reward: string | number): Web3JsAbiCall<void>;
  setRewardsDistribution(_rewardsDistribution: string): Web3JsAbiCall<void>;
}

export interface SafeERC20 {

}

export interface SafeMath {

}

export interface SafeMathChainlink {

}

export interface SafeMathUpgradeable {

}

export interface SkillStakingRewards {
  acceptOwnership(): Web3JsAbiCall<void>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  earned(account: string): Web3JsAbiCall<string>;
  enableFailsafeMode(): Web3JsAbiCall<void>;
  exit(): Web3JsAbiCall<void>;
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  getReward(): Web3JsAbiCall<void>;
  getRewardForDuration(): Web3JsAbiCall<string>;
  getStakeRewardDistributionTimeLeft(): Web3JsAbiCall<string>;
  getStakeUnlockTimeLeft(): Web3JsAbiCall<string>;
  lastPauseTime(): Web3JsAbiCall<string>;
  lastTimeRewardApplicable(): Web3JsAbiCall<string>;
  lastUpdateTime(): Web3JsAbiCall<string>;
  minimumStakeTime(): Web3JsAbiCall<string>;
  nominateNewOwner(_owner: string): Web3JsAbiCall<void>;
  nominatedOwner(): Web3JsAbiCall<string>;
  notifyRewardAmount(reward: string | number): Web3JsAbiCall<void>;
  owner(): Web3JsAbiCall<string>;
  paused(): Web3JsAbiCall<boolean>;
  periodFinish(): Web3JsAbiCall<string>;
  recoverERC20(tokenAddress: string, tokenAmount: string | number): Web3JsAbiCall<void>;
  recoverExtraStakingTokensToOwner(): Web3JsAbiCall<void>;
  recoverOwnStake(): Web3JsAbiCall<void>;
  rewardPerToken(): Web3JsAbiCall<string>;
  rewardPerTokenStored(): Web3JsAbiCall<string>;
  rewardRate(): Web3JsAbiCall<string>;
  rewards(arg0: string): Web3JsAbiCall<string>;
  rewardsDistribution(): Web3JsAbiCall<string>;
  rewardsDuration(): Web3JsAbiCall<string>;
  rewardsToken(): Web3JsAbiCall<string>;
  setMinimumStakeTime(_minimumStakeTime: string | number): Web3JsAbiCall<void>;
  setPaused(_paused: boolean): Web3JsAbiCall<void>;
  setRewardsDistribution(_rewardsDistribution: string): Web3JsAbiCall<void>;
  setRewardsDuration(_rewardsDuration: string | number): Web3JsAbiCall<void>;
  stake(amount: string | number): Web3JsAbiCall<void>;
  stakingToken(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  updatePeriodFinish(timestamp: string | number): Web3JsAbiCall<void>;
  userRewardPerTokenPaid(arg0: string): Web3JsAbiCall<string>;
  withdraw(amount: string | number): Web3JsAbiCall<void>;
}

export interface SkillStakingRewardsUpgradeable {
  balanceOf(account: string): Web3JsAbiCall<string>;
  earned(account: string): Web3JsAbiCall<string>;
  enableFailsafeMode(): Web3JsAbiCall<void>;
  exit(): Web3JsAbiCall<void>;
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  game(): Web3JsAbiCall<string>;
  getReward(): Web3JsAbiCall<void>;
  getRewardForDuration(): Web3JsAbiCall<string>;
  getStakeRewardDistributionTimeLeft(): Web3JsAbiCall<string>;
  getStakeUnlockTimeLeft(): Web3JsAbiCall<string>;
  initialize(_owner: string, _rewardsDistribution: string, _rewardsToken: string, _stakingToken: string, _minimumStakeTime: string | number): Web3JsAbiCall<void>;
  lastTimeRewardApplicable(): Web3JsAbiCall<string>;
  lastUpdateTime(): Web3JsAbiCall<string>;
  minimumStakeTime(): Web3JsAbiCall<string>;
  notifyRewardAmount(reward: string | number): Web3JsAbiCall<void>;
  owner(): Web3JsAbiCall<string>;
  pause(): Web3JsAbiCall<void>;
  paused(): Web3JsAbiCall<boolean>;
  periodFinish(): Web3JsAbiCall<string>;
  recoverERC20(tokenAddress: string, tokenAmount: string | number): Web3JsAbiCall<void>;
  recoverExtraStakingTokensToOwner(): Web3JsAbiCall<void>;
  recoverOwnStake(): Web3JsAbiCall<void>;
  renounceOwnership(): Web3JsAbiCall<void>;
  rewardPerToken(): Web3JsAbiCall<string>;
  rewardPerTokenStored(): Web3JsAbiCall<string>;
  rewardRate(): Web3JsAbiCall<string>;
  rewards(arg0: string): Web3JsAbiCall<string>;
  rewardsDistribution(): Web3JsAbiCall<string>;
  rewardsDuration(): Web3JsAbiCall<string>;
  rewardsToken(): Web3JsAbiCall<string>;
  setMinimumStakeTime(_minimumStakeTime: string | number): Web3JsAbiCall<void>;
  setRewardsDistribution(_rewardsDistribution: string): Web3JsAbiCall<void>;
  setRewardsDuration(_rewardsDuration: string | number): Web3JsAbiCall<void>;
  stake(amount: string | number): Web3JsAbiCall<void>;
  stakingToken(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  unpause(): Web3JsAbiCall<void>;
  updatePeriodFinish(timestamp: string | number): Web3JsAbiCall<void>;
  userRewardPerTokenPaid(arg0: string): Web3JsAbiCall<string>;
  withdraw(amount: string | number): Web3JsAbiCall<void>;
  migrateTo_23b3a8b(_game: string): Web3JsAbiCall<void>;
  stakeFromGame(player: string, amount: string | number): Web3JsAbiCall<void>;
}

export interface SkillToken {
  allowance(owner: string, spender: string): Web3JsAbiCall<string>;
  approve(spender: string, amount: string | number): Web3JsAbiCall<boolean>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  decimals(): Web3JsAbiCall<string>;
  decreaseAllowance(spender: string, subtractedValue: string | number): Web3JsAbiCall<boolean>;
  increaseAllowance(spender: string, addedValue: string | number): Web3JsAbiCall<boolean>;
  name(): Web3JsAbiCall<string>;
  symbol(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transfer(recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
  transferFrom(sender: string, recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
}

export interface StakingRewards {
  acceptOwnership(): Web3JsAbiCall<void>;
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  lastPauseTime(): Web3JsAbiCall<string>;
  lastUpdateTime(): Web3JsAbiCall<string>;
  minimumStakeTime(): Web3JsAbiCall<string>;
  nominateNewOwner(_owner: string): Web3JsAbiCall<void>;
  nominatedOwner(): Web3JsAbiCall<string>;
  owner(): Web3JsAbiCall<string>;
  paused(): Web3JsAbiCall<boolean>;
  periodFinish(): Web3JsAbiCall<string>;
  rewardPerTokenStored(): Web3JsAbiCall<string>;
  rewardRate(): Web3JsAbiCall<string>;
  rewards(arg0: string): Web3JsAbiCall<string>;
  rewardsDistribution(): Web3JsAbiCall<string>;
  rewardsDuration(): Web3JsAbiCall<string>;
  rewardsToken(): Web3JsAbiCall<string>;
  setPaused(_paused: boolean): Web3JsAbiCall<void>;
  setRewardsDistribution(_rewardsDistribution: string): Web3JsAbiCall<void>;
  stakingToken(): Web3JsAbiCall<string>;
  userRewardPerTokenPaid(arg0: string): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  lastTimeRewardApplicable(): Web3JsAbiCall<string>;
  rewardPerToken(): Web3JsAbiCall<string>;
  earned(account: string): Web3JsAbiCall<string>;
  getRewardForDuration(): Web3JsAbiCall<string>;
  getStakeRewardDistributionTimeLeft(): Web3JsAbiCall<string>;
  getStakeUnlockTimeLeft(): Web3JsAbiCall<string>;
  stake(amount: string | number): Web3JsAbiCall<void>;
  withdraw(amount: string | number): Web3JsAbiCall<void>;
  getReward(): Web3JsAbiCall<void>;
  exit(): Web3JsAbiCall<void>;
  recoverOwnStake(): Web3JsAbiCall<void>;
  notifyRewardAmount(reward: string | number): Web3JsAbiCall<void>;
  updatePeriodFinish(timestamp: string | number): Web3JsAbiCall<void>;
  recoverERC20(tokenAddress: string, tokenAmount: string | number): Web3JsAbiCall<void>;
  setRewardsDuration(_rewardsDuration: string | number): Web3JsAbiCall<void>;
  setMinimumStakeTime(_minimumStakeTime: string | number): Web3JsAbiCall<void>;
  enableFailsafeMode(): Web3JsAbiCall<void>;
  recoverExtraStakingTokensToOwner(): Web3JsAbiCall<void>;
}

export interface StakingRewardsUpgradeable {
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  lastUpdateTime(): Web3JsAbiCall<string>;
  minimumStakeTime(): Web3JsAbiCall<string>;
  owner(): Web3JsAbiCall<string>;
  paused(): Web3JsAbiCall<boolean>;
  periodFinish(): Web3JsAbiCall<string>;
  renounceOwnership(): Web3JsAbiCall<void>;
  rewardPerTokenStored(): Web3JsAbiCall<string>;
  rewardRate(): Web3JsAbiCall<string>;
  rewards(arg0: string): Web3JsAbiCall<string>;
  rewardsDistribution(): Web3JsAbiCall<string>;
  rewardsDuration(): Web3JsAbiCall<string>;
  rewardsToken(): Web3JsAbiCall<string>;
  setRewardsDistribution(_rewardsDistribution: string): Web3JsAbiCall<void>;
  stakingToken(): Web3JsAbiCall<string>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  userRewardPerTokenPaid(arg0: string): Web3JsAbiCall<string>;
  initialize(_owner: string, _rewardsDistribution: string, _rewardsToken: string, _stakingToken: string, _minimumStakeTime: string | number): Web3JsAbiCall<void>;
  totalSupply(): Web3JsAbiCall<string>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  lastTimeRewardApplicable(): Web3JsAbiCall<string>;
  rewardPerToken(): Web3JsAbiCall<string>;
  earned(account: string): Web3JsAbiCall<string>;
  getRewardForDuration(): Web3JsAbiCall<string>;
  getStakeRewardDistributionTimeLeft(): Web3JsAbiCall<string>;
  getStakeUnlockTimeLeft(): Web3JsAbiCall<string>;
  stake(amount: string | number): Web3JsAbiCall<void>;
  withdraw(amount: string | number): Web3JsAbiCall<void>;
  getReward(): Web3JsAbiCall<void>;
  exit(): Web3JsAbiCall<void>;
  recoverOwnStake(): Web3JsAbiCall<void>;
  notifyRewardAmount(reward: string | number): Web3JsAbiCall<void>;
  updatePeriodFinish(timestamp: string | number): Web3JsAbiCall<void>;
  recoverERC20(tokenAddress: string, tokenAmount: string | number): Web3JsAbiCall<void>;
  setRewardsDuration(_rewardsDuration: string | number): Web3JsAbiCall<void>;
  setMinimumStakeTime(_minimumStakeTime: string | number): Web3JsAbiCall<void>;
  enableFailsafeMode(): Web3JsAbiCall<void>;
  recoverExtraStakingTokensToOwner(): Web3JsAbiCall<void>;
  pause(): Web3JsAbiCall<void>;
  unpause(): Web3JsAbiCall<void>;
}

export interface StringsUpgradeable {

}

export interface SynthetixPausable {
  acceptOwnership(): Web3JsAbiCall<void>;
  lastPauseTime(): Web3JsAbiCall<string>;
  nominateNewOwner(_owner: string): Web3JsAbiCall<void>;
  nominatedOwner(): Web3JsAbiCall<string>;
  owner(): Web3JsAbiCall<string>;
  paused(): Web3JsAbiCall<boolean>;
  setPaused(_paused: boolean): Web3JsAbiCall<void>;
}

export interface TransferCooldownableInterfaceId {

}

export interface VRFConsumerBase {
  rawFulfillRandomness(requestId: string, randomness: string | number): Web3JsAbiCall<void>;
}

export interface VRFRequestIDBase {

}

export interface WaxBridge {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  LIMIT_PERIOD(): Web3JsAbiCall<string>;
  WAX_BRIDGE(): Web3JsAbiCall<string>;
  bnbLimitPerPeriod(): Web3JsAbiCall<string>;
  bnbLimitTimestamp(arg0: string): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  latestWaxChainBlockNumberProcessed(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  totalOwedBnb(): Web3JsAbiCall<string>;
  withdrawableBnb(arg0: string): Web3JsAbiCall<string>;
  initialize(): Web3JsAbiCall<void>;
  getWithdrawnBnbDuringPeriod(): Web3JsAbiCall<string>;
  getRemainingWithdrawableBnbDuringPeriod(): Web3JsAbiCall<string>;
  getTimeUntilLimitExpires(): Web3JsAbiCall<string>;
  setDailyBnbWeiLimit(_dailyBnbWeiLimit: string | number): Web3JsAbiCall<void>;
  processWaxConversions(_latestWaxChainBlockNumberProcessed: string | number, _to: string[], _value: string[]): Web3JsAbiCall<void>;
  withdraw(_maxAmount: string | number): Web3JsAbiCall<string>;
}

export interface Weapons {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  RECEIVE_DOES_NOT_SET_TRANSFER_TIMESTAMP(): Web3JsAbiCall<string>;
  TRANSFER_COOLDOWN(): Web3JsAbiCall<string>;
  approve(to: string, tokenId: string | number): Web3JsAbiCall<void>;
  balanceOf(owner: string): Web3JsAbiCall<string>;
  baseURI(): Web3JsAbiCall<string>;
  burnPointMultiplier(): Web3JsAbiCall<string>;
  fiveStarBurnPowerPerPoint(): Web3JsAbiCall<string>;
  fourStarBurnPowerPerPoint(): Web3JsAbiCall<string>;
  getApproved(tokenId: string | number): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  isApprovedForAll(owner: string, operator: string): Web3JsAbiCall<boolean>;
  lastTransferTimestamp(arg0: string | number): Web3JsAbiCall<string>;
  lowStarBurnPowerPerPoint(): Web3JsAbiCall<string>;
  name(): Web3JsAbiCall<string>;
  oneFrac(): Web3JsAbiCall<string>;
  ownerOf(tokenId: string | number): Web3JsAbiCall<string>;
  powerMultPerPointBasic(): Web3JsAbiCall<string>;
  powerMultPerPointMatching(): Web3JsAbiCall<string>;
  powerMultPerPointPWR(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number, _data: string): Web3JsAbiCall<void>;
  setApprovalForAll(operator: string, approved: boolean): Web3JsAbiCall<void>;
  supportsInterface(interfaceId: string): Web3JsAbiCall<boolean>;
  symbol(): Web3JsAbiCall<string>;
  tokenByIndex(index: string | number): Web3JsAbiCall<string>;
  tokenOfOwnerByIndex(owner: string, index: string | number): Web3JsAbiCall<string>;
  tokenURI(tokenId: string | number): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  migrateTo_e55d8c5(): Web3JsAbiCall<void>;
  migrateTo_aa9da90(): Web3JsAbiCall<void>;
  migrateTo_951a020(): Web3JsAbiCall<void>;
  __ITransferCooldownable_interfaceId(): Web3JsAbiCall<string>;
  transferCooldownEnd(tokenId: string | number): Web3JsAbiCall<string>;
  transferCooldownLeft(tokenId: string | number): Web3JsAbiCall<string>;
  get(id: string | number): Web3JsAbiCall<[string, string, string, string, string, string, string, string, string, string, string]>;
  mint(minter: string, seed: string | number): Web3JsAbiCall<string>;
  mintWeaponWithStars(minter: string, stars: string | number, seed: string | number): Web3JsAbiCall<string>;
  performMintWeapon(minter: string, properties: string | number, stat1: string | number, stat2: string | number, stat3: string | number, cosmeticSeed: string | number): Web3JsAbiCall<string>;
  getRandomProperties(stars: string | number, seed: string | number): Web3JsAbiCall<string>;
  getRandomStat(minRoll: string | number, maxRoll: string | number, seed: string | number, seed2: string | number): Web3JsAbiCall<string>;
  getRandomCosmetic(seed: string | number, seed2: string | number, limit: string | number): Web3JsAbiCall<string>;
  getStatMinRoll(stars: string | number): Web3JsAbiCall<string>;
  getStatMaxRoll(stars: string | number): Web3JsAbiCall<string>;
  getStatCount(stars: string | number): Web3JsAbiCall<string>;
  getProperties(id: string | number): Web3JsAbiCall<string>;
  getStars(id: string | number): Web3JsAbiCall<string>;
  getStarsFromProperties(properties: string | number): Web3JsAbiCall<string>;
  getTrait(id: string | number): Web3JsAbiCall<string>;
  getTraitFromProperties(properties: string | number): Web3JsAbiCall<string>;
  getStatPattern(id: string | number): Web3JsAbiCall<string>;
  getStatPatternFromProperties(properties: string | number): Web3JsAbiCall<string>;
  getStat1Trait(statPattern: string | number): Web3JsAbiCall<string>;
  getStat2Trait(statPattern: string | number): Web3JsAbiCall<string>;
  getStat3Trait(statPattern: string | number): Web3JsAbiCall<string>;
  getLevel(id: string | number): Web3JsAbiCall<string>;
  getStat1(id: string | number): Web3JsAbiCall<string>;
  getStat2(id: string | number): Web3JsAbiCall<string>;
  getStat3(id: string | number): Web3JsAbiCall<string>;
  getPowerMultiplier(id: string | number): Web3JsAbiCall<string>;
  getPowerMultiplierForTrait(properties: string | number, stat1: string | number, stat2: string | number, stat3: string | number, trait: string | number): Web3JsAbiCall<string>;
  reforge(reforgeID: string | number, burnID: string | number): Web3JsAbiCall<void>;
  getBonusPower(id: string | number): Web3JsAbiCall<string>;
  getBonusPowerForFight(id: string | number, level: string | number): Web3JsAbiCall<string>;
  getFightData(id: string | number, charTrait: string | number): Web3JsAbiCall<[string, string, string, string]>;
  setBurnPointMultiplier(multiplier: string | number): Web3JsAbiCall<void>;
  setLowStarBurnPowerPerPoint(powerPerBurnPoint: string | number): Web3JsAbiCall<void>;
  setFourStarBurnPowerPerPoint(powerPerBurnPoint: string | number): Web3JsAbiCall<void>;
  setFiveStarBurnPowerPerPoint(powerPerBurnPoint: string | number): Web3JsAbiCall<void>;
}
