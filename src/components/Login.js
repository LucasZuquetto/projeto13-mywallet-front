import { Link } from "react-router-dom";
import AuthStyle from "./styled-components/AuthStyle";

export default function Login() {
   return (
      <AuthStyle>
         <h1>MyWallet</h1>
         <form>
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <button>Entrar</button>
         </form>
         <Link to="/register">
            <span>Primeira vez? Cadastre-se!</span>
         </Link>
      </AuthStyle>
   );
}
