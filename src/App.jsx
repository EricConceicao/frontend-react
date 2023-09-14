// Library imports
import { Route, Routes } from 'react-router-dom';

// Page imports
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Profile from './components/pages/Profile.jsx';

import Page404 from './components/pages/Page404.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/profile' element={<Profile />} />

      <Route path='*' element={<Page404 />} />
    </Routes>
  )
}

export default App
