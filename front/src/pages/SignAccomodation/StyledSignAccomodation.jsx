import styled from 'styled-components'

export const StyledSignAccomodation = styled.section`
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .sign-accomodation-box{
        width: 55%;
        padding: 20px;
        
        display: flex;
        align-items: center;
        gap: 20px;

        background-color: #FFFBFA;
        border-radius: 20px;

        transform: translateY(30px);
    }

    .sign-accomodation-box > .left-side{
        width: 100%;
    }

    .sign-accomodation-box > .left-side > img{
        width: 100%;
    }
    
    .sign-accomodation-box > .right-side{
        width: 100%;
        height: 100%;
        
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 15px;
    }

    .sign-accomodation-box > .right-side > h1{
        font-family: 'Montaga';
        font-weight: 400;
        font-size: 27px;
        line-height: 32px;
        text-align: center;
    }

    .sign-accomodation-box > .right-side > h3{
        font-family: 'Montaga';
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
    }

    .sign-accomodation-box > .right-side > form{
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .sign-accomodation-box > .right-side > form > input[type="text"],
    .sign-accomodation-box > .right-side > form > input[type="number"]{
        width: 90%;
        margin: 5px 0;
        padding: 5px 10px;

        background-color: #e7e7e7;

        border: none;
        border-radius: 10px;
    }

    .sign-accomodation-box > .right-side > form > label{
        color: red;
    }

    .sign-accomodation-box > .right-side > form > input[type="submit"]{
        margin: 10px 0;
        padding: 5px 20px;

        font-size: 16px;
        font-weight: 700;
        color: white;

        background-color: #202020;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }

    @media (min-width: 768px) and (max-width: 1150px){
        .sign-accomodation-box{
            width: 65%;
        }

        .sign-accomodation-box > .left-side{
            width: 100%;
        }

        .sign-accomodation-box > .right-side{
            gap: 10px;
        }

        .sign-accomodation-box > .right-side > h1{
            font-size: 22px;
            line-height: 22px;
        }

        .sign-accomodation-box > .right-side > h3{
            font-size: 14px;
            line-height: 16px;
        }

        .sign-accomodation-box > .right-side > form > input[type="text"],
        .sign-accomodation-box > .right-side > form > input[type="number"]{
            font-size: 12px;
        }

        .sign-accomodation-box > .right-side > form > .working-time{
            gap: 5px;
        }

        .sign-accomodation-box > .right-side > form > .working-time > input{
            font-size: 12px;
        }
    }

    @media (max-width: 800px){
        .sign-accomodation-box{
            width: 65%;
        }

        .sign-accomodation-box > .left-side{
            display: none;
        }

        .sign-accomodation-box > .right-side{
            gap: 10px;
        }

        .sign-accomodation-box > .right-side > h1{
            font-size: 22px;
            line-height: 22px;
        }

        .sign-accomodation-box > .right-side > h3{
            font-size: 14px;
            line-height: 16px;
        }

        .sign-accomodation-box > .right-side > form > input[type="text"],
        .sign-accomodation-box > .right-side > form > input[type="number"]{
            font-size: 12px;
        }

        .sign-accomodation-box > .right-side > form > .working-time{
            gap: 5px;
        }

        .sign-accomodation-box > .right-side > form > .working-time > input{
            font-size: 12px;
        }

        .sign-accomodation-box > .right-side > form > label{
            font-size: 12px;
        }
    }
`