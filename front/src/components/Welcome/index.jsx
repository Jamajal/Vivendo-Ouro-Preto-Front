import { StyledWelcome } from "./StyledWelcome";

//Ainda não coloquei a font montserrat

export default function Welcome(){
    return(
        <StyledWelcome className="layer gap">
            <img src="../../images/op.png" alt="Imagem de Ouro Preto" />
            <h1>Gostaria de ficar por dentro de tudo que é interessante em Ouro Preto?</h1> 
        </StyledWelcome>
    )
}