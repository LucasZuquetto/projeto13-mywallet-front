import { Content, TotalValue, Value } from "./styled-components/HomeStyle";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Transactions() {
   const [total, setTotal] = useState();
   const [transactions, setTransactions] = useState([]);

   useEffect(async () => {
      const res = await axios.get("http://localhost:5000/home");
      setTransactions(res.data);
      console.log(res.data);
   }, []);
   return (
      <>
         <Content>
            {transactions.length === 0 ? (
               <p>Não há registros de entrada ou saída</p>
            ) : (
               transactions.map((transaction) => (
                  <div>
                     <div>
                        <span>{transaction.date}</span>
                        <h2>{transaction.description}</h2>
                     </div>
                     <Value
                        color={
                           transaction.type === "expense"
                              ? "#C70000"
                              : "#03AC00"
                        }
                     >
                        {transaction.amount}
                     </Value>
                  </div>
               ))
            )}
            <TotalValue>
               <h1>SALDO</h1>
               <h5>{total}</h5>
            </TotalValue>
         </Content>
      </>
   );
}
