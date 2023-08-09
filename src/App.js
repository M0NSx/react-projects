import { FiSearch } from "react-icons/fi";
import "./styles.css";

function App() {
  return (
    <div className="container">
        <h1 className="title">CEP Searcher</h1>

        <div className="containerInput">
            <input type="text" placeholder="Insert your CEP"></input>

            <button className="buttonSearch"> 
                <FiSearch size={25} color="#FFF"/>
            </button>
        </div>
