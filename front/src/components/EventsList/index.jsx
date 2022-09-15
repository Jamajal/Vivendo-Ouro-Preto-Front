import { StyledEventsList } from "./StyledEventsList";

import EventUnit from '../EventUnit'

export default function EventList(){
    return(
        <StyledEventsList className="layer gap">
            <h2>Eventos</h2>
            <div>
                <EventUnit />
                <EventUnit />
                <EventUnit />
                <EventUnit />
            </div>
        </StyledEventsList>
    )
}