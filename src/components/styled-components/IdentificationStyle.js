import styled from "styled-components";

const IdentificationStyle = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   h1 {
      font-family: "Saira Stencil One", cursive;
      color: white;
      font-size: 32px;
      margin-bottom: 25px;
   }
   a {
      text-decoration: none;
      color: white;
      font-weight: 700;
      font-size: 15px;
   }
   form {
      display: flex;
      flex-direction: column;
      input {
         box-sizing: border-box;
         display: flex;
         align-items: center;
         background-color: white;
         border-radius: 5px;
         width: 85vw;
         height: 60px;
         margin-bottom: 13px;
         outline: none;
         border: none;
         color: black;
         font-size: 22px;
         padding-left: 15px;
      }
      input::placeholder {
         color: black;
         font-size: 20px;
      }
      input:focus::placeholder {
         color: transparent;
      }
      button {
         width: 85vw;
         height: 45px;
         display: flex;
         align-items: center;
         justify-content: center;
         background-color: #a328d6;
         border: none;
         margin-bottom: 36px;
         color: white;
         font-weight: 700;
         font-size: 20px;
         border-radius: 5px;
      }
   }
`;
export default IdentificationStyle;
