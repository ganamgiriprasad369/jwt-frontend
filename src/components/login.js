import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const handleLogin = async()=>{
        try{
            let res = await axios.post('https://jwt-backend-fril.onrender.com/login',{username:email, password:password})
            console.log(res);
            localStorage.setItem('tokens', res.data.token);
            navigate('/home')
            setEmail('');
            setPassword('');
        }
        catch(err){
            console.log(err.message)
            alert('please enter correct creditials..')
        }
    }



    return(
        <div style={{backgroundColor:'blue', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', width:'100%', height:'100vh'}}>
            <div className="form">
                <input type="text" placeholder="Enter Username" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="button" onClick={handleLogin}>Login</button>
                <p>if not register ?Click here <strong style={{color:'red', cursor:'pointer'}} onClick={()=>navigate('/register')}>Register</strong></p>
            </div>
            
        </div>
    )

}


export default Login;