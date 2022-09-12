import AuthStyle from "./styled-components/AuthStyle";
import { Header } from "./styled-components/HomeStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Expenses() {
   const [amount, setAmount] = useState();
   const [description, setDescription] = useState();
   let navigate = useNavigate();
   async function handleForm(e) {
      e.preventDefault();
      const expenseData = {
         amount,
         description,
      };
      try {
         await axios.post("http://localhost:5000/expense", expenseData);
         console.log("expense feita");
         navigate("/home");
      } catch (error) {
         console.log(error);
      }
   }
   return (
      <AuthStyle height={"50vh"}>
         <Header marginb={"38px"}>
            <span>Nova Saída</span>
         </Header>
         <form onSubmit={handleForm}>
            <input
               value={amount}
               onChange={(e) => setAmount(e.target.value)}
               type="number"
               placeholder="Valor"
               required
            />
            <input
               value={description}
               onChange={(e) => setDescription(e.target.value)}
               type="text"
               placeholder="Descrição"
               required
            />
            <button type="submit">Salvar saída</button>
         </form>
      </AuthStyle>
   );
}
