import { useState } from 'react';
import { FiSearch } from "react-icons/fi";
import "./styles.css";

import api  from './services/api';

function App() {

  const [input, setInput] = useState("");
  const [cep, setCep] = useState({});

  async function handleSearch() {
    // 01001000/json/

    if (input === "") {
      alert("Insert with CEP")
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setCep(response.data)
      setInput("");

    }
    catch {
      alert("Something went wrong");
      setInput("")
    }
  }

  return (
    <div className="container">
        <h1 className="title">CEP Searcher</h1>

        <div className="containerInput">
            <input 
            type="text" 
            placeholder="Insert your CEP"
            value={input}
            onChange={(e) => setInput(e.target.value)}></input>

            <button className="buttonSearch" onClick={handleSearch}> 
                <FiSearch size={25} color="#FFF"/>
            </button>
        </div>

        {Object.keys(cep).length > 0 && (
          
          <main className="main">
            <h2>CEP: {cep.cep}</h2>

            <span>Street: {cep.logradouro}</span>
            <span>Complement: {cep.complemento}</span>
            <span>Neighborhood: {cep.bairro}</span>
            <span>City: {cep.localidade} - State: test</span>
          
          </main>
        )}
  
    </div>
  );
}

export default App;
