import styled from 'styled-components'

export const StyledWelcome = styled.section`
    background-image: url("../../images/welcome2.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    height: 100vh;
    display: flex;
    justify-content: flex-end;

    > h1{
        margin-top: 13%;
        margin-right: 5%;
        width: 60%;
        
        font-family: 'Montserrat';
        font-weight: 500;
        font-size: 50px;
        color: #62392B;
        line-height: 49px;  
        text-align: center;
    }
`