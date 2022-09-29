import { StyledButton } from "./StyledButton"
import { Link } from 'react-router-dom';

export default function Button({ text, whereTo, theme }){
    return <Link to={whereTo}><StyledButton theme={theme}>{text}</StyledButton></Link>
}