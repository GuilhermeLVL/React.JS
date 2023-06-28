import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Projetos from "./Pages/Projetos";
import Contatos from "./Pages/Contatos";

function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Sobre" element={<Sobre></Sobre>}></Route>
            <Route path="/Projetos" element={<Projetos></Projetos>}></Route>
            <Route path="/Contatos" element={<Contatos></Contatos>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes