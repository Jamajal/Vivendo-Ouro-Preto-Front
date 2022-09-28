import { StyledForms } from "./StyledForms";
import { useState } from 'react';

export default function Forms(){
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ phone, setPhone ] = useState("");
    const [ message, setMessage ] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        console.log(name);
        console.log(email);
        console.log(phone)
        console.log(message);
    }

    return(
        <StyledForms className="layer gap" id="home-form">
            <h2>Nos dê um feedback!</h2>
            <p>Gostou do que viu até então? Quer tirar alguma dúvida ou nos enviar um feedback com críticas e/ou sugestões? Preencha o formulário abaixo e fale com a gente!</p>
            <form action="./" method="post">
                <div className="contact">
                    <div className="contact-fields">
                        <input 
                            type="text" 
                            placeholder="Seu nome" 
                            onChange={e => setName(e.target.value)}
                        />
                        <input 
                            type="email" 
                            placeholder="Seu email" 
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input 
                            type="text" 
                            placeholder="Seu telefone para contato" 
                            onChange={e => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="buttons">
                        <button onClick={e => e.preventDefault()}>Cancelar</button>
                        <input 
                            type="submit" 
                            value="Enviar" 
                            onClick={e => handleSubmit(e)} 
                        />
                    </div>
                </div>
                <input 
                    type="text" 
                    name="Text message" 
                    placeholder="Digite sua mensagem aqui" 
                    onChange={e => setMessage(e.target.value)}
                />
            </form>
        </StyledForms>
    )
}