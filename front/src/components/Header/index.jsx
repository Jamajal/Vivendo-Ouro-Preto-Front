import { StyledHeader } from './StyledHeader';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import logo from '../../assets/images/logo2.png';

export default function Header(){
    const { signed, signout, user } = useAuth();

    const IsLogged = () => {
        if(signed)
            return(
                <div className="logged">
                    <div className="visor on" />
                    <div className="profile">
                        <label onClick={() => signout()}>{user.email}</label>
                    </div>
                    
                </div>
            )

        return(
            <div className="not-logged">
                <div className="visor off" />
                <Link to="/login" className="login">Entrar</Link>
                <Link to="/sign-up">Criar Conta</Link>
            </div>
        )
    }

    return(
        <StyledHeader>
            <Link to="/"><img src={logo} alt="Logo"></img></Link>
            <nav>
                <a href="#">Quem somos?</a>
                <a href="#">Eventos</a>
                <a href="#">Atrações</a>
                <a href="#">Alojamentos</a>
            </nav>
            <div className="login">
                {<IsLogged />}           
            </div>
        </StyledHeader>
    )
}