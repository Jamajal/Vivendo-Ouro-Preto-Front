import { StyledSignAttraction } from './StyledSignAttraction'
import Header from '../../components/Header';

import attractionImage from '../../assets/images/sign-attraction.png'

export default function SignAttraction(){
    return(
        <StyledSignAttraction>
            <Header />
            <div className="sign-attraction-box">
                <div className="left-side">
                    <img src={attractionImage} alt="attraction image" />
                </div>
                <div className="right-side">
                    <h1>Conte-nos mais sobre esse ponto turístico</h1>
                    <h3>É importante informar que nossa plataforma não garante que o ponto turístico ainda está ativo</h3>
                    <form action="#" method="post">
                        <input type="text" name="owner" placeholder="Nome" />
                        <input type="text" name="adress" placeholder="Endereço" />
                        <input type="number" name="cost" placeholder="Valor R$" />
                        <input type="text" name="description" placeholder="Descrição" />
                        <div className="working-time">
                            <p>Abre</p>
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