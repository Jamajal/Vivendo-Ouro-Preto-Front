import styled from 'styled-components'

export const StyledHome = styled.div`
    .layer{
        padding-left: 120px;
        padding-right: 120px;
    }

    .gap{
        margin-top: 50px;
    }

    @media (min-width: 768px) and (max-width: 1150px){
        .layer{
            padding-left: 80px
            padding-right: 80px;
        }

        .gap{
            margin-top: 40px;
        }
    }

    @media (max-width: 767px){
        .layer{
            padding-left: 40px
            padding-right: 40px;
        }

        .gap{
            margin-top: 30px;
        }
    }
`