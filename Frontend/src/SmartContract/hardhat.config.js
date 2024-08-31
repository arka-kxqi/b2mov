
require ('@nomiclabs/hardhat-waffle');

task("accounts","Prints the list of the accounts",async (taskArgs , hre )=>{
  const accounts = await hre.ethers.getSigners();

  for(const account of accounts){
    console.log(account.address);
  }
})

module.exports = {
  solidity: "0.8.10",

  defaultNetwork: "B2",
  networks:{
    hardhat:{},
    B2: {
      url: "https://rpc.ankr.com/b2_testnet",
      chainId: 1123,
      accounts: ['a77637fc7905e02b1ec4b9e913cc895b627be58053f2fdd774911623004c3285'],
    },
  }
};