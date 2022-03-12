import React from 'react'
import Web3 from 'web3'
import { portis } from '../config/portis'

//icons
import { BsArrowRight } from 'react-icons/bs'
import { BiCreditCard, BiBitcoin } from 'react-icons/bi'
import { FaEthereum } from 'react-icons/fa'
import { SiBitcoin, SiXrp } from 'react-icons/si'
import { AiOutlineFileDone } from 'react-icons/ai'
import { HiOutlineExternalLink } from 'react-icons/hi'

import Portis from '../assets/portis.png'
import { getTokens } from '../api/covalent'

import BN from 'bn.js'
import PaymentTestNew from './PaymentTestNew'
import { NavLink } from 'react-router-dom'

const buttonClass = `focus:outline-none w-full hover:shadow-md p-2 text-gray-100 flex items-center justify-center`

const DummyCheckout: React.FC = () => {

    //dummy vars
    var totalItems = 9
    var totalAmount = 100.16

    //app state
    const [isPayment, setIsPayment] = React.useState(false)

    return(
        <section className="px-8 py-4 lg:px-16 flex justify-center" style={{fontFamily:"'Poppins', sans-serif"}}>
            <div className="space-y-8">
                <div className="space-x-4 flex items-center text-gray-700">
                    <h1 className="text-3xl ">Complete Transaction</h1>
                    <BsArrowRight className="text-xl"/>                
                </div>
                <div className="text-gray-600 space-y-4">
                    <p className="border-b">
                        Total Items: <span className="text-black"> {totalItems} </span> 
                    </p>
                    <p className="border-b">
                        Total Amount: <span className="text-black"> $ {totalAmount}  </span>
                    </p>
                </div>
                <div className="space-y-4">
                    <button className={`${buttonClass} bg-blue-600 hover:bg-blue-400`}>
                        Credit/Debit Card
                        <BiCreditCard className="ml-4 text-xl"/>
                    </button>
                    <NavLink to="/payments/53c7a74e-7a3b-480f-a2e8-71bbb28e22cb" target="_blank" className={`${buttonClass} bg-yellow-500 hover:bg-yellow-400`}>
                        Pay with Crypto
                        <FaEthereum className="ml-4 text-xl"/>
                    </NavLink>
                </div>
            </div>
            {
                isPayment && <PaymentTestNew />
            }
        </section>
    )
}

interface ICryptexCheckout {
    amount: number;
    currency?: string;
}

const titleMsg = `Choose your preferred method of payment`
const iconClass = ` text-2xl hover:bg-gray-100 cursor-pointer p-2`

const CryptexCheckout: React.FC = () => {
    const [paymentProvider, setPaymentProvider] = React.useState<string | null>(null)
    return(
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                <div className="border rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {
                        paymentProvider === null 
                        ? <SelectPaymentProvider setPaymentProvider={setPaymentProvider}/>
                        : <SelectWallet paymentProvider={paymentProvider}/>
                    }
                </div>
            </div>
        </div>
    )
}

interface IPaymentProvider {
    setPaymentProvider:  React.Dispatch<React.SetStateAction<string | null>>;
}

const SelectPaymentProvider: React.FC<IPaymentProvider> = ({setPaymentProvider}) => {
    return(
        <div>
            <div className="px-8 py-4">
                <h1>{titleMsg}</h1>
            </div>
            <div className="px-8 py-4 flex items-center justify-between">
                <div className={`${iconClass} text-yellow-400 `}>
                    <div className="flex justify-center">
                        <SiBitcoin 
                            className="text-3xl text-center" 
                            name="BTC"
                            onClick={() => setPaymentProvider("BTC")}
                        />
                    </div>
                        <p>Bitcoin </p>
                    </div>
                    <div className={`${iconClass} text-gray-900`}>
                        <div className="flex justify-center">
                            <FaEthereum 
                                className="text-3xl" 
                                name="ETH"
                                onClick={() => setPaymentProvider("ETH")}
                            />
                        </div>
                            <p>Ethereum </p>
                        </div>
                        <div className={`${iconClass} text-green-900`}>
                            <div className="flex justify-center">
                                <SiXrp 
                                    className="text-3xl" 
                                    name="XRP"
                                    onClick={() => setPaymentProvider("XRP")}
                                />
                            </div>
                            <p>Ripple</p>
                        </div>
                    </div>
        </div>
    )
}

interface ISelectWallet {
    paymentProvider: string | null;
}

const SelectWallet: React.FC<ISelectWallet> = ({paymentProvider}) => {

    const [provider, setProvider] = React.useState<
        Web3 | null
    >(null)
    const [account, setAccount] = React.useState<string | null>(null)
    
    const initProvider = async () => {
        //@ts-ignore
        const web3 = new Web3(portis.provider)
        setProvider(web3)
        const accounts = await web3.eth.getAccounts()
        console.log(accounts[0])
        setAccount(accounts[0])
    }

    return(
        <div>
            {
                account === null 
                && paymentProvider !== null
                ? <ChooseProvider 
                    paymentProvider={paymentProvider}
                    initProvider={initProvider}
                /> : <ShowAccountInfo account={account} web3={provider}/> 
            }
        </div>
    )
}

interface IChooseProvider {
    paymentProvider: string;
    initProvider: () => Promise<void> | {}    
}

const ChooseProvider: React.FC<IChooseProvider> = ({
    paymentProvider,
    initProvider
}) => {
    switch(paymentProvider){
        case "ETH":
            return(
                <div className="px-8 py-4">
                    <h1>Choose your preferred wallet</h1>
                    <div className="flex justify-center items-center space-y-2 hover:bg-gray-200 w-auto px-4 py-2 rounded-md cursor-pointer">
                        <img src={Portis} className="h-24" onClick={initProvider}/>
                        {/* <img src={Portis} className="h-24"/> */}
                    </div>
                </div>
            )

        default: return (<></>)
    }
}

interface IShowAccount {
    account: string | null,
    web3: Web3 | null
}

const ShowAccountInfo: React.FC<IShowAccount> = ({
    account,
    web3
}) => {

    React.useEffect(() => {
        showTokens()
    }, [])
    
    interface Tokendata {
        name: string;
        balance: string;
        contractAddress: string;
        symbol: string;
    }

    const [tokenData, setTokenData] = React.useState<Array<Tokendata>>([])
    const [tokenInfo, setTokenInfo] = React.useState<Tokendata>({
        balance: '',
        name: '',
        contractAddress: '',
        symbol: ''
    })

    const [transactionStatus, setTransactionStatus] = React.useState<boolean | null>(null)
    const [txHash, setTxHash] = React.useState<string | null>(null)

    const showTokens = async () => {
        if(account){
            var tokenData = await getTokens(80001, account)
            tokenData.data.items.map((token: any) => {
                console.log("Token: ", token.contract_name)
                console.log("Balance: ", token.balance)
                const tokenInfo: Tokendata = {
                    balance: token.balance,
                    contractAddress: token.contract_address,
                    name: token.contract_name,
                    symbol: token.contract_ticker_symbol
                }
                setTokenData(state => [...state, tokenInfo])
            })
        }
    }

    const transact = async (
        web3: Web3 | null,
        address: string,
        from: string,
        to: string
    ) => {
        if(web3){
            const contract = await web3.eth.sendTransaction({
                chainId: 80001,
                value: web3.utils.toWei(new BN(0.1)),
                from,
                to
            })
            var txHash = contract.transactionHash
            var txIndex = contract.transactionIndex
            if(txHash && txIndex){
                setTransactionStatus(true)
                setTxHash(txHash)
                console.log('txHash', txHash)
            }
            else {
                setTransactionStatus(false)
            }
        }
    }

    const toAddress = `0x03f142529a7B70305C07a50fAA44f6EBDADB4624`
    const txVerify = `https://explorer-mumbai.maticvigil.com/tx`

    if(!transactionStatus){
        return(
            <div className="px-4 py-2 space-y-2">
                <h1 className="text-xl">Your account:</h1>
                <p className="text-purple-700">{account}</p>
                <div className="space-y-4">
                    {
                        tokenData.map((token, index) => {
                            const num = new BN(token.balance)
                            return(
                                <div key={index}>
                                    <h1>{token.name}</h1>
                                    <p>Available: <span className="text-green-500">{token.balance}</span></p>
                                    <button onClick={() => {
                                        if(account){
                                            transact(web3, token.contractAddress, account, toAddress )}
                                        }
                                    } className="p-2 bg-blue-500 text-gray-50">
                                        Pay with {token.symbol}
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    else {
        return(
            <div className="px-4 py-2 space-y-4">
                <div className="flex items-center justify-center text-green-500 text-xl space-x-2">
                    <AiOutlineFileDone />
                    <h1>Payment Completed.</h1>
                </div>
                <div>
                    <h2 className="text-center text-gray-700 text-lg">Receipt Id:</h2>
                    <p className="text-sm text-blue-700">{txHash}</p>
                </div>
                <div>
                    <a 
                        href={`${txVerify}/${txHash}/internal-transactions`} 
                        target="_black" 
                        className="underline flex items-center justify-center text-blue-600"
                        rel="noopener"
                    >
                        <p className="text-center">Verify Transaction</p>
                        <HiOutlineExternalLink />
                    </a>
                </div>
            </div>
        )
    }
}

export default DummyCheckout