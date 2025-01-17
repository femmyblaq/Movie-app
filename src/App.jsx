import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Favorite from './Pages/Favorite'
import { Route, Routes} from 'react-router-dom'
// import './App.css'

function App() {

  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/favorite' element={<Favorite />}></Route>
      </Routes>

    </>
  )
}

export default App
