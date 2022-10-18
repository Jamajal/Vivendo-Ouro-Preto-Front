import { StyledSignAttraction } from './StyledSignAttraction'
import Header from '../../components/Header';

import attractionImage from '../../assets/images/sign-attraction.png'

export default function SignAttraction(){
    return(
        <StyledSignAttraction>
            <Header />
            <div className="sign-attraction-box">
                <div className="left-side">
                    <img src={attractionImage} alt="house image" />
                </div>
                <div className="right-side">
                    <h1>Conte-nos mais sobre sua hospedagem</h1>
                    <h3>É importante informar que nossa plataforma não participará da negociação, apenas da divulgação</h3>
                    <form action="#" method="post">
                        <input type="text" name="owner" placeholder="Nome" />
                        <input type="text" name="adress" placeholder="Endereço" />
                        <input type="text" name="phone" placeholder="Telefone" />
                        <input type="text" name="description" placeholder="Descrição do lugar" />
                        <div className="working-time">
                            <p>Abre às</p>
                            <input type="time" name="opening" id="opening" />
                            <p> até </p>
                            <input type="time" name="closing" id="closing" />
                        </div>
                        <input type="submit" value="Cadastrar" />
                    </form>
                </div>
            </div>
        </StyledSignAttraction>
    )
}