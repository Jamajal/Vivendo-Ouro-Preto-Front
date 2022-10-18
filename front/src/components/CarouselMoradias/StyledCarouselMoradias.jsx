import styled from "styled-components";

export const StyledCarouselMoradias = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #5A4940;
    width: 100%;
    padding-top: 4%;
    padding-bottom: 4%;
        
    > h2 {
        color: white;
        margin-bottom: 2%;
    }

    @media (min-width: 768px) and (max-width: 1150px){
        > h2{
            text-align: center;
            font-size: 24px;
        }
    }
  
     @media (max-width: 767px){
        > h2{
            text-align: center;
            font-size: 16px;
        }
    }
`