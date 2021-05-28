import './login.css'
import React from "react";
import { useHistory } from 'react-router';

const Login = () => {
        const router = useHistory()
        return (
            <div className={'login-main'}>
                <h1>LOGIN</h1>
                <h2 onClick={()=>router.push('home')}>
                    GO TO HOME
                </h2>
            </div>
        )
}
export default Login;