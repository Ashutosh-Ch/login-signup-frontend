import React, {useState } from "react"
import axios from "axios"
// import "./Signup.css"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    const navigate=useNavigate();

    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState('')
    const [password,setPassword]=useState('')

    async function handleSubmit(e){
        e.preventDefault();

        try{

            await axios.post("https://loginsignupbackend4.onrender.com/signup",{
                email,mobile,password
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    navigate("/home",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(err){
            console.log(err);

        }

    }


    return (
        <div className="login">

            <h1>Signup</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="mobile" onChange={(e) => { setMobile(e.target.value) }} placeholder="Mobile" />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <input type="submit" onClick={handleSubmit} />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/login">Login Page</Link>

        </div>
    )
}

export default Login