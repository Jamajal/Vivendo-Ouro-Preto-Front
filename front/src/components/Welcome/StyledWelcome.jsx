import styled from 'styled-components'

import background from '../../assets/images/welcome2.svg'

export const StyledWelcome = styled.section`
    background-image: url(${background});
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

    @media (min-width: 768px) and (max-width: 1150px){
        h1{
            font-size: 40px;
            transform: translateY(20px);
        }
    }

    @media (max-width: 767px){
        justify-content: center;

        h1{
            font-size: 40px;
            transform: translateY(20px);
        }
    }
`