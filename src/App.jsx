
import { Route, Routes } from 'react-router-dom'
import './App.css'


import HeroSection from './pages/HeroSection'
import About_me from './pages/About me'
import Project from './pages/Project'




function App() {
  

  return (
    <>
  <Routes>
      <Route path="/" element={<HeroSection/>} />
   <Route path="/about" element={<About_me/>} />
     <Route path="/project" element={<Project/>} />
    </Routes>
    </>
  )
}

export default App
