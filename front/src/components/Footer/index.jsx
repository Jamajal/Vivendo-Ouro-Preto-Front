import { StyledFooter } from "./StyledFooter";

export default function Footer(){
    return(
        <StyledFooter className="layer">
            <img src="../../images/footer.png" alt="Logo" />
            <div className="creators">
                <div>
                    <p>Leandro Libério</p>
                    <p>(37)998064102</p>
                </div>
                <div>
                    <p>Arthur Silva</p>
                    <p>(31)99233-9913</p>
                </div>
                <div>
                    <p>Rafael Diniz</p>
                    <p>(31)99917-7508</p>
                </div>
                <div>
                    <p>Felipe</p>
                    <p>(31)8635-8142</p>
                </div>
            </div>
        </StyledFooter>
    )
}