import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home></Home>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes