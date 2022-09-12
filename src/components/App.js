import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import GlobalStyle from "./GlobalStyle";
import Home from "./Home";
import { IconContext } from "react-icons";
import Incomes from "./Incomes";
import Expenses from "./Expenses";
import userContext from '../userContext';
import { useState } from 'react';
export default function App() {
   const [profile, setProfile] = useState()
   return (
      <>
         <GlobalStyle />
         <userContext.Provider value={[profile, setProfile]}>
         <IconContext.Provider value={{ color: "white" }}>
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/home" element={<Home />} />
                  <Route path='/home/income' element={<Incomes/>} />
                  <Route path='/home/expense' element={<Expenses />} />
               </Routes>
            </BrowserRouter>
         </IconContext.Provider>
         </userContext.Provider>
      </>
   );
}
