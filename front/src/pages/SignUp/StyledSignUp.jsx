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
        align-items: center;
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

    > .signup-box > .right-side > img{
        width: 100%;
    }

    > .signup-box > .left-side > h2{
        font-family: 'Montaga', serif;
        font-weight: 400;
        font-size: 26px;
        line-height: 32px;
    }

    > .signup-box > .left-side > h3{
        max-width: 85%;
        margin-bottom: 20px;

        text-align: center;
        font-family: 'Montaga', serif;
        font-weight: 400;
        font-size: 16px;
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

    @media (min-width: 768px) and (max-width: 1150px){
        > .signup-box > .left-side > h2{
            font-size: 24px;
            line-height: 28px;
        }

        > .signup-box > .left-side > h3{
            font-size: 14px;
            line-height: 18px;
            margin-bottom: 10px;
        }

        > .signup-box > .left-side > form > input[type="text"],
        > .signup-box > .left-side > form > input[type="password"],
        > .signup-box > .left-side > form > div > input[type="text"]{
            font-size: 12px;
        }

        > .signup-box > .left-side > form,
        > .signup-box > .left-side > form > div{
            gap: 7px;
        }

        > .signup-box > .left-side > form > input[type="submit"]{
            padding: 5px 15px;
            font-size: 12px;
    
        }
    
    }

    @media (max-width: 800px){
        > .signup-box > .right-side{
            display: none;
        }
    }
`