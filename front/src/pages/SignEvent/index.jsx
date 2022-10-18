import { StyledSignEvent } from './StyledSignEvent';
import Header from '../../components/Header';
import eventImage from '../../assets/images/sign-event.png'

export default function SignEvent(){
    return (
        <StyledSignEvent>
            <Header />
            <div className="sign-event-box">
                <div className="left-side">
                    <img src={eventImage} alt="event image" />
                </div>
                <div className="right-side">
                    <h1>Conte-nos mais sobre esse evento</h1>
                    <h3>É importante informar que nossa plataforma não garante a veracidade do evento, confira com o organizador</h3>
                    <form action="#" method="post">
                        <input type="text" name="owner" placeholder="Nome" />
                        <input type="text" name="adress" placeholder="Endereço" />
                        <input type="date" name="date" />
                        <input type="text" name="description" placeholder="Descrição do lugar" />
                        <div className="working-time">
                            <p>Inicia às</p>
                            <input type="time" name="opening" id="opening" />
                            <p> até </p>
                            <input type="time" name="closing" id="closing" />
                        </div>
                        <input type="submit" value="Cadastrar" />
                    </form>
                </div>
            </div>
        </StyledSignEvent>
    )
}