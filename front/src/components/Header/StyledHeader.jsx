import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    top: 0;
    position: fixed;
    width: 100%;
    padding: 10px 0;

    background: rgba(248, 247, 245, 0.23);
    backdrop-filter: blur(5px);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);

   > img{
        padding: 5px 10px;
        width: 180px;
        background-color: rgba(248, 247, 245, 0.23);
        backdrop-filter: blur(50px);
        border: none;
        border-radius: 15px;
        box-shadow: 0 0 3px white;
   }

   > nav{
        display: flex;
        gap: 19px;
   }

   a{
        font-size: 18px;
        font-weight: 700;
        text-decoration: none;
        color: #925946;
   }

   a:hover{
        font-size: 20px;
        text-shadow: 0 0 5px #e09176;
   }
`