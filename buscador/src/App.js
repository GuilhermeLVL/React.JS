import { FiSearch } from "react-icons/fi";
import "./style.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  function handleSearch(){ alert ("Valor do input: " + input)};

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu cep..." 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color="#fff" />
        </button>
      </div>

      <main className="main">
        <h2>CEP: 8955488</h2>

        <span>Rua Teste</span>
        <span>Complemento: asdasdasdadsa</span>
        <span>asdasdq131231</span>
        <span>belo horizonte - mg</span>
      </main>
    </div>
  );
}

export default App;
