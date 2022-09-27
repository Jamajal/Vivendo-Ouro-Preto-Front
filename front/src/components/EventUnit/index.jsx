import { StyledUnit } from "./StyledEventUnit";

export default function EventUnit({ props }){

    return (
        <StyledUnit style={{backgroundImage: "url(" + props.imgUrl + ")"}}>
            <label className="tag">{props.tag}</label>
            <div className="info">
                <div>
                    <h2>{props.title}</h2>
                </div>
                <div>
                    <p>{props.subtitle}</p>
                    <p>{props.date}</p>
                </div>
            </div>
            <div className="dark-layer" />
        </StyledUnit>
    )
}