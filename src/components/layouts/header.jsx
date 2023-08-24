import './Header.css'

function Header(props) {
    return (
        <header>
            <h1>Water word</h1>
            <nav>
                <ul className='ul'>
                    <li className='li'><a href="/">Home</a></li>
                    <li className='li'><a href="/about">About</a></li>
                    <li className='li'><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header