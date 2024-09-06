import type { Token } from '@pancakeswap/sdk';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { useWeb3React } from '@src/hooks/useWeb3React';
import { getAddress } from '@src/utils/address.utils';
import {
  getTokenLogoURL,
  unknownTokenLogoURL,
} from '@src/utils/getCurrencyLogo';

interface ICurrencyLogo {
  currency?: Token;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

const CurrencyLogo: React.FC<ICurrencyLogo> = ({
  className,
  currency,
  size = 24,
  style,
}) => {
  const { chainId } = useWeb3React();
  const src: string = useMemo(() => {
    if (currency) {
      let address = currency?.address || '';
      if (typeof address !== 'string') {
        // @ts-ignore
        address = getAddress(currency?.address, chainId);
      }
      if (
        currency?.symbol.toLowerCase() === 'glr' ||
        currency?.name?.toLowerCase() === 'glr' ||
        address?.toLowerCase() === mkt.toLowerCase()
      ) {
        return '/icons/single.svg';
      }
      if (
        currency?.symbol.toLowerCase() === 'bnb' ||
        currency?.name?.toLowerCase() === 'bnb' ||
        currency?.name?.toLowerCase() === 'tbnb' ||
        currency?.symbol?.toLowerCase() === 'tbnb'
      ) {
      }
      if (typeof currency.address !== 'string') {
        return getTokenLogoURL(getAddress(currency?.address, chainId));
      }
      return getTokenLogoURL(currency?.address || '');
    }
    return unknownTokenLogoURL;
  }, [currency, chainId]);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [currency]);

  return (
    <Image
      className={className}
      style={{ minWidth: `${size}px`, maxHeight: `${size}px`, ...style }}
      width={size}
      height={size}
      alt={`${currency?.symbol || ''}`}
      src={imageError ? unknownTokenLogoURL : src}
      onError={() => setImageError(true)}
    />
  );
};

export default CurrencyLogo;
