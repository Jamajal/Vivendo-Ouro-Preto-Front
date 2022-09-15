import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px 0;

    background: #F8F7F5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

   > img{
        width: 192px;
        height: 70px;
   }

   > nav{
        display: flex;
        gap: 19px;
   }

   a{
        font-size: 17px;
        text-decoration: none;
        color: #925946;
   }

   a:hover{
        font-size: 20px;
        text-shadow: 0 0 5px #e09176;
   }
`