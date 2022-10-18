import Header from "../../components/Header";
import loginImg from "../../assets/images/signup.png"
import { StyledSignUp } from "./StyledSignUp";

import { useState } from "react";
import { isRouteErrorResponse, Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function SignUp(){
    const { signup } = useAuth();
    const navigate = useNavigate();

    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ confirmPassword, setConfirmPassword ] = useState();
    const [ phone, setPhone ] = useState();
    const [ error, setError ] = useState();

    const handleSignup = e => {
        e.preventDefault();
        if(!name | !email | !password | !confirmPassword | !phone){
            setError("Preencha todos os campos");
            return;
        }
        
        else if(password !== confirmPassword){
            setError("As senhas não batem")
            return;
        }

        // Check phone
        var errors = 0
        phone.split("").forEach(digit => {
            if(digit.charCodeAt() < 48 || digit.charCodeAt() > 57)
                errors += 1;
        })

        if(errors > 0){
            setError("Telefone deve conter apenas números");
            return;
        }

        const response = signup(name, email, password, phone);

        if(response){
            setError(response);
            return;
        }

        alert("Usuário cadastrado com sucesso");
        navigate("/");
    }

    return(
        <StyledSignUp>
            <Header />
            <div className="signup-box">
                <div className="left-side">
                    <h2>Bem vindo</h2>
                    <h3>Que bom que decidiu fazer parte de nossa comunidade!</h3>
                    <form action="/" method="POST">
                        <div>
                            <input 
                                type="text" 
                                placeholder="Nome de usuário" 
                                onChange={e => { 
                                    setName(e.target.value)
                                    setError("");
                                }}
                                autoFocus 
                            />
                            <input 
                                type="text" 
                                placeholder="Telefone"
                                onChange={e => {
                                    setPhone(e.target.value);
                                    setError("");
                                }}
                            />
                        </div>
                        <input 
                            type="text" 
                            placeholder="email" 
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
                        <input 
                            type="password" 
                            placeholder="confirme password" 
                            onChange={e => { 
                                setConfirmPassword(e.target.value);
                                setError("");
                            }}
                        />
                        <label className="error">{error}</label>
                        <input 
                            type="submit" 
                            value="Cadastrar" 
                            onClick={e => handleSignup(e)}
                        />
                    </form>
                </div>
                <div className="right-side">
                    <img src={loginImg} />
                </div>
            </div>
        </StyledSignUp>
    )
}