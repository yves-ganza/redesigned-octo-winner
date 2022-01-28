import {getApp} from "./helpers.js";

const main = async () => {
    const app = await getApp()
    console.log("Deploying bundle module...")

    const bundleModule = await app.deployBundleModule({
        name: "LootBox Bundle",
        sellerFeeBasisPoints: 100
    })

    console.log(`Deployed bundle collection module with address ${bundleModule.address}`)
};

try {
    await main()
    process.exit()
}catch (e) {
    console.error("Error creating the bundle collection module", e)
    process.exit(1)
}