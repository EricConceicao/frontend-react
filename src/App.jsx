// Library imports
import { Route, Routes } from 'react-router-dom';

// Page imports
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Page404 from './components/pages/Page404.jsx';

// CSS imports
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />

      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}

export default App
