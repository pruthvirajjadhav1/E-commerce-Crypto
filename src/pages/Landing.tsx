import React from 'react'

//components
import Navbar from '../components/landing/Navbar'
import Hero from '../components/landing/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Waitlist from '../components/landing/Waitlist'

const Landing: React.FC = () => {
    return(
        <div className="overflow-y-auto h-screen w-screen space-y-4 bg-gray-100">
            <Navbar/>
            <Hero />
            <Features />
            <Waitlist />
            <Footer />
        </div>
    )
}


// const Landing: React.FC = () => {
//     return(
//         <div className="bg-gray-100 h-screen w-screen">
//             <Navbar header="cryptify" />
//         </div>
//     )
// }
export default Landing