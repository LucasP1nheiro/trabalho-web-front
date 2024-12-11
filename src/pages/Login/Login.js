import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); 
        navigate("/areaMedico");
    };
    

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-box">
                    <div className="login-icon">
                        <div className="circle">
                            <div className="user-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.327 0-10 1.666-10 5v3h20v-3c0-3.334-6.673-5-10-5z" />
                                </svg>
                            </div>

                        </div>
                    </div>

                    <form className="login-form">
                        <label htmlFor="username">USUÁRIO:</label>
                        <input type="text" id="username"/>

                        <label htmlFor="password">SENHA:</label>
                        <input type="password" id="password"/>

                        <button type="submit" onClick={handleLogin}>Acessar</button>
                    </form>
                </div>
                <div className="placeholder-box"></div>
            </div>
        </div>
    );
};

export default Login;