import React, { useState } from 'react'
import { allResultados } from '../action/resultadoBack'
import { Historial } from '../component/Historial'
import { PrincipalLeft } from '../component/PrincipalLeft'
import { PrincipalRight } from '../component/PrincipalRight'
import '../styles/home.css'

export const Home = () => {

  const [state, setState] = useState({
    activo: false
  })
  const { activo } = state;

  const handleVerHistorial = async () => {

    let resul = await allResultados()
    setState((item) => ({ ...item, activo: !item.activo, resul }))
    // console.log(state)

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
                resul={state.resul}
              />
              :
              <PrincipalRight />

          }


          <button
            onClick={handleVerHistorial}
            className={activo ? 'display__btn' : 'right__historialBtn'}
          >Ver Historial
          </button>
        </div>

      </section>

      <section className='home__footer'>

      </section>

    </div>
  )
}
