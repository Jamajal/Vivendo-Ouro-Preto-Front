import { StyledCardPontosTuristicos } from "./StyledCardPontosTuristicos";

export default function CardPontosTuristicos() {
    return(
        <StyledCardPontosTuristicos>
            <div style={{ width: '265px', height: '374px', border:'2px solid #D9D9D9', borderRadius: '8px' }}>
                <img src="/src/assets/images/ponto-turistico.png" style={{height: '50%', width: '100%', padding: '0'}}/>
                <h3>Museu da Inconfidência</h3>
                <p>Frase chamativa para chamar a atenção de pessoas para o local</p>
                <button style={{ width: '223px', height: '40px' }}>Ver mais</button>
            </div>
        </StyledCardPontosTuristicos>
    )
}