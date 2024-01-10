require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/uaqOySZd72tFv0Xgq2oXneo8WsDGeiuO",
      accounts: [
        "7d8cce31cf8fb05683bd8332471940b212f57075077f7d9d9992d05645fd53fc",
      ],
    },
  },
};
