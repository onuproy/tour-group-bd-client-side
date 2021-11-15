import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { getAuth  } from "firebase/auth";

import useAuth from '../../Hooks/useAuth';
import css from './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {signInWith} = useAuth();
    const [error,setError] = useState({});
    const auth = getAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const hangleEmail = e =>{
        setEmail(e.target.value);
    }
    const hanglePassword = e =>{
        setPassword(e.target.value);
    }
    const hangleRegistration = e =>{
        signInWith (auth, email, password)
        .then(result => {
            history.push(redirect_uri);
        })
        .catch(error => {
            setError();
        })
        e.preventDefault();
    }
    return (
        <div className="login-form-area">
            <h2>Login</h2>
            <form action="" onSubmit={hangleRegistration}>
                <input onBlur={hangleEmail} type="email" name="email" id="" placeholder="Email" />
                <input onBlur={hanglePassword} type="password" name="" id="" placeholder="Password" />
                <input className="submit-button" type="submit" value="Submit" />
            </form>
            <br/>
            <p>If You Haven't Account Yet? <Link to='/register'>Register Now</Link></p>
        </div>
    );
};

export default Login;