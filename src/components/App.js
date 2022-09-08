import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './Register';
import Login from './Login';
import GlobalStyle from './GlobalStyle';

export default function App () {
    return(
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}