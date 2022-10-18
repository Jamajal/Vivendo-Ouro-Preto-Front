import { StyledCardEvents } from './StyledCardEvents'
import eventImg from '../../assets/images/fundoevento1.png'

export default function CardEvents(){
    return(
        <StyledCardEvents>
            <div className="card-container">
                <img src={eventImg} alt="" />
                <strong>Nome</strong>
                <p>Endereço</p>
                <p>Horário de funcionamento</p>
            </div>
        </StyledCardEvents>
    )
}