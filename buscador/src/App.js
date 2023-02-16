import { FiSearch } from "react-icons/fi";
import "./style.css";
import { useState } from "react";
import api from "./services/api";

function App() {
  const [input, setInput] = useState("");

 async function handleSearch() {
  if(input === ''){
    alert('Digite seu cep!')
    return;
  }


  try {
const response = await api.get(`${input}/json`);
console.log(response.data)
  }
  catch{
    alert('CEP não encontrado!')
  }


}

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input
          type="text"
          placeholder="Digite seu cep..."
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
