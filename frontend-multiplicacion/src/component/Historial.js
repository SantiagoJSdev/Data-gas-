
import React, { useContext } from 'react'
import { ResultadoContext } from '../context/ResultadoContext';
import '../styles/historial.css'

export const Historial = () => {


  const { resul, dispatch } = useContext(ResultadoContext);
 
   
  return (
    <>
      <div className='historial__container'>
        <h1>Historico</h1>
        <ul>

          {
            resul.resultado ?
            resul.resultado.map((elemento, ind) => (
             
                <li key={elemento + ind}><p>{elemento}</p></li>
                
              ))

              :
              <li>...</li>

          }



        </ul>
      </div>

    </>
  )
}
