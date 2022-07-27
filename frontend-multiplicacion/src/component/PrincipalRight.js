
import React, { useContext } from 'react'
import { ResultadoContext } from '../context/ResultadoContext';
import '../styles/principalRight.css'

export const PrincipalRight = () => {

    const { resul, dispatch } = useContext(ResultadoContext);

    return (
        <>
            <img src='https://user-images.githubusercontent.com/87577172/181265965-f45a5831-4aed-4522-8558-20fe30bc4298.gif' className='right__img'></img>
            <div className='right__content'>
                <div className='right__content--resultado'>
                    <h2>Resultado</h2>
                    {
                        resul.postResultado ?
                        <p>{resul.postResultado}</p>
                        : 
                        <p>...</p>
                    }
                    
                </div>
            </div>
        </>
    )
}
