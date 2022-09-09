import { Header } from "./styled-components/HomeStyle";
import AuthStyle from "./styled-components/AuthStyle";

export default function NewEnter() {
   return (
      <AuthStyle height={"50vh"}>
         <Header marginb={'38px'}>
            <span>Nova entrada</span>
         </Header>
         <form>
            <input type="number" placeholder="Valor" />
            <input type="text" placeholder="Descrição" />
            <button>Salvar entrada</button>
         </form>
      </AuthStyle>
   );
}
