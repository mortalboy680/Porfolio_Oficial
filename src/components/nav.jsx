import '../styles/components/nav.css';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
    const location = useLocation(); // Obtiene la ruta actual

    return (
        <nav className="navBar">
            <ul className="navBarUl">
                <li className={`navBarUlLinkLi ${location.pathname === '/' ? 'active' : ''}`}>
                    <Link to="/" className='navBarUlLink'>Inicio</Link>
                </li>
                <li className={`navBarUlLinkLi ${location.pathname === '/projects' ? 'active' : ''}`}>
                    <Link to="/projects" className='navBarUlLink'>Proyectos</Link>
                </li>
                <li className={`navBarUlLinkLi ${location.pathname === '/contact' ? 'active' : ''}`}>
                    <Link to="/contact" className='navBarUlLink'>Contacto</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;