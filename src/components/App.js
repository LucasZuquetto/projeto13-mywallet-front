import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import GlobalStyle from "./GlobalStyle";
import Home from "./Home";
import { IconContext } from "react-icons";
import NewEnter from "./NewEnter";
import NewSaida from "./NewSaida";
export default function App() {
   return (
      <>
         <GlobalStyle />
         <IconContext.Provider value={{ color: "white" }}>
            <BrowserRouter>
               <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/home" element={<Home />} />
                  <Route path='/home/income' element={<NewEnter/>} />
                  <Route path='home/saida' element={<NewSaida />} />
               </Routes>
            </BrowserRouter>
         </IconContext.Provider>
      </>
   );
}
