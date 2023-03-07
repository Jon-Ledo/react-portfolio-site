import Navbar from './pages/components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'

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
        </div>
      </div>
    </div>
  )
}

export default App
