import React from 'react'

const Alien = (props) => {
  console.log(props.alien);
  
  return (
     <div>
      {props.alien.map((person) => (
        <div key={person.id}>
          <img src={person.image}  />
          <p>{person.name}</p>
        </div>
      ))}
      </div>
  )
}

export default Alien