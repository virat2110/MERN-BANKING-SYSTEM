import React, { useState } from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Landing from "./views/Landing"
import Customers from "./views/Customers"
import Customer from "./views/Customer"
import Transactions from "./views/Transactions"
import AddCustomer from "./views/AddCustomer"
import Footer from './components/Footer'
import Navbar from "./components/Navbar"
import StepContext from './Context/StepContext'
import '../src/main.css'



export default function Main({setLoginUser}) {

    
    return (
        <div>
            <StepContext>
            <Router>
            <Navbar transparent />
            <div className="homepage">
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
            </div>
               
           
            <Route exact path="/" component={Landing} />
                <Route exact path="/customers" component={Customers} />
                <Route exact path="/customers/:id" component={Customer} />
                <Route exact path="/transactions" component={Transactions} />
                <Route exact path="/add" component={AddCustomer} />
               
            
               <Footer />
            </Router>
            </StepContext>
        </div>
    )
}



