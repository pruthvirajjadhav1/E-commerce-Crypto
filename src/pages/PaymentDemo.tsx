import { ethers } from 'ethers'
import React from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { FaAngleRight } from 'react-icons/fa'
import { HiBadgeCheck } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import metafox from '../assets/metamask_fox.png'
import walletconnect from '../assets/walletconnect.svg'

// @ts-ignore
const globalEthereum = window.ethereum
const merchantAddress = `0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266`

const PaymentDemo: React.FC = () => {

    const [accountAddress, setAccountAddress] = React.useState<string | null>(null)
    const [accountBalance, setAccountBalance] = React.useState<string | null>(null)
    const [signer, setSigner] = React.useState<ethers.providers.JsonRpcSigner | null>(null)
    const [isTransaction, setIsTransaction] = React.useState<boolean | null>(null)
    const [ctx, setCtx] = React.useState<ethers.providers.TransactionResponse | null>(null)

    const merchantName = `Cryptify Technologies Inc.`
    const warning_message = `PLEASE NOTE THAT THIS GATEWAY IS NOT FOT TRANSFERRING REAL CRYPTO, KINDLY TEST IT WITH FAUCET CURRENCY ONLY
    `
    
    // gets the users metamask account
    const requestAccount = async () => {
        await globalEthereum.request({ method: 'eth_requestAccounts' });
    }

    const transferEth = async () => {
        if(typeof globalEthereum !== 'undefined'){
            await requestAccount()
            const provider = new ethers.providers.Web3Provider(globalEthereum)
            const signer = provider.getSigner()
            setSigner(signer)
            const accountAddress = await signer.getAddress()
            setAccountAddress(accountAddress)
            
            const accountBalance = await signer.getBalance()
            const balance = ethers.utils.formatUnits(accountBalance, 18)
            setAccountBalance(balance)

            console.log(`Address: `, accountAddress, `Balance:`, balance)
        }
    }

    const confirmPayment = async () => {
        // @ts-expect-error
        const ctx = await signer.sendTransaction({
            to: merchantAddress,
            value: ethers.utils.parseEther("0.3")
        })
        setCtx(ctx)
        console.log(ctx)
    }

    return(
        <div className="bg-gray-100 h-screen w-screen overflow-auto" style={{fontFamily:"'Rubik', sans-serif"}}>
            {/* Top Bar */}
            <nav className="px-8 py-4">
                <NavLink to='/' className="flex items-center text-gray-800">
                    <BiArrowBack className="mr-4"/>Back To Cryptify
                </NavLink>
            </nav>
            {/* Payments Section */}
            <section className="px-8 py-4 space-y-4">
                <div className="flex justify-center">
                    {/*  Orderbook Card Component */}
                    <div className="w-full border max-w-md bg-white rounded-md shadow-md space-y-2">
                        <div className="bg-gray-800 text-gray-50 w-full rounded-md rounded-b-none py-2 px-4">
                            <h2 className="text-center text-gray-400 text-lg">You are paying to</h2>
                            <h1 className="text-center text-2xl">{merchantName}</h1>
                        </div>
                        <div className="py-2 px-4 space-y-4">
                            <div>
                                <p className="text-center text-gray-600">Order Total</p>
                                <h2 className="text-center text-gray-800 font-semibold text-2xl">$39.99</h2>
                            </div>
                            <div>
                            {
                                isTransaction && <TransactionDetails ctx={ctx}/>
                            }
                            {
                                accountAddress && accountBalance && !isTransaction ? 
                                <MyAccount 
                                    accountAddress={accountAddress}
                                    accountBalance={accountBalance}
                                    confirmPayment={confirmPayment}
                                    setIsTransaction={setIsTransaction}
                                /> : (
                                    !isTransaction ?
                                    <ChooseWallet 
                                        requestAccount={requestAccount}
                                        transferEth={transferEth}
                                    /> : <></>
                                ) 
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-red-500 text-center">** {warning_message} **</p>
                </div>
            </section>
        </div>
    )
}

interface IAccount {
    accountAddress: string ,
    accountBalance: string ,
    confirmPayment: () => {},
    setIsTransaction: React.Dispatch<React.SetStateAction<boolean | null>>
}

const MyAccount: React.FC<IAccount> = ({
    accountAddress,
    accountBalance,
    confirmPayment,
    setIsTransaction
}) => {
    return(
        <div className="text-gray-700 space-y-4">
            <div className="px-4 space-y-1 border-b">
            <p className="flex justify-between items-center">Cost in $USD <span className="font-medium text-xl text-gray-900">39.99</span></p>
                <p className="flex justify-between items-center">Cost in ETH <span className="font-medium text-xl text-gray-900">0.298</span></p>
                <p className="flex justify-between items-center">Your Balance <span className="font-medium text-xl text-gray-900">{accountBalance.slice(0,6)}</span></p>
            </div>
            <div className="px-4">
                <button
                    onClick={async () => {
                        await confirmPayment()
                        setIsTransaction(true)
                    }} 
                    className="p-2 w-full bg-blue-800 text-white rounded-md shadow-md hover:bg-blue-500 transition ease-in duration-200"
                >
                    Confirm Payment
                </button>
            </div>
        </div>
    )
}

interface IWallet {
    requestAccount: () => {},
    transferEth: () => {}
}

const ChooseWallet: React.FC<IWallet> = ({requestAccount, transferEth}) => {
    return(
        <div>
            <h1 className="text-center text-gray-800 text-xl">Choose your Wallet</h1>
                <div className="rounded">
                                <div className="border md:p-4 py-2 px-4 flex items-center space-x-4 hover:bg-blue-100">
                                    <div className="bg-yellow-100 rounded-full lg:h-16 h-12 w-12 lg:w-16 flex justify-center items-center">
                                        <img src={metafox} alt="" className="h-10 w-10"/>
                                    </div>
                                    <button onClick={transferEth} className="flex items-center group-hover:bg-opacity-5">
                                        <div>
                                            <p className="font-bold text-left">MetaMask</p>
                                            <p className="text-gray-500 hidden md:block">Connect with a browser wallet</p>
                                        </div>
                                        <div className="ml-8 hover:text-blue-600">
                                            <FaAngleRight className="text-2xl"/>
                                        </div>
                                    </button>
                                </div>
                                <div className="border md:p-4 py-2 px-4 flex items-center space-x-4 hover:bg-blue-100">
                                    <div className="bg-blue-100 rounded-full lg:h-16 h-12 w-12 lg:w-16 flex justify-center items-center">
                                        <img src={walletconnect} alt="" className="h-10 w-10"/>
                                    </div>
                                    <div>
                                        <button className="flex items-center">
                                            <div>
                                                <p className="font-bold text-left">WalletConnect</p>
                                                <p className="text-gray-500 hidden md:block">Connect with your mobile wallet</p>
                                            </div>
                                            <div className="ml-8 hover:text-blue-600">
                                                <FaAngleRight className="text-2xl"/>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                </div>
    )
}

interface ICtx {
    ctx: ethers.providers.TransactionResponse | null
}

const TransactionDetails: React.FC<ICtx> = ({
    ctx
}) => {

    const url = `https://explorer-mumbai.maticvigil.com/tx/${ctx?.hash}/internal-transactions`
    if(ctx?.hash){
        return(
            <div>
                <p className="text-green-400 flex items-center justify-center text-xl">
                    <HiBadgeCheck />
                    SUCCESS
                </p>
                <p className="text-center">You payment was successfully processed.</p>
                <div className="flex justify-center">
                    <a href={url} target="_blank" rel="noopener" className="text-center text-blue-600 underline">Verify It here.</a>
                </div>
            </div>
        )
    }
    return(
        <></>
    )
}

export default PaymentDemo