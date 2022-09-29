import styled from "styled-components";

export const StyledCardPontosTuristicos = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    width: 265px;

    > div {
        text-align: center;

        > h3, > p {
            margin: 20px;
        }
        
        > button {
            background: none;
            border-radius: 8px;
            border: 2px solid #D9D9D9;
        }
    }
`