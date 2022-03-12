import React from 'react'
import { openPopupWidget } from 'react-calendly'
// @ts-ignore
import ReactTypingEffect from 'react-typing-effect'
import { NavLink } from 'react-router-dom'

import eth from '../../assets/ethereal_gray.svg'
import payment from '../../assets/payment_card.png'
import paymentSmall from '../../assets/payment_small.png'

import { AiOutlineCheck } from 'react-icons/ai'

const headerTxt = `Accept Cryptocurrencies for your Online Store`
const paraTxt = `The easiest way to integrate crypto payments on your online store.`

const Hero = () => {

    const advantages = [
        'No Coding Required',
        '0% Hidden Fees',
        'Global Payments',
        'Irreversible Transactions'
    ]

    
    const openCalendly = () => {
        openPopupWidget({url: "https://calendly.com/shlok-mange"})
    }

    return(
        <section className="px-8 space-y-8 md:py-16 py-2" style={{fontFamily:"'Rubik', sans-serif"}}>
            <div className="md:flex md:px-16 text-left text-2xl font-bold lg:text-start lg:text-5xl text-gray-800 justify-between items-center">
                <div>
                    ACCEPT{' '}
                    <span className="text-blue-600">
                        <ReactTypingEffect 
                            text={['Ethereum', '$ USD Coin', 'DAI', 'Celo', 'Tezos', 'Matic', 'Cardano ADA']}
                            speed={100}
                            eraseDelay={5000}
                            eraseSpeed={100}
                            cursor="_"
                            typingDelay={500}
                            />{' '}
                    </span>
                    <p>FOR YOUR ONLINE STORE</p>
                    <div className="text-xl mt-8 font-medium">
                        <ul className="space-y-4">
                            {
                                advantages.map((adv) => {
                                    return(
                                        <li className="flex items-center space-x-4">
                                            <AiOutlineCheck className="text-green-400 mr-4"/>{adv}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-md shadow">
                         <NavLink to='/login' type="button" className="py-4 px-6  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                             Get Started
                         </NavLink>
                     </div>
                     <div className="ml-3 inline-flex rounded-md shadow">
                         <button onClick={openCalendly} type="button" className="py-4 px-6  bg-gray-800 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                             Book a Demo
                         </button>
                     </div>
                    </div>
                </div>
                <img src={payment} className="h-full lg:w-2/5 mt-4 md:-mt-8 hidden md:block"/>
                <img src={paymentSmall} className="h-full md:hidden mt-4"/>
            </div>
        </section>
    )
}

export default Hero