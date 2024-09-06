import { ChainId, ERC20Token } from "@pancakeswap/sdk";

export const getTokenBySymbol = (symbol: string, chainId = 56) => {
  const tokens = [];
  return tokens.find(
    (t) =>
      t?.symbol?.toLowerCase() === symbol?.toLowerCase() && t?.chainId === chainId
  );
};

