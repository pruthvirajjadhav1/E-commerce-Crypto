import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

//pages
import Landing from './pages/Landing'
import TestRipple from './pages/TestRipple'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

import PrivateRoute from './routes/PrivateRoute'
import UserContextProvider from './context/AuthContext'
import Payments from './pages/Payment'
import PaymentDemo from './pages/PaymentDemo'


const App: React.FC = () => {
	return(
		<div>
			<style>
				@import url('https://fonts.googleapis.com/css2?family=Krub&family=Poppins&family=Raleway&family=Roboto&family=Rubik&display=swap');
			</style>
			<UserContextProvider >
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Landing}/>
					<Route path='/test' component={TestRipple}/>
					<Route path='/demo' component={PaymentDemo} />
					<Route path='/login' component={Login}/>
					<Route path='/payments/:id' component={Payments}/>
					<PrivateRoute path='/dashboard' component={Dashboard} />
				</Switch>
			</BrowserRouter>
			</UserContextProvider>
		</div>
	)
}

const root = document.getElementById('root')
render(<App />, root)

export const prodApiUrl = `https://cryptify-server.herokuapp.com`
export const testApiUrl = `http://localhost:8080`