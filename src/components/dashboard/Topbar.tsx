import React from 'react'
import { BsFillCaretDownFill } from 'react-icons/bs'
import { GrSettingsOption, GrTransaction } from 'react-icons/gr'
import { SiReadthedocs } from 'react-icons/si'
import { RiAccountCircleLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { IoMdSettings } from 'react-icons/io'
import { FaMoneyCheckAlt } from 'react-icons/fa'

const Topbar: React.FC = () => {
    const { user, logout } = useAuth()

    const navClass = `flex items-center space-x-2 text-gray-800 hover:text-gray-500 transition ease-in duration-200`
    return(
        <nav className="bg-white px-8 py-4 lg:px-16 flex items-center justify-between font-semibold" style={{fontFamily:"'Inconsolata', sans-serif"}}>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
            </style>
            <NavLink to='/'  className="cursor-pointer">
                <h1 className="flex text-indigo-600 text-2xl lg:text-3xl tracking-wider font-bold">
                    {/* <img src={logo} alt="" className="h-12 w-12"/> */}
                    cryptify <span className="text-xs mt-4 text-gray-900">[βeta]</span>
                </h1>
            </NavLink>
            <div className="flex items-center space-x-8 text-lg">
                <NavLink to='/' className={`${navClass}`}>
                    <SiReadthedocs />
                    <p>Docs</p>
                </NavLink>
                <NavLink to='/' className={`${navClass}`}>
                    <IoMdSettings/>
                    <p>Settings</p>
                </NavLink>
                <NavLink to='/' className={`${navClass}`}>
                    <FaMoneyCheckAlt />
                    <p>Transactions</p>
                </NavLink>
                <div className="flex items-center space-x-2">
                    <button onClick={logout} className="py-1 px-4 bg-gray-800 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white transition ease-in duration-200 text-center text-md font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Topbar