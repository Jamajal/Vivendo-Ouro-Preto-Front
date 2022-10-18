import styled from 'styled-components'

export const StyledEventsList = styled.section`
    margin: 40px 0 70px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    

    > h2{
        margin-bottom: 20px;

        font-family: 'Montserrat';
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        color: #925946;
    }

    > div{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
    }

    @media (min-width: 768px) and (max-width: 1150px){
        margin: 20px 0 40px 0;

        > h2{
            font-size: 20px;
        }

        > div{
            gap: 20px;
        }
    }

    @media (max-width: 767px){
        margin: 20px 0 40px 0;

        > h2{
            font-size: 16px;
        }

        > div{
            gap: 10px;
        }
    }
`