import React, {useState, useEffect} from 'react';
import { Navigate } from "react-router-dom";
import axios from 'axios';

function Protected({children}){
        
    const [isValid, setIsValid] = useState(false);
    

     useEffect(() => {
        const token = localStorage.getItem('tokens');
        if (!token) {
            <Navigate to='/login'/>
            return;
        }

        axios.get('https://jwt-backend-fril.onrender.com/protected', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            console.log(res.data);
            setIsValid(true);
        })
        .catch((err) => {
            console.error(err.response?.data || err.message);
            <Navigate to='/login'/>
        });
    }, []);

    return isValid ? children : null;
}

export default Protected;