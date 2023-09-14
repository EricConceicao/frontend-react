import Header from '../layouts/header.jsx';
import './Profile.css';

function Profile() {
    return (
        <div className="Profile">
            <Header />
            <main>
                <figure className='pfp'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRyy0DSQdXx08fT1mUQOjveFye74Dm9Tb3rg&usqp=CAU" alt="profile photo" />
                    <figcaption>Tom</figcaption>
                </figure>
            </main>
        </div>
    );
}

export default Profile