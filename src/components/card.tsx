import React from 'react'

export const Card = ({ pokemon }) => {
  return (

    <div className="card">
      <div className="cardImg">
      <img src={pokemon.sprites.front_default} />
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {
          pokemon.types.map((type, i )=>{
            return(
              <div key={i} className="typeName" >{type.type.name}</div>
            )
          })
        }
        <div className="cardInfo">
          <div className="cardData">
            <p>重さ: {pokemon.weight}</p>
          </div>
        </div>

      </div>
    </div>
  )
}
