import Header from '../../components/Header'
import Welcome from '../../components/Welcome'
import EventList from '../../components/EventsList'
import Forms from '../../components/Forms'
import Footer from '../../components/Footer'
import CarouselMoradias from '../../components/CarouselMoradias'

import { StyledHome } from './StyledHome'

export default function Home(){
    return(
        <StyledHome>
            <Header />
            <Welcome /> 
            <EventList />
            <CarouselMoradias />
            {/* <CarouselPontosTuristicos /> */}
            <Forms />
            <Footer />
        </StyledHome>
    )
}