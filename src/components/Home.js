import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsBoxArrowRight } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import {
   HomeContainer,
   Header,
   AddTransaction,
} from "./styled-components/HomeStyle";
import { useContext } from "react";
import userContext from "../userContext";
import Transactions from "./Transactions";

export default function Home() {
   const [profile] = useContext(userContext);
   let navigate = useNavigate();
   return (
      <HomeContainer>
         <Header marginb={"28px"}>
            <span>Olá, {profile.name}</span>
            <BsBoxArrowRight onClick={() => navigate("/")} />
         </Header>
         <Transactions />
         <div>
            <Link to="/home/income">
               <AddTransaction>
                  <AiOutlinePlusCircle />
                  <h3>Nova Entrada</h3>
               </AddTransaction>
            </Link>
            <Link to="/home/expense">
               <AddTransaction>
                  <AiOutlineMinusCircle />
                  <h3>Nova Saída</h3>
               </AddTransaction>
            </Link>
         </div>
      </HomeContainer>
   );
}
