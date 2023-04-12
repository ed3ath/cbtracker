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

export interface Blacksmith {
  CURRENCY_SKILL(): Web3JsAbiCall<string>;
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME(): Web3JsAbiCall<string>;
  ITEM_CHARACTER_RENAME(): Web3JsAbiCall<string>;
  ITEM_CHARACTER_TRAITCHANGE_EARTH(): Web3JsAbiCall<string>;
  ITEM_CHARACTER_TRAITCHANGE_FIRE(): Web3JsAbiCall<string>;
  ITEM_CHARACTER_TRAITCHANGE_LIGHTNING(): Web3JsAbiCall<string>;
  ITEM_CHARACTER_TRAITCHANGE_WATER(): Web3JsAbiCall<string>;
  ITEM_COSMETIC_CHARACTER(): Web3JsAbiCall<string>;
  ITEM_COSMETIC_WEAPON(): Web3JsAbiCall<string>;
  ITEM_SHIELD(): Web3JsAbiCall<string>;
  ITEM_WEAPON_RENAME(): Web3JsAbiCall<string>;
  LINK_KING_ORACLE(): Web3JsAbiCall<string>;
  LINK_SAFE_RANDOMS(): Web3JsAbiCall<string>;
  LINK_SKILL_ORACLE_2(): Web3JsAbiCall<string>;
  SHIELD_SEED(): Web3JsAbiCall<string>;
  VAR_PURCHASE_SHIELD_SUPPLY(): Web3JsAbiCall<string>;
  VAR_PURCHASE_SHIELD_TYPE(): Web3JsAbiCall<string>;
  cbkLandSale(): Web3JsAbiCall<string>;
  game(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  itemAddresses(arg0: string | number): Web3JsAbiCall<string>;
  itemFlatPrices(arg0: string | number): Web3JsAbiCall<string>;
  itemSeriesFlatPrices(arg0: string | number, arg1: string | number): Web3JsAbiCall<string>;
  landPrices(arg0: string | number, arg1: string | number): Web3JsAbiCall<string>;
  links(arg0: string | number): Web3JsAbiCall<string>;
  numberParameters(arg0: string | number): Web3JsAbiCall<string>;
  randoms(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  shields(): Web3JsAbiCall<string>;
  tickets(arg0: string): Web3JsAbiCall<string>;
  weapons(): Web3JsAbiCall<string>;
  initialize(_weapons: string, _randoms: string): Web3JsAbiCall<void>;
  migrateRandoms(_newRandoms: string): Web3JsAbiCall<void>;
  migrateTo_61c10da(_shields: string, _game: string): Web3JsAbiCall<void>;
  migrateTo_16884dd(_characterRename: string, _weaponRename: string, _charFireTraitChange: string, _charEarthTraitChange: string, _charWaterTraitChange: string, _charLightningTraitChange: string): Web3JsAbiCall<void>;
  migrateTo_bcdf4c(_cbkLandSale: string): Web3JsAbiCall<void>;
  recoverToken(tokenAddress: string, amount: string | number): Web3JsAbiCall<void>;
  hasSeed(seedId: string | number, shieldType: string | number): Web3JsAbiCall<boolean>;
  generateShieldSeed(): Web3JsAbiCall<void>;
  claimShield(): Web3JsAbiCall<void>;
  getAddressOfItem(itemIndex: string | number): Web3JsAbiCall<string>;
  getFlatPriceOfItem(itemIndex: string | number): Web3JsAbiCall<string>;
  getFlatPriceOfSeriesItem(itemIndex: string | number, seriesIndex: string | number): Web3JsAbiCall<string>;
  getCurrency(currency: string | number): Web3JsAbiCall<string>;
  vars(varField: string | number): Web3JsAbiCall<string>;
  setAddressOfItem(itemIndex: string | number, to: string): Web3JsAbiCall<void>;
  setFlatPriceOfItem(itemIndex: string | number, flatWeiPrice: string | number): Web3JsAbiCall<void>;
  setFlatPriceOfItemSeries(itemIndex: string | number, seriesIndices: string[], seriesPrices: string[]): Web3JsAbiCall<void>;
  setCurrency(currency: string | number, currencyAddress: string, forced: boolean): Web3JsAbiCall<void>;
  setLink(linkId: string | number, linkAddress: string): Web3JsAbiCall<void>;
  setVar(varField: string | number, value: string | number): Web3JsAbiCall<void>;
  setVars(varFields: string[], values: string[]): Web3JsAbiCall<void>;
  setCharacterRenamePrice(newPrice: string | number): Web3JsAbiCall<void>;
  characterRenamePrice(): Web3JsAbiCall<string>;
  purchaseCharacterRenameTag(paying: string | number): Web3JsAbiCall<void>;
  purchaseCharacterRenameTagDeal(paying: string | number): Web3JsAbiCall<void>;
  setWeaponRenamePrice(newPrice: string | number): Web3JsAbiCall<void>;
  weaponRenamePrice(): Web3JsAbiCall<string>;
  purchaseWeaponRenameTag(paying: string | number): Web3JsAbiCall<void>;
  purchaseWeaponRenameTagDeal(paying: string | number): Web3JsAbiCall<void>;
  setCharacterTraitChangePrice(newPrice: string | number): Web3JsAbiCall<void>;
  characterTraitChangePrice(): Web3JsAbiCall<string>;
  purchaseCharacterFireTraitChange(paying: string | number): Web3JsAbiCall<void>;
  purchaseCharacterEarthTraitChange(paying: string | number): Web3JsAbiCall<void>;
  purchaseCharacterWaterTraitChange(paying: string | number): Web3JsAbiCall<void>;
  purchaseCharacterLightningTraitChange(paying: string | number): Web3JsAbiCall<void>;
  setWeaponCosmeticPrice(cosmetic: string | number, newPrice: string | number): Web3JsAbiCall<void>;
  getWeaponCosmeticPrice(cosmetic: string | number): Web3JsAbiCall<string>;
  purchaseWeaponCosmetic(cosmetic: string | number, paying: string | number): Web3JsAbiCall<void>;
  setCharacterCosmeticPrice(cosmetic: string | number, newPrice: string | number): Web3JsAbiCall<void>;
  getCharacterCosmeticPrice(cosmetic: string | number): Web3JsAbiCall<string>;
  purchaseCharacterCosmetic(cosmetic: string | number, paying: string | number): Web3JsAbiCall<void>;
  purchaseT1CBKLand(paying: string | number, currency: string | number): Web3JsAbiCall<void>;
  purchaseT2CBKLand(paying: string | number, chunkId: string | number, currency: string | number): Web3JsAbiCall<void>;
  purchaseT3CBKLand(paying: string | number, chunkId: string | number, currency: string | number): Web3JsAbiCall<void>;
  getCBKLandPrice(tier: string | number, currency: string | number): Web3JsAbiCall<string>;
  getOracledTokenPerUSD(currency: string | number): Web3JsAbiCall<string>;
  setCBKLandPrice(tier: string | number, newPrice: string | number, currency: string | number): Web3JsAbiCall<void>;
}

export interface BurningManager {
  BURNER_ROLE(): Web3JsAbiCall<string>;
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  LINK_EQUIPMENT_MANAGER(): Web3JsAbiCall<string>;
  PAYMENT_USING_STAKED_SKILL_COST_AFTER_DISCOUNT(): Web3JsAbiCall<string>;
  USERVAR_NON_GENESIS_SOUL_SUPPLY(): Web3JsAbiCall<string>;
  USERVAR_SOUL_SUPPLY(): Web3JsAbiCall<string>;
  VAR_BURN_POWER_MULTIPLIER(): Web3JsAbiCall<string>;
  VAR_ROI_DAYS(): Web3JsAbiCall<string>;
  burnWeaponFee(): Web3JsAbiCall<string>;
  characters(): Web3JsAbiCall<string>;
  game(): Web3JsAbiCall<string>;
  garrison(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  links(arg0: string | number): Web3JsAbiCall<string>;
  priceOracleSkillPerUsd(): Web3JsAbiCall<string>;
  reforgeWeaponFee(): Web3JsAbiCall<string>;
  reforgeWeaponWithDustFee(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  userVars(arg0: string, arg1: string | number): Web3JsAbiCall<string>;
  vars(arg0: string | number): Web3JsAbiCall<string>;
  weapons(): Web3JsAbiCall<string>;
  initialize(_characters: string, _garrison: string, _game: string): Web3JsAbiCall<void>;
  migrateTo_e1fe97c(_weapons: string, _priceOracleSkillPerUsd: string): Web3JsAbiCall<void>;
  burnCharactersFee(burnIds: string[]): Web3JsAbiCall<string>;
  burnCharacterFee(burnId: string | number): Web3JsAbiCall<string>;
  usdToSkill(usdAmount: string | number): Web3JsAbiCall<string>;
  burnCharacterFromMarket(burnId: string | number): Web3JsAbiCall<void>;
  burnCharactersIntoCharacter(burnIds: string[], targetId: string | number): Web3JsAbiCall<void>;
  burnCharactersIntoSoul(burnIds: string[]): Web3JsAbiCall<void>;
  transferSoul(targetAddress: string, soulAmount: string | number): Web3JsAbiCall<void>;
  transferNonGenesisSoul(targetAddress: string, soulAmount: string | number): Web3JsAbiCall<void>;
  upgradeCharacterWithSoul(targetId: string | number, soulAmount: string | number): Web3JsAbiCall<void>;
  upgradeNonGenesisCharacterWithSoul(targetId: string | number, soulAmount: string | number): Web3JsAbiCall<void>;
  burnWeapons(burnIDs: string[]): Web3JsAbiCall<void>;
  reforgeWeapon(reforgeID: string | number, burnID: string | number): Web3JsAbiCall<void>;
  reforgeWeaponWithDust(reforgeID: string | number, amountLB: string | number, amount4B: string | number, amount5B: string | number): Web3JsAbiCall<void>;
  burnWeaponsUsingStakedSkill(burnIDs: string[]): Web3JsAbiCall<void>;
  reforgeWeaponUsingStakedSkill(reforgeID: string | number, burnID: string | number): Web3JsAbiCall<void>;
  reforgeWeaponWithDustUsingStakedSkill(reforgeID: string | number, amountLB: string | number, amount4B: string | number, amount5B: string | number): Web3JsAbiCall<void>;
  giveAwaySoul(user: string, soulAmount: string | number): Web3JsAbiCall<void>;
  burnSoul(user: string, soulAmount: string | number): Web3JsAbiCall<void>;
  setVar(varField: string | number, value: string | number): Web3JsAbiCall<void>;
  setLink(linkId: string | number, linkAddress: string): Web3JsAbiCall<void>;
  setBurnWeaponValue(cents: string | number): Web3JsAbiCall<void>;
  setReforgeWeaponValue(cents: string | number): Web3JsAbiCall<void>;
  setReforgeWeaponWithDustValue(cents: string | number): Web3JsAbiCall<void>;
}

export interface BytesChunker {
  toBytes32Array(data: string): Web3JsAbiCall<string[]>;
}

export interface CBKLand {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  LAR(): Web3JsAbiCall<string>;
  LBT(): Web3JsAbiCall<string>;
  LC(): Web3JsAbiCall<string>;
  LT(): Web3JsAbiCall<string>;
  LX(): Web3JsAbiCall<string>;
  LY(): Web3JsAbiCall<string>;
  NO_OWNED_LIMIT(): Web3JsAbiCall<string>;
  TSU(): Web3JsAbiCall<string>;
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
  name(): Web3JsAbiCall<string>;
  ownerOf(tokenId: string | number): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number, _data: string): Web3JsAbiCall<void>;
  setApprovalForAll(operator: string, approved: boolean): Web3JsAbiCall<void>;
  supportsInterface(interfaceId: string): Web3JsAbiCall<boolean>;
  symbol(): Web3JsAbiCall<string>;
  tokenByIndex(index: string | number): Web3JsAbiCall<string>;
  tokenOfOwnerByIndex(owner: string, index: string | number): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  get(id: string | number): Web3JsAbiCall<[string, string, string, string, string]>;
  getOwned(owner: string): Web3JsAbiCall<string[]>;
  getLandReseller(land: string | number): Web3JsAbiCall<string>;
  mint(minter: string, tier: string | number, chunkId: string | number): Web3JsAbiCall<void>;
  mint(minter: string, tier: string | number, chunkId: string | number, reseller: string): Web3JsAbiCall<void>;
  mintOrUpdate(tokenID: string | number, minter: string, tier: string | number, chunkId: string | number, x: string | number, y: string | number, reseller: string): Web3JsAbiCall<string>;
  massMint(minter: string, tier: string | number, chunkId: string | number, reseller: string, quantity: string | number): Web3JsAbiCall<void>;
  updateChunkId(id: string | number, chunkId: string | number): Web3JsAbiCall<void>;
  updateChunkId(ids: string[], chunkId: string | number): Web3JsAbiCall<void>;
  landsBelongToChunk(ids: string[], chunkId: string | number): Web3JsAbiCall<boolean>;
  getLandTierURI(id: string | number): Web3JsAbiCall<string>;
  tokenURI(id: string | number): Web3JsAbiCall<string>;
  getTierURI(tier: string | number): Web3JsAbiCall<string>;
  setTierStr(tier: string | number, index: string | number, val: string): Web3JsAbiCall<void>;
  getLandTier(id: string | number): Web3JsAbiCall<string>;
}

export interface CBKLandBridgeProxyContract {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  UINT_NFT_VAR_ADDRESS(): Web3JsAbiCall<string>;
  UINT_NFT_VAR_META(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  initialize(nftStorageAddress: string, cbkLand: string): Web3JsAbiCall<void>;
  collectData(tokenId: string | number): Web3JsAbiCall<[string[], string]>;
  sigVersion(): Web3JsAbiCall<string>;
  isEnabled(): Web3JsAbiCall<boolean>;
  setEnabled(enabled: boolean): Web3JsAbiCall<void>;
  mintOrUpdate(arg0: string, tokenId: string | number, uintVars: string[], stringVar: string): Web3JsAbiCall<string>;
  canBridge(wallet: string, tokenId: string | number, targetChain: string | number): Web3JsAbiCall<boolean>;
}

export interface CBKLandSale {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  TIER_ONE(): Web3JsAbiCall<string>;
  TIER_THREE(): Web3JsAbiCall<string>;
  TIER_TWO(): Web3JsAbiCall<string>;
  availableLand(arg0: string | number): Web3JsAbiCall<string>;
  cbkLand(): Web3JsAbiCall<string>;
  chunkT2LandSales(arg0: string | number): Web3JsAbiCall<string>;
  chunkT3LandSoldTo(arg0: string | number): Web3JsAbiCall<string>;
  chunkZoneLandSales(arg0: string | number): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  purchaseAddressMapping(arg0: string): Web3JsAbiCall<[string, string, string, boolean]>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  sales(arg0: string | number): Web3JsAbiCall<[string, string, string, boolean]>;
  initialize(_cbkLand: string): Web3JsAbiCall<void>;
  giveT1Land(buyer: string): Web3JsAbiCall<void>;
  giveT2Land(buyer: string, chunkId: string | number): Web3JsAbiCall<void>;
  giveT3Land(buyer: string, chunkId: string | number): Web3JsAbiCall<void>;
  giveT1LandFree(buyer: string): Web3JsAbiCall<void>;
  giveT2LandFree(buyer: string, chunkId: string | number): Web3JsAbiCall<void>;
  giveT3LandFree(buyer: string, chunkId: string | number): Web3JsAbiCall<void>;
  massMintReservedLand(player: string, reseller: string, chunkId: string | number, tier1: string | number, tier2: string | number, giveTier3: boolean): Web3JsAbiCall<void>;
  massMintReservedLand(player: string, reseller: string, tier1: string | number, tier2: string | number, tier3: string | number): Web3JsAbiCall<void>;
  changeLandChunkId(landId: string | number, assignedChunkid: string | number): Web3JsAbiCall<void>;
  giveT1LandReservedBulk(players: string[], reseller: string, chunkId: string | number): Web3JsAbiCall<void>;
  giveT1LandReservedBulk(players: string[], reseller: string): Web3JsAbiCall<void>;
  giveT1LandReserved(player: string, reseller: string, chunkId: string | number): Web3JsAbiCall<void>;
  giveT1LandReserved(player: string, reseller: string): Web3JsAbiCall<void>;
  salesAllowed(): Web3JsAbiCall<boolean>;
  reservedSalesAllowed(): Web3JsAbiCall<boolean>;
  getAllowedLandOffset(): Web3JsAbiCall<string>;
  checkIfChunkAvailable(tier: string | number, chunkId: string | number): Web3JsAbiCall<boolean>;
  checkChunkReserved(chunkId: string | number): Web3JsAbiCall<boolean>;
  getAllZonesPopulation(): Web3JsAbiCall<string[]>;
  getZonePopulation(zoneIds: string[]): Web3JsAbiCall<string[]>;
  getZoneChunkPopulation(zoneId: string | number): Web3JsAbiCall<string[]>;
  getChunkPopulation(chunkIds: string[]): Web3JsAbiCall<string[]>;
  getAvailableLand(): Web3JsAbiCall<[string, string, string]>;
  getAvailableLandPerChunk(): Web3JsAbiCall<string>;
  getSoldLand(): Web3JsAbiCall<[string, string, string]>;
  getPopulatedT2Chunks(): Web3JsAbiCall<string>;
  getPurchase(): Web3JsAbiCall<[string, string]>;
  getPurchaseOf(owner: string): Web3JsAbiCall<[string, string]>;
  getSalesCount(): Web3JsAbiCall<string>;
  getPurchaseBySale(sale: string | number): Web3JsAbiCall<[string, string, string]>;
  setSaleAllowed(allowed: boolean): Web3JsAbiCall<void>;
  setReservedSaleAllowed(allowed: boolean): Web3JsAbiCall<void>;
  setChunksReservation(chunkIds: string[], reserved: boolean): Web3JsAbiCall<void>;
  setChunksReservationInfo(chunkIds: string[], reserveFor: string, reserved: boolean, forced: boolean): Web3JsAbiCall<void>;
  givePlayersReservedLand(players: string[], reseller: string, tier: string | number): Web3JsAbiCall<void>;
  getPlayerReservedLand(player: string): Web3JsAbiCall<[string[], string[]]>;
  getChunksOfReservations(reservationId: string | number): Web3JsAbiCall<string[]>;
  getInfoOfReservation(reservationId: string | number): Web3JsAbiCall<[string, string, string, boolean]>;
  getChunksOfReseller(reservedFor: string): Web3JsAbiCall<string[]>;
  claimPlayerReservedLand(reservation: string | number, chunkId: string | number, tier: string | number): Web3JsAbiCall<void>;
  massClaimReservationsForPlayer(player: string, reservations: string[]): Web3JsAbiCall<void>;
  getResellerOfChunk(chunkId: string | number): Web3JsAbiCall<string>;
  getReservedChunksIds(): Web3JsAbiCall<string[]>;
  getTakenT3Chunks(): Web3JsAbiCall<string[]>;
  setAllowedLandOffset(allowedOffset: string | number): Web3JsAbiCall<void>;
  setAllowedLandPerChunk(allowedLandSalePerChunk: string | number): Web3JsAbiCall<void>;
  setAvailableLand(tier: string | number, available: string | number): Web3JsAbiCall<void>;
  getReservationAt(): Web3JsAbiCall<string>;
}

export interface CBKLandT1StakingRewardsUpgradeable {
  balanceOf(account: string): Web3JsAbiCall<string>;
  bulkWithdraw(ids: string[]): Web3JsAbiCall<void>;
  earned(account: string): Web3JsAbiCall<string>;
  enableFailsafeMode(): Web3JsAbiCall<void>;
  exit(): Web3JsAbiCall<void>;
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  getReward(): Web3JsAbiCall<void>;
  getRewardForDuration(): Web3JsAbiCall<string>;
  getStakeRewardDistributionTimeLeft(): Web3JsAbiCall<string>;
  getStakeUnlockTimeLeft(): Web3JsAbiCall<string>;
  lastTimeRewardApplicable(): Web3JsAbiCall<string>;
  lastUpdateTime(): Web3JsAbiCall<string>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
  minimumStakeTime(): Web3JsAbiCall<string>;
  notifyRewardAmount(reward: string | number): Web3JsAbiCall<void>;
  onERC721Received(arg0: string, arg1: string, _id: string | number, arg3: string): Web3JsAbiCall<string>;
  owner(): Web3JsAbiCall<string>;
  pause(): Web3JsAbiCall<void>;
  paused(): Web3JsAbiCall<boolean>;
  periodFinish(): Web3JsAbiCall<string>;
  recoverERC20(tokenAddress: string, tokenAmount: string | number): Web3JsAbiCall<void>;
  recoverOwnStake(): Web3JsAbiCall<void>;
  renounceOwnership(): Web3JsAbiCall<void>;
  rewardPerToken(): Web3JsAbiCall<string>;
  rewardPerTokenStored(): Web3JsAbiCall<string>;
  rewardRate(): Web3JsAbiCall<string>;
  rewards(arg0: string): Web3JsAbiCall<string>;
  rewardsDistribution(): Web3JsAbiCall<string>;
  rewardsDuration(): Web3JsAbiCall<string>;
  rewardsToken(): Web3JsAbiCall<string>;
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  setMinimumStakeTime(_minimumStakeTime: string | number): Web3JsAbiCall<void>;
  setRewardsDistribution(_rewardsDistribution: string): Web3JsAbiCall<void>;
  setRewardsDuration(_rewardsDuration: string | number): Web3JsAbiCall<void>;
  stakeTier(): Web3JsAbiCall<string>;
  stakedIdsOf(account: string): Web3JsAbiCall<string[]>;
  stakingToken(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  unpause(): Web3JsAbiCall<void>;
  updatePeriodFinish(timestamp: string | number): Web3JsAbiCall<void>;
  userRewardPerTokenPaid(arg0: string): Web3JsAbiCall<string>;
  withdraw(id: string | number): Web3JsAbiCall<void>;
  initialize(_owner: string, _rewardsDistribution: string, _rewardsToken: string, _stakingToken: string, _minimumStakeTime: string | number, _cbkLand: string): Web3JsAbiCall<void>;
  initialize(_owner: string, _rewardsDistribution: string, _rewardsToken: string, _stakingToken: string, _minimumStakeTime: string | number): Web3JsAbiCall<void>;
  stake(id: string | number): Web3JsAbiCall<void>;
  bulkStake(ids: string[]): Web3JsAbiCall<void>;
}

export interface CBKLandT2StakingRewardsUpgradeable {
  balanceOf(account: string): Web3JsAbiCall<string>;
  bulkWithdraw(ids: string[]): Web3JsAbiCall<void>;
  earned(account: string): Web3JsAbiCall<string>;
  enableFailsafeMode(): Web3JsAbiCall<void>;
  exit(): Web3JsAbiCall<void>;
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  getReward(): Web3JsAbiCall<void>;
  getRewardForDuration(): Web3JsAbiCall<string>;
  getStakeRewardDistributionTimeLeft(): Web3JsAbiCall<string>;
  getStakeUnlockTimeLeft(): Web3JsAbiCall<string>;
  lastTimeRewardApplicable(): Web3JsAbiCall<string>;
  lastUpdateTime(): Web3JsAbiCall<string>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
  minimumStakeTime(): Web3JsAbiCall<string>;
  notifyRewardAmount(reward: string | number): Web3JsAbiCall<void>;
  onERC721Received(arg0: string, arg1: string, _id: string | number, arg3: string): Web3JsAbiCall<string>;
  owner(): Web3JsAbiCall<string>;
  pause(): Web3JsAbiCall<void>;
  paused(): Web3JsAbiCall<boolean>;
  periodFinish(): Web3JsAbiCall<string>;
  recoverERC20(tokenAddress: string, tokenAmount: string | number): Web3JsAbiCall<void>;
  recoverOwnStake(): Web3JsAbiCall<void>;
  renounceOwnership(): Web3JsAbiCall<void>;
  rewardPerToken(): Web3JsAbiCall<string>;
  rewardPerTokenStored(): Web3JsAbiCall<string>;
  rewardRate(): Web3JsAbiCall<string>;
  rewards(arg0: string): Web3JsAbiCall<string>;
  rewardsDistribution(): Web3JsAbiCall<string>;
  rewardsDuration(): Web3JsAbiCall<string>;
  rewardsToken(): Web3JsAbiCall<string>;
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  setMinimumStakeTime(_minimumStakeTime: string | number): Web3JsAbiCall<void>;
  setRewardsDistribution(_rewardsDistribution: string): Web3JsAbiCall<void>;
  setRewardsDuration(_rewardsDuration: string | number): Web3JsAbiCall<void>;
  stakeTier(): Web3JsAbiCall<string>;
  stakedIdsOf(account: string): Web3JsAbiCall<string[]>;
  stakingToken(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  unpause(): Web3JsAbiCall<void>;
  updatePeriodFinish(timestamp: string | number): Web3JsAbiCall<void>;
  userRewardPerTokenPaid(arg0: string): Web3JsAbiCall<string>;
  withdraw(id: string | number): Web3JsAbiCall<void>;
  initialize(_owner: string, _rewardsDistribution: string, _rewardsToken: string, _stakingToken: string, _minimumStakeTime: string | number, _cbkLand: string): Web3JsAbiCall<void>;
  initialize(_owner: string, _rewardsDistribution: string, _rewardsToken: string, _stakingToken: string, _minimumStakeTime: string | number): Web3JsAbiCall<void>;
  stake(id: string | number): Web3JsAbiCall<void>;
  bulkStake(ids: string[]): Web3JsAbiCall<void>;
}

export interface CBKLandT3StakingRewardsUpgradeable {
  balanceOf(account: string): Web3JsAbiCall<string>;
  bulkWithdraw(ids: string[]): Web3JsAbiCall<void>;
  earned(account: string): Web3JsAbiCall<string>;
  enableFailsafeMode(): Web3JsAbiCall<void>;
  exit(): Web3JsAbiCall<void>;
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  getReward(): Web3JsAbiCall<void>;
  getRewardForDuration(): Web3JsAbiCall<string>;
  getStakeRewardDistributionTimeLeft(): Web3JsAbiCall<string>;
  getStakeUnlockTimeLeft(): Web3JsAbiCall<string>;
  lastTimeRewardApplicable(): Web3JsAbiCall<string>;
  lastUpdateTime(): Web3JsAbiCall<string>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
  minimumStakeTime(): Web3JsAbiCall<string>;
  notifyRewardAmount(reward: string | number): Web3JsAbiCall<void>;
  onERC721Received(arg0: string, arg1: string, _id: string | number, arg3: string): Web3JsAbiCall<string>;
  owner(): Web3JsAbiCall<string>;
  pause(): Web3JsAbiCall<void>;
  paused(): Web3JsAbiCall<boolean>;
  periodFinish(): Web3JsAbiCall<string>;
  recoverERC20(tokenAddress: string, tokenAmount: string | number): Web3JsAbiCall<void>;
  recoverOwnStake(): Web3JsAbiCall<void>;
  renounceOwnership(): Web3JsAbiCall<void>;
  rewardPerToken(): Web3JsAbiCall<string>;
  rewardPerTokenStored(): Web3JsAbiCall<string>;
  rewardRate(): Web3JsAbiCall<string>;
  rewards(arg0: string): Web3JsAbiCall<string>;
  rewardsDistribution(): Web3JsAbiCall<string>;
  rewardsDuration(): Web3JsAbiCall<string>;
  rewardsToken(): Web3JsAbiCall<string>;
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  setMinimumStakeTime(_minimumStakeTime: string | number): Web3JsAbiCall<void>;
  setRewardsDistribution(_rewardsDistribution: string): Web3JsAbiCall<void>;
  setRewardsDuration(_rewardsDuration: string | number): Web3JsAbiCall<void>;
  stakeTier(): Web3JsAbiCall<string>;
  stakedIdsOf(account: string): Web3JsAbiCall<string[]>;
  stakingToken(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  unpause(): Web3JsAbiCall<void>;
  updatePeriodFinish(timestamp: string | number): Web3JsAbiCall<void>;
  userRewardPerTokenPaid(arg0: string): Web3JsAbiCall<string>;
  withdraw(id: string | number): Web3JsAbiCall<void>;
  initialize(_owner: string, _rewardsDistribution: string, _rewardsToken: string, _stakingToken: string, _minimumStakeTime: string | number, _cbkLand: string): Web3JsAbiCall<void>;
  initialize(_owner: string, _rewardsDistribution: string, _rewardsToken: string, _stakingToken: string, _minimumStakeTime: string | number): Web3JsAbiCall<void>;
  stake(id: string | number): Web3JsAbiCall<void>;
  bulkStake(ids: string[]): Web3JsAbiCall<void>;
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
  getRandomSeedUsingHash(user: string, hash: string): Web3JsAbiCall<string>;
  requestRandomNumber(): Web3JsAbiCall<void>;
  pause(): Web3JsAbiCall<void>;
  unpause(): Web3JsAbiCall<void>;
  withdrawLink(tokenAmount: string | number): Web3JsAbiCall<void>;
}

export interface CharacterCosmetics {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  appliedCosmetics(arg0: string | number): Web3JsAbiCall<string>;
  characters(): Web3JsAbiCall<string>;
  getCosmeticCount(cosmetic: string | number): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  giveCosmetic(buyer: string, cosmetic: string | number, amount: string | number): Web3JsAbiCall<void>;
  giveCosmeticByAdmin(receiver: string, cosmetic: string | number, amount: string | number): Web3JsAbiCall<void>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  isCosmeticAvailable(cosmetic: string | number): Web3JsAbiCall<boolean>;
  owned(arg0: string, arg1: string | number): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  takeCosmeticByAdmin(target: string, cosmetic: string | number, amount: string | number): Web3JsAbiCall<void>;
  toggleCosmeticAvailable(cosmetic: string | number, available: boolean): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  initialize(_characters: string): Web3JsAbiCall<void>;
  applyCosmetic(characterId: string | number, cosmetic: string | number): Web3JsAbiCall<void>;
  removeCosmetic(characterId: string | number): Web3JsAbiCall<void>;
  getCharacterCosmetic(characterId: string | number): Web3JsAbiCall<string>;
  setCharacterCosmetic(characterId: string | number, cosmetic: string | number): Web3JsAbiCall<void>;
}

export interface CharacterEarthTraitChangeConsumables {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  getItemCount(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  giveItem(buyer: string, amount: string | number): Web3JsAbiCall<void>;
  giveItemByAdmin(receiver: string, amount: string | number): Web3JsAbiCall<void>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  itemEnabled(): Web3JsAbiCall<boolean>;
  owned(arg0: string): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  takeItemByAdmin(target: string, amount: string | number): Web3JsAbiCall<void>;
  toggleItemCanUse(canUse: boolean): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  initialize(_characters: string): Web3JsAbiCall<void>;
  changeCharacterTrait(characterId: string | number): Web3JsAbiCall<void>;
}

export interface CharacterFireTraitChangeConsumables {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  getItemCount(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  giveItem(buyer: string, amount: string | number): Web3JsAbiCall<void>;
  giveItemByAdmin(receiver: string, amount: string | number): Web3JsAbiCall<void>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  itemEnabled(): Web3JsAbiCall<boolean>;
  owned(arg0: string): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  takeItemByAdmin(target: string, amount: string | number): Web3JsAbiCall<void>;
  toggleItemCanUse(canUse: boolean): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  initialize(_characters: string): Web3JsAbiCall<void>;
  changeCharacterTrait(characterId: string | number): Web3JsAbiCall<void>;
}

export interface CharacterLightningTraitChangeConsumables {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  getItemCount(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  giveItem(buyer: string, amount: string | number): Web3JsAbiCall<void>;
  giveItemByAdmin(receiver: string, amount: string | number): Web3JsAbiCall<void>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  itemEnabled(): Web3JsAbiCall<boolean>;
  owned(arg0: string): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  takeItemByAdmin(target: string, amount: string | number): Web3JsAbiCall<void>;
  toggleItemCanUse(canUse: boolean): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  initialize(_characters: string): Web3JsAbiCall<void>;
  changeCharacterTrait(characterId: string | number): Web3JsAbiCall<void>;
}

export interface CharacterRenameTagConsumables {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  getItemCount(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  giveItem(buyer: string, amount: string | number): Web3JsAbiCall<void>;
  giveItemByAdmin(receiver: string, amount: string | number): Web3JsAbiCall<void>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  itemEnabled(): Web3JsAbiCall<boolean>;
  owned(arg0: string): Web3JsAbiCall<string>;
  renames(arg0: string | number): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  takeItemByAdmin(target: string, amount: string | number): Web3JsAbiCall<void>;
  toggleItemCanUse(canUse: boolean): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  initialize(_characters: string): Web3JsAbiCall<void>;
  renameCharacter(characterId: string | number, newName: string): Web3JsAbiCall<void>;
  getCharacterRename(characterId: string | number): Web3JsAbiCall<string>;
  setMinSize(newMinSize: string | number): Web3JsAbiCall<void>;
  setMaxSize(newMaxSize: string | number): Web3JsAbiCall<void>;
  getMinSize(): Web3JsAbiCall<string>;
  getMaxSize(): Web3JsAbiCall<string>;
  setName(characterId: string | number, newName: string): Web3JsAbiCall<void>;
}

export interface Characters {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  MINTER_ROLE(): Web3JsAbiCall<string>;
  NFTVAR_BONUS_POWER(): Web3JsAbiCall<string>;
  NFTVAR_BUSY(): Web3JsAbiCall<string>;
  NFTVAR_EQUIPMENT_VERSION(): Web3JsAbiCall<string>;
  NFTVAR_NON_GENESIS_VERSION(): Web3JsAbiCall<string>;
  NFTVAR_POWER_DATA(): Web3JsAbiCall<string>;
  NFTVAR_REPUTATION(): Web3JsAbiCall<string>;
  NFTVAR_SIMPLEQUEST_PROGRESS(): Web3JsAbiCall<string>;
  NFTVAR_SIMPLEQUEST_TYPE(): Web3JsAbiCall<string>;
  NO_OWNED_LIMIT(): Web3JsAbiCall<string>;
  SIMPLEQUEST_TYPE_RAID(): Web3JsAbiCall<string>;
  VAR_EQUIPMENT_VERSION(): Web3JsAbiCall<string>;
  approve(to: string, tokenId: string | number): Web3JsAbiCall<void>;
  balanceOf(owner: string): Web3JsAbiCall<string>;
  baseURI(): Web3JsAbiCall<string>;
  characterLimit(): Web3JsAbiCall<string>;
  garrison(): Web3JsAbiCall<string>;
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
  nftVars(arg0: string | number, arg1: string | number): Web3JsAbiCall<string>;
  ownerOf(tokenId: string | number): Web3JsAbiCall<string>;
  promos(): Web3JsAbiCall<string>;
  raidsDone(arg0: string | number): Web3JsAbiCall<string>;
  raidsWon(arg0: string | number): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  secondsPerStamina(): Web3JsAbiCall<string>;
  setApprovalForAll(operator: string, approved: boolean): Web3JsAbiCall<void>;
  supportsInterface(interfaceId: string): Web3JsAbiCall<boolean>;
  symbol(): Web3JsAbiCall<string>;
  tokenByIndex(index: string | number): Web3JsAbiCall<string>;
  tokenOfOwnerByIndex(owner: string, index: string | number): Web3JsAbiCall<string>;
  tokenURI(tokenId: string | number): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  vars(arg0: string | number): Web3JsAbiCall<string>;
  initialize(): Web3JsAbiCall<void>;
  migrateTo_1ee400a(_experienceTable: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]): Web3JsAbiCall<void>;
  migrateTo_951a020(): Web3JsAbiCall<void>;
  migrateTo_ef994e2(_promos: string): Web3JsAbiCall<void>;
  migrateTo_b627f23(): Web3JsAbiCall<void>;
  migrateTo_1a19cbb(_garrison: string): Web3JsAbiCall<void>;
  get(id: string | number): Web3JsAbiCall<[string, string, string, string, string, string, string, string, string, string]>;
  getCosmeticsSeed(id: string | number): Web3JsAbiCall<string>;
  getSoulForBurns(burnIds: string[]): Web3JsAbiCall<[string, string]>;
  mint(minter: string, seed: string | number): Web3JsAbiCall<string>;
  customMint(minter: string, xp: string | number, level: string | number, trait: string | number, seed: string | number, tokenID: string | number, bonusPower: string | number, reputation: string | number, version: string | number): Web3JsAbiCall<string>;
  burnIntoCharacter(burnIds: string[], targetCharId: string | number, burnPowerMultiplier: string | number): Web3JsAbiCall<void>;
  burnIntoSoul(burnIds: string[]): Web3JsAbiCall<void>;
  upgradeWithSoul(targetCharId: string | number, soulAmount: string | number, isCharacterGenesis: boolean): Web3JsAbiCall<void>;
  getLevel(id: string | number): Web3JsAbiCall<string>;
  getRequiredXpForNextLevel(currentLevel: string | number): Web3JsAbiCall<string>;
  getPower(id: string | number): Web3JsAbiCall<string>;
  getTotalPower(id: string | number): Web3JsAbiCall<string>;
  getPowerAtLevel(level: string | number): Web3JsAbiCall<string>;
  getTrait(id: string | number): Web3JsAbiCall<string>;
  setTrait(id: string | number, trait: string | number): Web3JsAbiCall<void>;
  getXp(id: string | number): Web3JsAbiCall<string>;
  gainXp(id: string | number, xp: string | number): Web3JsAbiCall<void>;
  gainXpAll(chars: string[], xps: string[]): Web3JsAbiCall<void>;
  getStaminaTimestamp(id: string | number): Web3JsAbiCall<string>;
  setStaminaTimestamp(id: string | number, timestamp: string | number): Web3JsAbiCall<void>;
  getStaminaPoints(id: string | number): Web3JsAbiCall<string>;
  getStaminaPointsFromTimestamp(timestamp: string | number): Web3JsAbiCall<string>;
  isStaminaFull(id: string | number): Web3JsAbiCall<boolean>;
  getStaminaMaxWait(): Web3JsAbiCall<string>;
  getFightDataAndDrainStamina(fighter: string, id: string | number, amount: string | number, allowNegativeStamina: boolean, busyFlag: string | number): Web3JsAbiCall<[string, string]>;
  processRaidParticipation(id: string | number, won: boolean, xp: string | number): Web3JsAbiCall<void>;
  isEquipmentReady(id: string | number): Web3JsAbiCall<boolean>;
  getCharactersOwnedBy(wallet: string): Web3JsAbiCall<string[]>;
  getReadyCharacters(wallet: string): Web3JsAbiCall<string[]>;
  setNFTVars(id: string | number, fields: string[], values: string[]): Web3JsAbiCall<void>;
  getNFTVars(id: string | number, fields: string[]): Web3JsAbiCall<string[]>;
  safeTransferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number, _data: string): Web3JsAbiCall<void>;
  setCharacterLimit(max: string | number): Web3JsAbiCall<void>;
  setVar(varField: string | number, value: string | number): Web3JsAbiCall<void>;
  setVars(varFields: string[], values: string[]): Web3JsAbiCall<void>;
  getNftVar(characterID: string | number, nftVar: string | number): Web3JsAbiCall<string>;
  setNftVar(characterID: string | number, nftVar: string | number, value: string | number): Web3JsAbiCall<void>;
  setBaseURI(baseUri: string): Web3JsAbiCall<void>;
  setSecondsPerStamina(_secondsPerStamina: string | number): Web3JsAbiCall<void>;
}

export interface CharactersBridgeProxyContract {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  UINT_NFT_VAR_META(): Web3JsAbiCall<string>;
  UINT_NFT_VAR_SEED3DCOSMETIC(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  initialize(_nftStorageAddress: string, _characters: string, _characterCosmetics: string, _characterRenameTagConsumables: string): Web3JsAbiCall<void>;
  migrate_c906001(_newPromos: string): Web3JsAbiCall<void>;
  migrate_68c6936(_equipmentManager: string): Web3JsAbiCall<void>;
  collectData(tokenId: string | number): Web3JsAbiCall<[string[], string]>;
  sigVersion(): Web3JsAbiCall<string>;
  isEnabled(): Web3JsAbiCall<boolean>;
  setEnabled(_enabled: boolean): Web3JsAbiCall<void>;
  mintOrUpdate(receiver: string, tokenId: string | number, uintVars: string[], stringVar: string): Web3JsAbiCall<string>;
  canBridge(wallet: string, tokenId: string | number, targetChain: string | number): Web3JsAbiCall<boolean>;
}

export interface CharacterWaterTraitChangeConsumables {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  getItemCount(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  giveItem(buyer: string, amount: string | number): Web3JsAbiCall<void>;
  giveItemByAdmin(receiver: string, amount: string | number): Web3JsAbiCall<void>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  itemEnabled(): Web3JsAbiCall<boolean>;
  owned(arg0: string): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  takeItemByAdmin(target: string, amount: string | number): Web3JsAbiCall<void>;
  toggleItemCanUse(canUse: boolean): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  initialize(_characters: string): Web3JsAbiCall<void>;
  changeCharacterTrait(characterId: string | number): Web3JsAbiCall<void>;
}

export interface Common {

}

export interface Consumables {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  owned(arg0: string): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  giveItem(buyer: string, amount: string | number): Web3JsAbiCall<void>;
  getItemCount(): Web3JsAbiCall<string>;
  toggleItemCanUse(canUse: boolean): Web3JsAbiCall<void>;
  giveItemByAdmin(receiver: string, amount: string | number): Web3JsAbiCall<void>;
  takeItemByAdmin(target: string, amount: string | number): Web3JsAbiCall<void>;
  itemEnabled(): Web3JsAbiCall<boolean>;
}

export interface Context {

}

export interface ContextUpgradeable {

}

export interface Cosmetics {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  owned(arg0: string, arg1: string | number): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  giveCosmetic(buyer: string, cosmetic: string | number, amount: string | number): Web3JsAbiCall<void>;
  getCosmeticCount(cosmetic: string | number): Web3JsAbiCall<string>;
  isCosmeticAvailable(cosmetic: string | number): Web3JsAbiCall<boolean>;
  toggleCosmeticAvailable(cosmetic: string | number, available: boolean): Web3JsAbiCall<void>;
  giveCosmeticByAdmin(receiver: string, cosmetic: string | number, amount: string | number): Web3JsAbiCall<void>;
  takeCosmeticByAdmin(target: string, cosmetic: string | number, amount: string | number): Web3JsAbiCall<void>;
}

export interface CryptoBlades {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  LINK_SAFE_RANDOMS(): Web3JsAbiCall<string>;
  PAYMENT_USING_STAKED_SKILL_COST_AFTER_DISCOUNT(): Web3JsAbiCall<string>;
  USERVAR_CLAIM_TIMESTAMP(): Web3JsAbiCall<string>;
  USERVAR_CLAIM_WEAPON_DATA(): Web3JsAbiCall<string>;
  USERVAR_DAILY_CLAIMED_AMOUNT(): Web3JsAbiCall<string>;
  USERVAR_GEN2_UNCLAIMED(): Web3JsAbiCall<string>;
  VAR_CHARACTER_FEE_INCREASE(): Web3JsAbiCall<string>;
  VAR_CHARACTER_MINT_TIMESTAMP(): Web3JsAbiCall<string>;
  VAR_CLAIM_DEPOSIT_AMOUNT(): Web3JsAbiCall<string>;
  VAR_DAILY_MAX_CLAIM(): Web3JsAbiCall<string>;
  VAR_FIGHT_FLAT_IGO_BONUS(): Web3JsAbiCall<string>;
  VAR_GAS_OFFSET_PER_FIGHT_MULTIPLIER(): Web3JsAbiCall<string>;
  VAR_HOURLY_DISTRIBUTION(): Web3JsAbiCall<string>;
  VAR_HOURLY_FIGHTS(): Web3JsAbiCall<string>;
  VAR_HOURLY_INCOME(): Web3JsAbiCall<string>;
  VAR_HOURLY_MAX_POWER_AVERAGE(): Web3JsAbiCall<string>;
  VAR_HOURLY_PAY_PER_FIGHT(): Web3JsAbiCall<string>;
  VAR_HOURLY_POWER_AVERAGE(): Web3JsAbiCall<string>;
  VAR_HOURLY_POWER_SUM(): Web3JsAbiCall<string>;
  VAR_HOURLY_TIMESTAMP(): Web3JsAbiCall<string>;
  VAR_MINT_CHARACTER_FEE_DECREASE_SPEED(): Web3JsAbiCall<string>;
  VAR_MINT_WEAPON_FEE_DECREASE_SPEED(): Web3JsAbiCall<string>;
  VAR_MIN_CHARACTER_FEE(): Web3JsAbiCall<string>;
  VAR_MIN_WEAPON_FEE(): Web3JsAbiCall<string>;
  VAR_PARAM_DAILY_CLAIM_DEPOSIT_PERCENT(): Web3JsAbiCall<string>;
  VAR_PARAM_DAILY_CLAIM_FIGHTS_LIMIT(): Web3JsAbiCall<string>;
  VAR_PARAM_HOURLY_MAX_POWER_PERCENT(): Web3JsAbiCall<string>;
  VAR_PARAM_HOURLY_PAY_ALLOWANCE(): Web3JsAbiCall<string>;
  VAR_PARAM_MAX_FIGHT_PAYOUT(): Web3JsAbiCall<string>;
  VAR_PARAM_PAYOUT_INCOME_PERCENT(): Web3JsAbiCall<string>;
  VAR_PARAM_SIGNIFICANT_HOUR_FIGHTS(): Web3JsAbiCall<string>;
  VAR_UNCLAIMED_SKILL(): Web3JsAbiCall<string>;
  VAR_WEAPON_FEE_INCREASE(): Web3JsAbiCall<string>;
  VAR_WEAPON_MINT_TIMESTAMP(): Web3JsAbiCall<string>;
  WEAPON_SEED(): Web3JsAbiCall<string>;
  blacksmith(): Web3JsAbiCall<string>;
  burnWeaponFee(): Web3JsAbiCall<string>;
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
  links(arg0: string | number): Web3JsAbiCall<string>;
  mintCharacterFee(): Web3JsAbiCall<string>;
  mintWeaponFee(): Web3JsAbiCall<string>;
  oneFrac(): Web3JsAbiCall<string>;
  priceOracleSkillPerUsd(): Web3JsAbiCall<string>;
  promos(): Web3JsAbiCall<string>;
  randoms(): Web3JsAbiCall<string>;
  refillStaminaFee(): Web3JsAbiCall<string>;
  reforgeWeaponFee(): Web3JsAbiCall<string>;
  reforgeWeaponWithDustFee(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  skillToken(): Web3JsAbiCall<string>;
  specialWeaponsManager(): Web3JsAbiCall<string>;
  stakeFromGameImpl(): Web3JsAbiCall<string>;
  totalInGameOnlyFunds(): Web3JsAbiCall<string>;
  totalMintPaymentSkillRefundable(): Web3JsAbiCall<string>;
  userVars(arg0: string, arg1: string | number): Web3JsAbiCall<string>;
  vars(arg0: string | number): Web3JsAbiCall<string>;
  weapons(): Web3JsAbiCall<string>;
  initialize(_skillToken: string, _characters: string, _weapons: string, _priceOracleSkillPerUsd: string, _randoms: string): Web3JsAbiCall<void>;
  migrateTo_ef994e2(_promos: string): Web3JsAbiCall<void>;
  migrateTo_23b3a8b(_stakeFromGame: string): Web3JsAbiCall<void>;
  migrateTo_801f279(): Web3JsAbiCall<void>;
  migrateTo_60872c8(_blacksmith: string): Web3JsAbiCall<void>;
  migrateTo_6a97bd1(): Web3JsAbiCall<void>;
  migrateTo_e1fe97c(_swm: string): Web3JsAbiCall<void>;
  recoverSkill(amount: string | number): Web3JsAbiCall<void>;
  REWARDS_CLAIM_TAX_MAX(): Web3JsAbiCall<string>;
  REWARDS_CLAIM_TAX_DURATION(): Web3JsAbiCall<string>;
  getSkillToSubtractSingle(_needed: string | number, _available: string | number): Web3JsAbiCall<[string, string]>;
  getSkillToSubtract(_inGameOnlyFunds: string | number, _tokenRewards: string | number, _valorTokenRewards: string | number, _skillNeeded: string | number): Web3JsAbiCall<[string, string, string, string]>;
  getSkillNeededFromUserWallet(playerAddress: string, skillNeeded: string | number, allowInGameOnlyFunds: boolean): Web3JsAbiCall<string>;
  fight(fighter: string, char: string | number, target: string | number, fightMultiplier: string | number): Web3JsAbiCall<[string, string]>;
  getTokenGainForFight(monsterPower: string | number): Web3JsAbiCall<string>;
  getTargets(char: string | number): Web3JsAbiCall<[string, string, string, string]>;
  mintCharacter(): Web3JsAbiCall<void>;
  generateWeaponSeed(quantity: string | number, chosenElement: string | number, eventId: string | number): Web3JsAbiCall<void>;
  generateWeaponSeedUsingStakedSkill(quantity: string | number, chosenElement: string | number, eventId: string | number): Web3JsAbiCall<void>;
  mintWeapon(): Web3JsAbiCall<void>;
  migrateRandoms(_newRandoms: string): Web3JsAbiCall<void>;
  payPlayerConverted(playerAddress: string, convertedAmount: string | number): Web3JsAbiCall<void>;
  payContractTokenOnly(playerAddress: string, convertedAmount: string | number): Web3JsAbiCall<void>;
  payContractTokenOnly(playerAddress: string, convertedAmount: string | number, track: boolean): Web3JsAbiCall<void>;
  payContractConvertedSupportingStaked(playerAddress: string, convertedAmount: string | number): Web3JsAbiCall<[string, string, string, string]>;
  payContractStakedOnly(playerAddress: string, convertedAmount: string | number): Web3JsAbiCall<void>;
  deductAfterPartnerClaim(amount: string | number, player: string): Web3JsAbiCall<void>;
  deductValor(amount: string | number, player: string): Web3JsAbiCall<void>;
  trackIncome(income: string | number): Web3JsAbiCall<void>;
  setCharacterMintValue(cents: string | number): Web3JsAbiCall<void>;
  setWeaponMintValue(cents: string | number): Web3JsAbiCall<void>;
  setStaminaCostFight(points: string | number): Web3JsAbiCall<void>;
  setDurabilityCostFight(points: string | number): Web3JsAbiCall<void>;
  setFightXpGain(average: string | number): Web3JsAbiCall<void>;
  setRewardsClaimTaxMaxAsPercent(_percent: string | number): Web3JsAbiCall<void>;
  setRewardsClaimTaxDuration(_rewardsClaimTaxDuration: string | number): Web3JsAbiCall<void>;
  setVar(varField: string | number, value: string | number): Web3JsAbiCall<void>;
  setVars(varFields: string[], values: string[]): Web3JsAbiCall<void>;
  setLink(linkId: string | number, linkAddress: string): Web3JsAbiCall<void>;
  giveInGameOnlyFunds(to: string, skillAmount: string | number): Web3JsAbiCall<void>;
  giveInGameOnlyFundsFromContractBalance(to: string, skillAmount: string | number): Web3JsAbiCall<void>;
  usdToSkill(usdAmount: string | number): Web3JsAbiCall<string>;
  claimXpRewards(): Web3JsAbiCall<void>;
  resetXp(chars: string[]): Web3JsAbiCall<void>;
  getTokenRewards(): Web3JsAbiCall<string>;
  getXpRewards(chars: string[]): Web3JsAbiCall<string[]>;
  getTokenRewardsFor(wallet: string): Web3JsAbiCall<string>;
  getTotalSkillOwnedBy(wallet: string): Web3JsAbiCall<string>;
  getOwnRewardsClaimTax(): Web3JsAbiCall<string>;
  getMintWeaponFee(): Web3JsAbiCall<string>;
  getMintCharacterFee(): Web3JsAbiCall<string>;
}

export interface Dex {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  FEE_DENOMINATOR(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  VAR_CONTRACT_ENABLED(): Web3JsAbiCall<string>;
  VAR_FEE(): Web3JsAbiCall<string>;
  collectedFees(arg0: string): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  tokenPairs(arg0: string | number): Web3JsAbiCall<[string, string, string, string]>;
  vars(arg0: string | number): Web3JsAbiCall<string>;
  initialize(): Web3JsAbiCall<void>;
  swap(tokenA: string, tokenB: string, amountA: string | number): Web3JsAbiCall<void>;
  getTokenPairId(tokenA: string, tokenB: string): Web3JsAbiCall<string>;
  getAmountOut(tokenA: string, tokenB: string, amountA: string | number): Web3JsAbiCall<string>;
  getVars(varFields: string[]): Web3JsAbiCall<string[]>;
  setVar(varField: string | number, value: string | number): Web3JsAbiCall<void>;
  addPair(tokenA: string, amountA: string | number, tokenB: string, amountB: string | number): Web3JsAbiCall<void>;
  addPairWithoutLiquidity(tokenA: string, tokenB: string): Web3JsAbiCall<void>;
  deletePair(tokenA: string, tokenB: string): Web3JsAbiCall<void>;
  addLiquidity(tokenA: string, amountA: string | number, tokenB: string, amountB: string | number): Web3JsAbiCall<void>;
  setLiquidityInWei(tokenA: string, amountA: string | number, tokenB: string, amountB: string | number): Web3JsAbiCall<void>;
  takeLiquidityInWei(tokenA: string, amountA: string | number, tokenB: string, amountB: string | number): Web3JsAbiCall<void>;
  withdrawERC20Wei(token: string, amount: string | number): Web3JsAbiCall<void>;
  collectFees(token: string): Web3JsAbiCall<void>;
}

export interface DummyRandoms {
  main(): Web3JsAbiCall<string>;
  owner(): Web3JsAbiCall<string>;
  renounceOwnership(): Web3JsAbiCall<void>;
  setMain(newMain: string): Web3JsAbiCall<void>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  getRandomSeed(user: string): Web3JsAbiCall<string>;
  getRandomSeedUsingHash(user: string, hash: string): Web3JsAbiCall<string>;
  setRandomNumberForTestingPurposes(randomValue: string | number): Web3JsAbiCall<void>;
}

export interface EnumerableMapUpgradeable {

}

export interface EnumerableSet {

}

export interface EnumerableSetUpgradeable {

}

export interface EquipmentManager {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  LINK_CHARACTERS(): Web3JsAbiCall<string>;
  LINK_SHIELDS(): Web3JsAbiCall<string>;
  LINK_WEAPONS(): Web3JsAbiCall<string>;
  NFTVAR_EQUIPPED_SLOTS(): Web3JsAbiCall<string>;
  SLOT_CHARACTER_SHIELD(): Web3JsAbiCall<string>;
  SLOT_CHARACTER_WEAPON(): Web3JsAbiCall<string>;
  VAR_WEAPON_EQUIP_DURABILITY(): Web3JsAbiCall<string>;
  equippedSlotAddress(arg0: string, arg1: string | number, arg2: string | number): Web3JsAbiCall<string>;
  equippedSlotID(arg0: string, arg1: string | number, arg2: string | number): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  links(arg0: string | number): Web3JsAbiCall<string>;
  nftVars(arg0: string, arg1: string | number, arg2: string | number): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  userVars(arg0: string, arg1: string | number): Web3JsAbiCall<string>;
  vars(arg0: string | number): Web3JsAbiCall<string>;
  initialize(): Web3JsAbiCall<void>;
  equipNFT(onAddr: string, onID: string | number, slot: string | number, itemAddr: string, itemID: string | number): Web3JsAbiCall<void>;
  unequipNFT(onAddr: string, onID: string | number, slot: string | number): Web3JsAbiCall<void>;
  recalculate(onAddr: string, onID: string | number): Web3JsAbiCall<void>;
  getPowerData(onID: string | number): Web3JsAbiCall<string>;
  getStoredPowerData(charID: string | number): Web3JsAbiCall<[[string, string, string, string, string], [string, string, string, string], [string, string, string, string], string, string, string, string, string]>;
  getPowerDataBytes(charID: string | number): Web3JsAbiCall<[string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string, string]>;
  isEquippable(onAddr: string, slot: string | number, itemAddr: string): Web3JsAbiCall<boolean>;
  getEquippedItem(onAddr: string, onID: string | number, slot: string | number): Web3JsAbiCall<[string, string]>;
  hasSlotEquipped(onAddr: string, onID: string | number, slot: string | number): Web3JsAbiCall<boolean>;
  hasNothingEquipped(onAddr: string, onID: string | number): Web3JsAbiCall<boolean>;
  haveNothingEquipped(onAddr: string, onIDs: string[]): Web3JsAbiCall<boolean>;
  setVar(varField: string | number, value: string | number): Web3JsAbiCall<void>;
  setVars(varFields: string[], values: string[]): Web3JsAbiCall<void>;
  getNftVar(onAddr: string, onID: string | number, nftVar: string | number): Web3JsAbiCall<string>;
  setNftVar(onAddr: string, onID: string | number, nftVar: string | number, value: string | number): Web3JsAbiCall<void>;
  setLink(linkId: string | number, linkAddress: string): Web3JsAbiCall<void>;
  setEquippable(onAddr: string, slot: string | number, itemAddr: string, equippable: boolean): Web3JsAbiCall<void>;
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

export interface ERC20Bridge {
  BRIDGE_TOKEN_VAR_FEE_INDEX(): Web3JsAbiCall<string>;
  BRIDGE_TOKEN_VAR_MAX_AMOUNT_INDEX(): Web3JsAbiCall<string>;
  BRIDGE_TOKEN_VAR_MIN_AMOUNT_INDEX(): Web3JsAbiCall<string>;
  BRIDGE_TOKEN_VAR_OPEN_TO_PUBLIC(): Web3JsAbiCall<string>;
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  TRANSFER_OUT_STATUS_DONE(): Web3JsAbiCall<string>;
  TRANSFER_OUT_STATUS_ERROR(): Web3JsAbiCall<string>;
  TRANSFER_OUT_STATUS_NONE(): Web3JsAbiCall<string>;
  TRANSFER_OUT_STATUS_PENDING(): Web3JsAbiCall<string>;
  TRANSFER_OUT_STATUS_PROCESSING(): Web3JsAbiCall<string>;
  game(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  initialize(_game: string): Web3JsAbiCall<void>;
  isTokenSupported(_tokenAddress: string): Web3JsAbiCall<boolean>;
  getSupportedTokenTypes(): Web3JsAbiCall<string[]>;
  allowToken(_tokenAddress: string): Web3JsAbiCall<void>;
  disallowToken(_tokenAddress: string): Web3JsAbiCall<void>;
  bridgeIsEnabled(): Web3JsAbiCall<boolean>;
  setBridgeEnabled(enabled: boolean): Web3JsAbiCall<void>;
  chainBridgeEnabled(chainId: string | number): Web3JsAbiCall<boolean>;
  getEnabledChainsForBridging(): Web3JsAbiCall<string[]>;
  toggleChainBridgeEnabled(chainId: string | number, enable: boolean): Web3JsAbiCall<void>;
  bridgeOutToken(_tokenAddress: string, _amount: string | number, targetChain: string | number): Web3JsAbiCall<void>;
  bridgeInToken(receiver: string, _tokenAddress: string, _amount: string | number, sourceChain: string | number, sourceTransferId: string | number): Web3JsAbiCall<void>;
  getBridgeTransfers(): Web3JsAbiCall<string>;
  getBridgeVal(index: string | number): Web3JsAbiCall<string>;
  setBridgeVal(index: string | number, value: string | number): Web3JsAbiCall<void>;
  getTokenBridgeVal(token: string, index: string | number): Web3JsAbiCall<string>;
  setTokenBridgeVal(token: string, index: string | number, value: string | number): Web3JsAbiCall<void>;
  getBridgeTransferOfPlayer(player: string): Web3JsAbiCall<string>;
  getBridgeOutTransferOfPlayerHistory(player: string): Web3JsAbiCall<string[]>;
  getBridgeInTransferOfPlayerHistory(player: string): Web3JsAbiCall<string[]>;
  getBridgeOutTransfer(bridgeTransferId: string | number): Web3JsAbiCall<[string, string, string, string, string, string]>;
  getBridgeInTransfer(bridgeTransferId: string | number): Web3JsAbiCall<[string, string, string, string, string, string]>;
  updateBridgeTransferStatus(bridgeTransferId: string | number, status: string | number, forced: boolean): Web3JsAbiCall<void>;
  getTransferInFromLog(sourceChain: string | number, sourceTransferId: string | number): Web3JsAbiCall<string>;
  setProxyContract(token: string, proxy: string, forced: boolean): Web3JsAbiCall<void>;
  getProxyContract(token: string): Web3JsAbiCall<string>;
  setChainSupportedForERC20(token: string, chainIds: string[], support: boolean): Web3JsAbiCall<void>;
  getChainsSupportingERCs(token: string): Web3JsAbiCall<string[]>;
  getERCsSupportedByChain(chain: string | number): Web3JsAbiCall<string[]>;
  recoverToken(token: string, amount: string | number): Web3JsAbiCall<void>;
  updateWhitelistedWallets(token: string, wallets: string[], enable: boolean): Web3JsAbiCall<void>;
  getWhitelistedWallets(token: string): Web3JsAbiCall<string[]>;
}

export interface ERC20Upgradeable {
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

export interface Garrison {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  characterOwner(arg0: string | number): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  initialize(_characters: string): Web3JsAbiCall<void>;
  migrateTo_d514745(_game: string): Web3JsAbiCall<void>;
  getUserCharacters(): Web3JsAbiCall<string[]>;
  balanceOf(user: string): Web3JsAbiCall<string>;
  sendToGarrison(id: string | number): Web3JsAbiCall<void>;
  redirectToGarrison(user: string, id: string | number): Web3JsAbiCall<void>;
  restoreFromGarrison(id: string | number): Web3JsAbiCall<void>;
  swapWithGarrison(plazaId: string | number, garrisonId: string | number): Web3JsAbiCall<void>;
  transferFromGarrison(receiver: string, id: string | number): Web3JsAbiCall<void>;
  claimAllXp(chars: string[]): Web3JsAbiCall<void>;
  updateOnBurn(playerAddress: string, burnedId: string | number): Web3JsAbiCall<void>;
  allowToken(_tokenAddress: string): Web3JsAbiCall<void>;
  disallowToken(_tokenAddress: string): Web3JsAbiCall<void>;
  onERC721Received(arg0: string, arg1: string, _id: string | number, arg3: string): Web3JsAbiCall<string>;
}

export interface HasMain {
  main(): Web3JsAbiCall<string>;
  owner(): Web3JsAbiCall<string>;
  renounceOwnership(): Web3JsAbiCall<void>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  setMain(newMain: string): Web3JsAbiCall<void>;
}

export interface IBridgeProxy {
  collectData(tokenId: string | number): Web3JsAbiCall<[string[], string]>;
  mintOrUpdate(receiver: string, tokenId: string | number, uintVars: string[], stringVar: string): Web3JsAbiCall<string>;
  isEnabled(): Web3JsAbiCall<boolean>;
  sigVersion(): Web3JsAbiCall<string>;
  canBridge(wallet: string, tokenId: string | number, targetChain: string | number): Web3JsAbiCall<boolean>;
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

export interface IERC20BridgeProxy {
  isEnabled(): Web3JsAbiCall<boolean>;
  sigVersion(): Web3JsAbiCall<string>;
  canBridge(wallet: string, amount: string | number, targetChain: string | number): Web3JsAbiCall<boolean>;
}

export interface IERC20Upgradeable {
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

export interface INftStakingRewards {
  lastTimeRewardApplicable(): Web3JsAbiCall<string>;
  rewardPerToken(): Web3JsAbiCall<string>;
  earned(account: string): Web3JsAbiCall<string>;
  getRewardForDuration(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  stakedIdsOf(account: string): Web3JsAbiCall<string[]>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
  minimumStakeTime(): Web3JsAbiCall<string>;
  getStakeRewardDistributionTimeLeft(): Web3JsAbiCall<string>;
  getStakeUnlockTimeLeft(): Web3JsAbiCall<string>;
  rewardRate(): Web3JsAbiCall<string>;
  rewardsDuration(): Web3JsAbiCall<string>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  stake(id: string | number): Web3JsAbiCall<void>;
  bulkStake(ids: string[]): Web3JsAbiCall<void>;
  withdraw(id: string | number): Web3JsAbiCall<void>;
  bulkWithdraw(ids: string[]): Web3JsAbiCall<void>;
  getReward(): Web3JsAbiCall<void>;
  exit(): Web3JsAbiCall<void>;
}

export interface Initializable {

}

export interface IPriceOracle {
  currentPrice(): Web3JsAbiCall<string>;
  setCurrentPrice(price: string | number): Web3JsAbiCall<void>;
}

export interface IRandoms {
  getRandomSeed(user: string): Web3JsAbiCall<string>;
  getRandomSeedUsingHash(user: string, hash: string): Web3JsAbiCall<string>;
}

export interface IStakeFromGame {
  stakeFromGame(player: string, amount: string | number): Web3JsAbiCall<void>;
  unstakeToGame(player: string, amount: string | number): Web3JsAbiCall<void>;
}

export interface IStakingRewards {
  lastTimeRewardApplicable(): Web3JsAbiCall<string>;
  rewardPerToken(): Web3JsAbiCall<string>;
  earned(account: string): Web3JsAbiCall<string>;
  getRewardForDuration(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
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

export interface Junk {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
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
  name(): Web3JsAbiCall<string>;
  nextTokenID(): Web3JsAbiCall<string>;
  ownerOf(tokenId: string | number): Web3JsAbiCall<string>;
  promos(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number, _data: string): Web3JsAbiCall<void>;
  setApprovalForAll(operator: string, approved: boolean): Web3JsAbiCall<void>;
  supportsInterface(interfaceId: string): Web3JsAbiCall<boolean>;
  symbol(): Web3JsAbiCall<string>;
  tokenByIndex(index: string | number): Web3JsAbiCall<string>;
  tokenOfOwnerByIndex(owner: string, index: string | number): Web3JsAbiCall<string>;
  tokenStars(arg0: string | number): Web3JsAbiCall<string>;
  tokenURI(tokenId: string | number): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  initialize(_promos: string): Web3JsAbiCall<void>;
  get(id: string | number): Web3JsAbiCall<string>;
  getOwned(): Web3JsAbiCall<string[]>;
  getOwnedBy(owner: string): Web3JsAbiCall<string[]>;
  getStars(ids: string[]): Web3JsAbiCall<string[]>;
  mint(minter: string, mintStars: string | number): Web3JsAbiCall<string>;
  performMintJunkDetailed(minter: string, metaData: string | number, tokenID: string | number): Web3JsAbiCall<string>;
  mintN(minter: string, mintStars: string | number, amount: string | number): Web3JsAbiCall<string[]>;
  burn(tokenID: string | number): Web3JsAbiCall<void>;
  burn(tokenIDs: string[]): Web3JsAbiCall<void>;
  setNextTokenID(to: string | number): Web3JsAbiCall<void>;
  setBaseURI(baseUri: string): Web3JsAbiCall<void>;
}

export interface JunkBridgeProxyContract {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  UINT_NFT_VAR_META(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  initialize(_nftStorageAddress: string, _junk: string): Web3JsAbiCall<void>;
  collectData(tokenId: string | number): Web3JsAbiCall<[string[], string]>;
  sigVersion(): Web3JsAbiCall<string>;
  isEnabled(): Web3JsAbiCall<boolean>;
  setEnabled(_enabled: boolean): Web3JsAbiCall<void>;
  mintOrUpdate(arg0: string, tokenId: string | number, uintVars: string[], stringVar: string): Web3JsAbiCall<string>;
  _packJunkData(stars: string | number): Web3JsAbiCall<string>;
  canBridge(wallet: string, tokenId: string | number, targetChain: string | number): Web3JsAbiCall<boolean>;
}

export interface KeyLootbox {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
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
  name(): Web3JsAbiCall<string>;
  nextTokenID(): Web3JsAbiCall<string>;
  ownerOf(tokenId: string | number): Web3JsAbiCall<string>;
  promos(): Web3JsAbiCall<string>;
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
  initialize(_promos: string): Web3JsAbiCall<void>;
  mint(minter: string): Web3JsAbiCall<string>;
  getOwned(): Web3JsAbiCall<string[]>;
  getOwnedBy(owner: string): Web3JsAbiCall<string[]>;
  setNextTokenID(to: string | number): Web3JsAbiCall<void>;
  setBaseURI(baseUri: string): Web3JsAbiCall<void>;
}

export interface KingStakingRewardsUpgradeable {
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
  migrateTo_8cb6e70(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
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
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
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
  withdrawWithoutFee(amount: string | number): Web3JsAbiCall<void>;
  getRewardWithoutFee(): Web3JsAbiCall<void>;
}

export interface KingStakingRewardsUpgradeable180 {
  balanceOf(account: string): Web3JsAbiCall<string>;
  earned(account: string): Web3JsAbiCall<string>;
  enableFailsafeMode(): Web3JsAbiCall<void>;
  exit(): Web3JsAbiCall<void>;
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  getReward(): Web3JsAbiCall<void>;
  getRewardForDuration(): Web3JsAbiCall<string>;
  getRewardWithoutFee(): Web3JsAbiCall<void>;
  getStakeRewardDistributionTimeLeft(): Web3JsAbiCall<string>;
  getStakeUnlockTimeLeft(): Web3JsAbiCall<string>;
  initialize(_owner: string, _rewardsDistribution: string, _rewardsToken: string, _stakingToken: string, _minimumStakeTime: string | number): Web3JsAbiCall<void>;
  lastTimeRewardApplicable(): Web3JsAbiCall<string>;
  lastUpdateTime(): Web3JsAbiCall<string>;
  migrateTo_8cb6e70(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
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
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
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
  withdrawWithoutFee(amount: string | number): Web3JsAbiCall<void>;
}

export interface KingStakingRewardsUpgradeable90 {
  balanceOf(account: string): Web3JsAbiCall<string>;
  earned(account: string): Web3JsAbiCall<string>;
  enableFailsafeMode(): Web3JsAbiCall<void>;
  exit(): Web3JsAbiCall<void>;
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  getReward(): Web3JsAbiCall<void>;
  getRewardForDuration(): Web3JsAbiCall<string>;
  getRewardWithoutFee(): Web3JsAbiCall<void>;
  getStakeRewardDistributionTimeLeft(): Web3JsAbiCall<string>;
  getStakeUnlockTimeLeft(): Web3JsAbiCall<string>;
  initialize(_owner: string, _rewardsDistribution: string, _rewardsToken: string, _stakingToken: string, _minimumStakeTime: string | number): Web3JsAbiCall<void>;
  lastTimeRewardApplicable(): Web3JsAbiCall<string>;
  lastUpdateTime(): Web3JsAbiCall<string>;
  migrateTo_8cb6e70(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
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
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
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
  withdrawWithoutFee(amount: string | number): Web3JsAbiCall<void>;
}

export interface Launchpad {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  VAR_FUNDING_PERIOD_PHASE_1(): Web3JsAbiCall<string>;
  VAR_FUNDING_PERIOD_PHASE_2(): Web3JsAbiCall<string>;
  VAR_TIERS_AMOUNT(): Web3JsAbiCall<string>;
  VAR_UNCLAIMED_ALLOCATION_PERCENTAGE(): Web3JsAbiCall<string>;
  VAR_UNCLAIMED_COMMIT_START_OFFSET(): Web3JsAbiCall<string>;
  VAR_UNCLAIMED_COMMIT_WINDOW(): Web3JsAbiCall<string>;
  VAR_UNCLAIMED_TO_ALLOCATION_MULTIPLIER(): Web3JsAbiCall<string>;
  didUserCommitToLaunch(arg0: string, arg1: string | number): Web3JsAbiCall<boolean>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  launchBaseAllocation(arg0: string | number): Web3JsAbiCall<string>;
  launchFundsToRaise(arg0: string | number): Web3JsAbiCall<string>;
  launchLinearVestingsDurations(arg0: string | number): Web3JsAbiCall<string>;
  launchLinearVestingsStartTimestamps(arg0: string | number): Web3JsAbiCall<string>;
  launchPeriodicVestingsStartTimestamps(arg0: string | number, arg1: string | number): Web3JsAbiCall<string>;
  launchStartTime(arg0: string | number): Web3JsAbiCall<string>;
  launchTokenAddress(arg0: string | number): Web3JsAbiCall<string>;
  launchTokenPrice(arg0: string | number): Web3JsAbiCall<string>;
  launchTotalRaised(arg0: string | number): Web3JsAbiCall<string>;
  launchTotalUnclaimedSkillCommittedValue(arg0: string | number): Web3JsAbiCall<string>;
  launchUserInvestment(arg0: string | number, arg1: string): Web3JsAbiCall<string>;
  launchUserStakedAmountSnapshot(arg0: string | number, arg1: string): Web3JsAbiCall<string>;
  launchUserTotalUnclaimedSkillCommittedValue(arg0: string | number, arg1: string): Web3JsAbiCall<string>;
  launchUserUnclaimedSkillCommittedValue(arg0: string | number, arg1: string): Web3JsAbiCall<string>;
  launches(arg0: string | number): Web3JsAbiCall<[string, string, string, string, string, string, boolean]>;
  nextLaunchId(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  skillPrice(): Web3JsAbiCall<string>;
  tierAllocationWeight(arg0: string | number): Web3JsAbiCall<string>;
  tierStakingRequirement(arg0: string | number): Web3JsAbiCall<string>;
  userClaimedVestingPortion(arg0: string, arg1: string | number, arg2: string | number): Web3JsAbiCall<boolean>;
  userLinearVestingClaimTimestamp(arg0: string, arg1: string | number): Web3JsAbiCall<string>;
  vars(arg0: string | number): Web3JsAbiCall<string>;
  initialize(game: string): Web3JsAbiCall<void>;
  getTierForStakedAmount(amount: string | number): Web3JsAbiCall<string>;
  getLaunchAllocationForTier(launchId: string | number, tier: string | number): Web3JsAbiCall<string>;
  getUserRemainingAllocationForLaunch(user: string, launchId: string | number): Web3JsAbiCall<string>;
  getAvailableClaimAmount(launchId: string | number, vestingId: string | number): Web3JsAbiCall<string>;
  getLinearClaimAmount(launchId: string | number): Web3JsAbiCall<string>;
  getLaunchDetails(launchId: string | number): Web3JsAbiCall<[string, string, string, string, string, string]>;
  getOverallMaxAllocation(launchId: string | number): Web3JsAbiCall<string>;
  isUserWhitelisted(user: string, launchId: string | number): Web3JsAbiCall<boolean>;
  getTotalUnlockedPercentage(launchId: string | number): Web3JsAbiCall<string>;
  getLaunchVestingPercentages(launchId: string | number): Web3JsAbiCall<string[]>;
  getTotalLaunchUserInvestment(launchId: string | number): Web3JsAbiCall<string>;
  getUnclaimedCommittedValue(launchId: string | number): Web3JsAbiCall<string>;
  setBrandNewTiers(tierIds: string[], stakingRequirements: string[], tierWeights: string[]): Web3JsAbiCall<void>;
  setTiersRequirements(tierIds: string[], stakingRequirements: string[]): Web3JsAbiCall<void>;
  setTiersAllocationWeights(tierIds: string[], tierWeights: string[]): Web3JsAbiCall<void>;
  addNewLaunch(name: string, tokenSymbol: string, detailsJsonUri: string, imageUrl: string, fundingTokenAddress: string, commitOnly: boolean): Web3JsAbiCall<void>;
  addSecondPhaseForLaunch(launchId: string | number, startTime: string | number): Web3JsAbiCall<void>;
  removeLaunch(launchId: string | number): Web3JsAbiCall<void>;
  setLaunchDetails(launchId: string | number, tokenPrice: string | number, startTime: string | number, fundsToRaise: string | number): Web3JsAbiCall<void>;
  updateLaunchName(launchId: string | number, name: string): Web3JsAbiCall<void>;
  updateLaunchTokenSymbol(launchId: string | number, tokenSymbol: string): Web3JsAbiCall<void>;
  updateLaunchDetailsJsonUri(launchId: string | number, detailsJsonUri: string): Web3JsAbiCall<void>;
  updateLaunchImageUrl(launchId: string | number, imageUrl: string): Web3JsAbiCall<void>;
  updateLaunchFundingTokenAddress(launchId: string | number, fundingTokenAddress: string): Web3JsAbiCall<void>;
  updateLaunchIsCommitOnly(launchId: string | number, commitOnly: boolean): Web3JsAbiCall<void>;
  updateLaunchTokenPrice(launchId: string | number, tokenPrice: string | number): Web3JsAbiCall<void>;
  updateLaunchStartTime(launchId: string | number, startTime: string | number): Web3JsAbiCall<void>;
  updateLaunchFundsToRaise(launchId: string | number, fundsToRaise: string | number): Web3JsAbiCall<void>;
  updateLaunchTokenAddress(launchId: string | number, tokenAddress: string): Web3JsAbiCall<void>;
  enablePeriodicVesting(launchId: string | number, percentage: string | number): Web3JsAbiCall<void>;
  enableLinearVesting(launchId: string | number, duration: string | number): Web3JsAbiCall<void>;
  setEligibleUsersData(launchId: string | number, users: string[], stakedAmounts: string[]): Web3JsAbiCall<void>;
  setTotalUnclaimedCommitted(launchId: string | number, users: string[], totalCommittedValues: string[]): Web3JsAbiCall<void>;
  withdrawRaisedFunds(launchId: string | number): Web3JsAbiCall<void>;
  setVar(varField: string | number, value: string | number): Web3JsAbiCall<void>;
  setVars(varFields: string[], values: string[]): Web3JsAbiCall<void>;
  setSkillPrice(price: string | number): Web3JsAbiCall<void>;
  invest(launchId: string | number, amount: string | number): Web3JsAbiCall<void>;
  claimPeriodic(launchId: string | number, vestingId: string | number): Web3JsAbiCall<void>;
  claimLinear(launchId: string | number): Web3JsAbiCall<void>;
  commitUnclaimedSkill(launchId: string | number, amount: string | number, whitelistedWallet: string): Web3JsAbiCall<void>;
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
  migrateTo_8cb6e70(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
  minimumStakeTime(): Web3JsAbiCall<string>;
  notifyRewardAmount(reward: string | number): Web3JsAbiCall<void>;
  owner(): Web3JsAbiCall<string>;
  pause(): Web3JsAbiCall<void>;
  paused(): Web3JsAbiCall<boolean>;
  periodFinish(): Web3JsAbiCall<string>;
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
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
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
  recoverERC20(tokenAddress: string, tokenAmount: string | number): Web3JsAbiCall<void>;
}

export interface LP2StakingRewardsUpgradeableValor {
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
  migrateTo_8cb6e70(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
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
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
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
  minimumStakeAmount(): Web3JsAbiCall<string>;
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
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
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
  migrateTo_8cb6e70(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
  minimumStakeTime(): Web3JsAbiCall<string>;
  notifyRewardAmount(reward: string | number): Web3JsAbiCall<void>;
  owner(): Web3JsAbiCall<string>;
  pause(): Web3JsAbiCall<void>;
  paused(): Web3JsAbiCall<boolean>;
  periodFinish(): Web3JsAbiCall<string>;
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
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
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
  recoverERC20(tokenAddress: string, tokenAmount: string | number): Web3JsAbiCall<void>;
}

export interface LPStakingRewardsUpgradeableValor {
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
  migrateTo_8cb6e70(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
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
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
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

export interface Merchandise {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  LINK_SKILL_TOKEN(): Web3JsAbiCall<string>;
  STATUS_PAID(): Web3JsAbiCall<string>;
  VAR_ORDERS_ENABLED(): Web3JsAbiCall<string>;
  VAR_TRACK_INCOME(): Web3JsAbiCall<string>;
  externalOrderId(arg0: string | number): Web3JsAbiCall<string>;
  game(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  itemPrices(arg0: string | number): Web3JsAbiCall<string>;
  links(arg0: string | number): Web3JsAbiCall<string>;
  lowestUnprocessedOrderID(): Web3JsAbiCall<string>;
  nextOrderID(): Web3JsAbiCall<string>;
  orderBaskets(arg0: string | number, arg1: string | number): Web3JsAbiCall<string>;
  orderBuyer(arg0: string | number): Web3JsAbiCall<string>;
  orderData(arg0: string | number): Web3JsAbiCall<string>;
  orderPaidAmount(arg0: string | number): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  skillOracle(): Web3JsAbiCall<string>;
  vars(arg0: string | number): Web3JsAbiCall<string>;
  initialize(_game: string, _skillOracle: string): Web3JsAbiCall<void>;
  getUserAllowanceRequired(user: string, charge: string | number): Web3JsAbiCall<string>;
  canUserBeCharged(user: string, charge: string | number): Web3JsAbiCall<boolean>;
  recoverToken(tokenAddress: string, amount: string | number): Web3JsAbiCall<void>;
  setLink(linkId: string | number, linkAddress: string): Web3JsAbiCall<void>;
  setSkillOracle(newOracle: string): Web3JsAbiCall<void>;
  setItemPrice(item: string | number, usdCents: string | number): Web3JsAbiCall<void>;
  createOrder(orderNumber: string | number, payingAmount: string | number): Web3JsAbiCall<string>;
  getOrderPaidAmount(orderNumber: string | number): Web3JsAbiCall<string>;
  setVar(varField: string | number, value: string | number): Web3JsAbiCall<void>;
  setVars(varFields: string[], values: string[]): Web3JsAbiCall<void>;
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
  addFee(): Web3JsAbiCall<string>;
  burningManager(): Web3JsAbiCall<string>;
  changeFee(): Web3JsAbiCall<string>;
  defaultTax(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  isTokenBanned(arg0: string): Web3JsAbiCall<boolean>;
  isUserBanned(arg0: string): Web3JsAbiCall<boolean>;
  priceOracleSkillPerUsd(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  skillToken(): Web3JsAbiCall<string>;
  tax(arg0: string): Web3JsAbiCall<string>;
  taxRecipient(): Web3JsAbiCall<string>;
  initialize(_skillToken: string, _taxRecipient: string): Web3JsAbiCall<void>;
  migrateTo_a98a9ac(_charactersContract: string, _weaponsContract: string): Web3JsAbiCall<void>;
  migrateTo_2316231(_priceOracleSkillPerUsd: string): Web3JsAbiCall<void>;
  migrateTo_29635ef(_burningManager: string): Web3JsAbiCall<void>;
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
  getTargetBuyer(_tokenAddress: string, _id: string | number): Web3JsAbiCall<string>;
  getListingSlice(_tokenAddress: string, start: string | number, length: string | number): Web3JsAbiCall<[string, string[], string[], string[]]>;
  addListing(_tokenAddress: string, _id: string | number, _price: string | number, _targetBuyer: string): Web3JsAbiCall<void>;
  changeListingPrice(_tokenAddress: string, _id: string | number, _newPrice: string | number): Web3JsAbiCall<void>;
  changeListingTargetBuyer(_tokenAddress: string, _id: string | number, _newTargetBuyer: string): Web3JsAbiCall<void>;
  cancelListing(_tokenAddress: string, _id: string | number): Web3JsAbiCall<void>;
  purchaseListing(_tokenAddress: string, _id: string | number, _maxPrice: string | number): Web3JsAbiCall<void>;
  purchaseBurnCharacter(_id: string | number, _maxPrice: string | number): Web3JsAbiCall<void>;
  setAddValue(cents: string | number): Web3JsAbiCall<void>;
  setChangeValue(cents: string | number): Web3JsAbiCall<void>;
  setTaxRecipient(_taxRecipient: string): Web3JsAbiCall<void>;
  setDefaultTax(_defaultTax: string | number): Web3JsAbiCall<void>;
  setDefaultTaxAsRational(_numerator: string | number, _denominator: string | number): Web3JsAbiCall<void>;
  setDefaultTaxAsPercent(_percent: string | number): Web3JsAbiCall<void>;
  setTaxOnTokenType(_tokenAddress: string, _newTax: string | number): Web3JsAbiCall<void>;
  setTaxOnTokenTypeAsRational(_tokenAddress: string, _numerator: string | number, _denominator: string | number): Web3JsAbiCall<void>;
  setTaxOnTokenTypeAsPercent(_tokenAddress: string, _percent: string | number): Web3JsAbiCall<void>;
  setUserBan(user: string, to: boolean): Web3JsAbiCall<void>;
  setUserBans(users: string[], to: boolean): Web3JsAbiCall<void>;
  unlistItem(_tokenAddress: string, _id: string | number): Web3JsAbiCall<void>;
  unlistItems(_tokenAddress: string, _ids: string[]): Web3JsAbiCall<void>;
  allowToken(_tokenAddress: string): Web3JsAbiCall<void>;
  disallowToken(_tokenAddress: string): Web3JsAbiCall<void>;
  recoverSkill(amount: string | number): Web3JsAbiCall<void>;
  usdToSkill(usdAmount: string | number): Web3JsAbiCall<string>;
  onERC721Received(arg0: string, arg1: string, _id: string | number, arg3: string): Web3JsAbiCall<string>;
}

export interface NftStakingRewardsUpgradeable {
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  lastUpdateTime(): Web3JsAbiCall<string>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
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
  stakedIdsOf(account: string): Web3JsAbiCall<string[]>;
  lastTimeRewardApplicable(): Web3JsAbiCall<string>;
  rewardPerToken(): Web3JsAbiCall<string>;
  earned(account: string): Web3JsAbiCall<string>;
  getRewardForDuration(): Web3JsAbiCall<string>;
  getStakeRewardDistributionTimeLeft(): Web3JsAbiCall<string>;
  getStakeUnlockTimeLeft(): Web3JsAbiCall<string>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  stake(id: string | number): Web3JsAbiCall<void>;
  bulkStake(ids: string[]): Web3JsAbiCall<void>;
  withdraw(id: string | number): Web3JsAbiCall<void>;
  bulkWithdraw(ids: string[]): Web3JsAbiCall<void>;
  getReward(): Web3JsAbiCall<void>;
  exit(): Web3JsAbiCall<void>;
  recoverOwnStake(): Web3JsAbiCall<void>;
  notifyRewardAmount(reward: string | number): Web3JsAbiCall<void>;
  updatePeriodFinish(timestamp: string | number): Web3JsAbiCall<void>;
  recoverERC20(tokenAddress: string, tokenAmount: string | number): Web3JsAbiCall<void>;
  setRewardsDuration(_rewardsDuration: string | number): Web3JsAbiCall<void>;
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  setMinimumStakeTime(_minimumStakeTime: string | number): Web3JsAbiCall<void>;
  enableFailsafeMode(): Web3JsAbiCall<void>;
  pause(): Web3JsAbiCall<void>;
  unpause(): Web3JsAbiCall<void>;
  onERC721Received(arg0: string, arg1: string, _id: string | number, arg3: string): Web3JsAbiCall<string>;
}

export interface NFTStorage {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  NFTVAR_NON_GENESIS_VERSION(): Web3JsAbiCall<string>;
  NFT_TYPE_CHARACTER(): Web3JsAbiCall<string>;
  NFT_TYPE_SHIELD(): Web3JsAbiCall<string>;
  NFT_TYPE_WEAPON(): Web3JsAbiCall<string>;
  TRANSFER_IN_STATUS_AVAILABLE(): Web3JsAbiCall<string>;
  TRANSFER_IN_STATUS_WITHDRAWN(): Web3JsAbiCall<string>;
  TRANSFER_OUT_STATUS_DONE(): Web3JsAbiCall<string>;
  TRANSFER_OUT_STATUS_ERROR(): Web3JsAbiCall<string>;
  TRANSFER_OUT_STATUS_NONE(): Web3JsAbiCall<string>;
  TRANSFER_OUT_STATUS_PENDING(): Web3JsAbiCall<string>;
  TRANSFER_OUT_STATUS_PROCESSING(): Web3JsAbiCall<string>;
  TRANSFER_OUT_STATUS_RESTORED(): Web3JsAbiCall<string>;
  game(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  isNftBridged(arg0: string, arg1: string | number): Web3JsAbiCall<boolean>;
  promos(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  requestBridgeNativeFee(arg0: string): Web3JsAbiCall<string>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  withdrawFromStorageNativeFee(arg0: string): Web3JsAbiCall<string>;
  initialize(_weaponsAddress: string, _charactersAddress: string, _weaponRenameTagConsumables: string, _characterRenameTagConsumables: string, _weaponCosmetics: string, _characterCosmetics: string, _nftMarket: string): Web3JsAbiCall<void>;
  migrateTo_56837f7(_game: string): Web3JsAbiCall<void>;
  migrateTo_98bf302(_promos: string): Web3JsAbiCall<void>;
  migrateTo_3f597dc(_shieldsAddress: string): Web3JsAbiCall<void>;
  isTokenSupported(_tokenAddress: string): Web3JsAbiCall<boolean>;
  getSupportedTokenTypes(): Web3JsAbiCall<string[]>;
  getNumberOfStoragedItems(_tokenAddress: string, playerAddress: string): Web3JsAbiCall<string>;
  getNumberOfStoragedItems(_tokenAddress: string): Web3JsAbiCall<string>;
  getStorageItemIds(_tokenAddress: string): Web3JsAbiCall<string[]>;
  getStorageItemIds(_tokenAddress: string, playerAddress: string): Web3JsAbiCall<string[]>;
  storeItem(_tokenAddress: string, _id: string | number): Web3JsAbiCall<void>;
  withdrawFromStorage(_tokenAddress: string, _id: string | number): Web3JsAbiCall<void>;
  allowToken(_tokenAddress: string): Web3JsAbiCall<void>;
  disallowToken(_tokenAddress: string): Web3JsAbiCall<void>;
  onERC721Received(arg0: string, arg1: string, _id: string | number, arg3: string): Web3JsAbiCall<string>;
  storageIsEnabled(): Web3JsAbiCall<boolean>;
  setStorageEnabled(enabled: boolean): Web3JsAbiCall<void>;
  chainBridgeEnabled(chainId: string | number): Web3JsAbiCall<boolean>;
  getEnabledChainsForBridging(): Web3JsAbiCall<string[]>;
  toggleChainBridgeEnabled(chainId: string | number, prefix: string, enable: boolean): Web3JsAbiCall<void>;
  bridgeItem(_tokenAddress: string, _id: string | number, targetChain: string | number): Web3JsAbiCall<void>;
  cancelBridge(): Web3JsAbiCall<void>;
  getReceivedNFTs(): Web3JsAbiCall<string[]>;
  getReceivedNFT(receivedNFT: string | number): Web3JsAbiCall<[string, string, string, string, string, string]>;
  getNFTChainId(nftAddress: string, nftId: string | number): Web3JsAbiCall<string>;
  getNFTFromChainId(chainid: string, nftAddress: string): Web3JsAbiCall<string>;
  setNFTChainId(nftAddress: string, nftId: string | number, chainId: string, forced: boolean): Web3JsAbiCall<void>;
  setLocalChainPrefix(prefix: string): Web3JsAbiCall<void>;
  getLocalChainPrefix(): Web3JsAbiCall<string>;
  setBridgeFee(newFee: string | number): Web3JsAbiCall<void>;
  getBridgeFee(): Web3JsAbiCall<string>;
  botEnabled(): Web3JsAbiCall<boolean>;
  toggleBotEnabled(enable: boolean): Web3JsAbiCall<void>;
  getBridgeTransferAt(): Web3JsAbiCall<string>;
  setBridgeTransferAt(transfersOutAt: string | number): Web3JsAbiCall<void>;
  getBridgeTransfers(): Web3JsAbiCall<string>;
  getBridgeTransferOfPlayer(player: string): Web3JsAbiCall<string>;
  getBridgeTransfer(): Web3JsAbiCall<string>;
  getBridgeTransfer(bridgeTransferId: string | number): Web3JsAbiCall<[string, string, string, string, string, string, string]>;
  updateBridgeTransferStatus(bridgeTransferId: string | number, status: string | number, forced: boolean): Web3JsAbiCall<void>;
  getTransferInFromLog(sourceChain: string | number, nftType: string | number, sourceId: string | number): Web3JsAbiCall<string>;
  getTransferInFromLogV2(sourceChain: string | number, sourceTransferId: string | number): Web3JsAbiCall<string>;
  collectNFTData(nftAddress: string, tokenId: string | number): Web3JsAbiCall<[string[], string]>;
  mintOrUpdate(receiver: string, sourceChain: string | number, sourceTransfer: string | number, nftAddress: string, chainId: string, uintVars: string[], stringVar: string): Web3JsAbiCall<void>;
  setProxyContract(nft: string, proxy: string, forced: boolean): Web3JsAbiCall<void>;
  getProxyContract(nft: string): Web3JsAbiCall<string>;
  setChainSupportedForNFT(nft: string, chainIds: string[], support: boolean): Web3JsAbiCall<void>;
  setWithdrawFromStorageNativeFee(nftAddress: string, newFee: string | number): Web3JsAbiCall<void>;
  setGiveawayGen2Enabled(_enabled: boolean): Web3JsAbiCall<void>;
  setRequestBridgeNativeFee(nftAddress: string, newFee: string | number): Web3JsAbiCall<void>;
  recoverFees(receiver: string, amount: string | number): Web3JsAbiCall<void>;
  getChainsSupportingNFT(nft: string): Web3JsAbiCall<string[]>;
  getNFTsSupportedByChain(chain: string | number): Web3JsAbiCall<string[]>;
  unpackCharactersData(metaData: string | number): Web3JsAbiCall<[string, string, string, string, string, string]>;
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

export interface PartnerGiveaways {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  VAR_SHARDS_REWARD(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  giveawayEndTime(arg0: string | number): Web3JsAbiCall<string>;
  giveawayIdToAddress(arg0: string | number): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  nextGiveawayId(): Web3JsAbiCall<string>;
  nftClaimedAtGiveaway(arg0: string | number, arg1: string | number): Web3JsAbiCall<boolean>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  specialWeaponsManager(): Web3JsAbiCall<string>;
  userClaimedAtGiveaway(arg0: string, arg1: string | number): Web3JsAbiCall<boolean>;
  initialize(_specialWeaponsManager: string): Web3JsAbiCall<void>;
  getGiveawayClaimInfoForUser(giveawayId: string | number, nftId: string | number): Web3JsAbiCall<[boolean, boolean]>;
  createGiveawayForNft(requiredNftAddress: string, specialEventId: string | number, giveawayPeriod: string | number): Web3JsAbiCall<void>;
  claimReward(giveawayId: string | number, nftId: string | number): Web3JsAbiCall<void>;
  setVar(varField: string | number, value: string | number): Web3JsAbiCall<void>;
  setVars(varFields: string[], values: string[]): Web3JsAbiCall<void>;
}

export interface PartnerVault {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  currencies(arg0: string): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  nfts(arg0: string, arg1: string | number): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  onERC721Received(arg0: string, arg1: string, _id: string | number, arg3: string): Web3JsAbiCall<string>;
  storeNfts(tokenAddress: string, tokenIds: string[]): Web3JsAbiCall<void>;
  recordNfts(tokenAddress: string, startId: string | number, endId: string | number): Web3JsAbiCall<void>;
  showHeldNfts(tokenAddress: string, tokenIds: string[], holder: string, questId: string | number): Web3JsAbiCall<void>;
  storeCurrency(tokenAddress: string, amount: string | number): Web3JsAbiCall<void>;
  transferReward(tokenAddress: string, to: string, amount: string | number, seed: string | number): Web3JsAbiCall<void>;
  getNftsInVault(tokenAddress: string): Web3JsAbiCall<string[]>;
  haveNftsBeenShown(tokenAddress: string, questId: string | number, tokenIds: string[]): Web3JsAbiCall<boolean[]>;
}

export interface Pausable {
  paused(): Web3JsAbiCall<boolean>;
}

export interface PausableUpgradeable {
  paused(): Web3JsAbiCall<boolean>;
}

export interface Promos {
  BIT_BAD_ACTOR(): Web3JsAbiCall<string>;
  BIT_FIRST_CHARACTER(): Web3JsAbiCall<string>;
  BIT_FOUNDER_SHIELD(): Web3JsAbiCall<string>;
  BIT_LEGENDARY_DEFENDER(): Web3JsAbiCall<string>;
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
  setBits(user: string[], bit: string | number): Web3JsAbiCall<void>;
  unsetBit(user: string, bit: string | number): Web3JsAbiCall<void>;
  unsetBits(user: string[], bit: string | number): Web3JsAbiCall<void>;
  getBit(user: string, bit: string | number): Web3JsAbiCall<boolean>;
  firstCharacterPromoInGameOnlyFundsGivenInUsdAsCents(): Web3JsAbiCall<string>;
  setFirstCharacterPromoInGameOnlyFundsGivenInUsdAsCents(_usdCents: string | number): Web3JsAbiCall<void>;
  setFirstCharacterPromoInGameOnlyFundsGivenInUsdAsRational(_numerator: string | number, _denominator: string | number): Web3JsAbiCall<void>;
}

export interface PvpArena {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  arenaAccess(): Web3JsAbiCall<string>;
  characters(): Web3JsAbiCall<string>;
  currentRankedSeason(): Web3JsAbiCall<string>;
  decisionSeconds(): Web3JsAbiCall<string>;
  duelOffsetCost(): Web3JsAbiCall<string>;
  excessWagerByCharacter(arg0: string | number): Web3JsAbiCall<string>;
  fighterByCharacter(arg0: string | number): Web3JsAbiCall<[string, string, string, string, boolean]>;
  finderByOpponent(arg0: string | number): Web3JsAbiCall<string>;
  game(): Web3JsAbiCall<string>;
  gameCofferTaxDue(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  isCharacterInArena(arg0: string | number): Web3JsAbiCall<boolean>;
  isDefending(arg0: string | number): Web3JsAbiCall<boolean>;
  isShieldInArena(arg0: string | number): Web3JsAbiCall<boolean>;
  isWeaponInArena(arg0: string | number): Web3JsAbiCall<boolean>;
  losingPoints(): Web3JsAbiCall<string>;
  matchByFinder(arg0: string | number): Web3JsAbiCall<[string, string, string]>;
  previousTierByCharacter(arg0: string | number): Web3JsAbiCall<string>;
  prizePercentages(arg0: string | number): Web3JsAbiCall<string>;
  pvpBotAddress(): Web3JsAbiCall<string>;
  randoms(): Web3JsAbiCall<string>;
  rankingPointsByCharacter(arg0: string | number): Web3JsAbiCall<string>;
  rankingsPoolByTier(arg0: string | number): Web3JsAbiCall<string>;
  reRollFeePercent(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  seasonByCharacter(arg0: string | number): Web3JsAbiCall<string>;
  seasonDuration(): Web3JsAbiCall<string>;
  seasonStartedAt(): Web3JsAbiCall<string>;
  shields(): Web3JsAbiCall<string>;
  skillToken(): Web3JsAbiCall<string>;
  specialWeaponRerollTimestamp(arg0: string | number): Web3JsAbiCall<string>;
  wageringFactor(): Web3JsAbiCall<string>;
  weapons(): Web3JsAbiCall<string>;
  winningPoints(): Web3JsAbiCall<string>;
  withdrawFeePercent(): Web3JsAbiCall<string>;
  initialize(gameContract: string, shieldsContract: string, randomsContract: string): Web3JsAbiCall<void>;
  enterArena(characterID: string | number, weaponID: string | number, shieldID: string | number, useShield: boolean): Web3JsAbiCall<void>;
  withdrawFromArena(characterID: string | number): Web3JsAbiCall<void>;
  findOpponent(characterID: string | number): Web3JsAbiCall<void>;
  reRollOpponent(characterID: string | number): Web3JsAbiCall<void>;
  prepareDuel(attackerID: string | number): Web3JsAbiCall<void>;
  withdrawRankedRewards(): Web3JsAbiCall<void>;
  restartRankedSeason(): Web3JsAbiCall<void>;
  performDuels(attackerIDs: string[]): Web3JsAbiCall<void>;
  isCharacterWithinDecisionTime(characterID: string | number): Web3JsAbiCall<boolean>;
  isCharacterUnderAttack(characterID: string | number): Web3JsAbiCall<boolean>;
  isCharacterInDuel(characterID: string | number): Web3JsAbiCall<boolean>;
  getEntryWager(characterID: string | number): Web3JsAbiCall<string>;
  getEntryWagerByTier(tier: string | number): Web3JsAbiCall<string>;
  getDuelCost(characterID: string | number): Web3JsAbiCall<string>;
  getDuelCostByTier(tier: string | number): Web3JsAbiCall<string>;
  getArenaTier(characterID: string | number): Web3JsAbiCall<string>;
  getArenaTierForLevel(level: string | number): Web3JsAbiCall<string>;
  getOpponent(attackerID: string | number): Web3JsAbiCall<string>;
  getTierTopCharacters(tier: string | number): Web3JsAbiCall<string[]>;
  getPrizePercentages(): Web3JsAbiCall<string[]>;
  getPlayerPrizePoolRewards(): Web3JsAbiCall<string>;
  getDuelQueue(): Web3JsAbiCall<string[]>;
  getCharacterPower(characterID: string | number): Web3JsAbiCall<string>;
  getPVPTraitBonusAgainst(characterTrait: string | number, weaponTrait: string | number, opponentTrait: string | number): Web3JsAbiCall<string>;
  fillGameCoffers(): Web3JsAbiCall<void>;
  setBaseWagerInCents(cents: string | number): Web3JsAbiCall<void>;
  setTierWagerInCents(cents: string | number): Web3JsAbiCall<void>;
  setPrizePercentage(index: string | number, value: string | number): Web3JsAbiCall<void>;
  setWageringFactor(factor: string | number): Web3JsAbiCall<void>;
  setReRollFeePercent(percent: string | number): Web3JsAbiCall<void>;
  setWithdrawFeePercent(percent: string | number): Web3JsAbiCall<void>;
  setRankingsPoolTaxPercent(percent: string | number): Web3JsAbiCall<void>;
  setDecisionSeconds(secs: string | number): Web3JsAbiCall<void>;
  setWinningPoints(pts: string | number): Web3JsAbiCall<void>;
  setLosingPoints(pts: string | number): Web3JsAbiCall<void>;
  setMaxTopCharactersPerTier(max: string | number): Web3JsAbiCall<void>;
  setSeasonDuration(duration: string | number): Web3JsAbiCall<void>;
  setArenaAccess(accessFlags: string | number): Web3JsAbiCall<void>;
  setDuelOffsetCost(cost: string | number): Web3JsAbiCall<void>;
  setPvpBotAddress(botAddress: string): Web3JsAbiCall<void>;
  increaseRankingsPool(tier: string | number, amount: string | number): Web3JsAbiCall<void>;
  getMatchablePlayerCount(characterID: string | number): Web3JsAbiCall<string>;
  forceRemoveCharacterFromArena(characterID: string | number): Web3JsAbiCall<void>;
  clearDuelQueue(length: string | number): Web3JsAbiCall<void>;
}

export interface PvpCore {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  LINK_EQUIPMENT_MANAGER(): Web3JsAbiCall<string>;
  arenaAccess(): Web3JsAbiCall<string>;
  characters(): Web3JsAbiCall<string>;
  decisionSeconds(): Web3JsAbiCall<string>;
  duelOffsetCost(): Web3JsAbiCall<string>;
  excessWagerByCharacter(arg0: string | number): Web3JsAbiCall<string>;
  fighterByCharacter(arg0: string | number): Web3JsAbiCall<[string, string, string, string, boolean]>;
  finderByOpponent(arg0: string | number): Web3JsAbiCall<string>;
  game(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  isCharacterInArena(arg0: string | number): Web3JsAbiCall<boolean>;
  isDefending(arg0: string | number): Web3JsAbiCall<boolean>;
  isShieldInArena(arg0: string | number): Web3JsAbiCall<boolean>;
  isWeaponInArena(arg0: string | number): Web3JsAbiCall<boolean>;
  matchByFinder(arg0: string | number): Web3JsAbiCall<[string, string, string]>;
  previousTierByCharacter(arg0: string | number): Web3JsAbiCall<string>;
  pvpBotAddress(): Web3JsAbiCall<string>;
  pvprankings(): Web3JsAbiCall<string>;
  randoms(): Web3JsAbiCall<string>;
  reRollFeePercent(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  shields(): Web3JsAbiCall<string>;
  skillToken(): Web3JsAbiCall<string>;
  specialWeaponRerollTimestamp(arg0: string | number): Web3JsAbiCall<string>;
  wageringFactor(): Web3JsAbiCall<string>;
  weapons(): Web3JsAbiCall<string>;
  withdrawFeePercent(): Web3JsAbiCall<string>;
  initialize(gameContract: string, shieldsContract: string, randomsContract: string, pvpRankingsContract: string): Web3JsAbiCall<void>;
  enterArena(characterID: string | number, tierless: boolean): Web3JsAbiCall<void>;
  withdrawFromArena(characterID: string | number): Web3JsAbiCall<void>;
  findOpponent(characterID: string | number): Web3JsAbiCall<void>;
  reRollOpponent(characterID: string | number): Web3JsAbiCall<void>;
  prepareDuel(attackerID: string | number): Web3JsAbiCall<void>;
  performDuels(attackerIDs: string[]): Web3JsAbiCall<void>;
  isCharacterUnderAttack(characterID: string | number): Web3JsAbiCall<boolean>;
  getEntryWager(characterID: string | number): Web3JsAbiCall<string>;
  getEntryWagerByTier(tier: string | number): Web3JsAbiCall<string>;
  getDuelCost(characterID: string | number): Web3JsAbiCall<string>;
  getArenaTier(characterID: string | number): Web3JsAbiCall<string>;
  getOpponent(attackerID: string | number): Web3JsAbiCall<string>;
  getDuelQueue(): Web3JsAbiCall<string[]>;
  getCharacterPower(characterID: string | number, tier: string | number): Web3JsAbiCall<string>;
  getMatchablePlayerCount(characterID: string | number): Web3JsAbiCall<string>;
  getMatchablePlayerCountByTier(tier: string | number): Web3JsAbiCall<string>;
  isCharacterMatchableByTier(characterID: string | number, tier: string | number): Web3JsAbiCall<boolean>;
  setBaseWagerInCents(cents: string | number): Web3JsAbiCall<void>;
  setTierWagerInCents(cents: string | number): Web3JsAbiCall<void>;
  setWageringFactor(factor: string | number): Web3JsAbiCall<void>;
  setReRollFeePercent(percent: string | number): Web3JsAbiCall<void>;
  setWithdrawFeePercent(percent: string | number): Web3JsAbiCall<void>;
  setDecisionSeconds(secs: string | number): Web3JsAbiCall<void>;
  setArenaAccess(accessFlags: string | number): Web3JsAbiCall<void>;
  setDuelOffsetCost(cost: string | number): Web3JsAbiCall<void>;
  setPvpBotAddress(botAddress: string): Web3JsAbiCall<void>;
  setLink(linkId: string | number, linkAddress: string): Web3JsAbiCall<void>;
  forceRemoveCharacterFromArena(characterID: string | number): Web3JsAbiCall<void>;
}

export interface PvpRankings {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  characters(): Web3JsAbiCall<string>;
  currentRankedSeason(): Web3JsAbiCall<string>;
  game(): Web3JsAbiCall<string>;
  gameCofferTaxDue(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  losingPoints(): Web3JsAbiCall<string>;
  prizePercentages(arg0: string | number): Web3JsAbiCall<string>;
  pvpcore(): Web3JsAbiCall<string>;
  rankingPointsByCharacter(arg0: string | number): Web3JsAbiCall<string>;
  rankingsPoolByTier(arg0: string | number): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  seasonByCharacter(arg0: string | number): Web3JsAbiCall<string>;
  seasonDuration(): Web3JsAbiCall<string>;
  seasonStartedAt(): Web3JsAbiCall<string>;
  skillToken(): Web3JsAbiCall<string>;
  winningPoints(): Web3JsAbiCall<string>;
  initialize(gameContract: string): Web3JsAbiCall<void>;
  withdrawRankedRewards(): Web3JsAbiCall<void>;
  restartRankedSeason(): Web3JsAbiCall<void>;
  forceAssignRewards(characterID: string | number, position: string | number, pool: string | number): Web3JsAbiCall<void>;
  changeRankingRewards(characterID: string | number, amount: string | number): Web3JsAbiCall<void>;
  getRankingRewards(characterID: string | number): Web3JsAbiCall<string>;
  clearTierTopCharacters(tier: string | number): Web3JsAbiCall<void>;
  getTierTopCharacters(tier: string | number): Web3JsAbiCall<string[]>;
  getPlayerPrizePoolRewards(): Web3JsAbiCall<string>;
  getDuelBountyDistribution(duelCost: string | number): Web3JsAbiCall<[string, string]>;
  fillGameCoffers(): Web3JsAbiCall<void>;
  increaseRankingsPool(tier: string | number, amount: string | number): Web3JsAbiCall<void>;
  changeRankingPoints(characterID: string | number, points: string | number): Web3JsAbiCall<void>;
  handleEnterArena(fighter: string, characterID: string | number, tier: string | number): Web3JsAbiCall<void>;
  handlePrepareDuel(fighter: string, characterID: string | number): Web3JsAbiCall<void>;
  handlePerformDuel(winnerID: string | number, loserID: string | number, bonusRank: string | number, tier: string | number, poolTax: string | number): Web3JsAbiCall<void>;
  setPrizePercentage(index: string | number, value: string | number): Web3JsAbiCall<void>;
  setRankingsPoolTaxPercent(percent: string | number): Web3JsAbiCall<void>;
  setWinningPoints(pts: string | number): Web3JsAbiCall<void>;
  setLosingPoints(pts: string | number): Web3JsAbiCall<void>;
  setMaxTopCharactersPerTier(max: string | number): Web3JsAbiCall<void>;
  setSeasonDuration(duration: string | number): Web3JsAbiCall<void>;
  setPvpCoreAddress(pvpCoreContract: string): Web3JsAbiCall<void>;
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

export interface Raid1 {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  LINK_EQUIPMENT_MANAGER(): Web3JsAbiCall<string>;
  LINK_JUNK(): Web3JsAbiCall<string>;
  LINK_KEYBOX(): Web3JsAbiCall<string>;
  LINK_TRINKET(): Web3JsAbiCall<string>;
  NUMBERPARAMETER_AUTO_BOSSPOWER_PERCENT(): Web3JsAbiCall<string>;
  NUMBERPARAMETER_AUTO_DURATION(): Web3JsAbiCall<string>;
  STATUS_LOST(): Web3JsAbiCall<string>;
  STATUS_PAUSED(): Web3JsAbiCall<string>;
  STATUS_STARTED(): Web3JsAbiCall<string>;
  STATUS_UNSTARTED(): Web3JsAbiCall<string>;
  STATUS_WON(): Web3JsAbiCall<string>;
  characters(): Web3JsAbiCall<string>;
  durabilityCost(): Web3JsAbiCall<string>;
  game(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  joinCost(): Web3JsAbiCall<string>;
  links(arg0: string | number): Web3JsAbiCall<string>;
  numberParameters(arg0: string | number): Web3JsAbiCall<string>;
  promos(): Web3JsAbiCall<string>;
  raidBossPower(arg0: string | number): Web3JsAbiCall<string>;
  raidBossTrait(arg0: string | number): Web3JsAbiCall<string>;
  raidEndTime(arg0: string | number): Web3JsAbiCall<string>;
  raidIndex(): Web3JsAbiCall<string>;
  raidParticipantIndices(arg0: string | number, arg1: string, arg2: string | number): Web3JsAbiCall<string>;
  raidParticipants(arg0: string | number, arg1: string | number): Web3JsAbiCall<[string, string, string, string, string]>;
  raidPlayerPower(arg0: string | number): Web3JsAbiCall<string>;
  raidRewardClaimed(arg0: string | number, arg1: string): Web3JsAbiCall<boolean>;
  raidSeed(arg0: string | number): Web3JsAbiCall<string>;
  raidStatus(arg0: string | number): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  staminaCost(): Web3JsAbiCall<string>;
  weapons(): Web3JsAbiCall<string>;
  xpReward(): Web3JsAbiCall<string>;
  initialize(gameContract: string): Web3JsAbiCall<void>;
  doRaidAuto(): Web3JsAbiCall<void>;
  doRaid(bossPower: string | number, bossTrait: string | number, durationMinutes: string | number): Web3JsAbiCall<void>;
  doRaidWithSeed(bossPower: string | number, bossTrait: string | number, durationMinutes: string | number, seed: string | number): Web3JsAbiCall<void>;
  startRaid(bossPower: string | number, bossTrait: string | number, durationMinutes: string | number): Web3JsAbiCall<void>;
  joinRaid(characterID: string | number): Web3JsAbiCall<void>;
  setRaidStatus(index: string | number, status: string | number): Web3JsAbiCall<void>;
  completeRaid(): Web3JsAbiCall<void>;
  unpackFightData(playerData: string | number): Web3JsAbiCall<[string, string, string]>;
  getPlayerFinalPower(playerPower: string | number, charTrait: string | number, bossTrait: string | number): Web3JsAbiCall<string>;
  claimReward(claimRaidIndex: string | number): Web3JsAbiCall<void>;
  registerLink(addr: string, index: string | number): Web3JsAbiCall<void>;
  setStaminaPointCost(points: string | number): Web3JsAbiCall<void>;
  setDurabilityPointCost(points: string | number): Web3JsAbiCall<void>;
  setJoinCostInCents(cents: string | number): Web3JsAbiCall<void>;
  getJoinCostInSkill(): Web3JsAbiCall<string>;
  setXpReward(xp: string | number): Web3JsAbiCall<void>;
  setNumberParameter(paramIndex: string | number, value: string | number): Web3JsAbiCall<void>;
  getNumberParameter(paramIndex: string | number): Web3JsAbiCall<string>;
  getRaidStatus(index: string | number): Web3JsAbiCall<string>;
  getRaidEndTime(index: string | number): Web3JsAbiCall<string>;
  getRaidBossTrait(index: string | number): Web3JsAbiCall<string>;
  getRaidBossPower(index: string | number): Web3JsAbiCall<string>;
  getRaidPlayerPower(index: string | number): Web3JsAbiCall<string>;
  getRaidParticipantCount(index: string | number): Web3JsAbiCall<string>;
  getEligibleRewardIndexes(startIndex: string | number, endIndex: string | number): Web3JsAbiCall<string[]>;
  isEligibleForReward(index: string | number): Web3JsAbiCall<boolean>;
  getParticipatingCharacters(): Web3JsAbiCall<string[]>;
  getParticipatingWeapons(): Web3JsAbiCall<string[]>;
  getAccountsRaiderIndexes(index: string | number): Web3JsAbiCall<string[]>;
  getAccountsPower(index: string | number): Web3JsAbiCall<string>;
  canJoinRaid(characterID: string | number): Web3JsAbiCall<boolean>;
  haveEnoughEnergy(characterID: string | number): Web3JsAbiCall<boolean>;
  isRaidStarted(): Web3JsAbiCall<boolean>;
  isWeaponRaiding(weaponID: string | number): Web3JsAbiCall<boolean>;
  isCharacterRaiding(characterID: string | number): Web3JsAbiCall<boolean>;
  getLinkAddress(linkIndex: string | number): Web3JsAbiCall<string>;
  getRaidData(): Web3JsAbiCall<[string, string, string, string, string, string, string, string, string, string, string, string]>;
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
  getWeaponDrops(): Web3JsAbiCall<string[]>;
  setStaminaDrainSeconds(secs: string | number): Web3JsAbiCall<void>;
  getStaminaDrainSeconds(): Web3JsAbiCall<string>;
}

export interface RaidTrinket {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
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
  name(): Web3JsAbiCall<string>;
  nextTokenID(): Web3JsAbiCall<string>;
  ownerOf(tokenId: string | number): Web3JsAbiCall<string>;
  promos(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number, _data: string): Web3JsAbiCall<void>;
  setApprovalForAll(operator: string, approved: boolean): Web3JsAbiCall<void>;
  supportsInterface(interfaceId: string): Web3JsAbiCall<boolean>;
  symbol(): Web3JsAbiCall<string>;
  tokenByIndex(index: string | number): Web3JsAbiCall<string>;
  tokenEffect(arg0: string | number): Web3JsAbiCall<string>;
  tokenOfOwnerByIndex(owner: string, index: string | number): Web3JsAbiCall<string>;
  tokenStars(arg0: string | number): Web3JsAbiCall<string>;
  tokenURI(tokenId: string | number): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  initialize(_promos: string): Web3JsAbiCall<void>;
  get(id: string | number): Web3JsAbiCall<[string, string]>;
  getOwned(): Web3JsAbiCall<string[]>;
  getOwnedBy(owner: string): Web3JsAbiCall<string[]>;
  getStars(ids: string[]): Web3JsAbiCall<string[]>;
  mint(minter: string, mintStars: string | number, seed: string | number): Web3JsAbiCall<string>;
  mintN(minter: string, mintStars: string | number, amount: string | number, seed: string | number): Web3JsAbiCall<string[]>;
  burn(tokenID: string | number): Web3JsAbiCall<void>;
  burn(tokenIDs: string[]): Web3JsAbiCall<void>;
  setNextTokenID(to: string | number): Web3JsAbiCall<void>;
  setBaseURI(baseUri: string): Web3JsAbiCall<void>;
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

export interface SafeRandoms {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  currentSeedIndex(): Web3JsAbiCall<string>;
  emitPopEvent(): Web3JsAbiCall<boolean>;
  emitRequestEvent(): Web3JsAbiCall<boolean>;
  emitResolutionEvent(): Web3JsAbiCall<boolean>;
  firstRequestBlockNumber(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  publicResolutionBlocks(): Web3JsAbiCall<string>;
  publicResolutionLimited(): Web3JsAbiCall<boolean>;
  queuedSeedRequests(arg0: string, arg1: string | number, arg2: string | number): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  seedHashes(arg0: string | number): Web3JsAbiCall<string>;
  seedIndexBlockNumber(): Web3JsAbiCall<string>;
  singleSeedRequests(arg0: string, arg1: string | number): Web3JsAbiCall<string>;
  singleSeedSalts(arg0: string, arg1: string | number): Web3JsAbiCall<string>;
  initialize(): Web3JsAbiCall<void>;
  requestSingleSeed(user: string, requestID: string | number, force: boolean): Web3JsAbiCall<void>;
  requestSingleSeed(user: string, requestID: string | number): Web3JsAbiCall<void>;
  requestQueuedSeed(user: string, requestID: string | number): Web3JsAbiCall<void>;
  resolveSeedPublic(): Web3JsAbiCall<void>;
  resolveSeedAdmin(): Web3JsAbiCall<void>;
  popSingleSeed(user: string, requestID: string | number, resolve: boolean, requestNext: boolean): Web3JsAbiCall<string>;
  readSingleSeed(user: string, requestID: string | number, allowZero: boolean): Web3JsAbiCall<string>;
  saltSingleSeed(user: string, requestID: string | number, resolve: boolean): Web3JsAbiCall<string>;
  popQueuedSeed(user: string, requestID: string | number, resolve: boolean, requestNext: boolean): Web3JsAbiCall<string>;
  readQueuedSeed(user: string, requestID: string | number, allowZero: boolean): Web3JsAbiCall<string>;
  hasSingleSeedRequest(user: string, requestID: string | number): Web3JsAbiCall<boolean>;
  getQueuedRequestCount(requestID: string | number): Web3JsAbiCall<string>;
  encode(requestData: string[]): Web3JsAbiCall<string>;
  setPublicResolutionLimited(to: boolean): Web3JsAbiCall<void>;
  setPublicResolutionBlocks(to: string | number): Web3JsAbiCall<void>;
  setEmitResolutionEvent(to: boolean): Web3JsAbiCall<void>;
  setEmitRequestEvent(to: boolean): Web3JsAbiCall<void>;
  setEmitPopEvent(to: boolean): Web3JsAbiCall<void>;
}

export interface ShieldBridgeProxyContract {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  UINT_NFT_VAR_META(): Web3JsAbiCall<string>;
  UINT_NFT_VAR_SEED3DCOSMETIC(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  initialize(_nftStorageAddress: string, _shields: string): Web3JsAbiCall<void>;
  collectData(tokenId: string | number): Web3JsAbiCall<[string[], string]>;
  sigVersion(): Web3JsAbiCall<string>;
  isEnabled(): Web3JsAbiCall<boolean>;
  setEnabled(_enabled: boolean): Web3JsAbiCall<void>;
  mintOrUpdate(arg0: string, tokenId: string | number, uintVars: string[], stringVar: string): Web3JsAbiCall<string>;
  _packShieldsData(appliedCosmetic: string | number, properties: string | number, stat1: string | number, stat2: string | number, stat3: string | number, shieldType: string | number): Web3JsAbiCall<string>;
  canBridge(wallet: string, tokenId: string | number, targetChain: string | number): Web3JsAbiCall<boolean>;
}

export interface Shields {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  NFTVAR_BUSY(): Web3JsAbiCall<string>;
  NFTVAR_SHIELD_TYPE(): Web3JsAbiCall<string>;
  approve(to: string, tokenId: string | number): Web3JsAbiCall<void>;
  balanceOf(owner: string): Web3JsAbiCall<string>;
  baseURI(): Web3JsAbiCall<string>;
  defenseMultPerPointBasic(): Web3JsAbiCall<string>;
  defenseMultPerPointDEF(): Web3JsAbiCall<string>;
  defenseMultPerPointMatching(): Web3JsAbiCall<string>;
  getApproved(tokenId: string | number): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  isApprovedForAll(owner: string, operator: string): Web3JsAbiCall<boolean>;
  maxDurability(): Web3JsAbiCall<string>;
  name(): Web3JsAbiCall<string>;
  nftVars(arg0: string | number, arg1: string | number): Web3JsAbiCall<string>;
  ownerOf(tokenId: string | number): Web3JsAbiCall<string>;
  promos(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number, _data: string): Web3JsAbiCall<void>;
  secondsPerDurability(): Web3JsAbiCall<string>;
  setApprovalForAll(operator: string, approved: boolean): Web3JsAbiCall<void>;
  shieldBaseMultiplier(): Web3JsAbiCall<string>;
  supportsInterface(interfaceId: string): Web3JsAbiCall<boolean>;
  symbol(): Web3JsAbiCall<string>;
  tokenByIndex(index: string | number): Web3JsAbiCall<string>;
  tokenOfOwnerByIndex(owner: string, index: string | number): Web3JsAbiCall<string>;
  tokenURI(tokenId: string | number): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  migrateTo_surprise(_promos: string): Web3JsAbiCall<void>;
  get(id: string | number): Web3JsAbiCall<[string, string, string, string]>;
  getOwned(): Web3JsAbiCall<string[]>;
  getOwnedBy(owner: string): Web3JsAbiCall<string[]>;
  getCosmeticsSeed(id: string | number): Web3JsAbiCall<string>;
  mint(minter: string, shieldType: string | number, seed: string | number): Web3JsAbiCall<string>;
  burn(tokenID: string | number): Web3JsAbiCall<void>;
  burn(tokenIDs: string[]): Web3JsAbiCall<void>;
  mintShieldWithStars(minter: string, stars: string | number, shieldType: string | number, seed: string | number): Web3JsAbiCall<string>;
  mintShieldsWithStars(minter: string, stars: string | number, shieldType: string | number, amount: string | number, seed: string | number): Web3JsAbiCall<string[]>;
  performMintShield(minter: string, shieldType: string | number, properties: string | number, stat1: string | number, stat2: string | number, stat3: string | number, cosmeticSeed: string | number): Web3JsAbiCall<string>;
  performMintShieldDetailed(minter: string, metaData: string | number, cosmeticSeed: string | number, tokenID: string | number): Web3JsAbiCall<string>;
  mintGiveawayShield(to: string, stars: string | number, shieldType: string | number): Web3JsAbiCall<string>;
  getRandomProperties(stars: string | number, seed: string | number): Web3JsAbiCall<string>;
  getRandomStat(minRoll: string | number, maxRoll: string | number, seed: string | number, seed2: string | number): Web3JsAbiCall<string>;
  getRandomCosmetic(seed: string | number, seed2: string | number, limit: string | number): Web3JsAbiCall<string>;
  getStatMinRoll(stars: string | number): Web3JsAbiCall<string>;
  getStatMaxRoll(stars: string | number): Web3JsAbiCall<string>;
  getStatCount(stars: string | number): Web3JsAbiCall<string>;
  getProperties(id: string | number): Web3JsAbiCall<string>;
  getStars(ids: string[]): Web3JsAbiCall<string[]>;
  getStars(id: string | number): Web3JsAbiCall<string>;
  getStarsFromProperties(properties: string | number): Web3JsAbiCall<string>;
  getTrait(id: string | number): Web3JsAbiCall<string>;
  getTraitFromProperties(properties: string | number): Web3JsAbiCall<string>;
  getStatPattern(id: string | number): Web3JsAbiCall<string>;
  getStatPatternFromProperties(properties: string | number): Web3JsAbiCall<string>;
  getStat1Trait(statPattern: string | number): Web3JsAbiCall<string>;
  getStat2Trait(statPattern: string | number): Web3JsAbiCall<string>;
  getStat3Trait(statPattern: string | number): Web3JsAbiCall<string>;
  getStat1(id: string | number): Web3JsAbiCall<string>;
  getStat2(id: string | number): Web3JsAbiCall<string>;
  getStat3(id: string | number): Web3JsAbiCall<string>;
  getDefenseMultiplier(id: string | number): Web3JsAbiCall<string>;
  getDefenseMultiplierForTrait(properties: string | number, stat1: string | number, stat2: string | number, stat3: string | number, trait: string | number): Web3JsAbiCall<string>;
  getDefenseMultiplierForTrait(id: string | number, trait: string | number): Web3JsAbiCall<string>;
  getFightData(id: string | number, charTrait: string | number): Web3JsAbiCall<[string, string, string, string]>;
  getFightDataAndDrainDurability(id: string | number, charTrait: string | number, drainAmount: string | number): Web3JsAbiCall<[string, string, string, string]>;
  drainDurability(id: string | number, amount: string | number): Web3JsAbiCall<void>;
  getDurabilityTimestamp(id: string | number): Web3JsAbiCall<string>;
  setDurabilityTimestamp(id: string | number, timestamp: string | number): Web3JsAbiCall<void>;
  getDurabilityPoints(id: string | number): Web3JsAbiCall<string>;
  getDurabilityPointsFromTimestamp(timestamp: string | number): Web3JsAbiCall<string>;
  isDurabilityFull(id: string | number): Web3JsAbiCall<boolean>;
  getDurabilityMaxWait(): Web3JsAbiCall<string>;
  getNftVar(shieldID: string | number, nftVar: string | number): Web3JsAbiCall<string>;
  setNftVar(shieldID: string | number, nftVar: string | number, value: string | number): Web3JsAbiCall<void>;
  setNftVars(ids: string[], nftVar: string | number, value: string | number): Web3JsAbiCall<void>;
  setBaseURI(baseUri: string): Web3JsAbiCall<void>;
}

export interface SimpleQuests {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  VAR_COMMON_TIER(): Web3JsAbiCall<string>;
  VAR_CONTRACT_ENABLED(): Web3JsAbiCall<string>;
  VAR_EPIC_TIER(): Web3JsAbiCall<string>;
  VAR_LEGENDARY_TIER(): Web3JsAbiCall<string>;
  VAR_RARE_TIER(): Web3JsAbiCall<string>;
  VAR_REPUTATION_LEVEL_2(): Web3JsAbiCall<string>;
  VAR_REPUTATION_LEVEL_3(): Web3JsAbiCall<string>;
  VAR_REPUTATION_LEVEL_4(): Web3JsAbiCall<string>;
  VAR_REPUTATION_LEVEL_5(): Web3JsAbiCall<string>;
  VAR_SKIP_QUEST_STAMINA_COST(): Web3JsAbiCall<string>;
  VAR_UNCOMMON_TIER(): Web3JsAbiCall<string>;
  burningManager(): Web3JsAbiCall<string>;
  characterQuest(arg0: string | number): Web3JsAbiCall<string>;
  characters(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  junk(): Web3JsAbiCall<string>;
  lastFreeSkipUsage(arg0: string | number): Web3JsAbiCall<string>;
  nextQuestID(): Web3JsAbiCall<string>;
  nextRewardID(): Web3JsAbiCall<string>;
  partnerVault(): Web3JsAbiCall<string>;
  questCompletions(arg0: string, arg1: string | number): Web3JsAbiCall<string>;
  questDeadlines(arg0: string | number): Web3JsAbiCall<string>;
  questIndexes(arg0: string | number): Web3JsAbiCall<string>;
  questSupplies(arg0: string | number): Web3JsAbiCall<string>;
  questTemplates(arg0: string | number, arg1: string | number): Web3JsAbiCall<string>;
  quests(arg0: string | number): Web3JsAbiCall<[string, string, string, string, string, string, string, string, string, string, string]>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  rewards(arg0: string | number): Web3JsAbiCall<[string, string, string, string, string, string]>;
  safeRandoms(): Web3JsAbiCall<string>;
  shields(): Web3JsAbiCall<string>;
  tierChances(arg0: string | number, arg1: string | number): Web3JsAbiCall<string>;
  trinket(): Web3JsAbiCall<string>;
  vars(arg0: string | number): Web3JsAbiCall<string>;
  walletQuestProgress(arg0: string, arg1: string | number): Web3JsAbiCall<string>;
  weapons(): Web3JsAbiCall<string>;
  weeklyCompletions(arg0: string, arg1: string | number): Web3JsAbiCall<string>;
  weeklyCompletionsGoal(arg0: string | number): Web3JsAbiCall<string>;
  weeklyRewardClaimed(arg0: string, arg1: string | number): Web3JsAbiCall<boolean>;
  initialize(_characters: string, _weapons: string, _junk: string, _trinket: string, _shields: string, _burningManager: string, _safeRandoms: string, _partnerVault: string): Web3JsAbiCall<void>;
  generateRequestQuestSeed(characterID: string | number): Web3JsAbiCall<void>;
  requestQuest(characterID: string | number): Web3JsAbiCall<string>;
  requestPickableQuest(characterID: string | number, questID: string | number): Web3JsAbiCall<string>;
  skipQuest(characterID: string | number): Web3JsAbiCall<string>;
  skipQuest(characterID: string | number, pickedQuestID: string | number): Web3JsAbiCall<string>;
  completeQuest(characterID: string | number, pickedQuestID: string | number): Web3JsAbiCall<string[]>;
  completeQuest(characterID: string | number): Web3JsAbiCall<string[]>;
  completeWalletQuest(questID: string | number): Web3JsAbiCall<string[]>;
  generateRewardQuestSeed(characterID: string | number): Web3JsAbiCall<void>;
  generateRewardWeeklySeed(rewardID: string | number): Web3JsAbiCall<void>;
  claimWeeklyReward(): Web3JsAbiCall<string[]>;
  submitProgress(characterID: string | number, tokenIds: string[]): Web3JsAbiCall<void>;
  submitWalletProgress(questID: string | number, tokenIds: string[]): Web3JsAbiCall<void>;
  submitProgressAmount(characterID: string | number, amount: string | number): Web3JsAbiCall<void>;
  submitWalletProgressAmount(questID: string | number, amount: string | number): Web3JsAbiCall<void>;
  hasRandomQuestSeedRequested(characterID: string | number): Web3JsAbiCall<boolean>;
  hasRandomQuestRewardSeedRequested(characterID: string | number): Web3JsAbiCall<boolean>;
  hasRandomWalletQuestRewardSeedRequested(questID: string | number): Web3JsAbiCall<boolean>;
  hasRandomWeeklyRewardSeedRequested(rewardID: string | number): Web3JsAbiCall<boolean>;
  getVars(varFields: string[]): Web3JsAbiCall<string[]>;
  getTierChances(reputationLevel: string | number): Web3JsAbiCall<[string, string, string, string]>;
  getQuestTemplates(tier: string | number): Web3JsAbiCall<string[]>;
  getCharacterQuestData(characterID: string | number): Web3JsAbiCall<string[]>;
  hasFreeSkip(characterID: string | number): Web3JsAbiCall<boolean>;
  nextWeeklyQuestCompletionGoalReset(): Web3JsAbiCall<string>;
  nextFreeSkip(): Web3JsAbiCall<string>;
  getWeeklyCompletions(user: string): Web3JsAbiCall<string>;
  getWeekNumber(): Web3JsAbiCall<string>;
  setVar(varField: string | number, value: string | number): Web3JsAbiCall<void>;
  setVars(varFields: string[], values: string[]): Web3JsAbiCall<void>;
  setTierChances(tier: string | number, chances: [string, string, string, string]): Web3JsAbiCall<void>;
  addNewQuestTemplate(tier: string | number, requirementType: string | number, requirementRarity: string | number, requirementAmount: string | number, requirementExternalAddress: string, rewardType: string | number, rewardRarity: string | number, rewardAmount: string | number, rewardExternalAddress: string, reputationAmount: string | number, supply: string | number, deadline: string | number): Web3JsAbiCall<void>;
  setWeeklyReward(rewardType: string | number, rewardRarity: string | number, rewardAmount: string | number, rewardExternalAddress: string, reputationAmount: string | number, weekNumber: string | number, completionsGoal: string | number): Web3JsAbiCall<void>;
  deleteQuestTemplate(tier: string | number, questID: string | number): Web3JsAbiCall<void>;
}

export interface SkillERC20BridgeProxyContract {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  promos(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  initialize(_promos: string): Web3JsAbiCall<void>;
  sigVersion(): Web3JsAbiCall<string>;
  isEnabled(): Web3JsAbiCall<boolean>;
  setEnabled(_enabled: boolean): Web3JsAbiCall<void>;
  canBridge(wallet: string, amount: string | number, targetChain: string | number): Web3JsAbiCall<boolean>;
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
  minimumStakeAmount(): Web3JsAbiCall<string>;
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
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
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
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  getReward(): Web3JsAbiCall<void>;
  getRewardForDuration(): Web3JsAbiCall<string>;
  getStakeRewardDistributionTimeLeft(): Web3JsAbiCall<string>;
  getStakeUnlockTimeLeft(): Web3JsAbiCall<string>;
  initialize(_owner: string, _rewardsDistribution: string, _rewardsToken: string, _stakingToken: string, _minimumStakeTime: string | number): Web3JsAbiCall<void>;
  lastTimeRewardApplicable(): Web3JsAbiCall<string>;
  lastUpdateTime(): Web3JsAbiCall<string>;
  migrateTo_8cb6e70(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
  minimumStakeTime(): Web3JsAbiCall<string>;
  notifyRewardAmount(reward: string | number): Web3JsAbiCall<void>;
  owner(): Web3JsAbiCall<string>;
  pause(): Web3JsAbiCall<void>;
  paused(): Web3JsAbiCall<boolean>;
  periodFinish(): Web3JsAbiCall<string>;
  recoverExtraStakingTokensToOwner(): Web3JsAbiCall<void>;
  renounceOwnership(): Web3JsAbiCall<void>;
  rewardPerToken(): Web3JsAbiCall<string>;
  rewardPerTokenStored(): Web3JsAbiCall<string>;
  rewardRate(): Web3JsAbiCall<string>;
  rewards(arg0: string): Web3JsAbiCall<string>;
  rewardsDistribution(): Web3JsAbiCall<string>;
  rewardsDuration(): Web3JsAbiCall<string>;
  rewardsToken(): Web3JsAbiCall<string>;
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  setMinimumStakeTime(_minimumStakeTime: string | number): Web3JsAbiCall<void>;
  setRewardsDistribution(_rewardsDistribution: string): Web3JsAbiCall<void>;
  setRewardsDuration(_rewardsDuration: string | number): Web3JsAbiCall<void>;
  stakingToken(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  unpause(): Web3JsAbiCall<void>;
  updatePeriodFinish(timestamp: string | number): Web3JsAbiCall<void>;
  userRewardPerTokenPaid(arg0: string): Web3JsAbiCall<string>;
  game(): Web3JsAbiCall<string>;
  migrateTo_23b3a8b(_game: string): Web3JsAbiCall<void>;
  migrateTo_e1fe97c(_swm: string): Web3JsAbiCall<void>;
  stakeFromGame(player: string, amount: string | number): Web3JsAbiCall<void>;
  unstakeToGame(player: string, amount: string | number): Web3JsAbiCall<void>;
  stake(amount: string | number): Web3JsAbiCall<void>;
  withdraw(amount: string | number): Web3JsAbiCall<void>;
  exit(): Web3JsAbiCall<void>;
  recoverOwnStake(): Web3JsAbiCall<void>;
  recoverERC20(tokenAddress: string, tokenAmount: string | number): Web3JsAbiCall<void>;
}

export interface SkillStakingRewardsUpgradeable180 {
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
  migrateTo_23b3a8b(_game: string): Web3JsAbiCall<void>;
  migrateTo_8cb6e70(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  migrateTo_e1fe97c(_swm: string): Web3JsAbiCall<void>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
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
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  setMinimumStakeTime(_minimumStakeTime: string | number): Web3JsAbiCall<void>;
  setRewardsDistribution(_rewardsDistribution: string): Web3JsAbiCall<void>;
  setRewardsDuration(_rewardsDuration: string | number): Web3JsAbiCall<void>;
  stake(amount: string | number): Web3JsAbiCall<void>;
  stakeFromGame(player: string, amount: string | number): Web3JsAbiCall<void>;
  stakingToken(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  unpause(): Web3JsAbiCall<void>;
  unstakeToGame(player: string, amount: string | number): Web3JsAbiCall<void>;
  updatePeriodFinish(timestamp: string | number): Web3JsAbiCall<void>;
  userRewardPerTokenPaid(arg0: string): Web3JsAbiCall<string>;
  withdraw(amount: string | number): Web3JsAbiCall<void>;
}

export interface SkillStakingRewardsUpgradeable60 {
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
  migrateTo_23b3a8b(_game: string): Web3JsAbiCall<void>;
  migrateTo_8cb6e70(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  migrateTo_e1fe97c(_swm: string): Web3JsAbiCall<void>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
  minimumStakeTime(): Web3JsAbiCall<string>;
  notifyRewardAmount(reward: string | number): Web3JsAbiCall<void>;
  owner(): Web3JsAbiCall<string>;
  pause(): Web3JsAbiCall<void>;
  paused(): Web3JsAbiCall<boolean>;
  periodFinish(): Web3JsAbiCall<string>;
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
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  setMinimumStakeTime(_minimumStakeTime: string | number): Web3JsAbiCall<void>;
  setRewardsDistribution(_rewardsDistribution: string): Web3JsAbiCall<void>;
  setRewardsDuration(_rewardsDuration: string | number): Web3JsAbiCall<void>;
  stake(amount: string | number): Web3JsAbiCall<void>;
  stakeFromGame(player: string, amount: string | number): Web3JsAbiCall<void>;
  stakingToken(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  unpause(): Web3JsAbiCall<void>;
  unstakeToGame(player: string, amount: string | number): Web3JsAbiCall<void>;
  updatePeriodFinish(timestamp: string | number): Web3JsAbiCall<void>;
  userRewardPerTokenPaid(arg0: string): Web3JsAbiCall<string>;
  withdraw(amount: string | number): Web3JsAbiCall<void>;
  recoverERC20(tokenAddress: string, tokenAmount: string | number): Web3JsAbiCall<void>;
}

export interface SkillStakingRewardsUpgradeable90 {
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
  migrateTo_23b3a8b(_game: string): Web3JsAbiCall<void>;
  migrateTo_8cb6e70(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  migrateTo_e1fe97c(_swm: string): Web3JsAbiCall<void>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
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
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  setMinimumStakeTime(_minimumStakeTime: string | number): Web3JsAbiCall<void>;
  setRewardsDistribution(_rewardsDistribution: string): Web3JsAbiCall<void>;
  setRewardsDuration(_rewardsDuration: string | number): Web3JsAbiCall<void>;
  stake(amount: string | number): Web3JsAbiCall<void>;
  stakeFromGame(player: string, amount: string | number): Web3JsAbiCall<void>;
  stakingToken(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  unpause(): Web3JsAbiCall<void>;
  unstakeToGame(player: string, amount: string | number): Web3JsAbiCall<void>;
  updatePeriodFinish(timestamp: string | number): Web3JsAbiCall<void>;
  userRewardPerTokenPaid(arg0: string): Web3JsAbiCall<string>;
  withdraw(amount: string | number): Web3JsAbiCall<void>;
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

export interface SpecialWeaponsManager {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  MINTER_ROLE(): Web3JsAbiCall<string>;
  SPECIAL_WEAPON_SEED(): Web3JsAbiCall<string>;
  VAR_CONVERT_RATIO_DENOMINATOR(): Web3JsAbiCall<string>;
  VAR_DAILY_SHARDS_PER_SKILL_STAKED(): Web3JsAbiCall<string>;
  VAR_SHARD_COST_HIGH(): Web3JsAbiCall<string>;
  VAR_SHARD_COST_LOW(): Web3JsAbiCall<string>;
  VAR_SHARD_COST_MEDIUM(): Web3JsAbiCall<string>;
  VAR_SKILL_USD_COST_HIGH(): Web3JsAbiCall<string>;
  VAR_SKILL_USD_COST_LOW(): Web3JsAbiCall<string>;
  VAR_SKILL_USD_COST_MEDIUM(): Web3JsAbiCall<string>;
  eventCount(): Web3JsAbiCall<string>;
  eventInfo(arg0: string | number): Web3JsAbiCall<[string, string, string, string, string]>;
  game(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  priceOracleSkillPerUsd(): Web3JsAbiCall<string>;
  promos(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  safeRandoms(): Web3JsAbiCall<string>;
  specialWeaponArt(arg0: string | number): Web3JsAbiCall<string>;
  specialWeaponDetails(arg0: string | number): Web3JsAbiCall<string>;
  specialWeaponNote(arg0: string | number): Web3JsAbiCall<string>;
  specialWeaponWebsite(arg0: string | number): Web3JsAbiCall<string>;
  userEventShardSupply(arg0: string, arg1: string | number): Web3JsAbiCall<string>;
  userForgedAtEvent(arg0: string, arg1: string | number): Web3JsAbiCall<boolean>;
  userOrderOptionForEvent(arg0: string, arg1: string | number): Web3JsAbiCall<string>;
  vars(arg0: string | number): Web3JsAbiCall<string>;
  weapons(): Web3JsAbiCall<string>;
  initialize(_promos: string, _weapons: string, _safeRandoms: string, _game: string, _priceOracleSkillPerUsd: string): Web3JsAbiCall<void>;
  setVar(varField: string | number, value: string | number): Web3JsAbiCall<void>;
  setVars(varFields: string[], values: string[]): Web3JsAbiCall<void>;
  getActiveEventsIds(): Web3JsAbiCall<string[]>;
  getActiveEventsCount(): Web3JsAbiCall<string>;
  getIsEventActive(eventId: string | number): Web3JsAbiCall<boolean>;
  hasRemainingSupply(eventId: string | number): Web3JsAbiCall<boolean>;
  getTotalOrderedCount(eventId: string | number): Web3JsAbiCall<string>;
  getEventInfo(eventId: string | number): Web3JsAbiCall<[string, string, string, string, string]>;
  getUserSpecialShardsSupply(user: string, eventId: string | number): Web3JsAbiCall<string>;
  getUserShardsRewards(user: string): Web3JsAbiCall<string>;
  getSkillForgeCost(orderOption: string | number): Web3JsAbiCall<string>;
  usdToSkill(usdAmount: string | number): Web3JsAbiCall<string>;
  getSpecialWeaponData(eventId: string | number): Web3JsAbiCall<[string, string, string, string]>;
  startNewEvent(name: string, element: string | number, period: string | number, supply: string | number, art: string, details: string, website: string, note: string): Web3JsAbiCall<void>;
  incrementEventCount(): Web3JsAbiCall<void>;
  updateStakingReward(user: string, stakingAmount: string | number): Web3JsAbiCall<void>;
  claimShardRewards(eventId: string | number, amount: string | number): Web3JsAbiCall<void>;
  orderSpecialWeaponWithShards(eventId: string | number, orderOption: string | number): Web3JsAbiCall<void>;
  orderSpecialWeaponWithSkill(eventId: string | number, orderOption: string | number): Web3JsAbiCall<void>;
  forgeSpecialWeapon(eventId: string | number): Web3JsAbiCall<void>;
  addShards(user: string, eventId: string | number, shardsAmount: string | number): Web3JsAbiCall<void>;
  convertShards(eventIdFrom: string | number, eventIdTo: string | number, amount: string | number): Web3JsAbiCall<void>;
  updateEventEndTime(eventId: string | number, endTime: string | number): Web3JsAbiCall<void>;
  privatePartnerOrder(receivers: string[], eventId: string | number, orderOption: string | number): Web3JsAbiCall<void>;
  privatePartnerMint(receivers: string[], eventId: string | number, orderOption: string | number): Web3JsAbiCall<void>;
  reserveForGiveaways(reservingAddress: string, eventId: string | number, orderOption: string | number, amount: string | number): Web3JsAbiCall<void>;
  createManualEvent(name: string, element: string | number): Web3JsAbiCall<void>;
  mintOrderOptionForManualEvent(receivers: string[], eventId: string | number, orderOption: string | number): Web3JsAbiCall<void>;
  mintStarsForManualEvent(receivers: string[], eventId: string | number, stars: string | number): Web3JsAbiCall<void>;
  setSpecialWeaponArt(eventId: string | number, art: string): Web3JsAbiCall<void>;
  setSpecialWeaponDetails(eventId: string | number, details: string): Web3JsAbiCall<void>;
  setSpecialWeaponWebsite(eventId: string | number, website: string): Web3JsAbiCall<void>;
  setSpecialWeaponNote(eventId: string | number, note: string): Web3JsAbiCall<void>;
}

export interface StakingRewards {
  acceptOwnership(): Web3JsAbiCall<void>;
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  lastPauseTime(): Web3JsAbiCall<string>;
  lastUpdateTime(): Web3JsAbiCall<string>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
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
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  setMinimumStakeTime(_minimumStakeTime: string | number): Web3JsAbiCall<void>;
  enableFailsafeMode(): Web3JsAbiCall<void>;
  recoverExtraStakingTokensToOwner(): Web3JsAbiCall<void>;
}

export interface StakingRewardsUpgradeable {
  failsafeModeActive(): Web3JsAbiCall<boolean>;
  lastUpdateTime(): Web3JsAbiCall<string>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
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
  migrateTo_8cb6e70(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
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
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
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

export interface TokensManager {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  combatTokenChargePercent(): Web3JsAbiCall<string>;
  game(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  offsetSlippage(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  skillTokenPrice(): Web3JsAbiCall<string>;
  tokenPrice(): Web3JsAbiCall<string>;
  initialize(gameContract: string): Web3JsAbiCall<void>;
  fight(char: string | number, target: string | number, fightMultiplier: string | number): Web3JsAbiCall<void>;
  retrieve(addressToTransferTo: string, amount: string | number): Web3JsAbiCall<void>;
  getSkillToNativeRatio(): Web3JsAbiCall<string>;
  setTokenPrice(price: string | number): Web3JsAbiCall<void>;
  setSkillTokenPrice(price: string | number): Web3JsAbiCall<void>;
  setCombatTokenChargePercent(percent: string | number): Web3JsAbiCall<void>;
  setOffsetSlippage(slippage: string | number): Web3JsAbiCall<void>;
}

export interface TransferCooldownableInterfaceId {

}

export interface Treasury {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAMEUSERVAR_GEN2_UNCLAIMED(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  defaultSlippage(): Web3JsAbiCall<string>;
  game(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  multiplierUnit(): Web3JsAbiCall<string>;
  partneredProjects(arg0: string | number): Web3JsAbiCall<[string, string, string, string, string, string, boolean]>;
  projectDetails(arg0: string | number): Web3JsAbiCall<string>;
  projectDistributionTime(arg0: string | number): Web3JsAbiCall<string>;
  projectIsValor(arg0: string | number): Web3JsAbiCall<boolean>;
  projectLogo(arg0: string | number): Web3JsAbiCall<string>;
  projectNote(arg0: string | number): Web3JsAbiCall<string>;
  projectWebsite(arg0: string | number): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  skillPrice(): Web3JsAbiCall<string>;
  tokensClaimed(arg0: string | number): Web3JsAbiCall<string>;
  initialize(_game: string): Web3JsAbiCall<void>;
  getAmountOfActiveProjects(): Web3JsAbiCall<string>;
  getActivePartnerProjectsIds(): Web3JsAbiCall<string[]>;
  getProjectMultiplier(partnerId: string | number): Web3JsAbiCall<string>;
  getSkillToPartnerRatio(partnerId: string | number): Web3JsAbiCall<string>;
  getRemainingPartnerTokenSupply(partnerId: string | number): Web3JsAbiCall<string>;
  getAmountInPartnerToken(partnerId: string | number, claimingAmount: string | number): Web3JsAbiCall<string>;
  getProjectData(partnerId: string | number): Web3JsAbiCall<[string, string, string, string]>;
  addPartnerProject(name: string, tokenSymbol: string, tokenAddress: string, tokenSupply: string | number, tokenPrice: string | number, distributionTime: string | number, isActive: boolean, logo: string, details: string, website: string, note: string, isValor: boolean): Web3JsAbiCall<void>;
  claim(partnerId: string | number): Web3JsAbiCall<void>;
  claim(partnerId: string | number, claimingAmount: string | number, currentMultiplier: string | number, slippage: string | number): Web3JsAbiCall<void>;
  setMultiplierUnit(unit: string | number): Web3JsAbiCall<void>;
  setIsActive(id: string | number, isActive: boolean): Web3JsAbiCall<void>;
  setIsValor(id: string | number, isValor: boolean): Web3JsAbiCall<void>;
  setSkillPrice(newPrice: string | number): Web3JsAbiCall<void>;
  setPartnerTokenPrice(partnerId: string | number, newPrice: string | number): Web3JsAbiCall<void>;
  setDistributionTime(partnerId: string | number, distributionTime: string | number): Web3JsAbiCall<void>;
  setDefaultSlippage(newSlippage: string | number): Web3JsAbiCall<void>;
  setProjectLogo(partnerId: string | number, logo: string): Web3JsAbiCall<void>;
  setProjectDetails(partnerId: string | number, details: string): Web3JsAbiCall<void>;
  setProjectWebsite(partnerId: string | number, website: string): Web3JsAbiCall<void>;
  setProjectNote(partnerId: string | number, note: string): Web3JsAbiCall<void>;
}

export interface ValorERC20BridgeProxyContract {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  promos(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  initialize(_promos: string): Web3JsAbiCall<void>;
  sigVersion(): Web3JsAbiCall<string>;
  isEnabled(): Web3JsAbiCall<boolean>;
  setEnabled(_enabled: boolean): Web3JsAbiCall<void>;
  canBridge(wallet: string, amount: string | number, targetChain: string | number): Web3JsAbiCall<boolean>;
}

export interface ValorStakingRewardsUpgradeable {
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
  migrateTo_8cb6e70(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
  minimumStakeAmount(): Web3JsAbiCall<string>;
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
  setMinimumStakeAmount(_minimumStakeAmount: string | number): Web3JsAbiCall<void>;
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

export interface ValorToken {
  allowance(owner: string, spender: string): Web3JsAbiCall<string>;
  approve(spender: string, amount: string | number): Web3JsAbiCall<boolean>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  decimals(): Web3JsAbiCall<string>;
  decreaseAllowance(spender: string, subtractedValue: string | number): Web3JsAbiCall<boolean>;
  increaseAllowance(spender: string, addedValue: string | number): Web3JsAbiCall<boolean>;
  name(): Web3JsAbiCall<string>;
  owner(): Web3JsAbiCall<string>;
  renounceOwnership(): Web3JsAbiCall<void>;
  symbol(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  transfer(recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
  transferFrom(sender: string, recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  initialize(): Web3JsAbiCall<void>;
  mint(account: string, amount: string | number): Web3JsAbiCall<void>;
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

export interface WeaponBridgeProxyContract {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  UINT_NFT_VAR_META(): Web3JsAbiCall<string>;
  UINT_NFT_VAR_SEED3DCOSMETIC(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  initialize(_nftStorageAddress: string, _weapons: string, _weaponCosmetics: string, _weaponRenameTagConsumables: string): Web3JsAbiCall<void>;
  collectData(tokenId: string | number): Web3JsAbiCall<[string[], string]>;
  sigVersion(): Web3JsAbiCall<string>;
  isEnabled(): Web3JsAbiCall<boolean>;
  setEnabled(_enabled: boolean): Web3JsAbiCall<void>;
  mintOrUpdate(arg0: string, tokenId: string | number, uintVars: string[], stringVar: string): Web3JsAbiCall<string>;
  canBridge(wallet: string, tokenId: string | number, targetChain: string | number): Web3JsAbiCall<boolean>;
}

export interface WeaponCosmetics {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  appliedCosmetics(arg0: string | number): Web3JsAbiCall<string>;
  getCosmeticCount(cosmetic: string | number): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  giveCosmetic(buyer: string, cosmetic: string | number, amount: string | number): Web3JsAbiCall<void>;
  giveCosmeticByAdmin(receiver: string, cosmetic: string | number, amount: string | number): Web3JsAbiCall<void>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  isCosmeticAvailable(cosmetic: string | number): Web3JsAbiCall<boolean>;
  owned(arg0: string, arg1: string | number): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  takeCosmeticByAdmin(target: string, cosmetic: string | number, amount: string | number): Web3JsAbiCall<void>;
  toggleCosmeticAvailable(cosmetic: string | number, available: boolean): Web3JsAbiCall<void>;
  weapons(): Web3JsAbiCall<string>;
  initialize(): Web3JsAbiCall<void>;
  initialize(_weapons: string): Web3JsAbiCall<void>;
  applyCosmetic(weaponId: string | number, cosmetic: string | number): Web3JsAbiCall<void>;
  removeCosmetic(weaponId: string | number): Web3JsAbiCall<void>;
  getWeaponCosmetic(weaponId: string | number): Web3JsAbiCall<string>;
  setWeaponCosmetic(weaponId: string | number, cosmetic: string | number): Web3JsAbiCall<void>;
}

export interface WeaponRenameTagConsumables {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  getItemCount(): Web3JsAbiCall<string>;
  getRoleAdmin(role: string): Web3JsAbiCall<string>;
  getRoleMember(role: string, index: string | number): Web3JsAbiCall<string>;
  getRoleMemberCount(role: string): Web3JsAbiCall<string>;
  giveItem(buyer: string, amount: string | number): Web3JsAbiCall<void>;
  giveItemByAdmin(receiver: string, amount: string | number): Web3JsAbiCall<void>;
  grantRole(role: string, account: string): Web3JsAbiCall<void>;
  hasRole(role: string, account: string): Web3JsAbiCall<boolean>;
  itemEnabled(): Web3JsAbiCall<boolean>;
  owned(arg0: string): Web3JsAbiCall<string>;
  renames(arg0: string | number): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  takeItemByAdmin(target: string, amount: string | number): Web3JsAbiCall<void>;
  toggleItemCanUse(canUse: boolean): Web3JsAbiCall<void>;
  weapons(): Web3JsAbiCall<string>;
  initialize(): Web3JsAbiCall<void>;
  initialize(_weapons: string): Web3JsAbiCall<void>;
  renameWeapon(weaponId: string | number, newName: string): Web3JsAbiCall<void>;
  getWeaponRename(weaponId: string | number): Web3JsAbiCall<string>;
  setMinSize(newMinSize: string | number): Web3JsAbiCall<void>;
  setMaxSize(newMaxSize: string | number): Web3JsAbiCall<void>;
  getMinSize(): Web3JsAbiCall<string>;
  getMaxSize(): Web3JsAbiCall<string>;
  setName(weaponId: string | number, newName: string): Web3JsAbiCall<void>;
}

export interface Weapons {
  DEFAULT_ADMIN_ROLE(): Web3JsAbiCall<string>;
  GAME_ADMIN(): Web3JsAbiCall<string>;
  MINTER_ROLE(): Web3JsAbiCall<string>;
  NFTVAR_BUSY(): Web3JsAbiCall<string>;
  NFTVAR_WEAPON_TYPE(): Web3JsAbiCall<string>;
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
  maxDurability(): Web3JsAbiCall<string>;
  name(): Web3JsAbiCall<string>;
  nftVars(arg0: string | number, arg1: string | number): Web3JsAbiCall<string>;
  numberParameters(arg0: string | number): Web3JsAbiCall<string>;
  ownerOf(tokenId: string | number): Web3JsAbiCall<string>;
  promos(): Web3JsAbiCall<string>;
  renounceRole(role: string, account: string): Web3JsAbiCall<void>;
  revokeRole(role: string, account: string): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number): Web3JsAbiCall<void>;
  safeTransferFrom(from: string, to: string, tokenId: string | number, _data: string): Web3JsAbiCall<void>;
  secondsPerDurability(): Web3JsAbiCall<string>;
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
  migrateTo_surprise(_promos: string): Web3JsAbiCall<void>;
  getCosmeticsSeed(id: string | number): Web3JsAbiCall<string>;
  get(id: string | number): Web3JsAbiCall<[string, string, string, string, string, string, string, string, string]>;
  setBaseURI(baseUri: string): Web3JsAbiCall<void>;
  mintN(minter: string, amount: string | number, seed: string | number, chosenElement: string | number): Web3JsAbiCall<void>;
  mint(minter: string, seed: string | number, chosenElement: string | number): Web3JsAbiCall<string>;
  mintSpecialWeapon(minter: string, eventId: string | number, stars: string | number, seed: string | number, element: string | number): Web3JsAbiCall<string>;
  mintGiveawayWeapon(to: string, stars: string | number, chosenElement: string | number): Web3JsAbiCall<string>;
  mintWeaponWithStars(minter: string, stars: string | number, seed: string | number, chosenElement: string | number): Web3JsAbiCall<string>;
  performMintWeapon(minter: string, weaponType: string | number, properties: string | number, stat1: string | number, stat2: string | number, stat3: string | number, cosmeticSeed: string | number): Web3JsAbiCall<string>;
  performMintWeaponDetailed(minter: string, metaData: string | number, cosmeticSeed: string | number, tokenID: string | number): Web3JsAbiCall<string>;
  getProperties(id: string | number): Web3JsAbiCall<string>;
  getStars(id: string | number): Web3JsAbiCall<string>;
  getTrait(id: string | number): Web3JsAbiCall<string>;
  getStatPattern(id: string | number): Web3JsAbiCall<string>;
  getLevel(id: string | number): Web3JsAbiCall<string>;
  getStat1(id: string | number): Web3JsAbiCall<string>;
  getStat2(id: string | number): Web3JsAbiCall<string>;
  getStat3(id: string | number): Web3JsAbiCall<string>;
  getPowerMultiplier(id: string | number): Web3JsAbiCall<string>;
  getPowerMultiplierForTrait(properties: string | number, stat1: string | number, stat2: string | number, stat3: string | number, trait: string | number): Web3JsAbiCall<string>;
  getDustSupplies(playerAddress: string): Web3JsAbiCall<string[]>;
  decrementDustSupplies(playerAddress: string, amountLB: string | number, amount4B: string | number, amount5B: string | number): Web3JsAbiCall<void>;
  incrementDustSupplies(playerAddress: string, amountLB: string | number, amount4B: string | number, amount5B: string | number): Web3JsAbiCall<void>;
  _calculateBurnValues(burnID: string | number): Web3JsAbiCall<string[]>;
  burn(burnID: string | number): Web3JsAbiCall<void>;
  burnWithoutDust(burnIDs: string[]): Web3JsAbiCall<void>;
  reforge(reforgeID: string | number, burnID: string | number): Web3JsAbiCall<void>;
  reforgeWithDust(reforgeID: string | number, amountLB: string | number, amount4B: string | number, amount5B: string | number): Web3JsAbiCall<void>;
  getWeaponType(id: string | number): Web3JsAbiCall<string>;
  getBonusPower(id: string | number): Web3JsAbiCall<string>;
  getBonusPowerForFight(id: string | number, level: string | number): Web3JsAbiCall<string>;
  getFightData(id: string | number, charTrait: string | number): Web3JsAbiCall<[string, string, string, string]>;
  getFightDataAndDrainDurability(fighter: string, id: string | number, charTrait: string | number, drainAmount: string | number, allowNegativeDurability: boolean, busyFlag: string | number): Web3JsAbiCall<[string, string, string, string]>;
  drainDurability(id: string | number, amount: string | number, allowNegativeDurabilty: boolean): Web3JsAbiCall<void>;
  setBurnPointMultiplier(multiplier: string | number): Web3JsAbiCall<void>;
  setLowStarBurnPowerPerPoint(powerPerBurnPoint: string | number): Web3JsAbiCall<void>;
  setFourStarBurnPowerPerPoint(powerPerBurnPoint: string | number): Web3JsAbiCall<void>;
  setFiveStarBurnPowerPerPoint(powerPerBurnPoint: string | number): Web3JsAbiCall<void>;
  getDurabilityTimestamp(id: string | number): Web3JsAbiCall<string>;
  setDurabilityTimestamp(id: string | number, timestamp: string | number): Web3JsAbiCall<void>;
  getDurabilityPoints(id: string | number): Web3JsAbiCall<string>;
  getDurabilityPointsFromTimestamp(timestamp: string | number): Web3JsAbiCall<string>;
  isDurabilityFull(id: string | number): Web3JsAbiCall<boolean>;
  getNftVar(weaponID: string | number, nftVar: string | number): Web3JsAbiCall<string>;
  setNftVar(weaponID: string | number, nftVar: string | number, value: string | number): Web3JsAbiCall<void>;
}
