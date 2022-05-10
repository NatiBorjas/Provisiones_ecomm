import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from "./CartWidget"
import '../styles/NavBar.css';


const NavBar = () => {
    const stan = 'https://static.wikia.nocookie.net/monkeyisland/images/5/5c/StaninActionanimiert.gif';

    return (
        <>
        <header className="nav-container">
            <nav>
                <ul className="menu">
                    <li>
                        <Link to={'/'}>
                            <img src={stan} className="gif" alt="stan" />
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>Inicio</Link>
                    </li>
                    <li>
                        <Link to={'/items'}>Provisiones</Link>
                    </li>
                    <li>
                        Categorias
                        <div>
                            <ul>
                                <li><Link to={'/items'}>Todas</Link></li>
                                <li><Link to={'/category/alimentos'}>Alimentos</Link></li>
                                <li><Link to={'/category/armas'}>Armas</Link></li>
                                <li><Link to={'/category/herramientas'}>Herramientas</Link></li>
                                <li><Link to={'/category/varios'}>Varios</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to={'/contacto'}>Contacto</Link>
                    </li>
                    <li>
                        <CartWidget/>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default NavBar