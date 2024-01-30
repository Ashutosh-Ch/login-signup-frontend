import React  from "react"
import { useState } from "react"
import axios from "axios"
import './Login.css'
import {useNavigate, Link} from "react-router-dom"



function Login(){
    const navigate=useNavigate()

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function handleSubmit(e){
        e.preventDefault()

        try{
            await axios.post("https://loginsignupbackend4.onrender.com/login",{
                email,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    navigate("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User does not exist")
                }
                else{
                    alert("wrong password")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e)  
            })
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div className="login">
            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={handleSubmit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">New User</Link>

        </div>
    )
}
export default Login