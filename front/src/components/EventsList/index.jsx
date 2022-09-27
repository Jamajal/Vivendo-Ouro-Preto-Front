import { StyledEventsList } from "./StyledEventsList";

import EventUnit from '../EventUnit'
import backgroundEvent1 from '../../assets/images/fundoevento1.png'
import backgroundEvent2 from '../../assets/images/fundoevento2.png'

export default function EventList(){
    const data = [
        {
            tag: "Balada",
            title: "Open Love",
            subtitle: "Uma festa que você nunca vai esquecer",
            date: "16/11/2022",
            imgUrl: backgroundEvent2 
        },
        {
            tag: "Fino",
            title: "Aniversário Passo",
            subtitle: "As melhores pizzas da cidade por metade do preço",
            date: "28/12/2022",
            imgUrl: backgroundEvent1
        }
    ]

    return(
        <StyledEventsList className="layer gap">
            <h2>Próximos eventos</h2>
            <hr />
            <div>
                <EventUnit props={data[0]} />
                <EventUnit props={data[1]} />
            </div>
        </StyledEventsList>
    )
}