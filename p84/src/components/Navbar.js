import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PersonIcon from '@material-ui/icons/Person';
import ReceiptIcon from '@material-ui/icons/Receipt';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Main from "../MainComponent"

export default function Navbar(props) {
  // const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    
    <div className="lan-navbar">
        <div className="lan-title">  
        <Link class="nav-link" to="/"><AccountBalanceIcon />   AVA Banking solutions.</Link>
        
         </div>
        <div className="lan-options">
        <Link class="nav-link" to="/customers"><PersonIcon />Customers</Link>
        <Link class="nav-link" to="/transactions"><ReceiptIcon />Transactions</Link>
        <Link class="nav-link" to="/add"><PersonAddIcon />New Customer</Link>
        </div>
    </div>
  );
}
