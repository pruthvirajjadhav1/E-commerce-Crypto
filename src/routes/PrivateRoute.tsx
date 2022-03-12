import React from 'react'
import { Redirect, Route } from 'react-router'
import { useAuth } from '../context/AuthContext'

interface Props {
    component?: React.FC | any;
    path: string
}

const PrivateRoute: React.FC<Props> = ({component, path}) => {
    
    const { user } = useAuth()
    
    return user 
    ? <Route component={component} path={path}/> 
    : <Redirect to="/login" />
}

export default PrivateRoute