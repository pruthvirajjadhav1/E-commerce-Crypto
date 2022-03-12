import React from 'react'
import { CgNametag, CgWebsite } from 'react-icons/cg'
import { SiEthereum } from 'react-icons/si'
import { firebaseRef } from '../../config/firebase'
import { useAuth } from '../../context/AuthContext'
import firebase from 'firebase'

//generate random id's
import { v4 as uuidv4} from 'uuid'
import axios from 'axios'
import { testApiUrl } from '../..'

interface IGatewayModal {
    setNewGateway: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewGatewayModal: React.FC<IGatewayModal> = ({
    setNewGateway
}) => {
    
    const modalContainer = `justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none`
    const inputClass = `shadow-sm w-full px-2 py-1 border`

    const { user } = useAuth()
    
    //input refs
    const nameRef = React.useRef<HTMLInputElement | null>(null)
    const siteRef = React.useRef<HTMLInputElement | null>(null)
    const addressRef = React.useRef<HTMLInputElement | null>(null)

    const createNewGateway = async () => {
        var options = {
            gateway_name: nameRef.current?.value,
            gateway_url: siteRef.current?.value,
            eth_address: addressRef.current?.value,
            user_id: user?.uid
        }
        const res = await axios.post(`${testApiUrl}/creategateway`, options)
        console.log(res.data)
        window.location.reload()
    }

    return(
        <div className={`${modalContainer} font-mono`}>
            <div className="relative w-auto my-12 mx-auto max-w-5xl">
                <div className="border shadow-2xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="px-8 py-4 space-y-4 mx-2">
                        <h1 className="text-3xl flex justify-between items-start text-indigo-600">New Gateway<span className="text-xl text-red-500 cursor-pointer" onClick={() => setNewGateway(false)}>X</span></h1>
                        <div className="space-y-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="">Enter a name for your gateway*</label>
                                <CgNametag />
                            </div>
                            <div>
                                <input type="text" ref={nameRef} className={`${inputClass}`} placeholder="My new ecommerce site"/>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="">Enter your site URL*</label>
                                <CgWebsite />
                            </div>
                            <div>
                                <input type="text" ref={siteRef} className={`${inputClass}`} placeholder="https://newamazon.com"/>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center justify-between">
                                <label htmlFor="">Enter your ethereum address*</label>
                                <SiEthereum />
                            </div>
                            <div>
                                <input type="text" ref={addressRef} className={`${inputClass}`} placeholder="0xe4b2a861b10fb8b07a87e140ec98e11225624aa0"/>
                            </div>
                        </div>
                        <div className="flex justify-center items-center space-x-16">
                            <button 
                                onClick={() => createNewGateway()} 
                                className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-md font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg w-full tracking-wider"
                            >
                                Create
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewGatewayModal