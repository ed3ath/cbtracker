var lastReset = 0
var skillPrice = 0
var usdPrice = 0
var gasPrice = 0
var gasUSDPrice = 0

var $card1 = $('#card-1'),
    $card2 = $('#card-2'),
    $card3 = $('#card-3'),
    $card4 = $('#card-4'),
    $card5 = $('#card-5'),
    $card6 = $('#card-6'),
    $card7 = $('#card-7'),
    $card8 = $('#card-8'),
    $card9 = $('#card-9'),
    $card10 = $('#card-10'),
    $card11 = $('#card-11'),
    $card12 = $('#card-12'),
    $card13 = $('#card-13')

$('document').ready(async () => {
    priceTicker()
    statTicker()
    lastReset = parseInt(await getLastReset())
    updateGasLabel()

    setInterval(() => {
        resetTicker()
    }, 1000)
    setInterval(() => {
        priceTicker()
    }, 3000)
    setInterval(() => {
        statTicker()
    }, 1000)

})

function toLocaleCurrency(val) {
    return val.toLocaleString('en-US', { style: 'currency', currency: currCurrency.toUpperCase() })
}

function formatNumber(val, dec = 6) {
    return Number(val).toLocaleString('en', {
        minimumFractionDigits: dec,
        maximumFractionDigits: dec
    });
}

async function priceTicker() {
    skillPrice = await getSkillPrice()
    gasPrice = await getGasPrice()

    if (currentNetwork === 'poly') {
        gasPrice *= 1000000000000
        skillPrice *= gasPrice
    }
    $.get(`https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=usd`, async (result) => {
        usdPrice = result.tether.usd
        gasUSDPrice = gasPrice * usdPrice
        if (currentNetwork === 'bsc') {
            skillPrice *= gasPrice
        }
        $card1.html(skillPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
        $card2.html(gasUSDPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
    })
}

async function statTicker() {
    const fightAllowance = await getCurrentAllowance()
    const hourlyPay = await getPayPerFight()
    const maxClaim = await getMaxClaim()
    const maxPay = await getMaxPayPerFight()
    const hourlyFights = await getHourlyFights()
    const hourlyAvgPower = await getHourlyPowerAvg()
    const hourlyTotalPower = await getHourlyPowerSum()
    const totalChars = await getTotalCharacters()
    const totalWeaps = await getTotalWeapons()
    const totalShields = await getTotalShields()

    $card4.html(parseFloat(fromEther(fightAllowance)).toFixed(6))
    $card5.html(parseFloat(fromEther(maxClaim)).toFixed(6))
    $card6.html(parseFloat(fromEther(maxPay)).toFixed(6))
    $card7.html(parseFloat(fromEther(hourlyPay)).toFixed(6))
    $card8.html(Number(hourlyFights).toLocaleString('en-US'))
    $card9.html(Number(hourlyAvgPower).toLocaleString('en-US'))
    $card10.html(Number(hourlyTotalPower).toLocaleString('en-US'))
    $card11.html(Number(totalChars).toLocaleString('en-US'))
    $card12.html(Number(totalWeaps).toLocaleString('en-US'))
    $card13.html(Number(totalShields).toLocaleString('en-US'))
}

async function resetTicker() {
    if (moment().unix() >= lastReset + 3600) lastReset += 3600
    var duration = moment.duration(((lastReset + 3600) - moment().unix()) * 1000, 'milliseconds');
    $card3.html(`in ${duration.minutes()}m and ${duration.seconds()}s`)
}

function gasName(network) {
    switch (network) {
        case 'bsc': return 'BNB'
        case 'heco': return 'HT'
        case 'eoc': return 'OKT'
        case 'poly': return 'MATIC'
        default: return 'BNB'
    }
}

function updateGasLabel() {
    $('#label-gas').html(`${gasName(currentNetwork)} Price (USD)`)
}

$("#select-network").on('change', async (e) => {
    $card1.html(0)
    $card2.html(0)
    $card3.html(0)
    $card4.html(0)
    $card5.html(0)
    $card6.html(0)
    $card7.html(0)
    $card8.html(0)
    $card9.html(0)
    $card10.html(0)
    $card11.html(0)
    $card12.html(0)
    $card13.html(0)
    updateNetwork(e.currentTarget.value)
    populateNetwork()
    updateGasLabel()
    priceTicker()
    statTicker()
    lastReset = parseInt(await getLastReset())
    resetTicker()
})