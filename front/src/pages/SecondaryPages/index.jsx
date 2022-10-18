import { StyledSecondaryPages } from './StyledSecondaryPages'
import Header from '../../components/Header'
import CardsGeneral from '../../components/CardsGeneral'

export default function SecondaryPages(props){
    return(
        <StyledSecondaryPages>
            <Header />
            <div className="page-container">
                <div className="lateral-img">
                    <img src={props.img} />
                </div>
                <div className="container-cards">
                    <div className="title">
                        <h2>{props.title}</h2>
                        <button className="btn-add">+</button>
                    </div>

                    <div className="cards-list">
                        <CardsGeneral />
                        <CardsGeneral />
                        <CardsGeneral />
                        <CardsGeneral />
                    </div>
                </div>
            </div>
        </StyledSecondaryPages>
    )
}