import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

import { Web3Service } from 'src/app/services/web3.service';

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
    public utilService: UtilService
  ) { }

  ngOnInit() {
    this.loadPartners()
  }

  async loadPartners() {
    this.isLoading = true
    const multicallContract = this.web3Service.getMulticall(this.web3Service.activeChain)
    const partners = await this.web3Service.getPartners()

    if (partners) {
      const dataCalls: any[] = []
      const multiplierCalls: any[] = []
      const supplyCalls: any[] = []
      const ratioCalls: any[] = []
      const distributionCalls: any[] = []

      partners.forEach((partner: any) => {
        dataCalls.push({
          reference: partner.id,
          methodName: 'getProjectData',
          methodParameters: [partner.id]
        })
        multiplierCalls.push({
          reference: partner.id,
          methodName: 'getProjectMultiplier',
          methodParameters: [partner.id]
        })
        supplyCalls.push({
          reference: partner.id,
          methodName: 'getRemainingPartnerTokenSupply',
          methodParameters: [partner.id]
        })
        ratioCalls.push({
          reference: partner.id,
          methodName: 'getSkillToPartnerRatio',
          methodParameters: [partner.id]
        })
        distributionCalls.push({
          reference: partner.id,
          methodName: 'projectDistributionTime',
          methodParameters: [partner.id]
        })
      })
      const partnerResults = await multicallContract.call([
        {
          reference: 'data',
          contractAddress: this.web3Service.getConfigAddress(this.web3Service.activeChain, 'treasury'),
          abi: this.web3Service.abis['treasury'],
          calls: dataCalls
        },
        {
          reference: 'multiplier',
          contractAddress: this.web3Service.getConfigAddress(this.web3Service.activeChain, 'treasury'),
          abi: this.web3Service.abis['treasury'],
          calls: multiplierCalls
        },
        {
          reference: 'supply',
          contractAddress: this.web3Service.getConfigAddress(this.web3Service.activeChain, 'treasury'),
          abi: this.web3Service.abis['treasury'],
          calls: supplyCalls
        },
        {
          reference: 'ratio',
          contractAddress: this.web3Service.getConfigAddress(this.web3Service.activeChain, 'treasury'),
          abi: this.web3Service.abis['treasury'],
          calls: ratioCalls
        },
        {
          reference: 'distribution',
          contractAddress: this.web3Service.getConfigAddress(this.web3Service.activeChain, 'treasury'),
          abi: this.web3Service.abis['treasury'],
          calls: distributionCalls
        }
      ])

      this.partners = partners.map((partner: any) => {
        const data = partnerResults.results['data'].callsReturnContext.find((i: any) => i.reference === partner.id)?.returnValues
        const multiplier = this.web3Service.multicallBnToNumber(partnerResults.results['multiplier'].callsReturnContext.find((i: any) => i.reference === partner.id)?.returnValues[0], true)
        const remaining = this.web3Service.multicallBnToNumber(partnerResults.results['supply'].callsReturnContext.find((i: any) => i.reference === partner.id)?.returnValues[0], true)
        const ratio = this.web3Service.multicallBnToNumber(partnerResults.results['ratio'].callsReturnContext.find((i: any) => i.reference === partner.id)?.returnValues[0], true)
        const distribution = this.web3Service.multicallBnToNumber(partnerResults.results['distribution'].callsReturnContext.find((i: any) => i.reference === partner.id)?.returnValues[0])
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

  formatSkillRatio(value: any) {
    return this.utilService
      .toBn(1)
      .dividedBy(
        this.utilService
          .toBn(this.utilService.toEther(value).toString())
          .dividedBy(this.utilService.toBn(2).exponentiatedBy(64))
      )
      .toFixed(4);
  }

  moneyPerUnclaimed(price: number, ratio: number, multiplier: number) {
    return this.utilService.currencyFormat((price /
        Number(this.formatSkillRatio(ratio))) *
        Number(multiplier)
    );
  }

}
