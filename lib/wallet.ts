'use client';
import { createAppKit } from '@reown/appkit';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { base, mainnet } from '@reown/appkit/networks';

export const projectId = "ad05ceae4fd3cf2d84ea8d34d4ad8799";

export const metadata = {
  name: "UniCert NFT",
  description: "On-chain education credential NFT platform",
  url: "http://localhost:3000",
  icons: ["https://avatars.githubusercontent.com/u/37784886?s=200&v=4"]
};

export const chains = [
  {
    id: 84531, // Base Sepolia
    name: "Base Sepolia",
    rpcUrl: process.env.NEXT_PUBLIC_RPC_URL!
  }
];

export const appKit = createAppKit({
  adapters: [new EthersAdapter()],
  metadata,
  projectId,
  networks: [mainnet, base],
});
