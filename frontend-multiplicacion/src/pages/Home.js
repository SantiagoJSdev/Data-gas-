import React, { useContext, useState } from 'react'
import { allResultados, deleteResultados } from '../action/resultadoBack'
import { Historial } from '../component/Historial'
import { PrincipalLeft } from '../component/PrincipalLeft'
import { PrincipalRight } from '../component/PrincipalRight'
import { ResultadoContext } from '../context/ResultadoContext'
import '../styles/home.css'
import { types } from '../types/types'

export const Home = () => {

  const { resul, dispatch } = useContext(ResultadoContext);


  const [state, setState] = useState({
    activo: false
  })
  const { activo } = state;

  const handleVerHistorial = async () => {

    let resul = await allResultados()
    setState((item) => ({ ...item, activo: !item.activo, resul }))
    dispatch({
      type: types.historial,
      payload: resul
    })
  }

  const handleEliminarHistorial = async () => {
    let resultado = await deleteResultados()
    dispatch({
      type: types.deleteResultado,
      payload: []
    })

  }


  return (
    <div className='home__container'>


      <section className='home__principal'>
        <div className='home__principal--background '></div>

        <div className='home__principal--left'>
          {
            activo ?
              <div className='left__contentBtn'>
                <i className="fas fa-cog rotate"></i>
                <button onClick={handleVerHistorial}>Calcular</button>
              </div>
              :
              <PrincipalLeft />
          }

        </div>
        <div className='home__principal--right'>
          {
            activo ?
              <Historial
              />
              :
              <PrincipalRight />
          }

          <button
            onClick={handleVerHistorial}
            className={activo ? 'display__btn' : 'right__historialBtn'}
          >Ver Historial
          </button>

          <button
            onClick={handleEliminarHistorial}
            className={activo ? 'right__historialBtn' : 'display__btn'}
          >Eliminar Historial
          </button>
          
        </div>

      </section>

      <section className='home__footer'>

      </section>

    </div>
  )
}
