import React from 'react'
import security from '../assets/coins.svg'
import commission from '../assets/commission.svg'
import world from '../assets/world.svg'
import js from '../assets/js.svg'
import relax from '../assets/btc.svg'
import mobpay from '../assets/mobpay.svg'

const features = [
    {
        title: 'Setup Crypto Payments in a Flash',
        para: `We'll set you up with payment buttons, payment-links & easy ecommerce integrations`,
        svg: relax
    },
    {
        title: 'Go Global',
        para: `Accept payments from anywhere in the world at very fast speeds and no commission.`,
        svg: world
    },
    {
        title: 'Never lose your data.',
        para: `Your transactions are recorded permanently. No mishaps, no data loss. `,
        svg: mobpay
    },
]

// const Features: React.FC = () => {
//     return(
//         <div className="px-8 py-4 space-y-8">
//             <div className="space-y-4" style={{fontFamily:"'Krub', sans-serif"}}>
//                 <h1 className="font-semibold text-3xl text-gray-800 text-center" >
//                     Bridging the gap between centralized & decentralized finance.
//                 </h1>
//                 <p className="text-center text-gray-700 font-medium">Go for cryptify now and save yourself from future regrets</p>
//             </div>
//             {/* <div className="lg:flex lg:space-x-2 ">
//                 <div className="lg:px-4 lg:flex lg:space-x-3 space-y-4 lg:space-y-0">
//                     {
//                         features.map((feature, index) => {
//                             return(
//                                 <FeatureCard feature={feature} key={index}/>
//                             )
//                         })
//                     }
//                 </div>
//             </div> */}
            
// <div className="sm:flex flex-wrap justify-center items-center text-center gap-8" style={{fontFamily:"'Rubik', sans-serif"}}>
//     <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 bg-white mt-6 shadow-lg rounded-lg x" >
//         <div className="flex-shrink-0">
//             <div className="flex items-center mx-auto justify-center rounded-md bg-indigo-500 text-white">
//                 <img src={security} alt=""/>
//             </div>
//         </div>
//         <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold py-4">
//             Your Keys, Your Coins
//         </h3>
//         <p className="text-md  text-gray-500 py-4">
//             We don't own any of your funds, simply connect your existing wallet and start accepting.
//         </p>
//     </div>
//     <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 px-4 py-4 mt-6 sm:mt-16 md:mt-20 lg:mt-24 bg-white shadow-lg rounded-lg">
//         <div className="flex-shrink-0">
//             <div className="flex items-center mx-auto justify-center rounded-md bg-indigo-500 text-white">
//                 <img src={commission} alt=""/>
//             </div>
//         </div>
//         <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold py-4">
//             No commission. No BS.
//         </h3>
//         <p className="text-md text-gray-500 py-4">
//             We don't charge any commission, and we have very fast processing speeds :)
//         </p>
//     </div>
//     <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 mt-6  px-4 py-4 bg-white shadow-lg rounded-lg">
//         <div className="flex-shrink-0">
//             <div className="flex items-center mx-auto justify-center rounded-md bg-indigo-500 text-white">
//                 <img src={js} alt=""/>
//             </div>
//         </div>
//         <h3 className="text-2xl sm:text-xl text-gray-700 font-semibold py-4">
//             Super easy to integrate
//         </h3>
//         <p className="text-md  text-gray-500 py-4">
//             Just 1-line of code snippet, add it to your website and we'll handle the payments.
//         </p>
//         <p className="text-xs text-gray-800 ">
        // * P.S : We'll be personally integrating it on your website initially and provide 24/7 support :)
//         </p>
//     </div>
// </div>

//         </div>
//     )
// }

// interface IFeatureCard {
//     feature: {
//         title: string;
//         para: string;
//         svg: string;
//     }
// }

// const FeatureCard: React.FC<IFeatureCard> = ({feature}) => {
//     return(
//         <div>
//             <div className="border bg-gray-50 rounded-lg shadow-md py-8">
//                 <div className="flex justify-center">
//                     <img src={feature.svg} alt="" className="max-w-sm w-auto"/>
//                 </div>
//                 <div className="space-y-4 px-4">
//                     <h1 style={{fontFamily:"'Raleway', sans-serif"}} className="text-center text-2xl text-gray-800 font-semibold">
//                         {feature.title}
//                     </h1>
//                     <p className="text-center text-gray-700 tracking-tight text-lg px-4" style={{fontFamily:"'Rubik', sans-serif"}}>
//                         {feature.para}
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

const Features: React.FC = () => {
    return(
        <section className="lg:px-16 px-8 space-y-8" style={{fontFamily:"'Poppins', sans-serif"}}>
            {/* Features Content */}
                {
                    features.map((feature, index) => {
                        return(
                            <div className=" flex justify-center">
                                <div className="space-y-16">
                                    <div className="flex justify-center">
                                        <img src={feature.svg} alt="" />
                                    </div>
                                    <div className="space-y-8">
                                        <h1 className="text-center font-bold text-gray-900 text-3xl">{feature.title}</h1>
                                        <p className="text-center text-lg text-gray-700">{feature.para}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
        </section>
    )
}
export default Features