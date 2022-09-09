import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsBoxArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HomeContainer, Header, Content } from "./styled-components/HomeStyle";

export default function Home() {
   return (
      <HomeContainer>
         <Header marginb={'28px'}>
            <span>Olá, (trocaaquihein)</span>
            <BsBoxArrowRight />
         </Header>
         <Content>
            <p>não há registros de entrada ou saída</p>
         </Content>
         <div>
            <Link to="/home/income">
               <div>
                  <AiOutlinePlusCircle />
                  <h3>Nova Entrada</h3>
               </div>
            </Link>
            <Link to="/home/saida">
               <div>
                  <AiOutlineMinusCircle />
                  <h3>Nova Saída</h3>
               </div>
            </Link>
         </div>
      </HomeContainer>
   );
}
