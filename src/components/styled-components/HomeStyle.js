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
      justify-content: space-between;
      margin-top: 12px;

      a {
         text-decoration: none;
      }
   }
`;
const AddTransaction = styled.div`
   &:hover {
      filter: contrast(85%);
      cursor: pointer;
   }
   margin-right: 7px;
   margin-left: 7px;
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
`;
const Header = styled.div`
   width: 85vw;
   font-size: 26px;
   margin-bottom: ${(props) => props.marginb};
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
   flex-direction: column;
   align-items: flex-start;
   justify-content: flex-start;
   text-align: center;
   overflow-y: scroll;
   p {
      font-size: 20px;
      color: #868686;
   }
   div {
      margin-left: 5px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      width: 82vw;
      font-size: 19px;
      span {
         color: #c6c6c6;
         margin-right: 10px;
      }
      h2 {
         color: black;
      }
   }
`;
const Value = styled.h3`
   color: ${(props) => props.color};
   margin-right: 5px;
`;
const TotalValue = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-end;
   height: 30px;
   position: relative;
   h1 {
      font-weight: 700;
      font-size: 22px;
   }
   h5 {
      position: absolute;
      right: 5px;
      font-size: 22px;
      color: #03AC00;
   }
`;
export { Content, Header, HomeContainer, AddTransaction, TotalValue, Value };
