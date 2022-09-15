import Header from '../../components/Header'
import Welcome from '../../components/Welcome'

import { StyledHome } from './StyledHome'


export default function Home(){
    return(
        <StyledHome>
            <Header />
            <Welcome />
            
        </StyledHome>
    )
}