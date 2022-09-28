import Header from '../../components/Header'

import { StyledLogin } from './StyledLogin'

import loginImg from '../../assets/images/login-img.png'

import { useState } from 'react'

export default function(){
    const [ user, setUser ] = useState("");
    const [ password, setPassword ] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        //Substituir os consoles por autenticar
        console.log(user);
        console.log(password);
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
                            placeholder="email or username"                 
                            autoFocus 
                            onChange={e => setUser(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder="password" 
                            onChange={e => setPassword(e.target.value)}
                        />
                        <input 
                            type="button" 
                            value="Login" 
                            onClick={e => handleSubmit(e)}
                        />
                    </form>
                    <a href="#">Esqueceu sua senha</a>
                    <p>Não tem uma conta? <a href="#">Cadastre-se</a></p>
                </div>
            </div>
        </StyledLogin>
    )
}