import AuthStyle from "./styled-components/AuthStyle";
import { Header } from "./styled-components/HomeStyle";

export default function NewSaida() {
   return (
      <AuthStyle height={"50vh"}>
         <Header marginb={'38px'}>
            <span>Nova Saída</span>
         </Header>
         <form>
            <input type="number" placeholder="Valor" />
            <input type="text" placeholder="Descrição" />
            <button>Salvar saída</button>
         </form>
      </AuthStyle>
   );
}
