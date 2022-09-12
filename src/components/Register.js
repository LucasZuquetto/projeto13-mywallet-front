import AuthStyle from "./styled-components/AuthStyle";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [password2, setPassword2] = useState();
   let navigate = useNavigate();
   async function sendData(e) {
      e.preventDefault();
      if (password !== password2) {
         alert("Sua senha não foi confirmada corretamente");
         return;
      }
      const userRegister = {
         name,
         email,
         password,
      };
      try {
         await axios.post("http://localhost:5000/register", userRegister);
         console.log('registered')
         navigate('/')
      } catch (error) {
         console.log(error.message)
      }
   }
   return (
      <AuthStyle height={"100vh"}>
         <h1>MyWallet</h1>
         <form onSubmit={sendData}>
            <input
               onChange={(e) => setName(e.target.value)}
               type="text"
               placeholder="Nome"
               required
            />
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
               id="password"
               value={password}
               required
            />
            <input
               id="password2"
               onChange={(e) => setPassword2(e.target.value)}
               value={password2}
               type="password"
               placeholder="Confirme a senha"
               required
            />
            <button type="submit">Cadastrar</button>
         </form>
         <Link to="/login">
            <span>Já tem uma conta? Entre agora!</span>
         </Link>
      </AuthStyle>
   );
}
