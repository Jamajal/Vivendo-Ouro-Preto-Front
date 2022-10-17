import { StyledSignAccomodation } from './StyledSignAccomodation'
import Header from '../../components/Header'
import accomodationImage from '../../assets/images/sign-accomodation.png'

export default function SignAccomodation(){
    return(
        <StyledSignAccomodation>
            <Header />
            <div className="sign-accomodation-box">
                <div className="left-side">
                    <img src={accomodationImage} alt="house image" />
                </div>
                <div className="right-side">
                    <h1>Conte-nos mais sobre sua hospedagem</h1>
                    <h3>É importante informar que nossa plataforma não participará da negociação, apenas da divulgação</h3>
                    <form action="#" method="post">
                        <input type="text" name="owner" placeholder="Nome do dono" />
                        <input type="text" name="adress" placeholder="Endereço" />
                        <input type="number" name="spaces" placeholder="Quantidade de vagas" min="1" />
                        <input type="text" name="phone" placeholder="Telefone" />
                        <input type="text" name="description" placeholder="Descrição do lugar" />
                        <input type="submit" value="Cadastrar" />
                    </form>
                </div>
            </div>
        </StyledSignAccomodation>
    )
}