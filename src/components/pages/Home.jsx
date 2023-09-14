// Component imports //
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Content from '../layouts/Content';
import Footer from '../layouts/Footer';

import './Home.css';

function Home() {
    return (
      <div className='Home'>
        <Header />
  
        <div>
          <Sidebar />
          <Content>
            <h1>Welcome!</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque quasi recusandae maiores cumque doloribus earum exercitationem laborum nam voluptates.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo assumenda, sequi similique id suscipit distinctio, consectetur praesentium accusamus doloribus maxime laudantium eligendi repellendus fugiat nostrum vitae non a cupiditate. Ipsum nisi ipsa amet vitae iure neque sunt quod recusandae rerum?</p>
          </Content>
        </div>
  
        <Footer />
      </div>
    );
}

export default Home