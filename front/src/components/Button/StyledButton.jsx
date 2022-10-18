import styled from 'styled-components';

export const StyledButton = styled.button`
    padding: 10px 15px;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 700;
    background: transparent;
    color: ${props => props.theme === "light" ? "#ff9d7c" : "#925946"};
    border: solid 1px ${props => props.theme === "light" ? "#d37657" : "#925946"};
    cursor: pointer;
    transition: 0.8s;

    :hover{
        background-color: ${props => props.theme === "light" ? "#dd7d5e" : "#925946"};
        color: white;
        border-radius: 10px;
    }

    @media (min-width: 768px) and (max-width: 1150px){
        padding: 7px 12px;
        font-size: 14px;
    }

    @media (max-width: 767px){
        padding: 5px 10px;
        font-size: 12px;
    }
`