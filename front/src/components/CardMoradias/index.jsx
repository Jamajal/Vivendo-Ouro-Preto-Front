import { StyledCardMoradias } from "./StyledCardMoradias";

export default function CardMoradias() {
    return(
        <StyledCardMoradias>
            <div style={{height: '321px', backgroundColor: '#EBDFD4', borderRadius: '8px', paddingBottom: '5px' }}>
                <img src="/src/assets/images/moradia.jpg" style={{maxHeight: '80%', padding: '12px', borderRadius: '18px'}}/>
                <p>Endereço: Rua Jovelino Mineiro 149</p>
                <p>Bairro: Vila Operaria</p>
                <p>Vagas: 3 vagas</p>
            </div>
        </StyledCardMoradias>
    )
}