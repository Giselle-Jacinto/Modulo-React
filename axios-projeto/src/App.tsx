import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [character, setCharacter] = useState([]);

  axios.get("https://rickandmortyapi.com/api/character").then((response) =>{
  const respostaApi = response.data.results;
  setCharacter(respostaApi);
  }); 

  return (
    <>
      <h1>Hello word</h1>
      {character.map((personagem: any) => {
      return(
        <ul> 
          <li>{personagem.name}</li>
          <li>{personagem.species}</li>
          <li>{personagem.status}</li>
          <li>{personagem.origin.name}</li>
        </ul>
      );
      })}
    </>
  );
}

export default App;
