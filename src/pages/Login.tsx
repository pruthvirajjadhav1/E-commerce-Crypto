import React from 'react'
import { FaGithub, FaGithubSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { useHistory } from 'react-router'
import Navbar from '../components/landing/Navbar'
import { useAuth } from '../context/AuthContext'

const Login: React.FC = () => {
    const { googleSignIn } = useAuth()
    const history = useHistory()

    const signInWithGoogle = async () => {
        var res = await googleSignIn()
        if(res){
            history.push('/dashboard')        
            // alert(`Thank you for joinining cryptify, we'll get back to you ASAP and schedule a project demo. To the moon🚀`)
        }
    }

    return(
        <div className="h-screen w-screen bg-gray-100 overflow-hidden">
            <Navbar/>
            <section style={{fontFamily:"'Krub', sans-serif"}} className="flex mt-16 justify-center h-full">
                <div className="space-y-8">
                    <button onClick={signInWithGoogle} className="font-medium text-gray-900 flex items-center justify-center bg-white p-2 shadow-md hover:bg-gray-100 hover:text-gray-800">
                        <div>
                            <FcGoogle /> 
                        </div>
                        <p className="mx-3">
                            Login With Google
                        </p>
                    </button>
                    <button className="font-medium text-gray-100 flex items-center justify-center bg-gray-900 p-2 shadow-md hover:bg-gray-800 hover:text-gray-200">
                        <div>
                            <FaGithub /> 
                        </div>
                        <p className="mx-3">
                            Login With Github
                        </p>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default Login