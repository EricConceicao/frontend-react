import './App.css'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Header />

      <div id='main'>
        <Sidebar />
        <Content />
      </div>

      <Footer />
    </>
  )
}

export default App
