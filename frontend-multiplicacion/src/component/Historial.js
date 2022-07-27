
import React from 'react'
import '../styles/historial.css'

export const Historial = ({ resul }) => {

   
  return (
    <>
      <div className='historial__container'>
        <h1>Historico</h1>
        <ul>

          {
            resul ?
              resul.map((elemento, ind) => (
                <li key={elemento + ind}>{elemento}</li>
              ))
              :
              <li>64644641156665</li>

          }



        </ul>
      </div>

    </>
  )
}
