import "./App.css";
import {useState,useEffect} from "react";
function App() {
  const [characters,setCharacters] = useState([])
fetch("https://rickandmortyapi.com/api/character")
.then(res => res.json())
.then(data => {
setCharacters(data.result)
console.log(characters);

})
}
  return (
   <div></div>
);


export default App;
