import { StyledHeader } from './StyledHeader';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import logo from '../../assets/images/logo2.png';
import profile from '../../assets/images/profile.png';

export default function Header(){
    const { signed, signout, user } = useAuth();

    const IsLogged = () => {
        if(signed)
            return(
                <div className="logged">
                    <div className="profile">
                        <img src={profile} alt="profile" />
                        <label onClick={() => signout()}>Logout</label>
                    </div>
                    
                </div>
            )

        return(
            <div className="not-logged">
                <div className="visor off" />
                <Link to="/login" className="login">Entrar</Link>
                <Link to="/sign-up">Cadastrar</Link>
            </div>
        )
    }

    return(
        <StyledHeader>
            <Link to="/"><img src={logo} alt="Logo"></img></Link>
            <nav>
                <Link to="/events">Eventos</Link>
                <Link to="/attractions">Atrações</Link>
                <Link to="/accomodations">Alojamentos</Link>
            </nav>
            <div className="login">
                {<IsLogged />}           
            </div>
        </StyledHeader>
    )
}