import styled from 'styled-components'

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    z-index: 2;

    top: 0;
    position: fixed;
    width: 100%;
    padding: 8px 30px;

    background: rgba(248, 247, 245, 0.6);
    backdrop-filter: blur(5px);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);

   img{
        padding: 5px 10px;
        width: 180px;
   }

   > nav{
       display: flex;
       align-items: center;
       gap: 30px;
   }

   a{
        font-size: 18px;
        font-weight: 700;
        text-decoration: none;
        color: #925946;
        transition: 0.5;
   }

   nav > a,
   div > a{
     padding: 5px 10px;
     transition: 0.8s;
   }

   nav > a:hover,
   div > a:hover{
     color: white;
     background-color: #925946;
     border: solid 1px #925946;
     border-radius: 10px;
   }

   > nav > a:hover{
     transform: translateY(-2px);
   }

   .not-logged,
   .logged{
     display: flex;
     align-items: center;
     gap: 5px;
   }

   .logged > div{
    display: flex;
    align-items: center; 
    gap: 10px;
   }

   .logged > div > img{
    width: 60px;
   }

   .logged > div > label{
     padding: 5px 10px;
     font-family: 'Merriweather';
     font-size: 18px;
     font-weight: 700;
     color: #925946;
     cursor: pointer;
     transition: 0.5s;
   }

   .logged > div > label:hover{
     color: white;
     background-color: #925946;
     border: solid 1px #925946;
     border-radius: 10px;
   }

   .logged > div > label:hover{
     text-shadow: 0 0 10px #925946;
   }

   .not-logged > a{
      width: 100px;
      
      text-align: center;
      font-size: 14px;
      font-weight: 700;
   }

   .visor{
     width: 15px;
     height: 15px;

     margin-right: 5px;

     border-radius: 50%;
     background: linear-gradient(to right, #DFDFDF, #989797);
   }

   .on{
      background: green;
   }

   .off{
      background: linear-gradient(to right, #DFDFDF, #989797);
   }

   @media (min-width: 768px) and (max-width: 1150px){
      img{
        width: 150px;
      }

      a{
        font-size: 14px;
      }

      .logged > div > label{
        font-size: 14px;
      }

      .not-logged > a{
        font-size: 12px;
        width: 70px;
        padding: 5px 5px;
      }

      .visor{
        width: 12px;
        height: 12px;
      }
   }

   @media (max-width: 767px){
    padding: 8px 15px; 

    img{
      width: 100px;
    }

    .logged > div > img{
      width: 30px;
     }

    nav{
      gap: 5px;
    }

    a{
      font-size: 10px;
    }

    nav > a{
      padding: 2px 5px;
    }

    .logged > div > label{
      font-size: 8px;
    }

    .not-logged > a{
      font-size: 8px;
      width: auto;
      padding: 2px 5px;
    }

    .visor{
      width: 8px;
      height: 8px;
    }
   }
`