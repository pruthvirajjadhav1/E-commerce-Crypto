import axios from 'axios'
export const baseUrl = `https://api.covalenthq.com/v1`

export const getTokens = async (
    chainId: number,
    address: string
) => {
    const tokenUrl = `${baseUrl}/${chainId}/address/${address}/balances_v2/?`
    const res = await axios.get(tokenUrl)
    return res.data
}