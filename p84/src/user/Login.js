import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import Main from "../MainComponent";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const Login = ({setLoginUser}) => {


    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return (
        <div className="loginBody">
            <h3 className="h3"><AccountBalanceIcon />     AVA BANKING SOLUTIONS.</h3>
    
        <div className="login">
            <h3>Admin login page.</h3>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="employee Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>New employee???</div>
           
          
              
               <div className="button" onClick={() => history.push("/register")}>Register</div>
          

        </div>
        </div>
    )
}

export default Login