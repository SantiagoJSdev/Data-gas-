import React from 'react'
import { Historial } from '../component/Historial'
import { PrincipalLeft } from '../component/PrincipalLeft'
import { PrincipalRight } from '../component/PrincipalRight'
import '../styles/home.css'

export const Home = () => {


  return (
    <div className='home__container'>
 

            <section className='home__principal'>
              <div className='home__principal--background '></div>

              <div className='home__principal--left'>
                <PrincipalLeft/>
              </div>
              <div className='home__principal--right'>
                {/* <PrincipalRight/> */}
                <Historial/>
              </div>
               
            </section>

            <section className='home__footer'>
          
             </section>
             
        </div>
  )
}
