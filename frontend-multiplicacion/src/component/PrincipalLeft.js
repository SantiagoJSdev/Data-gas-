

import React, { useContext } from 'react'
import { postGuardar } from '../action/resultadoBack';
import { ResultadoContext } from '../context/ResultadoContext';
import { validate } from '../helpers/validate';
import { useForm } from '../hook/useForm';
import '../styles/principalLeft.css'
import { types } from '../types/types';

export const PrincipalLeft = () => {

    const { resul, dispatch } = useContext(ResultadoContext);

    const [values, handleInputChange, , reset] = useForm({
        numero1: '',
        numero2: ''
    });
    const { numero1, numero2 } = values;

    const handleSubmit = async (e) => {

        e.preventDefault()
        let validacionForm = validate(numero1, numero2)
        console.log(validacionForm)

        if (!Object.keys(validacionForm).length) {

            let respuesta = await postGuardar(values)

            dispatch({
                type: types.postResul,
                payload: respuesta.num.total
            })

        } else {

            dispatch({
                type: types.validate,
                payload: validacionForm
            })
        }
        reset()

    }
    console.log(!!resul.errors)

    return (
        <div className='left__container'>
            <h1>Para calcular tus servivios ingresa:</h1>

            <form onSubmit={handleSubmit}>
                <div className='left__container--numero1'>
                    <label>N1</label>
                    <input
                        className={!!resul.errors ? !!resul.errors.numero1 ? 'activa-mensaje' : 'numero1__input' : 'numero1__input'}
                        placeholder={!!resul.errors ? !!resul.errors.numero1 ? `${resul.errors.numero1}` : 'Ej: 123456' : 'Ej: 123456'}
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
                        className={!!resul.errors ? !!resul.errors.numero2 ? 'activa-mensaje' : 'numero1__input' : 'numero1__input'}
                        placeholder={!!resul.errors ? !!resul.errors.numero2 ? `${resul.errors.numero2}` : 'Ej: 123456' : 'Ej: 123456'}
                        autoComplete='off'
                        type='text'
                        name='numero2'
                        value={numero2}
                        onChange={handleInputChange}
                    ></input>

                </div>
                {

                    !!resul.errors ?

                        !!resul.errors.msg

                            ?
                            <h3 className='mensaje-form'>{resul.errors.msg}</h3>
                            :
                            ''
                        :

                        ''
                }

                <button type='submit' className='left__container--button'><i className="fas fa-calculator"></i>Calcular</button>
            </form>
        </div>
    )
}
