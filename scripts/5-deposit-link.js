import {ethers} from "ethers";
import {sdk} from "./helpers.js";

const main = async () => {
    const packModuleAddress = "0xf730d6Eee4969CA5064c1B71CAEbdED5218F1d0F"
    const packModule = await sdk.getPackModule(packModuleAddress)

    const amount = ethers.utils.parseEther('2')

    console.log('Depositing...')
    await packModule.depositLink(amount)
    console.log('Deposited')

    const balance = await packModule.getLinkBalance()
    console.log('Balance ', balance)
}

try {
    await main()
    process.exit()
}catch (e) {
    console.error('Error depositing link', e)
    process.exit(1)
}