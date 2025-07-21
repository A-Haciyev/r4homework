import './App.css'
import { useState, useEffect } from 'react';
import Human from './components/Human';
import Alien from './components/Alien';


function App() {
  // const [characters, setCharacters] = useState([]);
  const [human, setHuman] = useState([])
  const [alien, setAlien] = useState([])
  useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(data =>{
const humans = data.results.filter(c => c.species ==="Human");
const aliens = data.results.filter(c => c.species !== "Human")
setHuman(humans);
setAlien(aliens);


      // setCharacters(data.results)
      // console.log(characters); 
      // characters.map(c => {
      //     if(c.species == "Human"){
      //     setHuman(human.push(c))
      //     // console.log(human); 
           
      //   }else{
      //     setAlien(alien.push(c))
      //     // console.log(alien); 
          
      //   }
      // })
        
    })
    
  },[])
  // console.log(human); 
  // console.log(alien);     
 return (
  <div>
 <Human human={human }/>
 <Alien alien={alien}/> 
  </div>
 )
}
// ? human : null 
export default App