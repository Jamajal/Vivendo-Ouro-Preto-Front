import styled from 'styled-components';

export const StyledSignEvent = styled.section`
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .sign-event-box{
        width: 55%;
        padding: 20px;
        
        display: flex;
        align-items: center;
        gap: 20px;

        background-color: #FFFBFA;
        border-radius: 20px;

        transform: translateY(30px);
    }

    .sign-event-box > .left-side{
        width: 100%;
    }

    .sign-event-box > .left-side > img{
        width: 100%;
    }

    .sign-event-box > .right-side{
        width: 100%;
        height: 100%;
        
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        gap: 15px;
    }

    .sign-event-box > .right-side > h1{
        font-family: 'Montaga';
        font-weight: 400;
        font-size: 35px;
        line-height: 37px;
        text-align: center;
    }

    .sign-event-box > .right-side > h3{
        font-family: 'Montaga';
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
    }

    .sign-event-box > .right-side > form{
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .sign-event-box > .right-side > form > input[type="text"],
    .sign-event-box > .right-side > form > input[type="number"]{
        width: 90%;
        margin: 5px 0;
        padding: 5px 10px;

        background-color: #e7e7e7;
        border: none;
        border-radius: 10px;
    }

    .sign-event-box > .right-side > form > input[type="date"]{
        width: 90%;
        margin: 5px 0;
        padding: 5px 10px;
        
        background-color: #e7e7e7;
        border: none;
        border-radius: 10px;
    }

    .sign-event-box > .right-side > form > input[type="submit"]{
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

    .sign-event-box > .right-side > form > .working-time{
        width: 90%;
        margin: 5px 0;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 10px;
        background-color: #e7e7e7;
        border-radius: 12px;
    }

    .sign-event-box > .right-side > form > .working-time > input{
        font-size: 14px;
        padding: 3px 0px;
        background-color: #e7e7e7;
        border: none;
        cursor: pointer;
    }
`