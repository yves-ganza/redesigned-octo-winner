import {getApp} from "./helpers.js"

const main = async () => {
    const app = await getApp()

    console.log('Deploying Pack Module...')
    const packModule = await app.deployPackModule({
        name: 'LootBox Pack',
        sellerFeeBasisPoints: 100
    })
    console.log('Pack Module deployed with address ', packModule.address)
}

try {
    await main()
    process.exit()
}catch (e) {
    console.error('Error creating Pack Module', e)
    process.exit(1)
}