import {readFileSync} from "fs";
import {sdk} from "./helpers.js";

const main = async () => {
    const bundleModuleAddress = "0x5C91E1DCfEd7790c8276D6F286567ddC78e7e8a3"
    const bundleModule = await sdk.getBundleModule(bundleModuleAddress)

    const packModuleAddress = "0xf730d6Eee4969CA5064c1B71CAEbdED5218F1d0F"
    const packModule = await sdk.getPackModule(packModuleAddress)

    console.log('Getting all the NFTs...')
    const nfts = await bundleModule.getAll()
    console.log(nfts)

    console.log('Creating a pack containing NFTs from the bundle...')
    const created = await packModule.create({
        assetContract: bundleModuleAddress,
        metadata: {
            name: 'Solar System Pack!',
            image: readFileSync('./assets/galaxy.jpg')
        },
        assets: nfts.map(nft => ({
            tokenId: nft.metadata.id,
            amount: nft.supply - 50
        }))
    })
    console.log('Pack created')
    console.log(created)
}

try {
    await main()
    process.exit()
}catch (e) {
    console.error('Error creating the pack', e)
    process.exit(1)
}