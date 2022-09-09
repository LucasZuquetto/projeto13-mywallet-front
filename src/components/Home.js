import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsBoxArrowRight } from "react-icons/bs";
import { HomeContainer, Header, Content } from "./styled-components/HomeStyle";

export default function Home() {
   return (
      <HomeContainer>
         <Header>
            <span>Olá, (trocaaquihein)</span>
            <BsBoxArrowRight />
         </Header>
         <Content>
            <p>não há registros de entrada ou saída</p>
         </Content>
         <div>
            <div>
               <AiOutlinePlusCircle />
               <h3>Nova Entrada</h3>
            </div>
            <div>
               <AiOutlineMinusCircle />
               <h3>Nova Saída</h3>
            </div>
         </div>
      </HomeContainer>
   );
}
