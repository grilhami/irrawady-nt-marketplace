require("@nomiclabs/hardhat-waffle");
const fs = require("fs");


// Create a file called .secret at the root of the project
const privateKey = fs.readFileSync("./.secret").toString();

// Fill in incormation here
const projectId = "";
const mumbaiURL = ""
const mainnetURL = "" 

module.exports = {
  networks :{
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `${mumbaiURL}${projectId}`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `${mainnetURL}${projectId}`,
      accounts: [privateKey],
    }
  },
  solidity: "0.8.4",
};
