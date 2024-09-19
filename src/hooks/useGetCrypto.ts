import { TableType } from "@/types/cmcTableType"
import { getListingsLatest } from "@/utilities/settings/generatedCryptoFromApi"
import { createContext, useCallback, useEffect, useState } from "react"

export const CmcTableCryptoList = createContext({
    cmcTypeListData: {} as TableType | undefined
})

export const useGetCrypto = () => {
    const [data, setData] = useState<TableType>()
    const [isloading, setIsLoading] = useState(true)

    const isLoading = () => {
        setIsLoading(!isloading)
    }

    const fetchData = useCallback(async () => {
        try{
            const response = await getListingsLatest();
            if (response.data.data && response.data.data.length > 0 ) {
                setData(response.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return {
        cmcTypeListData: data,
        isLoading
    }
}