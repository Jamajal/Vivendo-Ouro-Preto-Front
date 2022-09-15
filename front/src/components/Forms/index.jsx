import { StyledForms } from "./StyledForms";

export default function Forms(){

    return(
        <StyledForms className="layer gap">
            <h2>Nos dê um feedback!</h2>
            <p>Gostou do que viu até então? Quer tirar alguma dúvida ou nos enviar um feedback com críticas e/ou sugestões? Preencha o formulário abaixo e fale com a gente!</p>
            <form action="./" method="post">
                <div className="contact">
                    <div className="contact-fields">
                        <input type="text" placeholder="Seu nome" />
                        <input type="email" placeholder="Seu email" />
                        <input type="text" placeholder="Seu telefone para contato" />
                    </div>
                    <div className="buttons">
                        <button onClick={e => e.preventDefault()}>Cancelar</button>
                        <input type="submit" value="Enviar" onClick={e => e.preventDefault()} />
                    </div>
                </div>
                <input type="text" name="Text message" placeholder="Digite sua mensagem aqui" />
            </form>
        </StyledForms>
    )
}