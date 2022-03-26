var $result = $('#diag-result')

function getContract(chain, type) {
  var localWeb3 = new Web3(nodes[chain]);
  switch(type) {
    case 'character': return new localWeb3.eth.Contract(Characters, conAddress[chain].character)
    case 'weapon': return new localWeb3.eth.Contract(Weapons, conAddress[chain].weapon)
    case 'shield': return new localWeb3.eth.Contract(Shields, conAddress[chain].shield)
    case 'pvp': return new localWeb3.eth.Contract(PvpArena, conAddress[chain].pvp)
    case 'market': return new localWeb3.eth.Contract(NFTMarket, conAddress[chain].market)
    default: return null
  }
}

function getAddress(chain, type) {
  switch(type) {
    case 'character': return conAddress[chain].character
    case 'weapon': return conAddress[chain].weapon
    case 'shield': return conAddress[chain].shield
    default: return null
  }
}

async function runDiag() {
    $('#btn-diag').prop('disabled', true)
    var chain = $('#diag-chain').val()
    var nftId = $('#diag-id').val()
    var nftType = $('#diag-type').val()
    $result.html('')

    try {
        if (!chain) throw Error('Please select a chain.')
        if (!nftId) throw Error('Please enter the nft id.')
        if (!nftType) throw Error('Please select the nft type.')

        $result.html('<span class="text-white">Diagnostic is running....</span>')

        $result.html('')

        var ownerOf = await getContract(chain, nftType).methods.ownerOf(nftId).call();
        var nftStatus = parseInt(await getContract(chain, nftType).methods.getNftVar(nftId, 1).call()) === 1
        if (nftStatus) {
          if (nftType === 'character') {
            var charInArena = await getContract(chain, 'pvp').methods.isCharacterInArena(nftId).call()
            if (charInArena) {
              var pvpInfo = await getContract(chain, 'pvp').methods.fighterByCharacter(nftId).call()
              $result.append(`<span class="text-white"> - ${ucfirst(nftType)} ${nftId} is currently busy in arena with weapon ${pvpInfo[1]}${(pvpInfo[2] ? ` and shield ${pvpInfo[2]}` : '')}.</span><br>`)
            }
          } else {
            $result.append(`<span class="text-white"> - ${ucfirst(nftType)} ${nftId} is currently being used in arena.</span><br>`)
          }
        }

        var listingPrice = await getContract(chain, 'market').methods.getFinalPrice(getAddress(chain, nftType), nftId).call()
        var finalPrice = parseFloat(fromEther(listingPrice)).toFixed(5)
        console.log(getAddress(chain, nftType), listingPrice, finalPrice)
        if (finalPrice > 0) {
          var sellerAddress = await getContract(chain, 'market').methods.getSellerOfNftID(getAddress(chain, nftType), nftId).call()
          $result.append(`<span class="text-white"> - ${ucfirst(nftType)} ${nftId} currently listed in Bazaar by ${sellerAddress} for ${finalPrice}.</span><br>`)
        }

        var charStamina = null, weapDurability = null;
        if (nftType === 'character') {
          charStamina = parseInt(await getContract(chain, nftType).methods.getStaminaPoints(nftId).call())
          $result.append(`<span class="text-white"> - ${ucfirst(nftType)} ${nftId} currently has ${charStamina} stamina.</span><br>`)
        }

        if (nftType === 'weapon') {
          weapDurability = parseInt(await getContract(chain, nftType).methods.getDurabilityPoints(nftId).call())
          $result.append(`<span class="text-white"> - ${ucfirst(nftType)} ${nftId} currently has ${weapDurability} durability.</span><br>`)
        }

        $('#btn-diag').removeAttr('disabled')
    } catch (e) {
        if (e.message.includes('owner query for nonexistent')) {
          $result.html(`<span class="text-white"> - ${ucfirst(nftType)} ${nftId} was burned.</span>`)
        }else {
          $result.html(`<span class="text-white">${e.message}</span>`)
        }
        $('#btn-diag').removeAttr('disabled')
    }
}
