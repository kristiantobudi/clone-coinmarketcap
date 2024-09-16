import { CryptocurrencyListingsLatest } from "../network/constant"
import { axiosInstance } from "../network/network"

export const getListingsLatest = async () => {
    return axiosInstance.get(`/${CryptocurrencyListingsLatest}/listings/latest`)
}