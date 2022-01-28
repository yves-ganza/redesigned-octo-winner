import {ThirdwebSDK} from "@3rdweb/sdk";
import ethers from "ethers";

import dotenv from "dotenv";
dotenv.config();

const walletPrivateKey = process.env.WALLET_PRIVATE_KEY;

if(!walletPrivateKey){
    console.error("Wallet key missing!")
    process.exit(1)
}

export const sdk = new ThirdwebSDK(new ethers.Wallet(
    walletPrivateKey,
    ethers.getDefaultProvider("https://rpc-mumbai.maticvigil.com")
));

const appAddress = "0xf70f0D66Fc2C77f70fABe7c7D3EFa6Df686cb055";

export const getApp = async () => {
    return sdk.getAppModule(appAddress)
};