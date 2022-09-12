import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthStyle from "./styled-components/AuthStyle";
import userContext from '../userContext';

export default function Login() {
   const [profile, setProfile] = useContext(userContext)
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
         const response = await axios.post("http://localhost:5000/", userLogin);
         console.log("logged in");
         console.log(response.data)
         setProfile({
            token:response.data.token,
            name:response.data.name
         })
         navigate("/home");
      } catch (error) {
         console.log(error.message);
         alert("Email ou senha incorretos");
         setEmail('');
         setPassword('');
      }
   }
   return (
      <AuthStyle height={"100vh"}>
         <h1>MyWallet</h1>
         <form onSubmit={sendData}>
            <input
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               type="email"
               placeholder="E-mail"
               required
            />
            <input
               value={password}
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
