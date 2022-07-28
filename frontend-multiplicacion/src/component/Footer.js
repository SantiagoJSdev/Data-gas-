
import React from 'react'
import '../styles/footer.css'

export const Footer = () => {
    return (
        <>
            <div className='footer__contacto'>
                <h1>Contacto</h1>
                <h3>info@datagas.com.co</h3>
                <p><i className="fas fa-phone"></i>321-589-6352</p>
            </div>
            <div className='footer__contacto'>
                <h1>Ubicacion</h1>
                <h3><i className="fas fa-map-marker"></i>Cra 49C # 76 - 241 Of. 4
                    Barranquilla, Col 080001</h3>

            </div>
            <div className='footer__contacto'>
                <h1>Desarrollado por SantiagoJS</h1>

            </div>


        </>
    )
}
