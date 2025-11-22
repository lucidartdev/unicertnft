import { ethers } from "ethers";
import { appKit } from "./wallet";
import UniCertABI from "@/abi/UniCertNFT.json";

export const CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_UNICERT_ADDRESS!;

export async function getSigner() {
  const wallet = await appKit.getWallet();
  if (!wallet) throw new Error("Wallet not connected");
  const provider = await wallet.getEthersProvider();
  return provider.getSigner();
}

export async function mintCertificate(
  studentWallet: string,
  studentName: string,
  courseName: string,
  grade: string,
  issueDate: string,
  tokenURI: string
) {
  const signer = await getSigner();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, UniCertABI, signer);
  const tx = await contract.issueCertificate(
    studentWallet,
    studentName,
    courseName,
    grade,
    issueDate,
    tokenURI
  );
  return await tx.wait();
}

export async function getCertificate(tokenId: number) {
  const wallet = await appKit.getWallet();
  if (!wallet) throw new Error("Wallet not connected");
  const provider = await wallet.getEthersProvider();
  const contract = new ethers.Contract(CONTRACT_ADDRESS, UniCertABI, provider);
  return await contract.getCertificate(tokenId);
}
