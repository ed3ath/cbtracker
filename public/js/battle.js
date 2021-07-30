let subs = []
let fightInterval = 10 //seconds

async function subscribe (address) {
    console.log('Subscribed:', address)
    subs[address] = setInterval(async() => {
        try {
            const latestBlock = await getLatestBlock()
            const results = await getPastEvents('FightOutcome',   
                latestBlock.number-10,        
                latestBlock.number,
                '0x39bea96e13453ed52a734b6aceed4c41f57b2271',
                ['0x7a58aac6530017822bf3210fccef7efa31f56277f19966bc887bfb11f40ca96d',
                web3.eth.abi.encodeParameter('address', address)]
                );
            if (results.length > 0) {
                results.forEach(async result => {
                    const {character, enemyRoll, playerRoll, owner, skillGain, xpGain, weapon} = result.returnValues
                    console.log(`Fight Outcome\nCharacter ID: ${character}\nWeapon ID: ${weapon}\nEnemy Roll: ${enemyRoll}\nPlayer Roll: ${playerRoll}\nSkill Reward: ${parseFloat(fromEther(skillGain)).toFixed(6)}\nExp: ${xpGain}\n----------\n`)
                })
            }
        }catch(e) {
            console.log(e)
        }
    }, 1000)
}