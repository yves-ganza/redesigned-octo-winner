import {readFileSync} from "fs";
import {sdk} from "./helpers.js";

const main = async () => {
    const bundleAddress = "0x5C91E1DCfEd7790c8276D6F286567ddC78e7e8a3"
    const bundleModule = await sdk.getBundleModule(bundleAddress)

    console.log('Creating Batch...')

    const created = await bundleModule.createAndMintBatch([
        {
            metadata: {
                name: 'Diora',
                description: 'Venus',
                image: readFileSync('./assets/planet-2.jpg'),
                properties: {
                    rarity: 'a bit rare',
                    level: 2
                }
            },
            supply: 108
        },        {
            metadata: {
                name: 'Terra',
                description: 'Mother Earth',
                image: readFileSync('./assets/planet-8.jpg'),
                properties: {
                    rarity: 'one of a kind',
                    level: 3
                }
            },
            supply: 150
        },        {
            metadata: {
                name: 'Quadra',
                description: 'Mars',
                image: readFileSync('./assets/planet-2.jpg'),
                properties: {
                    rarity: 'rare',
                    level: 4
                }
            },
            supply: 228
        },        {
            metadata: {
                name: 'Sisra',
                description: 'Jupiter',
                image: readFileSync('./assets/planet-3.jpg'),
                properties: {
                    rarity: 'a bit rare',
                    level: 5
                }
            },
            supply: 778
        },        {
            metadata: {
                name: 'Setra',
                description: 'Saturn',
                image: readFileSync('./assets/planet-7.jpg'),
                properties: {
                    rarity: 'a bit rare',
                    level: 6
                }
            },
            supply: 1000
        },        {
            metadata: {
                name: 'Uitra',
                description: 'Uranus',
                image: readFileSync('./assets/planet-6.jpg'),
                properties: {
                    rarity: 'a bit rare',
                    level: 7
                }
            },
            supply: 2000
        },        {
            metadata: {
                name: 'Nefra',
                description: 'Neptune',
                image: readFileSync('./assets/planet-5.jpg'),
                properties: {
                    rarity: 'a bit rare',
                    level: 8
                }
            },
            supply: 4000
        },        {
            metadata: {
                name: 'Moon',
                description: 'Light in earth\'s night sky',
                image: readFileSync('./assets/planet-1.jpg'),
                properties: {
                    rarity: 'One of a kind',
                    level: 1
                }
            },
            supply: 385
        },
    ])

    console.log('Created')
    console.log(JSON.stringify(created, null, 2))
}

try {
    await main()
    process.exit(0)
}catch (e) {
    console.error('Error minting NFTs', e)
    process.exit(1)
}
