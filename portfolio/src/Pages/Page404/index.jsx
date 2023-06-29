import Container from "../../Components/Container"
import Footer from "../../Components/Footer"
import Header from "../../Components/Header"

function Page404(){

    return(
    <>
    <Header></Header>
    <Container>

        <h2>Algo de errado nao esta certo! </h2>
        <div>
            <span>404</span><br />
            <strong> Pagina Nao Localizada</strong>

        </div>
    </Container>
    <Footer></Footer>
    </>
    )
}

export default Page404