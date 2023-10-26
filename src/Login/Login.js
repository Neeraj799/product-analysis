import React, {useState} from 'react';
import Header from '../Header/Header';

import style from "./style.module.css";





function Login() {
    const [username, setusername] = useState("");
    const [password,setpassword] =useState("");

    const handleUsernameChange = (event) => {
        setusername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setpassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

    console.log("Username:", username);
    console.log("Password:", password);
    };



    









    return (
       <>
       <Header/>
       <div className={style.loginWrapper}>
        <h2 className={style.loginDesc}>
            Welcome to Dashboard, Login
        </h2>

            <form onSubmit={handleSubmit}>
                <div className={style.inputWrapper}>

                <h3 className={style.usernameDesc}>
                    Username
                </h3>

                <input 
                    type='text'
                    value={username}
                    onChange={handleUsernameChange}
                />
                </div>

                <div className={style.inputWrapper}>
                    <h3 className={style.passwordDesc}>
                        Password
                    </h3>
                    <input 
                        type='password'
                        value={password}
                        onChange={handlePasswordChange}
                    />

                </div>

                <button type='submit' > Log In </button>
            </form>
        </div>
        
        </>
    )

}

export default Login;