import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import GlobalStyle from "./GlobalStyle";
import Home from "./Home";
import { IconContext } from "react-icons";
export default function App() {
   return (
      <>

         <GlobalStyle />
         <IconContext.Provider value={{color:'white'}}>
         <BrowserRouter>
            <Routes>
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
               <Route path="/home" element={<Home />} />
            </Routes>
         </BrowserRouter>
         </IconContext.Provider>
      </>
   );
}
