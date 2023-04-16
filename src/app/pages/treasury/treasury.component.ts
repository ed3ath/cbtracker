import { Component, OnInit } from '@angular/core';

import { Web3Service } from 'src/app/services/web3.service';
import { UtilService } from 'src/app/services/util.service';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-treasury',
  templateUrl: './treasury.component.html',
  styleUrls: ['./treasury.component.css']
})
export class TreasuryComponent implements OnInit {
  isLoading = true
  partners: any[] = []

  constructor(
    public web3Service: Web3Service,
    public utilService: UtilService,
    public configService: ConfigService
  ) { }

  ngOnInit() {
    this.loadPartners()
  }

  async loadPartners() {
    this.isLoading = true
    const partners = await this.web3Service.getPartners()

    if (partners) {
      const calls = [
      ...this.web3Service.getCalls('getProjectData', partners.map((partner: any) => partner.id)),
      ...this.web3Service.getCalls('getProjectMultiplier', partners.map((partner: any) => partner.id)),
      ...this.web3Service.getCalls('getRemainingPartnerTokenSupply', partners.map((partner: any) => partner.id)),
      ...this.web3Service.getCalls('projectDistributionTime', partners.map((partner: any) => partner.id))
      ]

      const results = await this.web3Service.multicall(this.web3Service.getBatchCallData(this.web3Service.abis['treasury'], this.web3Service.getConfigAddress('treasury'), calls))
      const [projData, projMultiplier, projSupply, projDistribution ] = this.utilService.splitArray(results, 4, partners.length)

      this.partners = partners.map((partner: any, i: number) => {
        const data = projData[i]
        const multiplier = this.utilService.fromEther(this.utilService.bnToNumber(projMultiplier[i]))
        const remaining = +this.utilService.fromEther(this.utilService.bnToNumber(projSupply[i]))
        const ratio = partner.ratio
        const distribution = this.utilService.bnToNumber(projDistribution[i])
        return {
          ...partner,
          data,
          multiplier,
          remaining,
          ratio,
          distribution
        }
      })
    }
    this.isLoading = false
  }

}
