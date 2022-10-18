import styled from "styled-components";

export const StyledCardMoradias = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    width: 100%;
    

    > div {
        text-align: center;
        height: 321px;
        width: auto;
        background-color: #EBDFD4;
        border-radius: 8px;
        padding-bottom: 5px;
    }

    > div > img{
        max-height: 80%; 
        padding: 12px; 
        border-radius: 18px;
    }

    @media (min-width: 768px) and (max-width: 1150px){
        > div {
            width: 100%;
            height: auto;
        }

        > div >img{
            width: 100%;
        }
    }
  
    @media (max-width: 767px){
        > div {
            width: 100%;
            height: auto;
        }

        > div >img{
            width: 100%;
        }
    }
`