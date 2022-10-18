import styled from 'styled-components'

export const StyledSecondaryPages = styled.section`
    height: 100vh;

    .page-container {
        margin-bottom: 0;
        width: 100%;
        height: 100%;
        
        display: flex;
        background-color: #FFFBFA;
        
        > .lateral-img {
            width: 100%;
            height: 100%;
            display: flex;

            > img{
                width: 100%;
                height: 100%;
            }
        }

        
        > .container-cards {
            padding: 5%;
        }
    }

    .container-cards {
        margin-top: 30px;
        height: 600px;
        width: 100%;
        overflow: auto;
    }

    .cards-list {
        width: 100%;
        margin-top: 24px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }

    .title {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 36px;

        > h2{
            text-align: center;
        }
    }

    .btn-add {
        width: 40px;
        height: 40px;
        color: #925946;
        border: 1px solid #EBDFD4;
        border-radius: 10px;
        text-decoration: none;
        text-align: center;
        font-size: 20px;
    }

    .btn-add:hover {
        background-color: #925946;
        color: white;
        cursor: pointer;
        transition: all 0.6s ease;
    }

    @media (min-width: 768px) and (max-width: 1150px){
        .title{
            gap: 20px;

            > h2{
                font-size: 22px;
            }

            .btn-add{
                width: 30px;
                height: 30px;
            }
        }

        .container-cards {
            margin-top: 40px;
        }
    }
  
    @media (max-width: 767px){
        .title{
            gap: 20px;

            > h2{
                font-size: 22px;
            }

            .btn-add{
                width: 30px;
                height: 30px;
            }
        }

        .page-container > .lateral-img{
            display: none;
        }

        .container-cards {
            margin-top: 40px;
        }
    }
`