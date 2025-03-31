import '../styles/pages/contact.css'

import React from 'react';


const Proyect = () => {
    return (
            <div className='body'>
                <div className='contactDivBody'>
                    <form className='contactFrom'>
                        <div className='contactDivForm'> 
                        <h2>Entremos en contacto</h2>
                            <input type="text" name="name" placeholder="Nombre" required className="nameInput input" />
                            <input type="email" name="email" placeholder="Correo" required className='emailInput input' />
                        </div>
                        <div className='contactDivForm'>    
                            <textarea name="message" placeholder="Mensaje" required className='textarea' />
                            <button type="submit" className='buttom'>Enviar</button>
                        </div>
                </form>
            </div>
        </div>

    );
};

export default Proyect;