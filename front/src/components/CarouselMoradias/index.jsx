import { StyledCarouselMoradias } from "./StyledCarouselMoradias";

import Carousel from "better-react-carousel";
import CardMoradias from "../CardMoradias";
import Button from '../Button';

export default function CarouselMoradias() {
    return (
        <StyledCarouselMoradias className="layer"> 
            <h2>Encontre locais para ficar por alguns dias ou moradias fixas para períodos maiores</h2>
            <div style={{ justifyContent: 'center', width: '80%', alignItems: 'center'}}>
                <Carousel cols={2} loop hideArrow autoplay={3000}>
                    <Carousel.Item>
                        <CardMoradias />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardMoradias />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardMoradias />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardMoradias />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardMoradias />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardMoradias />
                    </Carousel.Item>
                </Carousel>
            </div>
            <Button 
                text="Ver todos"
                whereTo="#"
                theme="light"
            />
        </StyledCarouselMoradias>
    )
}