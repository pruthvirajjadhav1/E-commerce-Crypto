import React from 'react'
import { GiCancel, GiLinkedRings } from 'react-icons/gi'
import { GrBitcoin } from 'react-icons/gr'
import { SiEthereum } from 'react-icons/si'
import { useParams } from 'react-router-dom'
import {ethers} from 'ethers'

const Payments: React.FC = () => {
    // @ts-ignore
    const { id } = useParams()
    React.useEffect(() => {
        // Get the user details here
    },[])
    var gateway_name = `Shlok's ecommerce`

    const [paymentProvider, selectPaymentProvider] = React.useState<null | string>(null)
    
    return(
        <div className="bg-gray-50 h-screen w-screen px-16 py-4">
            <div className="flex justify-center">
                <div className="space-y-4">
                    <h1 className="font-mono text-3xl text-gray-800">Crypto Transactions {`->`}</h1>
                    <p className="text-gray-600">Powered by <span className="text-indigo-600 font-mono">cryptify</span></p>
                    <div className="border bg-white px-4 py-2 rounded-md shadow">
                        {
                            paymentProvider === null ?
                            (<section className="px-8 py-4 space-y-4">
                            <div className="flex space-x-32 items-center">
                                <h1>Select your payment provider:</h1>
                                <GiCancel className="text-red-700"/>
                            </div>
                            <div className="space-y-4">
                                <div className="shadow p-1 hover:bg-gray-100">
                                    <div className="flex items-center space-x-4 w-full">
                                        <GrBitcoin className="text-gray-400"/>
                                        <button className="text-gray-400">Bitcoin (Coming Soon)</button>
                                    </div>
                                </div>
                                <div className="shadow p-1 hover:bg-gray-100">
                                    <div className="flex items-center space-x-4 w-full">
                                        <SiEthereum className="text-gray-800"/>
                                        <button onClick={() => selectPaymentProvider('ETH')}>Ethereum</button>
                                    </div>
                                </div>
                                <div className="shadow p-1 hover:bg-gray-100">
                                    <div className="text-gray-400 flex items-center space-x-4 w-full">
                                        <GiLinkedRings/>
                                        <button>Celo (Coming Soon)</button>
                                    </div>
                                </div>
                            </div>
                        </section>) : (<EtherPay />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


const EtherPay: React.FC = () => {
    
    const connectToMetamask = async () => {
        // @ts-ignore
        await window.ethereum.enable()
        // @ts-ignore
        let provider = new ethers.providers.Web3Provider(window.ethereum)
    }
    
    return(
        <div className="space-y-4">
            <h1 className="text-gray-800 text-lg tracking-wide" style={{fontFamily:"'Krub', sans-serif"}}>Connect your wallet: </h1>
            <button className="bg-blue-600 text-white px-2 py-1 w-full rounded" onClick={connectToMetamask}>Connect with MetaMask</button>
            <button className="bg-purple-600 text-white px-2 py-1 w-full rounded">Connect with Portis</button>
        </div>
    )
}
export default Payments