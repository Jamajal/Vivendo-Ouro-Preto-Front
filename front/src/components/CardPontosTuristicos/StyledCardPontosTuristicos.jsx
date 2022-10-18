import styled from "styled-components";

export const StyledCardPontosTuristicos = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    width: 100%; 

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        text-align: center;
        
        width: 100%; 
        height: 374px;
        padding-bottom: 10px;

        border:2px solid #D9D9D9; 
        border-radius: 8px;

        > img{
            width: 100%; 
        }
        
        > button {
            width: 62%;
            padding: 10px 0;
            background: none;
            border-radius: 8px;
            border: 2px solid #D9D9D9;
        }
    }

    @media (min-width: 768px) and (max-width: 1150px){
        > div{
            height: 340px;
        }

        > div > h3,
        > div > p{
            padding: 0 10px;
        }
    }
  
     @media (max-width: 767px){
        > div{
            height: 280px;
            gap: 5px;
        }

        > div > h3,
        > div > p{
            padding: 0 10px;
        }

        > div > h3{
            font-size: 16px;
        }

        > div > p{
            font-size: 12px;
        }
    }
`