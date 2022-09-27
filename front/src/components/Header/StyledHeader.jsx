import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    z-index: 2;

    top: 0;
    position: fixed;
    width: 100%;
    padding: 8px 0;

    background: rgba(248, 247, 245, 0.5);
    backdrop-filter: blur(5px);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);

   img{
        padding: 5px 10px;
        width: 180px;
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
        color: #C3775E;
   }

   > nav > a:hover{
     transform: translateY(-2px);
   }

   .not-logged{
     display: flex;
     align-items: center;
     gap: 10px;
   }

   .not-logged > .visor{
     width: 10px;
     height: 10px;

     margin-right: 5px;

     border-radius: 50%;
     background-color: #B1AEAE;
     background: linear-gradient(to right, #DFDFDF, #989797);
   }

   .not-logged > a{
     font-size: 14px;
     font-weight: 500;
   }
`