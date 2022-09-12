import { Header } from "./styled-components/HomeStyle";
import AuthStyle from "./styled-components/AuthStyle";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Incomes() {
   const [amount, setAmount] = useState();
   const [description, setDescription] = useState();
   let navigate = useNavigate()
   async function handleForm(e) {
      e.preventDefault();
      const incomeData = {
         amount,
         description
      }
      try {
         await axios.post('http://localhost:5000/income',incomeData)
         console.log('income feita')
         navigate('/home')
      } catch (error) {
         console.log(error)
      }
   }
   return (
      <AuthStyle height={"50vh"}>
         <Header marginb={"38px"}>
            <span>Nova entrada</span>
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
            <button type="submit">Salvar entrada</button>
         </form>
      </AuthStyle>
   );
}
