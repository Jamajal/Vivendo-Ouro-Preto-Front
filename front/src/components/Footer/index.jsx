import { StyledFooter } from "./StyledFooter";

import logo from '../../assets/images/footer.png'

export default function Footer(){
    return(
        <StyledFooter className="layer">
            <img src={logo} alt="Logo" />
            <div className="creators">
                <div>
                    <p>Arthur Silva</p>
                    <p className="email">arthusil18@hotmail.com</p>
                </div>
                <div>
                    <p>Felipe</p>
                    <p className="email">sasdelli.pi@gmail.com</p>
                </div>
                <div>
                    <p>Leandro Libério</p>
                    <p className="email">leandroliberiomachado@hotmail.com</p>
                </div>
                <div>
                    <p>Rafael Diniz</p>
                    <p className="email"> rafaelddniz@gmail.com</p>
                </div>
            </div>
        </StyledFooter>
    )
}