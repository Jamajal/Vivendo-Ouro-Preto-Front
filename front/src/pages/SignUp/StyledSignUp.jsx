import styled from 'styled-components'

export const StyledSignUp = styled.section`
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    > .signup-box{
        width: 50%;
        padding: 15px;

        display: flex;
        gap: 20px;

        background-color: #FFFBFA;
        border-radius: 20px;
    }

    > .signup-box > .left-side{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    > .signup-box > .right-side{
        width: 100%;
    }

    > .signup-box > .left-side > h2{
        font-family: 'Montaga', serif;
        font-weight: 400;
        font-size: 30px;
        line-height: 37px;
    }

    > .signup-box > .left-side > h3{
        max-width: 85%;
        margin-bottom: 20px;

        text-align: center;
        font-family: 'Montaga', serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
    }


    > .signup-box > .left-side > form,
    > .signup-box > .left-side > form > div{
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    > .signup-box > .left-side > form > input[type="text"],
    > .signup-box > .left-side > form > input[type="password"],
    > .signup-box > .left-side > form > div > input[type="text"]{
        width: 80%;
        padding: 5px 10px;

        background-color: #e7e7e7;

        border: none;
        border-radius: 10px;
    }

    > .signup-box > .left-side > form > input[type="submit"]{
        padding: 5px 20px;

        font-size: 16px;
        font-weight: 700;
        color: white;

        background-color: #202020;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }

    .error{
        color: red;
    }

    .layer{
        padding-left: 120px;
        padding-right: 120px;
    }

    .gap{
        margin-top: 30px;
    }
`