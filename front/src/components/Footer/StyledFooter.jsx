import styled from "styled-components"

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 70px;

    padding: 30px 0;

    background-color: #EBDFD4;
    color: #925946;

    > img{
        width: 160px;
    }

    > .creators{
        display: flex;
        gap: 50px;
    }

    > .creators > div{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }

    @media (min-width: 768px) and (max-width: 1150px){
        gap: 50px;

        > img{
            width: 120px;
        }

        .creators{
            gap: 40px;
        }

        .creators > div > p{
            font-size: 12px;
        }
     }
  
     @media (max-width: 767px){
        gap: 30px;

        > img{
            width: 90px;
        }

        .creators{
            gap: 30px;
        }

        .creators > div > p{
            text-align: center;
            font-size: 12px;
        }

        .email{
            display: none;
        }
     }
`