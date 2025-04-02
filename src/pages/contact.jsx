import '../styles/pages/contact.css'

import React from 'react';


const Proyect = () => {
    return (
            <div className='body'>
                <div className='contactDivBody'>
                    <form className='contactFrom'>
                        <div className='contactDivForm'> 
                            <div className='contacDivFormContact'>
                                <img src="/assets/YagoNigro_100x100.png" alt="" className='contactDivFormImg'/>
                                <ul className='contactDivFormUl'>
                                    <li className='contactDivFormUlLi'>
                                        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="footerBarLinks">
                                            <box-icon type='logo' name='linkedin-square' className="footerBarLinksIcon"></box-icon>
                                        </a>
                                    </li>
                                    <li className='contactDivFormUlLi'>
                                        <a href="https://github.com/mortalboy680" target="_blank" rel="noopener noreferrer" className="footerBarLinks">
                                            <box-icon name='github' type='logo' className="footerBarLinksIcon"></box-icon>
                                        </a>
                                    </li>
                                    <li className='contactDivFormUlLi'>
                                        <a href='https://www.instagram.com/yago_ron?igsh=MThzNWRrNWNqODIzdw%3D%3D&utm_source=qr' target="_blank" rel="noopener noreferrer" className="footerBarLinks">
                                            <box-icon type='logo' name='instagram-alt' className="footerBarLinksIcon"></box-icon>
                                        </a>
                                    </li>
                                </ul>
                            </div>
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