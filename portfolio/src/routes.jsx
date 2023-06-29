import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Projetos from "./Pages/Projetos";
import Contatos from "./Pages/Contatos";
import Page404 from "./Pages/Page404";

function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Sobre" element={<Sobre></Sobre>}></Route>
            <Route path="/Projetos" element={<Projetos></Projetos>}></Route>
            <Route path="/Contatos" element={<Contatos></Contatos>}></Route>
            <Route path="*" element={<Page404></Page404>}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes