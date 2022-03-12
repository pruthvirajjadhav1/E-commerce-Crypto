import React from 'react'
import firebase from 'firebase/app'
import { auth } from '../config/firebase'

interface UserState {
    user: firebase.User | null,
    loginWithEmail: (email: string, password: string) => Promise<firebase.auth.UserCredential> | null,
    createUser: (email: string, password: string) => Promise<firebase.auth.UserCredential> | null
    logout: () => Promise<void> | void;
    googleSignIn: () => Promise<firebase.auth.UserCredential> | void
}

const init: UserState = {
    user: null,
    loginWithEmail: (email: string, password: string) => null,
    createUser: (email: string, password: string) => null,
    logout: () => {},
    googleSignIn: () => {}
}

const UserContext = React.createContext(init)

export const useAuth = () => {
    return React.useContext(UserContext)
}

const UserContextProvider: React.FC = ({children}) => {
    
    const [currentUser, setCurrentUser] = React.useState<firebase.User | null>(
        //@ts-ignore
        JSON.parse(localStorage.getItem('current_user'))
    )

    React.useEffect(() => {
        var user = localStorage.getItem('current_user')
        if(user){
            setCurrentUser(JSON.parse(user))
        }
    }, [])

    //component re-renders when auth changes
    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            localStorage.setItem('current_user', JSON.stringify(user))
        })
        return unsubscribe
    }, [currentUser])
    
    //email sign in
    const loginWithEmail = (email: string, password: string) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    //create new user
    const createUser = (email: string, password: string) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    //signin with googles
    const googleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider()
        return auth.signInWithPopup(provider)
    }

    //sign out
    const logout = () => {
        return auth.signOut()
    }

    const values: UserState = {
        user: currentUser,
        loginWithEmail,
        logout, 
        createUser,
        googleSignIn
    }

    return(
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider