function Main(){
    return(
        <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>Sem nome</h3>
            </div>
            <div className="item-menu">
              <a href="#">login</a>
            </div>
          </div>
        </div>
        <div className="form">
        <h2>Entre em contato!</h2>
          <form>
            <div className="items-form">
              <input placeholder="Nome:" type="text" />
              <input placeholder="Endereco:" type="text" />
              <input placeholder="Email:" type="text" />
              <input placeholder="Telefone:" type="text" />
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    )
}
export default Main;