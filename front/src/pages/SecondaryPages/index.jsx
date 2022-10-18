import { StyledSecondaryPages } from './StyledSecondaryPages'
import Header from '../../components/Header'
import CardsGeneral from '../../components/CardsGeneral'
import { Link } from 'react-router-dom';

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
                        <Link to={props.link}>
                            <button className="btn-add">+</button>
                        </Link>
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