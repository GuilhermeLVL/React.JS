import { useEffect, useState } from "react"
import Card from "../../Components/Card"
import styles from './Projetos.module.css'

function Projetos(){

        const [repositories, setRespositories] = useState([])

        useEffect(()=>{
            const buscarRepositorios = async () =>{

                const response = await fetch('https://api.github.com/users/GuilhermeLVL/repos')

                const data = await response.json()

                setRespositories(data)
            }

            buscarRepositorios()
        }, [])

    return(
        <section className={styles.projeto}>
       
      

            <h2>Projetos</h2> 
      {

        repositories.length > 0 ? (
            <section className={styles.lista}> 

            {
                repositories.map((repo) =>( 
                    
                    <Card key={repo.id} name={repo.name} description={repo.description} html_url={repo.html_url}></Card>
                ))
            }
            
            
         </section>
        ) : ( <p>Carregando Repositorios...</p>)
      }
        
        </section>
    )
}

export default Projetos