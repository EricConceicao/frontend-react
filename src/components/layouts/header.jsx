import './Header.css';
import { NavLink } from 'react-router-dom';

import Button from '../ui/Button.jsx';

function Header(props) {
    return (
        <header>
            <h1>Cassino de renda extra</h1>
            <nav className='nav'>
                <ul>
                    <li className='li'><NavLink className="nav-link" to="/">Home</NavLink></li>
                    <li className='li'><NavLink className="nav-link" to="/about">About</NavLink></li>
                    <li className='li'><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
                    <li className='li'><NavLink className="nav-link" to="/profile">Profile</NavLink></li>
                </ul>
                <div>
                    <Button style='primary' text='SignIn'/>
                    <Button style='secondary' text='SingUp' />
                </div>
            </nav>
        </header>
    );
}

export default Header