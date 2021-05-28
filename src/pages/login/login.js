import './login.css'
import React from "react";
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';

const Login = () => {
    const counter = useSelector((state)=>state.counter.counter);
        const router = useHistory()
        return (
            <div className={'login-main'}>
                <h1>LOGIN</h1>
                <h2> CPT : {counter}</h2>
                <h2 onClick={()=>router.push('home')}>
                    GO TO HOME
                </h2>
            </div>
        )
}
export default Login;