const Web3 = require('web3')

const web3 = new Web3('https://localhost:8545')

// console.log(web3)

const privateKey = '0x7e4775d2521f36e6236c166bb1bc56767926af85b391656f64dc4cf8b8897d66'

const myAccount = web3.eth.accounts.wallet.add(privateKey)

// console.log(myAccount)

module.exports ={
    web3: web3,
    myAccount: myAccount
}