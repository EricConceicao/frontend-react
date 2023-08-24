// Component imports //
import Header from '../layouts/Header';
import Sidebar from '../layouts/Sidebar';
import Content from '../layouts/Content';
import Footer from '../layouts/Footer';

function Home() {
    return (
      <div className='Home'>
        <Header />
  
        <div id='main'>
          <Sidebar />
          <Content />
        </div>
  
        <Footer />
      </div>
    );
}

export default Home