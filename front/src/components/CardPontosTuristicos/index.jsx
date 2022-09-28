import { StyledCardPontosTuristicos } from "./StyledCardPontosTuristicos";

export default function CardPontosTuristicos() {
    return(
        <StyledCardPontosTuristicos>
            <div style={{ width: '265px', height: '374px', backgroundColor: '#D9D9D9', borderRadius: '8px', borderColor: 'black' }}>
                <img src="/src/assets/images/ponto-turistico.png" style={{height: '50%', padding: '0', borderRadius: '18px'}}/>
                <h3>Museu da Inconfidência</h3>
                <p>Frase chamativa para chamar a atenção de pessoas para o local</p>
                <button type="button" style={{ width: '223px', height: '40px' }}>Ver mais</button>
            </div>
        </StyledCardPontosTuristicos>
    )
}