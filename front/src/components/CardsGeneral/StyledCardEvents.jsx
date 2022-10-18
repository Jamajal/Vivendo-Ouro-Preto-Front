import styled from 'styled-components'

export const StyledCardEvents = styled.section`
    .card-container {
        width: 210px;
        height: 100%;
        border-radius: 12px;
        margin: 12px;

        > img {
            max-width: 100%;
        }
    }

    @media (min-width: 768px) and (max-width: 1150px){
        .card-container{
            width: 130px;
        }
    }
  
    @media (max-width: 767px){
        .card-container{
            width: 160px;
        }
    }
`