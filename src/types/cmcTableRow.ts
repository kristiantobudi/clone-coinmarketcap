export interface CMCtableType {
    starNum?: string;
    coinName?: number;
    coinIcon?: string | number;
    coinSymbol?: string;
    showBuy?: boolean
    price?: number;
    hRate?: number;
    dRate?: number;
    wRate?: number;
    hRateIsIncrement?: boolean;
    dRateIsIncrement?: boolean;
    wRateIsIncrement?: boolean;
    marketCapValue?: number;
    volumeValue?: number;
    volumeCryptoValue?: number;
    circulatingSupply?: number;
}