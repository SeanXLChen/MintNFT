async function main() {
  const contractAddress = "0x84146b0c95Ef24506C0FAcACcFE563e5F12c778c";
  const Contract = await ethers.getContractFactory("MyToken");
  const nft = Contract.attach(contractAddress);
 
  // mint one to yourself!
  const signer0 = await ethers.provider.getSigner(0);
  // update the IPFS CID to be your metadata CID
  await nft.safeMint(await signer0.getAddress(), "ipfs://QmSwmi91gFyy59TWNXxNvMeq9kucnj2QPoqSqPsf75ZZ8i");

  console.log("NFT Minted!");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });