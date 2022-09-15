import { StyledHeader } from './StyledHeader'

export default function Header(){

    return(
        <StyledHeader className="layer">
            <img src="../../images/logo.png" alt="Logo" />
            <nav>
                <a href="#">Quem somos?</a>
                <a href="#">Eventos</a>
                <a href="#">Atrações</a>
                <a href="#">Alojamentos</a>
            </nav>
        </StyledHeader>
    )
}