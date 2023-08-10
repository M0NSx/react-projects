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

  return (
    <div className="container">
        <h1 className="title">CEP Searcher</h1>

        <div className="containerInput">
            <input type="text" placeholder="Insert your CEP"></input>

            <button className="buttonSearch"> 
                <FiSearch size={25} color="#FFF"/>
            </button>
        </div>
    
        <main className="main">
            <h2>CEP: 555022335</h2>

            <span>Street: test</span>
            <span>Complement: test</span>
            <span>Neighborhood: test</span>
            <span>City: test - State: test</span>
        </main>
    </div>
  );
}

export default App;
