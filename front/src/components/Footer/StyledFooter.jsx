import styled from "styled-components"

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    padding: 30px 0;

    background-color: #EBDFD4;
    color: #925946;

    > img{
        width: 160px;
    }

    > .creators{
        display: flex;
        gap: 50px;
    }

    > .creators > div{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`