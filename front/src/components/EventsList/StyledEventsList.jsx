import styled from 'styled-components'

export const StyledEventsList = styled.section`
    margin: 40px 0 70px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    

    > h2{
        margin-bottom: 5px;

        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        color: #925946;
    }

    > hr{
        margin-bottom: 30px;
        width: 30%;
        height: 2px;
        background: #925946;
    }

    > div{
        width: 100%;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }
`