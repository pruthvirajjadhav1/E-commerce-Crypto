import React from 'react'
import metamask_fox from '../../assets/metamask_fox.png'
import portis from '../../assets/portis.png'

const EthPay: React.FC = () => {
    return(
        <div className="px-8 py-4 w-full space-y-5">
            <button className="w-full flex items-center bg-blue-600 hover:bg-blue-400 px-2 py-1 text-white rounded-md">
                <img src={metamask_fox} alt="" className="h-8 mr-2"/>
                Connect with MetaMask
            </button>
            <button className="w-full flex items-center bg-purple-800 hover:bg-blue-400 px-2 py-1 text-white rounded-md">
                <img src={portis} alt="" className="h-8 mr-2"/>
                Connect with Portis
            </button>
        </div>
    )
}

export default EthPay