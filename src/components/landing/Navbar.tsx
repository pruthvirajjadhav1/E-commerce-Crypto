import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
    return(
        <nav className="border-b bg-white px-8 py-4 flex items-center justify-between lg:px-16">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Inconsolata&display=swap');
            </style>
            <NavLink to='/' style={{fontFamily:"'Inconsolata', sans-serif"}} className="cursor-pointer">
                <h1 className="text-blue-600 text-2xl lg:text-3xl tracking-tight font-bold">
                    {/* <img src={logo} alt="" className="h-12 w-12"/> */}
                    cryptify
                </h1>
            </NavLink>
            <div className="flex items-center space-x-8  w-full justify-end text-gray-900" style={{fontFamily:"'Krub', sans-serif"}}>
                <NavLink to='/login' className="font-semibold hover:text-blue-600 hidden md:block">Sign In</NavLink>
                <NavLink to='/' className="font-semibold hover:text-blue-600 hidden md:block">Docs</NavLink>
                <NavLink to='/demo' type="button" className="py-2 px-4 border-gray-600 bg-gray-900 hover:bg-gray-700 border focus:ring-gray-900 focus:ring-offset-gray-200 text-gray-100 transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded">
                    Test Demo
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar