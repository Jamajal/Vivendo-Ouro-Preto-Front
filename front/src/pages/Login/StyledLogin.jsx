import styled from 'styled-components'

export const StyledLogin = styled.section`
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    > .login-box{
        width: 50%;
        padding: 15px;

        display: flex;
        gap: 20px;

        background-color: #FFFBFA;
        border-radius: 20px;
    }

    > .login-box > .left-side{
        width: 100%;;
    }

    > .login-box > .left-side > img{
        width: 100%;
    }

    > .login-box > .right-side{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    > .login-box > .right-side > h2{
        font-family: 'Montaga', serif;
        font-weight: 400;
        font-size: 30px;
        line-height: 37px;
    }

    > .login-box > .right-side > h3{
        margin-bottom: 10px;

        font-family: 'Montaga', serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 20px;
    }

    > .login-box > .right-side > form{
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }

    > .login-box > .right-side > form > input[type="text"],
    > .login-box > .right-side > form > input[type="password"]{
        width: 80%;
        margin: 5px 0;
        padding: 5px 10px;

        background-color: #e7e7e7;

        border: none;
        border-radius: 10px;
    }

    > .login-box > .right-side > form > input[type="submit"]{
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

    .layer{
        padding-left: 120px;
        padding-right: 120px;
    }

    a{
        text-weight: 700;
        color: #81807f;
        text-decoration: none;
    }

    a:hover{
        text-shadow: 0 0 5px #919191;
    }

    .error{
        color: red;
    }

    @media (min-width: 768px) and (max-width: 1150px){
        > .login-box > .right-side > h2{
            font-size: 26px;
            line-height: 28px; 
        }

        > .login-box > .right-side > h3{
            font-size: 14px;
            line-height: 20px;
        }

        > .login-box > .right-side > form > input[type="text"],
        > .login-box > .right-side > form > input[type="password"]{
            width: 80%;
            margin: 3px 0;
            padding: 4px 8px;
            font-size: 12px;
        }

        > .login-box > .right-side > form > input[type="submit"]{
            margin: 8px 0;
            padding: 5px 15px;
    
            font-size: 14px;
        }

        a, p{
            font-size: 12px;
        }
    }

    @media (max-width: 800px){
        > .login-box > .left-side{
            display: none;
        }

        > .login-box > .right-side > h2{
            font-size: 26px;
            line-height: 28px; 
        }

        > .login-box > .right-side > h3{
            font-size: 14px;
            line-height: 20px;
        }

        > .login-box > .right-side > form > input[type="text"],
        > .login-box > .right-side > form > input[type="password"]{
            width: 80%;
            margin: 3px 0;
            padding: 4px 8px;
            font-size: 12px;
        }

        > .login-box > .right-side > form > input[type="submit"]{
            margin: 8px 0;
            padding: 5px 15px;
    
            font-size: 14px;
        }

        a, p{
            font-size: 12px;
        }
    }
`