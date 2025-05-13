import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Register()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleRegister = async()=>{
        try{
            await axios.post('https://jwt-backend-fril.onrender.com/register',{username: email, password: password})
            .then((data)=>{
                console.log(data)
                alert('successfully registered');
                navigate('/login');
                setEmail('');
                setPassword('');

            })
        }
        catch(err){
            console.log(err.message)
            alert('invalid enter')
        }
    }



    return(
        <div style={{backgroundColor:'blue', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100%', height:'100vh'}}>
            <div className="form">
                <input type="text" placeholder="Enter Username" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="button" onClick={handleRegister}>Register</button>
                <p>if Already register ? click here <strong style={{color:'red', cursor:'pointer'}} onClick={()=>navigate('/login')}>Login</strong></p>
            </div>
            
        </div>
    )




}
export default Register;