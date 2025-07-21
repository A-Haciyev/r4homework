import React from 'react'

const Human = (props) => {
  console.log(props.human);
  
  return (
    <div>
      {props.human.map((person) => (
        <div key={person.id}>
          <img src={person.image}  />
          <p>{person.name}</p>
        </div>
      ))}
      <hr />
      </div>
  )
}

export default Human