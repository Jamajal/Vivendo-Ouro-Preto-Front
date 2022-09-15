import styled from 'styled-components'

export const StyledForms = styled.section`
    display: flex;
    flex-direction: column;
    gap: 15px;

    padding: 40px 0;

    background-color: #5A4940;
    color: white;

    > h2{
        font-weight: 600;
        font-size: 32px;
    }

    > p{
        font-weight: 400;
        font-size: 18px;
    }

    > form{
        display: flex;
        gap: 50px;
        height: 250px;
    }

    > form > input{
        height: 100%;
    }

    .contact{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    
    .contact-fields{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .buttons{
        display: flex;
        justify-content: flex-end;
        gap: 20px;
    }

    .buttons > button{
        width: 80px;
        padding: 10px;
        background: none;
        color: white;
        border: 1px solid #FFFFFF;
        border-radius: 5px;
        cursor: pointer;
    }

    .buttons > input{
        width: 80px;
        padding: 10px;
        color: #5A4940;
        background-color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
    
    .contact-fields > input,
    > form > input{
        width: 400px;
        padding: 3px 10px;
        
        weight: 600;
        font-size: 14px;
        
        color: #967F73;
        background: #D9D9D9;
        border: none;
        border-radius: 5px;
    }

    > form > input{
        width: 100%;
    }
    `