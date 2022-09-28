import Header from '../../components/Header'
import loginImg from '../../assets/images/login-img.png'
import { StyledLogin } from './StyledLogin'

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';

export default function Login(){
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");

    const handleLogin = e => {
        e.preventDefault();

        if(!email | !password){
            setError("Preencha todos os campos")
            return;
        }

        const response = signin(email, password);

        if(response) {
            setError(response);
            return;
        }

        navigate("/");
    }

    return(
        <StyledLogin>
            <Header />
            <div className="login-box">
                <div className="left-side">
                    <img src={loginImg} />
                </div>
                <div className="right-side">
                    <h2>Bem vindo</h2>
                    <h3>Faça o login e bom proveito</h3>
                    <form action="#" method="GET" >
                        <input 
                            type="text" 
                            placeholder="email"                 
                            autoFocus 
                            onChange={e => {
                                setEmail(e.target.value)
                                setError("");
                            }}
                        />
                        <input 
                            type="password" 
                            placeholder="password" 
                            onChange={e => {
                                setPassword(e.target.value);
                                setError("");
                            }}
                        />
                        <label className="error">{error}</label>
                        <input 
                            type="submit" 
                            value="Login" 
                            onClick={e => handleLogin(e)}
                        />
                    </form>
                    <a href="#">Esqueceu sua senha</a>
                    <p>Não tem uma conta? <Link to="/sign-up">Cadastre-se</Link></p>
                </div>
            </div>
        </StyledLogin>
    )
}