import styled from "styled-components";

export const StyledCarouselPontosTuristicos = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 4%;
    padding-bottom: 4%;

    > div{
        justify-content: center;
        width: 78%; 
        align-items: center;
    }

    > h2 {
        text-align: center;
        margin-bottom: 3rem;
    }

    @media (min-width: 768px) and (max-width: 1150px){
        > h2{
            font-size: 24px;
            margin-bottom: 1.5rem;
        }
    }
  
     @media (max-width: 767px){
        > h2{
            font-size: 18px;
            margin-bottom: 1.5rem;
        }
    }
`