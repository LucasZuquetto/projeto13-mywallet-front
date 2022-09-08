import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './Register';
import Login from './Login';

export default function App () {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}