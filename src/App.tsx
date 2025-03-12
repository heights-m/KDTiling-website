import {Routes,Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Footer from './components/Footer'
import Projects from './routes/Projects'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/projects/project' element={<Projects/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
