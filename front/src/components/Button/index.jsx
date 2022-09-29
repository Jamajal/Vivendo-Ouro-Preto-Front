import { StyledButton } from "./StyledButton"
import { Link } from 'react-router-dom';

export default function Button({ text, whereTo }){
    return <Link to={whereTo}><StyledButton>{text}</StyledButton></Link>
}