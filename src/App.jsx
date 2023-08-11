import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./styles.css";

import api from "./services/api";

function App() { 


  const [input, setInput] = useState("");
  const [game, setGame] = useState({});


  async function handleSearch() {

    if (input === "")
    alert("Insert with game id")
  } 

    try {
      const response = api.get(`${input}/json`);
      setGame(response)
      setInput("");
    }
    
    catch {
      alert("Something went wrong");
      setInput("")
    }

  return (

    <div className="container">
        <h1 className="title">Roblox Game Searcher</h1>

        <div className="containerInput">
          <input 
          type="text"
          placeholder="Type a roblox game id"
          value={input}
          onChange={(e) => setInput(e.target.value)}>
          </input>

          <button className="search">
            <FiSearch size={25} color="#fff" onClick={handleSearch}/>
          </button>
        </div>

        <main className="main">
          <h2>Game name: test</h2>

          <span>Players playing: test</span>
          <span>Game Group: test</span>
          <span>Likes: test</span>
          <span>Favorites: test</span>
        </main>

    </div>
  );
}

export default App;
