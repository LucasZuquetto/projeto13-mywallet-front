import { Link } from "react-router-dom";
import IdentificationStyle from "./styled-components/IdentificationStyle";

export default function Login() {
   return (
      <IdentificationStyle>
         <h1>MyWallet</h1>
         <form>
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <button>Entrar</button>
         </form>
         <Link to="/register">
            <span>Primeira vez? Cadastre-se!</span>
         </Link>
      </IdentificationStyle>
   );
}
