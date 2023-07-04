import Header from "../../Components/Header"
import Container from "../../Components/Container"
import Footer from "../../Components/Footer"
import { Outlet } from "react-router-dom"

function PageBase(){
    return(
        <main>
            <Header></Header>
            <Container>

                <Outlet></Outlet>          
                
            </Container>
            <Footer></Footer>

        </main>
    )
}
export default PageBase