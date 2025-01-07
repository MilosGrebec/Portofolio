import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NewProject from './Pages/NewProject';
import Projects from './Pages/Projects';
import About from './Pages/About';
function App() {

  return (
    <>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/newproject' element={<NewProject/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
    </>
  )
}

export default App
