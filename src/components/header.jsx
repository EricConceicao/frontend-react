import './Header.css'

function Header(props) {
    return (
        <header>
            <h1>Water word</h1>
            <nav>
                <ul className='ul'>
                    <li className='li'>Home</li>
                    <li className='li'>Docs</li>
                    <li className='li'>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header