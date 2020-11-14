// id: '池子id',
// name: '池子名字',  
// token: '池子代币',
// tokenDescription: '代币描述',
// tokenAddress: '代币ERC20地址',
// earnedToken: '奖励代币',
// earnedTokenAddress: '奖励代币ERC20地址',
// earnContractAddress: '池子合约地址',
// price ： 挖的代币的价格！
// path price: 
export const lps = [
    {
      id: 'eth/dai',
      name: 'eth/dai lp',  
      token: 'eth/dai lp',
      tokenDescription: 'eth/dai lp',
      //lp token
      tokenAddress: '0x4d7302011f12f49dfd6a33c2ad12a4fbd83fae2d',
      tokenDecimals: 18, 

      //token0 
      token0Address: '0x1191084797c0d07520374caf345c153b9b2bf1fc',
      token0Decimals: 18, 
      //token1
      token1Address: '0xd0a1e359811322d97991e03f863a0c30c2cf029c',
      token1Decimals: 18,

      haveETH:true,

      tokenDescriptionUrl: '',
      tokenDescriptionUrl2: '',
      earnedToken: 'iETH/DAI',
      earnedTokenAddress: '0x248CD5f844A013F7Fca9F3E13c81aE8eD23fC973',
      earnContractAddress: '0x248CD5f844A013F7Fca9F3E13c81aE8eD23fC973',
      defaultApy: "39.54",
      pricePerFullShare: 1,
      pastPricePerFullShare: 1
    }
  ]