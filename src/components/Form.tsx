import React from 'react'
import { NavLink, Redirect, useHistory } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { FcGoogle } from 'react-icons/fc'

const Form: React.FC = () => {
    
    const emailRef = React.createRef<HTMLInputElement>()
    const passwordRef = React.createRef<HTMLInputElement>()

    const { loginWithEmail } = useAuth()
    const history = useHistory()

    const signIn = async (
        email: string, 
        password: string
    ) => {
        try {
            var res = await loginWithEmail(email, password)
            if(res?.user){
                history.push('/dashboard')            
            }
        }
        catch(err){
            console.error(err)
        }
    }

    return(
        <div className="px-8 py-4 lg:px-16 md:flex md:justify-center">
            <section className="space-y-4 rounded-md p-2  md:w-1/4" style={{fontFamily:"'Rubik', sans-serif"}}>
                <div>
                    <p className="text-center">Don't have an account yet?</p>
                    <p className="text-indigo-600 text-center underline">Signup for the beta</p>
                </div>
                <button className="flex items-center justify-between bg-white px-2 w-full py-1 shadow-md hover:bg-gray-100 hover:text-gray-800">
                    <div className="justify-start">
                        <FcGoogle /> 
                    </div>
                    <p className="justify-center">
                        Continue With Google
                    </p>
                    <div></div>
                </button>
                <p className="text-center text-gray-500 text-sm">or sign in with email</p>
                <div className="space-y-4">
                    <div className="space-y-1">
                        <div>
                            <input 
                                type="email" 
                                className="border w-full px-2 py-1 shadow"
                                ref={emailRef}
                                placeholder="yourname@company.com"
                            />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <div>
                            <input 
                                type="password" 
                                className="border w-full px-2 py-1 shadow"
                                ref={passwordRef}
                                placeholder="**********"
                            />
                        </div>
                    </div>
                    <div>
                        <button 
                            className="w-full p-2 bg-indigo-700 text-gray-50"
                            // @ts-ignore
                            onClick={() => signIn(emailRef.current?.value, passwordRef.current?.value)}
                        >
                            Sign In
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center underline">
                    <NavLink to='/' className="text-sm text-indigo-600">
                        Forgot Your Password?
                    </NavLink>
                </div>
            </section>
        </div>
    )
}

export default Form