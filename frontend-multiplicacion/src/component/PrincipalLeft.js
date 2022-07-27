

import React from 'react'
import { useForm } from '../hook/useForm';
import '../styles/principalLeft.css'

export const PrincipalLeft = () => {

    const [values, handleInputChange, , reset] = useForm({
        numero1: '',
        numero2: ''
    });
    const { numero1, numero2 } = values;

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(values)
        reset()
    }


    return (
        <div className='left__container'>
            <h1>Para calcular tus servivios ingresa:</h1>

            <form onSubmit={handleSubmit}>
                <div className='left__container--numero1'>
                    <label>N1</label>
                    <input
                        placeholder='Ej: 123456'
                        autoComplete='off'
                        type='text'
                        name='numero1'
                        value={numero1}
                        onChange={handleInputChange}
                    ></input>
                </div>

                <div className='left__container--numero1'>
                    <label>N2</label>
                    <input
                        placeholder='Ej: 123456'
                        autoComplete='off'
                        type='text'
                        name='numero2'
                        value={numero2}
                        onChange={handleInputChange}
                    ></input>
                </div>
                <button type='submit' className='left__container--button'><i className="fas fa-calculator"></i>Calcular</button>
            </form>
        </div>
    )
}
