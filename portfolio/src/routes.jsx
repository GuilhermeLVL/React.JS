import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sobre from "./Pages/Sobre";
import Projetos from "./Pages/Projetos";
import Contatos from "./Pages/Contatos";
import Page404 from "./Pages/Page404";
import PageBase from "./Pages/PaginaBase";

function AppRoutes(){
    return(
        <BrowserRouter>
        <Routes>

    {/* Route com a pafina base, compoe todas as paginas que receberao o template */}
        <Route path="/" element={<PageBase></PageBase>}>

            <Route index element={<Home></Home>}></Route>
            <Route path="/Sobre" element={<Sobre></Sobre>}></Route>
            <Route path="/Projetos" element={<Projetos></Projetos>}></Route>
            <Route path="/Contatos" element={<Contatos></Contatos>}></Route>
            <Route path="*" element={<Page404></Page404>}></Route>

        </Route>

        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes