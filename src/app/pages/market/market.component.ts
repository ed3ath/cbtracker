import { Component, OnInit } from '@angular/core';
import _ from 'lodash'
import { ConfigService } from 'src/app/services/config.service';
import { SubscriptionService } from 'src/app/services/subscription.service';
import Swal from 'sweetalert2'

import { UtilService } from 'src/app/services/util.service';
import { Web3Service } from 'src/app/services/web3.service';

const bazaarNfts: any = {
  characters: 'cb-character',
  weapons: 'cb-weapon',
  shields: 'cb-shield'
}

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  subscribed = false
  loading = true
  nodata = true
  maxListing = 0
  filter: any = {
    element: -1,
    minPrice: 0,
    maxPrice: 9999999999,
    nftType: '',
    limit: 50,
    offset: 0
  }
  clientFilter: any = {
    limit: 10,
    offset: 0,
    page: 0,
    pages: 1,
    menuPages: []
  }
  mainHeaders: any[] = []

  combinedFilters: any[] = []

  charHeaders = [
    { id: 'id', name: 'ID', sort: true },
    { id: 'traitName', name: 'Element', sort: true },
    { id: 'level', name: 'Level', sort: true },
    { id: 'rep', name: 'Reputation', sort: true },
    { id: 'power', name: 'Power', sort: true },
    { id: 'stamina', name: 'Stamina', sort: true },
    { id: 'seller', name: 'Seller', sort: true },
    { id: 'price', name: 'Price', sort: true },
    { id: 'buy', name: 'Buy', sort: false }
  ]

  charFilters: any = {
    minLevel: 1,
    maxLevel: 255,
    minRep: 0,
    maxRep: 99999999,
    minPower: 1000,
    maxPower: 99999999
  }

  weaponHeaders = [
    { id: 'id', name: 'ID', sort: true },
    { id: 'element', name: 'Element', sort: true },
    { id: 'stars', name: 'Stars', sort: true },
    { id: 'stat1', name: 'Stat 1', sort: true },
    { id: 'stat2', name: 'Stat 2', sort: true },
    { id: 'stat3', name: 'Stat 3', sort: true },
    { id: 'bonusPower', name: 'Bonus Power', sort: true },
    { id: 'seller', name: 'Seller', sort: true },
    { id: 'price', name: 'Price', sort: true },
    { id: 'buy', name: 'Buy', sort: false }
  ]

  weaponFilters: any = {
    element: -1,
    minStars: 1,
    maxStars: 5,
    minPower: 0,
    maxPower: 99999999
  }

  shieldHeaders = [
    { id: 'id', name: 'ID', sort: true },
    { id: 'element', name: 'Element', sort: true },
    { id: 'stars', name: 'Stars', sort: true },
    { id: 'stat1', name: 'Stat 1', sort: true },
    { id: 'stat2', name: 'Stat 2', sort: true },
    { id: 'stat3', name: 'Stat 3', sort: true },
    { id: 'seller', name: 'Seller', sort: true },
    { id: 'price', name: 'Price', sort: true },
    { id: 'buy', name: 'Buy', sort: false }
  ]

  shieldFilters: any = {
    element: -1,
    minStars: 1,
    maxStars: 5
  }

  tableSorts: any = {}

  listings: any[] = []
  filteredListings: any[] = []
  displayedListings: any[] = []

  constructor(
    public web3Service: Web3Service,
    public utilService: UtilService,
    private subService: SubscriptionService,
    public configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.subscribed = this.configService.subscribed
    this.subService.subscription$.subscribe((subscribed: boolean) => {
      this.subscribed = subscribed
    })

    this.combinedFilters = [{
      key: 'level',
      fn: (i: any) => i.level >= +this.charFilters.minLevel && i.level <= +this.charFilters.maxLevel
    }]
  }

  setMainFilter(index: string, $event: any) {
    this.filter[index] = index === 'nftType' ? $event.target?.value : +$event.target?.value
    if (index === 'nftType') {
      this.mainHeaders = []
      this.combinedFilters = [
        (i: any) => this.filter.element >= 0 ? i.traitNum === this.filter.element : i.traitNum >= 0,
        (i: any) => +i.finalPrice >= this.filter.minPrice && +i.finalPrice <= this.filter.maxPrice
      ]
      if (this.filter[index] === 'characters') {
        this.mainHeaders = this.charHeaders
        this.combinedFilters = [
          ...this.combinedFilters,
          (i: any) => +(i.level || 0) + 1 >= +this.charFilters.minLevel && +(i.level || 0) + 1 <= +this.charFilters.maxLevel,
          (i: any) => +(i.power || 0) >= +this.charFilters.minPower && +(i.power || 0) <= +this.charFilters.maxPower,
          (i: any) => +(i.rep || 0) >= +this.charFilters.minRep && +(i.rep || 0) <= +this.charFilters.maxRep
        ]
      } else if (this.filter[index] === 'weapons') {
        this.mainHeaders = this.weaponHeaders
        this.combinedFilters = [
          ...this.combinedFilters,
          (i: any) => +(i.stars || 0) + 1 >= +this.weaponFilters.minStars && +(i.stars || 0) + 1 <= +this.weaponFilters.maxStars,
          (i: any) => +i.bonusPower >= +this.weaponFilters.minPower && +i.bonusPower <= +this.weaponFilters.maxPower
        ]
      } else if (this.filter[index] === 'shields') {
        this.mainHeaders = this.shieldHeaders
        this.combinedFilters = [
          ...this.combinedFilters,
          (i: any) => +(i.stars || 0) + 1 >= +this.shieldFilters.minStars && +(i.stars || 0) + 1 <= +this.shieldFilters.maxStars
        ]
      }
      this.loadList()
    } else {
      this.filteredListings = [...this.getFilteredResults()]
      this.setFilter()
    }
  }

  setCharFilter(index: string, $event: any) {
    this.charFilters[index] = +($event.target?.value || 0)
    this.filteredListings = [...this.getFilteredResults()]
    this.setFilter()
  }

  getFilteredResults() {
    let temp: any[] = [...this.listings]
    this.combinedFilters.forEach((filter: any) => {
      temp = [...temp.filter(filter)]
    })
    return temp
  }

  setWeaponFilter(index: string, $event: any) {
    this.weaponFilters[index] = +($event.target?.value || 0)
    this.filteredListings = [...this.getFilteredResults()]
    this.setFilter()
  }

  setShieldFilter(index: string, $event: any) {
    this.shieldFilters[index] = +($event.target?.value || 0)
    this.filteredListings = [...this.getFilteredResults()]
    this.setFilter()
  }

  setFilter() {
    this.clientFilter.pages = Math.trunc(this.filteredListings.length / this.clientFilter.limit);
    if (this.filteredListings.length % this.clientFilter.limit !== 0) {
      this.clientFilter.pages += 1;
    }
    this.clientFilter.menuPages = [...Array(this.clientFilter.pages).keys()];
    this.displayedListings = _.chunk(_.orderBy(this.filteredListings, Object.keys(this.tableSorts), Object.values(this.tableSorts)), this.clientFilter.limit)
  }

  async loadList() {
    if (!this.subscribed) {
      Swal.fire('', 'Only users with active subscriptions are able to use this feature.', 'info')
    } else {
      this.loading = true
      this.nodata = false
      this.listings = []
      this.filteredListings = []
      this.displayedListings = []
      const marketContract = this.web3Service.getContract('market')
      const nftAddress = this.web3Service.getOtherContractAddress(this.filter.nftType)

      this.maxListing = +(await marketContract.getNumberOfListingsForToken(nftAddress)).toString()
      const listings = await marketContract.getListingSlice(nftAddress, this.filter.offset, this.filter.limit)

      const listingIds = [...listings[1].map((i: any) => this.utilService.bnToNumber(i))]

      const nftsInfo = await this.web3Service.multicall(this.web3Service.getBatchCallData(this.web3Service.abis[this.filter.nftType], this.web3Service.getOtherContractAddress(this.filter.nftType), listingIds.map((nftId: number) => ({
        name: 'get',
        params: [nftId]
      }))))
      if (this.filter.nftType === 'characters') {
        const characterContract = this.web3Service.getContract('characters')
        const charRepId = await characterContract.NFTVAR_REPUTATION()
        const nftsRep = await this.web3Service.multicall(this.web3Service.getBatchCallData(this.web3Service.abis[this.filter.nftType], this.web3Service.getOtherContractAddress(this.filter.nftType), listingIds.map((nftId: number) => ({
          name: 'getNftVar',
          params: [nftId, charRepId?.toString()]
        }))))
        const nftsPower = await this.web3Service.multicall(this.web3Service.getBatchCallData(this.web3Service.abis[this.filter.nftType], this.web3Service.getOtherContractAddress(this.filter.nftType), listingIds.map((nftId: number) => ({
          name: 'getTotalPower',
          params: [nftId]
        }))))
        const nftsStamina = await this.web3Service.multicall(this.web3Service.getBatchCallData(this.web3Service.abis[this.filter.nftType], this.web3Service.getOtherContractAddress(this.filter.nftType), listingIds.map((nftId: number) => ({
          name: 'getStaminaPoints',
          params: [nftId]
        }))))

        nftsInfo.map((nftInfo: any, i: number) => {
          nftsInfo[i] = {
            ...this.utilService.characterFromContract(listingIds[i],
              [...nftInfo.map((k: any) => this.utilService.bnToNumber(k))]),
            rep: this.utilService.bnToNumber(nftsRep[i]),
            power: this.utilService.bnToNumber(nftsPower[i]),
            stamina: this.utilService.bnToNumber(nftsStamina[i])
          }
        })
      } else if (this.filter.nftType === 'weapons') {
        nftsInfo.map((nftInfo: any, i: number) => {
          nftsInfo[i] = {
            ...this.utilService.weaponFromContract(listingIds[i],
              [...nftInfo.map((k: any) => this.utilService.bnToNumber(k))])
          }
        })
      } else if (this.filter.nftType === 'shields') {
        nftsInfo.map((nftInfo: any, i: number) => {
          nftsInfo[i] = {
            ...this.utilService.shieldFromContract(listingIds[i],
              [...nftInfo.map((k: any) => this.utilService.bnToNumber(k))])
          }
        })
      }
      const nftPrices = await this.web3Service.multicall(this.web3Service.getBatchCallData(this.web3Service.abis['market'], this.web3Service.getConfigAddress('market'), listingIds.map((nftId: number) => ({
        name: 'getFinalPrice',
        params: [nftAddress, nftId]
      }))))

      this.listings = nftsInfo.map((nftInfo: any, i: number) => ({
        ...nftInfo,
        seller: listings[2][i],
        price: +this.utilService.formatNumber(this.utilService.fromEther(this.utilService.bnToNumber(listings[3][i]))),
        finalPrice: +this.utilService.formatNumber(this.utilService.fromEther(this.utilService.bnToNumber(nftPrices[i])))
      }))
      this.filteredListings = [...this.getFilteredResults()]
      this.setFilter()
      this.loading = false
    }
  }

  getLink(id: number | string) {
    return `https://bazaar.market/buy/${bazaarNfts[this.filter.nftType]}?id=${id}`
  }

  setPage(page: number) {
    if (this.filteredListings.length > 0) {
      const nextPage = this.clientFilter.page + page
      if (nextPage >= 0 && nextPage < this.clientFilter.pages) {
        this.clientFilter.page = nextPage
        this.clientFilter.offset = nextPage * this.clientFilter.limit
      }
    } else {
      this.clientFilter.page = 0
      this.clientFilter.offset = 0
    }
  }

  toggleSort(column: string) {
    if (!this.tableSorts[column]) {
      this.tableSorts = { [column]: 'asc', ...this.tableSorts }
    } else if (this.tableSorts[column] === 'asc') {
      delete this.tableSorts[column]
      this.tableSorts = { [column]: 'desc', ...this.tableSorts }
    } else {
      delete this.tableSorts[column]
    }
    this.setFilter()
  }

  setBatch(batch: number) {
    let nextBatch = this.filter.offset + (this.filter.limit * batch)
    if (nextBatch > 0) {
      nextBatch - 1
    }
    if (nextBatch >= 0 && nextBatch + this.filter.limit <= this.maxListing) {
      this.filter.offset = nextBatch
      this.loadList()
    }
  }
}
