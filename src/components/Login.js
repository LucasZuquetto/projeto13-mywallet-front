import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthStyle from "./styled-components/AuthStyle";

export default function Login() {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   let navigate = useNavigate();
   async function sendData(e) {
      e.preventDefault();
      
      const userLogin = {
         email,
         password,
      };
      try {
         await axios.post("http://localhost:5000/", userLogin);
         console.log('logged in')
         navigate("/home");
      } catch (error) {
         console.log(error.message)
      }
   }
   return (
      <AuthStyle height={"100vh"}>
         <h1>MyWallet</h1>
         <form onSubmit={sendData}>
            <input
               onChange={(e) => setEmail(e.target.value)}
               type="email"
               placeholder="E-mail"
               required
            />
            <input
               onChange={(e) => setPassword(e.target.value)}
               type="password"
               placeholder="Senha"
               required
            />
            <button type="submit">Entrar</button>
         </form>
         <Link to="/register">
            <span>Primeira vez? Cadastre-se!</span>
         </Link>
      </AuthStyle>
   );
}
