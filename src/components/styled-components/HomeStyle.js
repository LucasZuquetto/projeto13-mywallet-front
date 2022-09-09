import styled from "styled-components";

const HomeContainer = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   div {
      display: flex;
      width: 85vw;
      justify-content: space-between;
      margin-top: 12px;
      a {
         text-decoration: none;
      }
   }
   div div {
      font-size: 25px;
      background-color: #a328d6;
      height: 120px;
      display: flex;
      flex-direction: column;
      width: 40vw;
      border-radius: 5px;
      box-sizing: border-box;
      padding: 14px 0 14px 14px;
      h3 {
         color: white;
         font-size: 17px;
         font-weight: 700;
      }
   }
`;
const Header = styled.div`
   width: 85vw;
   font-size: 26px;
   margin-bottom: ${props => props.marginb};
   span {
      font-weight: 700;
      font-size: 26px;
      color: white;
   }
`;
const Content = styled.div`
   box-sizing: border-box;
   background-color: white;
   width: 85vw;
   height: 60vh;
   border-radius: 5px;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0 40px;
   text-align: center;
   p {
      font-size: 20px;
      color: #868686;
   }
`;
export { Content, Header, HomeContainer };
