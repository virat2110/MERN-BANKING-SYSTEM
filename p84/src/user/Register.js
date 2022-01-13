import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email:"",
        phone:"",
        address:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, phone, address, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            console.log(user.name);
              axios.post("/register", user)
            .then( res => {
                alert(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="loginBody">
           <h3 className="h3"><AccountBalanceIcon />     AVA BANKING SOLUTIONS.</h3>
        <div className="register">
            {console.log("User", user)}
            <h3>Admin registrartion page</h3>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="number" name="phone" value={user.phone} placeholder="Mobile number" onChange={ handleChange }></input>
            <input type="text" name="address" value={user.address} placeholder="address" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div>already have credentials???</div>
            <div className="button" onClick={() => history.push("/login")}>Login</div>
        </div>
        </div>
    )
}

export default Register