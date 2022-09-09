import AuthStyle from "./styled-components/AuthStyle";
import { Link } from "react-router-dom";

export default function Register() {
   return (
      <AuthStyle height={'100vh'}>
         <h1>MyWallet</h1>
         <form>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />
            <input type="password" placeholder="Confirme a senha" />
            <button>Cadastrar</button>
         </form>
         <Link to="/login">
            <span>Já tem uma conta? Entre agora!</span>
         </Link>
      </AuthStyle>
   );
}
