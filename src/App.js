import Navbar from './pages/components/Navbar'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <Navbar />

        <div className='content'>
          <Home />
        </div>
      </div>
    </div>
  )
}

export default App
