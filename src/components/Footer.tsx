import React from 'react'
import { AiFillMail } from 'react-icons/ai'
import { FaRedditAlien, FaDiscord, FaLinkedinIn } from 'react-icons/fa'
import { GrTwitter } from 'react-icons/gr'
import { NavLink } from 'react-router-dom'

const footerContainer = `px-8 py-4 lg:px-16 bg-gray-900 flex font-mono
    justify-between items-center
`
const Footer: React.FC = () => {
    return(
        <footer className="text-indigo-100">
            <div className={`${footerContainer}`}>   
                <div className="lg:text-lg">
                    <p>&copy;cryptify Labs.</p>
                </div>
                <div className="hidden lg:block">
                    <div className="flex items-center space-x-4 text-gray-500">        
                        <NavLink to="/" className="hover:underline">T&C.</NavLink>
                        <NavLink to="/" className="hover:underline">Privacy Policy</NavLink>
                        <NavLink to="/" className="hover:underline">GDPR</NavLink>
                        <NavLink to="/" className="hover:underline">Docs</NavLink>
                    </div>
                </div>
                <div className="flex items-center space-x-4 lg:text-2xl lg:space-x-8">
                    <AiFillMail className="text-lg"/>
                    <FaRedditAlien className="hover:text-gray-500 cursor-pointer"/>
                    <FaDiscord className="hover:text-gray-500 cursor-pointer"/>
                    <GrTwitter className="hover:text-gray-500 cursor-pointer"/>
                    <FaLinkedinIn className="hover:text-gray-500 cursor-pointer"/>
                </div>
            </div>
            <div className="space-x-4 px-16 text-gray-600 flex items-center justify-end text-sm" style={{fontFamily:"'Rubik', sans-serif"}}>
            </div>
        </footer>
    )
}

export default Footer