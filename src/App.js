import Navbar from './pages/components/Navbar'
import Footer from './pages/components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Navbar />

        <div className='content'>
          <Home />
          <About />
          <Resume />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
