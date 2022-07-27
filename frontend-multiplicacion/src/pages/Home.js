import React from 'react'
import { PrincipalLeft } from '../component/PrincipalLeft'
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
              <div className='home__principal--right2'></div>
              </div>
               
            </section>

            <section className='home__footer'>
          
             </section>
             
        </div>
  )
}
