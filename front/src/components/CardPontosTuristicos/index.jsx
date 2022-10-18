import { StyledCardPontosTuristicos } from "./StyledCardPontosTuristicos";

export default function CardPontosTuristicos() {
    return(
        <StyledCardPontosTuristicos>
            <div>
                <img src="/src/assets/images/ponto-turistico.png" style={{height: '50%', width: '100%', padding: '0'}}/>
                <h3>Museu da Inconfidência</h3>
                <p>Frase chamativa para chamar a atenção de pessoas para o local</p>
                <button>Ver mais</button>
            </div>
        </StyledCardPontosTuristicos>
    )
}