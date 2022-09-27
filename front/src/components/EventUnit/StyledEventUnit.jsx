import styled from 'styled-components'

export const StyledUnit = styled.div`
    height: 230px;
    width: 400px;
    padding: 20px;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 30px;

    
    background-size: cover;
    background-repeat: no-repeat;

    border-radius: 8px;

    > label{
        text-align: center;
        width: 65px;

        font-size: 14px;
        font-weight: 700;
        color: white;
        padding: 5px 12px;
        background-color: #E7936E;
        border-radius: 5px;
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
        max-width: 70%;

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
`