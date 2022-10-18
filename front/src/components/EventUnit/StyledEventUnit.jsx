import styled from 'styled-components'

export const StyledUnit = styled.div`
    height: 230px;
    width: 400px;
    padding: 20px;
    position: relative;

    background-size: cover;
    background-repeat: no-repeat;

    border-radius: 8px;
    transition: 0.5s;

    > .info{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    > .info > div > h2{
        max-width: 70%;

        z-index: 1;

        font-family: 'Merriweather';
        font-weight: 700;
        font-size: 28px;
        line-height: 38px;
        color: white;
    }

    > .info > div{
        margin-top: 10px;

        display: flex;
        justify-content: space-between;
        align-items: center;

        color: #DFDFDF;
    }

    > .info > div > p{
        max-width: 80%;

        z-index: 1;

        font-family: 'Merriweather';
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }

    > .dark-layer{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 67%;
        
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.87) 100%);
        border-radius: 8px;
    }

    @media (min-width: 768px) and (max-width: 1150px){
        height: 200px;
        width: 350px;
        padding: 15px;

        > .info > div > h2{
            font-size: 24px;
            line-height: 20px;
        }

        > .info > div > p{
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
        }
    }

    @media (max-width: 767px){
        height: 150px;
        width: 350px;
        padding: 15px;

        > .info > div > h2{
            max-width: 100%;
            font-size: 14px;
            line-height: 16px;
        }

        > .info > div > p{
            display: none;
        }
    }
`