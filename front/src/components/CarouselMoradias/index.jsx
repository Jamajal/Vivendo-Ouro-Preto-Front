import { StyledCarouselMoradias } from "./StyledCarouselMoradias";

import Carousel from "better-react-carousel";
import CardMoradias from "../CardMoradias";

export default function CarouselMoradias() {
    return (
        <StyledCarouselMoradias className="layer"> 
            <h2>Encontre locais para ficar por alguns dias ou moradias fixas para períodos maiores</h2>
            <div style={{ justifyContent: 'center', width: '80%', alignItems: 'center'}}>
                <Carousel cols={2} loop>
                    <Carousel.Item style={{ width: '390px' }}>
                        <CardMoradias />
                    </Carousel.Item>
                    <Carousel.Item style={{ width: '390px' }}>
                        <CardMoradias />
                    </Carousel.Item>
                    <Carousel.Item style={{ width: '390px' }}>
                        <CardMoradias />
                    </Carousel.Item>
                    <Carousel.Item style={{ width: '390px' }}>
                        <CardMoradias />
                    </Carousel.Item>
                    <Carousel.Item style={{ width: '390px' }}>
                        <CardMoradias />
                    </Carousel.Item>
                    <Carousel.Item style={{ width: '390px' }}>
                        <CardMoradias />
                    </Carousel.Item>
                </Carousel>
            </div>
        </StyledCarouselMoradias>
    )
}