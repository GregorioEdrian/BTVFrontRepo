import {Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import NavBarHome from './components/navBar/home/navBarHome'
/* import "@fontsource/montserrat" */
function App() {

  return (
    <div className="AppDiv">
      <NavBarHome></NavBarHome>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
    </div>
  )
}

export default App
