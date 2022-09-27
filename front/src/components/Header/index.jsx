import { StyledHeader } from './StyledHeader'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo2.png'

export default function Header(){

    return(
        <StyledHeader className="layer">
            <Link to="/"><img src={logo} alt="Logo"></img></Link>
            <nav>
                <a href="#">Quem somos?</a>
                <a href="#">Eventos</a>
                <a href="#">Atrações</a>
                <a href="#">Alojamentos</a>
            </nav>
            <div className="login">
                <div className="logged">

                </div>
                <div className="not-logged">
                    <div className="visor" />
                    <Link to="/login">Login</Link>
                    <Link to="/sign-in">Sign in</Link>
                </div>
            </div>
        </StyledHeader>
    )
}