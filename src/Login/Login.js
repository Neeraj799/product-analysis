import React, {useState} from 'react';
import Header from '../Header/Header';

import style from "./style.module.css";
import { useNavigate } from 'react-router-dom';




function Login() {
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);

        navigate('/');
    }

    const handleButton = (e) => {

        navigate('/')
    }
    



    return (
        <>
        <Header/>
             
        <div className={style.loginWrapper}>
            <form onSubmit={handleSubmit}>
                <h2 className={style.loginDesc}>
                Welcome to Dashboard, Login
                </h2>
                <div className={style.formInput}>
                    <label>Username</label>
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        />
                    <label>Password</label>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        />
                </div>
                <div className={style.loginBtn}>
                <button type='submit'> Login </button>
                <button type='button' onClick={handleButton}> Forgot Your Password </button>
                </div>
            </form>
        </div>
    </>
    )
}

export default Login;