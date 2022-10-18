import { StyledCarouselPontosTuristicos } from "./StyledCarouselPontosTuristicos";

import Carousel from "better-react-carousel";
import CardPontosTuristicos from "../CardPontosTuristicos";
import Button from '../Button';

export default function CarouselMoradias() {
    return (
        <StyledCarouselPontosTuristicos className="layer"> 
            <h2>Encontre locais para ficar por alguns dias ou moradias fixas para períodos maiores</h2>
            <div>
                <Carousel cols={2} loop hideArrow autoplay={5000}>
                    <Carousel.Item>
                        <CardPontosTuristicos />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardPontosTuristicos />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardPontosTuristicos />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardPontosTuristicos />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardPontosTuristicos />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardPontosTuristicos />
                    </Carousel.Item>
                </Carousel>
            </div>
            <Button
                text="Ver Todos"
                whereTo="#"
                theme="dark"
            />
        </StyledCarouselPontosTuristicos>
    )
}